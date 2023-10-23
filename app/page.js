'use client'

import bg6 from '../public/images/bg6.jpg'
import bg1 from '../public/images/bg1.jpg'
import bg7 from '../public/images/bg7.jpg'
import bg2 from '../public/images/bg2.jpg'
import bg8 from '../public/images/bg8.jpg'
import React , {useRef, useState} from 'react';
import HorizontalScroll from 'react-scroll-horizontal'


export default function Home() {


  return (

<main className="h-screen w-screen overflow-scroll overflow-hidden snap-mandatory snap-both">
      <title>Sample</title>
      
    <div id="1" className="h-screen grid grid-cols-2 snap-center bg-contain place-content-center">

      <div className=" grid text-center bg-contain bg-center place-content-center" >
        <h1 style={{position: "relative", zIndex: 2}}>placeholdertext0</h1>
      </div>
      <div className=" grid text-center place-content-center bg-fixed bg-cover bg-no-repeat bg-[left_top_-40rem] bg-[scale-25]"  style={
        {backgroundImage: `url(${bg1.src})`,
         
         height: "100vh",
         
        }
    }>
        <h1 style={{position: "relative", zIndex: 2, color: 'black'}}>placeholder text1</h1>
      </div>

      
    </div>
    
    
    <div id="2" className="h-screen grid snap-center  grid-cols-2 bg-cover place-content-center" >
    
        <div className="grid text-center bg-fixed place-content-center bg-cover bg-[top_left_30rem]" style={
        {backgroundImage: `url(${bg6.src})`,
         
         height: "100vh",
         
        }
        }>
        <h1 style={{position: "relative", marginTop:"20px", zIndex: 2, color:'black'}}>
        placeholder text2</h1>
        </div>


        <div className="grid text-center place-items-center align-center content-center items-center">
          <h1 style={{position: "relative", zIndex: 2}}>
              placeholder text3</h1>
        </div>

    </div>
   
    <HorizontalScroll reverseScroll={true} className='flex w-screen h-screen snap-mandatory snap-x snap-start overflow-y-hidden' id='horizontal'> 

    <div className='flex snap overflow-y-hidden' id="pt0">
     
        <div id="pt1" className="w-screen flex shrink-0 snap-center  h-screen " >

          <div className='h-screen snap-center bg-fixed bg-cover' style={{
            backgroundImage: `url(${bg7.src})`,
            height: "100vh",
          }}>
            <p className=' w-screen pt-20 ml-20 text-3xl font-bold'>
              placeholder text4</p>

          </div>
        </div>
        
        <div id="pt2" className="w-screen flex snap-center shrink-0  h-screen " >

            <div className='h-screen bg-fixed bg-cover' style={{
              backgroundImage: `url(${bg8.src})`,
              height: "100vh",
            }}>
              <p className=' w-screen pt-20 ml-20 text-3xl font-bold'>
                placeholdertext5</p>

            </div>
          </div>
      
      
        <div id="pt3"  className="w-screen flex shrink-0 snap-center h-screen " >
      
            <div className='h-screen bg-fixed bg-cover'  style={
              {backgroundImage: `url(${bg2.src})`,
              height: "100vh",
              }
            }>
              <p className='flex-wrap w-screen pt-20 pl-20 text-3xl font-bold'>placeholdertext6</p>

                </div> 
        </div>
      
      
      </div> 
</HorizontalScroll>
       


      <div className="h-screen grid bg-cover place-content-center "> 
        <p>placeholdertext7</p>
      </div>


</main> 
  )
  }
