import React from "react";
export function Althero({
  
  bgsrc
}) {
  return <div id="sec2" className="h-screen w-screen grid text-start bg-fixed w-screen place-content-start bg-cover" style={{
    backgroundImage: `url(${bgsrc.src})`,
    height: "100vh"}}>
        <h1 style={{
        position: "relative",
        marginTop: "25%",
        marginLeft: "6%",
        zIndex: 2,
        color: 'black',
        fontSize: 18,
        fontFamily: 'sans-serif'
      }}>
          <b>I develop, grow and speak about products.</b> <br/><br/>
          Currently a Developer Evangelist operating in the SaaS industry ; <br/>
          Growing <a href="https://dev.applink.com.bd/" target="_blank" ><b style={{color: "orange"}}>Applink: </b><b>Banglalink's Innovation platform</b></a> from zero-to-eight figures</h1>
    </div>;
}
  