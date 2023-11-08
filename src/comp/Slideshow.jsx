import React, { useState, useEffect } from 'react';

const images = [
  './src/assets/landing-barn.jpeg',
  './src/assets/landing-bikes.jpeg',
  './src/assets/landing-maze.jpeg',
  './src/assets/landing-park.jpeg',
  './src/assets/landing-sign.jpeg',
  './src/assets/landing-race.jpeg',
];

function Slideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      <div className='floating-box'>
        <h1>Welcome!</h1>
        <h2>We are the well-esteemed family-oriented pumpkin patch of Rigby, Idaho</h2>
      </div>
      <img src={images[currentImageIndex]} alt="Slideshow" />
    </div>
  );
}

export default Slideshow;