import React from "react";
import bgsrc from "../public/images/flower.jpg"; 
export function Contact({
  
}) {
  return <div id="contact"  className="h-screen w-screen  grid bg-cover justify-content-center text-center place-content-center " style={{
       backgroundImage: `url(${bgsrc.src})`,
      height: "100vh",
    zIndex:-1}}>
        <p className="bg-opacity-0" style={{
             backgroundColor:'black',
             position: "relative",
             marginTop: "25%",
             marginLeft: "25%",
             zIndex: 2,
             color: 'white',
             fontSize: 28,
             fontFamily: 'sans-serif',
             justifySelf: 'center'

        }}>Contact <br/>
          Labib Bin Rahman <br/>
          01942808108 <br/>
          Labibstar@gmail.com <br/>
            


        </p>

      </div>;
}
  
export default Contact;
