import React, { useEffect, useRef, useState } from "react";
import "./DynamicText.css";

const DynamicTextWithObserver = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div>
      {/* Placeholder to allow scrolling */}
      <div style={{ height: "100vh"}}>
        <h1>Scroll Down</h1>
      </div>

      {/* Dynamic text container */}
      <div
        ref={targetRef}
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 2s ease, transform 2s ease",
          backgroundColor: "transparent", // Ensure no unintended white box
        }}
      >
        <h1>Dynamic Text Appears!</h1>
      </div>

      {/* More placeholder content */}
      <div style={{          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 2s ease, transform 2s ease",
          backgroundColor: "transparent", // Ensure no unintended white box}}>
      }}
      >
        <h1>More Content Below</h1>
      </div>
    </div>
  );
};

export default DynamicTextWithObserver;
