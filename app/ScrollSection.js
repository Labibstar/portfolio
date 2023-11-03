import React, {useRef, useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import bg7 from '../public/images/bg7.jpg'
import bg2 from '../public/images/bg2.jpg'
import bg8 from '../public/images/bg8.jpg'
import ThreeScene from "./ThreeScene";

function ScrollSection({}) {
    
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);



gsap.registerPlugin(ScrollTrigger);

useEffect(()=>{
        const pin = gsap.fromTo(sectionRef.current,{
            translateX: 0
        },{
               translateX: "-200vw",
               ease: "none",
               duration: 1,
               scrollTrigger:{
                    trigger: triggerRef.current,
                    start: "top top",
                    end:"2000 top",
                    scrub: 0.5,
                    pin: true
               } 

        })
        
        return ()=>{
            pin.kill();
        }

    }, [])


    
    return(
           <div className="scroll-section-outer">
                <div ref={triggerRef}>
                    <div ref={sectionRef} className="scroll-section-inner">
                    <div className="scroll-section bg-cover text-end" style={{backgroundImage: `url(${bg7.src})`, justifyContent: "start", alignItems: 'flex-start'}} >
                            <h3 style={{ textAlign: "right", marginRight: "8rem" }}>Project 1</h3>
                        </div>
                        <div className="scroll-section bg-cover" style={{backgroundImage: `url(${bg8.src})`}}>
                            <h3>Project 2</h3>
                            <ThreeScene />
                        </div>
                        <div className="scroll-section bg-cover" style={{backgroundImage: `url(${bg2.src})`}}>
                            <h3>Project 3</h3>
                        </div>
                        
                    </div>
               </div>
           </div> 
    )
    
}

export default ScrollSection;