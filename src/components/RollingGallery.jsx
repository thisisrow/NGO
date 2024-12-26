import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";
import "./RollingGallery.css";

// Import your images
import g1 from "../assets/image/g1.jpg";
import g2 from "../assets/image/g2.jpg";
import g3 from "../assets/image/g3.jpg";
import g4 from "../assets/image/g4.jpg";
import g5 from "../assets/image/g5.jpg";
import g6 from "../assets/image/g6.jpg";
import g7 from "../assets/image/g7.jpg";
import g8 from "../assets/image/g8.jpg";

const RollingGallery = ({ autoplay = false, pauseOnHover = false, images = [g1, g2, g3, g4, g5, g6, g7, g8] }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);
  const cylinderWidth = isSmallScreen ? 1100 : 1800;
  const faceCount = images.length;
  const faceWidth = cylinderWidth / faceCount;
  const radius = cylinderWidth / (2 * Math.PI);
  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef();

  // Adjust screen size responsiveness
  useEffect(() => {
    const updateScreenSize = () => setIsSmallScreen(window.innerWidth <= 640);
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - 360 / faceCount,
          transition: { duration: 2, ease: "linear" },
        });
        rotation.set(rotation.get() - 360 / faceCount);
      }, 2000);

      return () => clearInterval(autoplayRef.current);
    }
  }, [autoplay, controls, rotation, faceCount]);

  // Drag functionality
  const handleDrag = (_, info) => {
    rotation.set(rotation.get() + info.offset.x * 0.1);
  };

  const handleDragEnd = (_, info) => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * 0.1,
      transition: { type: "spring", stiffness: 60, damping: 20 },
    });
  };

  // Hover controls
  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      clearInterval(autoplayRef.current);
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - 360 / faceCount,
          transition: { duration: 2, ease: "linear" },
        });
        rotation.set(rotation.get() - 360 / faceCount);
      }, 2000);
    }
  };

  // Rotation transform
  const transform = useTransform(rotation, (value) => `rotate3d(0, 1, 0, ${value}deg)`);

  return (
    <div className="gallery-container">
      <motion.div
        className="gallery-track"
        drag="x"
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: transform,
          transformStyle: "preserve-3d",
        }}
        animate={controls}
      >
        {images.map((url, index) => (
          <div
            key={index}
            className="gallery-item"
            style={{
              transform: `rotateY(${index * (360 / faceCount)}deg) translateZ(${radius}px)`,
              width: `${faceWidth}px`,
            }}
          >
            <img src={url} alt={`gallery-${index}`} className="gallery-img" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RollingGallery;
