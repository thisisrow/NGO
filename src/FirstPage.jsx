import React from 'react'

import Hero from './components/Hero'; 
import RollingGallery from './components/RollingGallery';
import About from './components/About';
import Products from './components/Products';
import Order from './components/Order';
import Activities from './components/Activities';
import Support from './components/Support';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

const FirstPage = () => {
  return (
   <>
    
    <Hero />
    {/* <RollingGallery autoplay={true} pauseOnHover={true} /> */}
    <About />
    <Products />
    <Order />
    <Activities />
    <Support  />
    <FAQ />
    <Contact />
    
   </>
  )
}

export default FirstPage