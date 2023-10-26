'use client'

import bg6 from '../public/images/bg6.jpg'
import bg1 from '../public/images/bg1.jpg'
import bg7 from '../public/images/bg7.jpg'
import bg2 from '../public/images/bg2.jpg'
import bg8 from '../public/images/bg8.jpg'
import React, { useRef } from 'react';
import Hero from './Hero';
import { Althero } from './Althero';
import ScrollSection from './ScrollSection';
import Contact from './contact';

export default function Home() {

  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const refend = useRef(null);

  const handleScroll = (e, refnext, refprev) => {

    console.log("refnext " + refnext.current.id + " refprev " + refprev.current.id);

    console.log(e.deltaY);


    if (e.deltaY > 0) {
      if (refnext.current.id != "contact") {
        refnext.current.scrollIntoView();
      }
      else {
        console.log("moving to contact");
      }
    }
    else {

      if (refprev.current.id != "sec2") {
        refprev.current.scrollIntoView();
      }
      else {
        console.log("moving to sec2")
      }
    }
  }



  return (

    <main>
      <title>Sample</title>

      <Hero bgsrc ={bg1} />
      <Althero bgsrc={bg6}   />

      <ScrollSection />

      <Contact/>

    </main>
  )
}
