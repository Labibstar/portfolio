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
import ThreeScene from './ThreeScene';
import dynamic from 'next/dynamic';

export default function Home() {

  
 
  // Client Components:


  return (

    <main>

      <Hero bgsrc ={bg1} />
     
      <Althero bgsrc={bg6}   />
     
      <ScrollSection />
     
      <Contact/>
    

    </main>
  )
}
