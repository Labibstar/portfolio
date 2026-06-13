'use client'

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const COUNT = 3000;
const INK = new THREE.Color('#1a1a1a');
const AMBER = new THREE.Color('#d97706');

const CAM_Z = 6.5;

// Four particle formations, one per section. Scroll blends between neighbours.
function buildShapes() {
  const sphere = new Float32Array(COUNT * 3);
  const wave = new Float32Array(COUNT * 3);
  const knot = new Float32Array(COUNT * 3);
  const ring = new Float32Array(COUNT * 3);

  for (let i = 0; i < COUNT; i++) {
    // Fibonacci sphere — even spread, no clumped poles
    const y = 1 - (i / (COUNT - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = i * Math.PI * (3 - Math.sqrt(5));
    sphere.set([Math.cos(theta) * r * 2.2, y * 2.2, Math.sin(theta) * r * 2.2], i * 3);

    // Rippled plane
    const gx = (i % 60) / 59;
    const gz = Math.floor(i / 60) / (COUNT / 60 - 1);
    const wx = (gx - 0.5) * 7;
    const wz = (gz - 0.5) * 4;
    wave.set([wx, Math.sin(wx * 1.8) * 0.4 + Math.cos(wz * 2.2) * 0.3, wz], i * 3);

    // Torus knot (p=2, q=3) with tube scatter
    const t = (i / COUNT) * Math.PI * 2;
    const kr = 1.5 + 0.4 * Math.cos(3 * t);
    const core = new THREE.Vector3(
      kr * Math.cos(2 * t),
      0.4 * Math.sin(3 * t) * 1.6,
      kr * Math.sin(2 * t)
    );
    const scatter = new THREE.Vector3()
      .randomDirection()
      .multiplyScalar(Math.random() * 0.28);
    core.add(scatter);
    knot.set([core.x, core.y, core.z], i * 3);

    // Thin calm ring, tilted so it reads as an ellipse from the front
    const a = (i / COUNT) * Math.PI * 2;
    const rr = 2.1 + (Math.random() - 0.5) * 0.25;
    const ry = (Math.random() - 0.5) * 0.15;
    const rz = Math.sin(a) * rr;
    const tilt = 0.9;
    ring.set(
      [Math.cos(a) * rr, ry * Math.cos(tilt) - rz * Math.sin(tilt), ry * Math.sin(tilt) + rz * Math.cos(tilt)],
      i * 3
    );
  }
  return [sphere, wave, knot, ring];
}

export default function ParticleScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, CAM_Z);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const shapes = buildShapes();
    const positions = new Float32Array(shapes[0]);
    const phases = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) phases[i] = Math.random() * Math.PI * 2;

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: INK.clone(),
      size: 0.022,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // --- interaction state ---
    const mouseNDC = new THREE.Vector2(99, 99);
    const repelPoint = new THREE.Vector3();
    const raycaster = new THREE.Raycaster();
    const zPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    let scrollProgress = 0;
    let accent = false;
    let dragging = false;
    let lastX = 0;
    let spinVel = 0;

    const onPointerMove = (e) => {
      mouseNDC.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
      if (dragging) {
        spinVel += (e.clientX - lastX) * 0.00012;
        lastX = e.clientX;
      }
    };
    const onPointerDown = (e) => { dragging = true; lastX = e.clientX; };
    const onPointerUp = () => { dragging = false; };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = max > 0 ? window.scrollY / max : 0;
    };
    const onAccent = (e) => { accent = e.detail; };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('particle-accent', onAccent);
    window.addEventListener('resize', onResize);
    onScroll();

    // text blocks the particles must flow around
    const repelEls = Array.from(document.querySelectorAll('.repel'));
    const elPoint = new THREE.Vector3();

    const clock = new THREE.Clock();
    let raf;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // shape blend: progress 0..1 mapped across the 4 shapes
      const p = scrollProgress * (shapes.length - 1);
      const idx = Math.min(Math.floor(p), shapes.length - 2);
      const frac = p - idx;
      const t = frac * frac * (3 - 2 * frac); // smoothstep
      const a = shapes[idx];
      const b = shapes[idx + 1];

      // repulsors: the cursor + every visible .repel text block.
      // Ellipsoid eviction — (1-n)/n pushes a particle exactly to the surface.
      const reps = [];

      raycaster.setFromCamera(mouseNDC, camera);
      raycaster.ray.intersectPlane(zPlane, repelPoint);
      points.worldToLocal(repelPoint);
      reps.push([repelPoint.x, repelPoint.y, repelPoint.z, 1.1, 1.1, 1.1, 0.6]);

      const hwY = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * CAM_Z;
      const hwX = hwY * camera.aspect;
      for (const el of repelEls) {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) continue;
        const cx = (r.left + r.right) / window.innerWidth - 1;
        const cy = 1 - (r.top + r.bottom) / window.innerHeight;
        elPoint.set(cx * hwX, cy * hwY, 0);
        points.worldToLocal(elPoint);
        reps.push([
          elPoint.x, elPoint.y, elPoint.z,
          (r.width / window.innerWidth) * hwX + 0.35,
          (r.height / window.innerHeight) * hwY + 0.35,
          1.6,
          0.9,
        ]);
      }

      const pos = geometry.attributes.position.array;
      for (let i = 0; i < COUNT; i++) {
        const j = i * 3;
        const breath = 1 + Math.sin(time * 0.8 + phases[i]) * 0.025;
        let tx = (a[j] + (b[j] - a[j]) * t) * breath;
        let ty = (a[j + 1] + (b[j + 1] - a[j + 1]) * t) * breath;
        let tz = (a[j + 2] + (b[j + 2] - a[j + 2]) * t) * breath;

        for (const [rx, ry, rz, ex, ey, ez, s] of reps) {
          const dx = tx - rx;
          const dy = ty - ry;
          const dz = tz - rz;
          const q = (dx * dx) / (ex * ex) + (dy * dy) / (ey * ey) + (dz * dz) / (ez * ez);
          if (q < 1) {
            const n = Math.sqrt(q) || 0.001;
            const f = Math.min((1 - n) / n, 6) * s;
            tx += dx * f;
            ty += dy * f;
            tz += dz * f;
          }
        }

        pos[j] += (tx - pos[j]) * 0.06;
        pos[j + 1] += (ty - pos[j + 1]) * 0.06;
        pos[j + 2] += (tz - pos[j + 2]) * 0.06;
      }
      geometry.attributes.position.needsUpdate = true;

      // idle spin + drag momentum, decaying
      points.rotation.y += 0.0008 + spinVel;
      spinVel *= 0.95;

      // gentle camera parallax
      camera.position.x += (mouseNDC.x === 99 ? 0 : mouseNDC.x * 0.4 - camera.position.x) * 0.04;
      camera.position.y += (mouseNDC.y === 99 ? 0 : mouseNDC.y * 0.25 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      material.color.lerp(accent ? AMBER : INK, 0.08);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('particle-accent', onAccent);
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="particle-canvas" aria-hidden="true" />;
}
