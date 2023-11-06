import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
//import * as Boy from '../assets/boy-with-sky/source/BoyWithSkyline.glb';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const ThreeScene = () => {
    const containerRef = useRef(null);
    
    const loader = new GLTFLoader();
    
      
      
      useEffect(() => {

        
          const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
          renderer.outputColorSpace = THREE.SRGBColorSpace;
          
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setClearColor(0xffffff);
          console.log(containerRef.current);
          renderer.setPixelRatio(window.devicePixelRatio);
    
          containerRef.current?.appendChild(renderer.domElement);
          camera.position.set(-2.2,1.2,16);
          camera.lookAt(0,2,0);
          
          const controls = new OrbitControls( camera, renderer.domElement );
          controls.enableDamping =true;
          controls.enablePan =false;
          controls.minDistance = 3;
          controls.maxDistance = 5;
          controls.minPolarAngle = 0.5;
          controls.autoRotate =false;
          controls.enableZoom =false;
          controls.target = new THREE.Vector3(0,1,0);
          controls.update();        

          const spotlight = new THREE.AmbientLight(0xffffff,1);
          spotlight.position.set(0,25,0);
          scene.add(spotlight);
    
    
          
    
          loader.load( '/assets/boy-with-sky/source/BoyWithSkyline.glb', function ( gltf ) {
            
            const myModel= gltf.scene;
            scene.add(myModel );
            
          }, undefined, function ( error ) {
    
            console.error( error );
    
          } );
     
          function animate(){
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
          } 
          animate();
        
    }, [loader]);
     

    return( 
          <div  className='w-screen h-screen align-contents-center' ref={containerRef} >
            <div id="container" ref={containerRef}>

            <p className='info'>
              Hi. I'm Labib. Welcome to my portfolio.
            </p>
            </div>
          </div>
      );
  };
export default ThreeScene;