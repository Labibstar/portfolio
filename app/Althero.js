import React from "react";
export function Althero({
  
  bgsrc
}) {
  return <div id="sec2" className="h-screen grid snap-center  grid-cols-2 bg-cover place-content-center">

      <div className="grid text-center bg-fixed place-content-center bg-cover" style={{
      backgroundImage: `url(${bgsrc.src})`,
      height: "100vh"
    }}>
        <h1 style={{
        position: "relative",
        marginTop: "20px",
        zIndex: 2,
        color: 'black'
      }}>
          placeholder text2</h1>
      </div>


      <div className="grid text-center place-items-center align-center content-center items-center">
        <h1 style={{
        position: "relative",
        zIndex: 2
      }}>
          placeholder text3</h1>
      </div>

    </div>;
}
  