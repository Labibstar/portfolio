'use client'

import bg6 from '../public/images/bg6.jpg'
import bg1 from '../public/images/bg1.jpg'
import bg7 from '../public/images/bg7.jpg'
import bg2 from '../public/images/bg2.jpg'
import bg8 from '../public/images/bg8.jpg'
import React , {useRef, useState, useCallback} from 'react';



export default function Home() {

  const ref0= useRef(null);
  const ref1= useRef(null);
  const ref2= useRef(null);
  const ref3= useRef(null);
  const refend= useRef(null);

  const handleScroll= (e, refnext, refprev)=>{
    
    console.log("refnext "+refnext.current.id+" refprev "+refprev.current.id);
   
    console.log(e.deltaY);
    
    
    if(e.deltaY > 0 ){
      if(refnext.current.id!="contact")  
      {
        refnext.current.scrollIntoView();
      }
        else{
          console.log("moving to contact");
        }
        
    }
         
      else{
        
        if(refprev.current.id!="sec2")  
        {
          refprev.current.scrollIntoView();
        }
          else{
            console.log("moving to sec2")}    
          }
          }



  return (

<main className="h-screen w-screen overflow-scroll overflow-hidden snap-proximity snap-both">
      <title>Sample</title>
      
    <div id="sec1" className="h-screen grid grid-cols-2 snap-center bg-contain place-content-center">

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
    
    
    <div id="sec2" ref={ref0} className="h-screen grid snap-center  grid-cols-2 bg-cover place-content-center" >
    
        <div  className="grid text-center bg-fixed place-content-center bg-cover bg-[top_left_30rem]" style={
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
   
    {/*<HorizontalScroll reverseScroll={true} className='flex w-screen h-screen overflow-y-hidden snap-start' id='horizontal'> */}
    
    
    <div className='flex w-screen h-screen snap-start' id="pt0">
     
        

          <div id="hbg1" ref={ref1} className='h-screen w-screen bg-fixed bg-cover snap-start' style={{
            backgroundImage: `url(${bg7.src})`,
            height: "100vh",
          }} onWheel={(e)=>handleScroll(e,ref2,ref0)}>
            <p className=' w-screen pt-20 ml-20 text-3xl font-bold'>
              placeholder text4</p>

          </div>
        
        
        

            <div id="hbg2" ref={ref2} className='h-screen w-screen bg-fixed bg-cover snap-start' style={{
              backgroundImage: `url(${bg8.src})`,
              height: "100vh",
            }} onWheel={(e)=>handleScroll(e,ref3,ref1)}>
              <p className=' w-screen pt-20 ml-20 text-3xl font-bold'>
                placeholdertext5</p>

            </div>
         
      
      
       
      
            <div id="hbg3" ref={ref3} className='h-screen w-screen bg-fixed bg-cover snap-start'  style={
              {backgroundImage: `url(${bg2.src})`,
              height: "100vh",
              }
            } onWheel={(e)=>handleScroll(e,refend,ref2)} >
              <p className='flex-wrap w-screen pt-20 pl-20 text-3xl font-bold'>placeholdertext6</p>

                </div> 
       
      </div>    
      
      
     
{/*</HorizontalScroll>*/}


      <div id="contact" ref={refend} className="h-screen w-screen grid bg-cover place-content-center "> 
        <p>placeholdertext7</p>
      </div>


</main> 
  )
  }
