import React, {useRef, useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import bg7 from '../public/images/bg7.webp';
import bg9 from '../public/images/bg9.webp';
import bg8 from '../public/images/gif2.webp';
import Image from "next/image";

function ScrollSection({}) {
    
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);



gsap.registerPlugin(ScrollTrigger);

useEffect(()=>{
        const pin = gsap.fromTo(sectionRef.current,{
            translateX: 0
        },{
               translateX: "-230vw",
               ease: "none",
               duration: 1,
               scrollTrigger:{
                    trigger: triggerRef.current,
                    start: "top top",
                    end:"2000 top",
                    scrub: 0.5,
                    pin: true,
                    
               } 

        })
        
        return ()=>{
            pin.kill();
        }

    }, [])


    
    return(






        
           <div className="scroll-section-outer scrollbar-hide">
                <div ref={triggerRef}>
                    <div ref={sectionRef} className="scroll-section-inner scrollbar-hide">
                    <div className="scroll-section bg-cover text-left" style={{backgroundImage: `url(${bg7.src})`, justifyContent: "start", alignItems: 'flex-start'}} >
                            <div className="grid grid-cols-2 textproject1 text-left ml-24">
                            <div>

                            
                            
                           
                            


                            <h3 className="justify-left text-black"> <Image className="mt-16 ml-5 mb-4 "  src="https://personal-364407475.imgix.net/audiounlock/logo.webp" alt="logo" width={80} height={80} style={{width: 80, height:80, borderRadius:100}}/>AudioUnlock <br/></h3>
                            <p className="text-black" >
                                <b></b><br/>
                                A common practice among young smart phone users is that we often put our phones on silent.<br/>
                                An awkward inconvenience thus occurs in that we lose our phones and can't locate it. <br/>
                                In this scenario we can't even call to locate it since it's silent. <br/> <br/>

                                AudioUnlock solves this.<br/> An offline alternative to Google's Find My Phone, <br/>
                                it works through an SMS with an encryption key and rings your phone to let you know where it is.  <br/>
                                Built using React Native, Java, Google Maps and Firebase. <br/>
                                 
                                </p>
                            </div>
                            <div>
                             <Image className="mt-16 ml-36 mb-0" src="https://personal-364407475.imgix.net/audiounlock/LocationPage.webp" alt="logo" width={280} height={1100} style={{width: 340, height:700}} />
                            </div>
                               
                             </div>   
                             
                             
                        </div>
                        <div className="scroll-section scrollbar-hide bg-cover" style={{backgroundImage: `url(${bg8.src})`}}>
                            <div className="grid grid-cols-2">

                            <div className="ml-56 h-9 place-content-end justify-items-right text-center">
                            <h3 className="bg-green-600 bg-opacity-75 text-center mr-48">Tic-Tac-Toe</h3>
                            <p className="bg-green-600 bg-opacity-75 ml-124">A plain old Tic-Tac-Toe. Only catch is it's made in Angular in under 12hrs<br/> 
                                with <b>no prior experience</b> with Angular. Just a little testament to my adaptability <br/> 
                                </p>
                            </div>     
                            <div>
                                <Image className="mt-16 ml-56 mb-0" src="https://personal-364407475.imgix.net/tick/image1.webp" alt="tick" width={265} height={143} style={{width: 265, height:325,   borderRadius: "15%"}} />
                            </div>
                            </div>
                        </div>
                        <div className="scroll-section scrollbar-hide bg-cover bg3" style={{backgroundImage: `url(${bg9.src})`}}>
                            <div className="grid grid-cols-2">
                            <div className="ml-24">
                           
                            <h3>Project 3</h3>
                            <p>Of course no portfolio is complete without a full-stack e-commerce app <br/>
                                Dynamic Items, Fully Functional Cart, Integrated SSLCommerze Payment Gateway, <br/>
                                it has it all.<br/> 
                                Built in PHP, AJAX and Bootstrap.
                            </p>
                            </div>    
                            <Image className="mt-16 ml-28 mb-0" src="https://personal-364407475.imgix.net/shop/hero.webp" alt="tick" width={465} height={243} style={{width: 465, height:343,  borderRadius: "5%", marginBottom: 0, position: "relative", zIndex: 0}} />

                            </div>
                        </div>
                        
                    </div>
               </div>
           </div> 
    )
    
}

export default ScrollSection;