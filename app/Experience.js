import React from "react";
import bg6 from '../public/images/gif1.gif'
export function Experience(
) {
  return <div id="sec2" className="h-screen w-screen grid text-start bg-fixed w-screen place-content-start bg-cover" style={{
    backgroundImage: `url(${bg6.src})`,
    height: "100vh",
    zIndex: 100}}>
        <h1 className="experience">
          <b style={{fontSize: 24}}>Career highlights include,</b><br/>
          <br/>
          <ul>
            <li><b>Growing a Leading Telecommunication company's Innovation platform from zero-to-eight : <a href="https://dev.applink.com.bd/" target="_blank" >Applink</a></b></li>
            <li><b>Facilitating the launch of a Grammy winning album: Cowboy Carter</b></li>
            <li><b>Building a 3PL platform for merchants shipping D2C from China </b></li>
          </ul>
        </h1>
    </div>;
}
  