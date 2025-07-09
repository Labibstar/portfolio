'use client'

import React from 'react';

import { Althero } from './Althero';
import ScrollSection from './ScrollSection';
import Contact from './contact';
import ThreeScene from './ThreeScene';
import {Experience} from './Experience';
export default function Home() {

  
 
  // Client Components:


  return (

    <main path="/">

      <ThreeScene />
     
      <Althero />
     
      <Experience/>
     
      <ScrollSection/>
     
      <Contact />
    

    </main>
  )
}
