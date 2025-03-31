import React, { useState, useEffect } from 'react';
import { backgrounds } from "../constant";
import { bgImage } from "../constant";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.getElementById('hero-video');
    if (video) {
      video.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }
  }, []);

  const fontSize = window.innerWidth < 780 ? "2rem" : "4rem";

  return (
    <div id="hero">
      <div className="position-relative vh-100 overflow-hidden">
        {/* Image fallback */}
        <img
          src={bgImage}
          alt="Hero"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isVideoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Video background */}
        <video
          id="hero-video"
          src={backgrounds}
          autoPlay
          loop
          muted
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: "cover" }}
        ></video>
        {/* Centered content */}
        <div className="d-flex justify-content-center align-items-center position-relative z-index-1 h-100 text-center">
          <p
            id="glass"
            className="fw-bold cssanimation leBeat sequence col-9 p-3"
            style={{
              fontSize: fontSize,
              zIndex: 2,
              display: 'table-column',
              color: 'black',
            }}
          >
            Sushirmala Foundation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
