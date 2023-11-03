import React from "react";

function Hero({
  bgsrc,
  


}) {
  return (
  <div id="sec1" className="hero h-screen grid grid-cols-2 bg-contain place-content-center">

    <div className="grid text-center place-content-center">
      <h1 style={{
        position: "relative",
        zIndex: 2
      }}>placeholdertext0</h1>
    </div>
    <div className="bgo grid text-center place-content-center bg-cover bg-no-repeat" style={{
        backgroundImage: `url(${bgsrc.src})`,
        height: "100vh"
    }}>
        <h1 style={{
        position: "relative",
        zIndex: 2,
        color: 'black'
        }}>placeholder text1</h1>
        </div>
  </div>
   
   );
    }

    export default Hero;
