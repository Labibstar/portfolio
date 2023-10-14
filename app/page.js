import Image from 'next/image'
import bg from '../public/images/background1.jpg'
import bg2 from '../public/images/background2.jpg'

export default function Home() {
  return (
<main className="h-screen">
      <title>Portfolio</title>

  
    <div className="h-screen grid grid-cols-2 gap-4 mt-2 place-items-center">
      <div className="text-center place-items-center place-content-center" style={
        {backgroundImage: `url(${bg2.src})`,
         width: "100%",
         height: "100%",
         zIndex: -2 
        } }>
      <h1 style={{position: "relative", zIndex: 2}}>Hi I'm Labib</h1>
      </div>
      <div className="text-center place-content-center bg-local" style={
        {backgroundImage: `url(${bg.src})`,
         width: "100%",
         height: "100%",
         zIndex: -2 
        }
    }>
      <h1 className='place-content-center'>This is my portfolio</h1>
      </div>
    </div>
    
   
  

</main> 
  )
}
