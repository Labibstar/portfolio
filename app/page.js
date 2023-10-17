import Image from 'next/image'
import bg6 from '../public/images/bg6.jpg'
import bg1 from '../public/images/bg1.jpg'
import bg3 from '../public/images/bg3.jpg'
import bg4 from '../public/images/bg4.jpg'

export default function Home() {
  return (
<main className="h-screen">
      <title>Portfolio</title>

  
    <div className="h-screen grid grid-cols-2  bg-contain place-content-center">

      <div className="grid text-center bg-contain bg-center place-content-center" >
        <h1 style={{position: "relative", zIndex: 2}}>Hi</h1>
      </div>
      <div className=" grid text-center place-content-center bg-fixed bg-cover bg-no-repeat bg-[left_top_-40rem] bg-[scale-25]"  style={
        {backgroundImage: `url(${bg1.src})`,
         
         height: "100vh",
         
        }
    }>
        <h1 style={{position: "relative", zIndex: 2, color: 'black'}}>I'm Labib</h1>
      </div>

      
    </div>
    
    
    <div className="h-screen grid grid-cols-2 bg-cover place-content-center ">
    
    <div className=" grid text-center bg-fixed place-content-center bg-cover bg-[top_left_30rem]" style={
        {backgroundImage: `url(${bg6.src})`,
         
         height: "100vh",
         
        }
    }>
      <h1 style={{position: "relative", marginTop:"20px", zIndex: 2, color:'black'}}>I'm an engineer-turned-business professional</h1>



      </div>
    <div className=" grid text-center place-items-center align-center content-center items-center">
      <h1 style={{position: "relative", zIndex: 2}}>I build products, manage them and grow them</h1>


      
      </div>

          </div>   

     <div className="h-screen grid place-content-center" style={
        {backgroundImage: `url(${bg4.src})`,
         
         height: "100vh",
         
        }
    }>
      <p>Applink</p>
      </div>      
   
  

</main> 
  )
}
