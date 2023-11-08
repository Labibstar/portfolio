import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
//import * as Boy from '../assets/boy-with-sky/source/BoyWithSkyline.glb';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const ThreeScene = () => {
    const containerRef = useRef(null);
    
   
    
      
      
      useEffect(() => {

        
          const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
          renderer.outputColorSpace = THREE.SRGBColorSpace;
          
          renderer.setSize(window.innerWidth, window.innerHeight);
          
          console.log(containerRef.current);
          renderer.setPixelRatio(window.devicePixelRatio);
    
          containerRef.current?.appendChild(renderer.domElement);
          camera.position.set(0,0,12);
          camera.lookAt(0,0,0);
          
          const controls = new OrbitControls( camera, renderer.domElement );
          controls.enableDamping =true;
          controls.enablePan =false;
          controls.minAzimuthAngle = -0.2;
          controls.maxAzimuthAngle = 0.2;
          controls.minPolarAngle = 1.35;
          controls.maxPolarAngle = 1.6;
          controls.autoRotate =false;
          controls.enableZoom =false;
          controls.target = new THREE.Vector3(0,1,0);
          controls.update();        

          const spotlight = new THREE.AmbientLight(0xffffff,1);
          spotlight.position.set(0,25,0);
          scene.add(spotlight);
    
    
          const loader = new GLTFLoader();
    
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
        
    }, []);
     

    return( 
          <div  className='w-screen h-screen align-contents-center' ref={containerRef} >
            <div id="container">

            <p className='info'>
              Hi. I'm Labib.
            </p>

            <p className='info2'>
              Welcome to my portfolio.
            </p>

            

            <div className='info3 grid grid-cols-3'>
            <p>

            <svg class="w-6 h-6 ml-96 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
</svg> </p>
<p>
 Click and Drag to explore the sunset
 </p>
 <p className='align-items-end'>
<svg class="w-6 h-6 text-gray-800 mr-96 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
</svg>
            </p>
            </div>
            
          

            </div>
          </div>
      );
  };
export default ThreeScene;