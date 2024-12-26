import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import BlobCursor from './BlobCursor'; 
import Navbar from './components/Navbar'; 
import Hero from './components/Hero'; 
import RollingGallery from './components/RollingGallery';
import About from './components/About';
import Products from './components/Products';
import Order from './components/Order';
import Activities from './components/Activities';
import Support from './components/Support';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Bottum from './components/Bottum';

function App() {
  return (
    <>
     <BlobCursor blobType="circle" fillColor="#00f0ff" />
    <Navbar />
    <Hero />
    <RollingGallery autoplay={true} pauseOnHover={true} />
    <About />
    <Products />
    <Order />
    <Activities />
    <Support  />
    <FAQ />
    <Contact />
    <Bottum />
    </>
  );
}

export default App;
