import React from "react";
import bg6 from '../public/images/gif1.gif'
import shopify from '../public/images/shopify1.png'
import Mrbeast from '../public/images/MrBeast.png'
import BL from '../public/images/BL.png'
import portless from '../public/images/portless.png'
import sony from '../public/images/Sony.png'


export function Experience(
) {
  return <div id="sec2" className="h-screen w-screen grid text-center bg-fixed w-screen place-content-center bg-cover" style={{
    backgroundImage: `url(${bg6.src})`,
    height: "100vh",
    zIndex: 100}}>
        <h1 className="experience">
          <b style={{fontSize: 36}}>Things I've done</b><br/><br/>
          <ul>
            <li>⦿ <b>Grown a Leading Telecommunication company's Innovation platform from zero-to-eight figures : <a href="https://dev.applink.com.bd/" target="_blank" >Applink</a></b></li><br/>
            <li>⦿ <b>Facilitated the launch of a Grammy winning album: Cowboy Carter</b></li><br/>
            <li>⦿ <b>Developed a 3PL platform for merchants shipping D2C from China: Portless </b></li><br/>
          </ul>
        </h1>

          <div className="flex flex-wrap justify-center gap-8 py-8">
            <img src={shopify.src} alt="Shopify" className="w-36 h-24 object-contain" />
            <img src={BL.src} alt="BanglaLink" className="w-36 h-24 object-contain" />
            <img src={sony.src} alt="Sony" className="w-36 h-24 object-contain" />
            <img src={portless.src} alt="Portless" className="w-36 h-24 object-contain" />
            <img src={Mrbeast.src} alt="MrBeast" className="w-36 h-24 object-contain" />
          </div>
    </div>;
}
  