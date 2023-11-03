import React from "react";
export function Althero({
  
  bgsrc
}) {
  return <div id="sec2" className="h-screen w-screen grid text-center bg-local w-screen place-content-center bg-cover" style={{
    backgroundImage: `url(${bgsrc.src})`,
    height: "100vh"}}>
        <h1 style={{
        position: "relative",
        marginTop: "20px",
        zIndex: 2,
        color: 'black'
      }}>
          placeholder text2</h1>
    </div>;
}
  