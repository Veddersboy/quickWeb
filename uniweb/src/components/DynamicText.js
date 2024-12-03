import React, { useState, useEffect } from "react";

const DynamicText = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    // Adjust this logic and value to show text at a specific scroll position
    if (position > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div style={{ height: "100vh", background: "#f0f0f0" }}>
        <h1>Scroll Down</h1>
      </div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: isVisible ? "#c0ffee" : "#f0f0f0",
          transition: "background 0.5s ease",
        }}
      >
        {isVisible && <h1>Dynamic Text Appears!</h1>}
      </div>
    </div>
  );
};

export default DynamicText;
