import React, { useState, useEffect } from 'react';
import logo from './universityEmblem_processed.png';

function LogoHeader() {
  const [logoSize, setLogoSize] = useState(window.innerWidth * 0.1); // Set initial size based on viewport width

  const handleResize = () => {
    setLogoSize(window.innerWidth * 0.1); // Update logo size dynamically based on viewport width
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener on component unmount
    };
  }, []);

  return (
    <div className="logo-container">
      <img 
        src={logo} 
        alt="I" 
        className="logo-letter" 
      />
      <span className="logo-text">ndustry University</span>
    </div>
  );
}

export default LogoHeader;
