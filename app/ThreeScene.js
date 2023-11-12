import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
//import * as Boy from '../assets/boy-with-sky/source/BoyWithSkyline.glb';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const ThreeScene = () => {
    const containerRef = useRef(null);
    
    const [loaded, setLoaded] = useState(false);
    
    

      useEffect(() => {

        
          const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
          renderer.outputColorSpace = THREE.SRGBColorSpace;
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setPixelRatio(window.devicePixelRatio);
    
          containerRef.current?.appendChild(renderer.domElement);
          camera.position.set(0,0.6,12);
          camera.lookAt(0,0,0);
          
          const controls = new OrbitControls( camera, renderer.domElement );
          controls.enableDamping =true;
          controls.enablePan =false;
          controls.minAzimuthAngle = -0.2;
          controls.maxAzimuthAngle = 0.2;
          controls.minPolarAngle = 1.35;
          controls.maxPolarAngle = 1.65;
          controls.autoRotate =false;
          controls.enableZoom =false;
          controls.target = new THREE.Vector3(0,1,0);
          controls.update();        

          /* Lights
          const spotlight = new THREE.AmbientLight(0xffffff,1);
          spotlight.position.set(0,25,0);
          scene.add(spotlight);
             
          
          const spotlight = new THREE.SpotLight(0xffffff, 0.7);
          spotlight.position.set(0,4, 1);
          scene.add(spotlight);
          
          const rectlight = new THREE.RectAreaLight(0xffffff, 0.8, 200, 200);
          rectlight.position.set(0,2, -2.1);
        scene.add(rectlight);
          */
     /* 
          
          const id ="b30c506a-1a23-4967-96e9-bac4f6e9f38e";
          const url ="https://api.echo3d.com/query?key=cold-limit-1182&entry="+id;

          function loadModel(url, id) {
            var json = "";
	          function request(){http.get(url , function(responseJSON) {
            console.log(responseJSON);
	   
            });
            
          }
            request();
          }
            /* pulls models from echoAR database and downloads them into scene using GLTFLoader
               // var loader = new GLTFLoader();

               // loader.load(url, function (x) {
               //   console.log(x);
                   //console.log(gltf);
                     //models.set(id, {hologram: gltf.scene, direction: null});  
                  //   console.log(models); 

                  //  scene.add(gtlf.scene );
                  //  setLoaded(true);
                    
                }, function (xhr) {
                    console.log(xhr);
                    console.log((xhr.loaded/xhr.total*100) + '% loaded');

                }, function ( error ) {

                    console.error( error );

                } );
            }
*/
      //    loadModel(url,id);    
          
        

      
          
          const loader = new GLTFLoader();
    
          loader.load( '/images/boy-with-sky/scene.gltf', function ( gltf ) {
            
            const myModel= gltf.scene;
            scene.add(myModel );
            setLoaded(true);
            
          }, undefined, function ( error ) {
    
            console.error( error );
    
          } );
     
      

          function animate(){
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
          } 
          animate();
        
    }, []);


const renderLoading =(
  <div className="absolute top-1/2 left-1/2 -mt-4 -ml-2 h-8 w-4 text-black-700">
  <div className="absolute z-10 -ml-2 h-8 w-8 animate-bounce">
    <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin" fill="currentColor" stroke="currentColor" strokeWidth="0" viewBox="0 0 16 16">
      <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z"></path>
    </svg>
  </div>
  <div className="absolute top-4 h-5 w-4 animate-bounce border-l-2 border-gray-200" style={{rotate: "-90deg"}}></div>
  <div className="absolute top-4 h-5 w-4 animate-bounce border-r-2 border-gray-200" style={{rotate: "90deg"}}></div>
</div>
);

const renderLoaded =(
  <div className='info3 grid'>
            
<p style={{color: "white"}}>
 Click and Drag to explore the sunset
 </p>
            </div>
            
)

    return( 
          <div  className='w-screen h-screen grid align-contents-center' ref={containerRef} >
            <div id="container">
            
          {loaded? renderLoaded: renderLoading}
            
            
            <p className='info'>
              Hi, I'm Labib.
            </p>

            <p className='info2'>
              Welcome to my portfolio.
            </p>

            

            
          

            </div>
          </div>
      );
  };
export default ThreeScene;