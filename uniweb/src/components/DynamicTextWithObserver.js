import React, { useEffect, useRef, useState } from "react";
import "./DynamicText.css";

const DynamicTextWithObserver = () => {
  const [isVisibleHeader, setIsVisibleHeader] = useState(false);
  const [isVisibleSubtext, setIsVisibleSubtext] = useState(false);
  const headerRef = useRef(null);
  const subtextRef = useRef(null);

  useEffect(() => {
    // Observer for the header
    const observerHeader = new IntersectionObserver(
      ([entry]) => {
        setIsVisibleHeader(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px", 
      }
    );

    // Observer for the subtext (mission statement)
    const observerSubtext = new IntersectionObserver(
      ([entry]) => {
        setIsVisibleSubtext(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (headerRef.current) {
      observerHeader.observe(headerRef.current);
    }
    if (subtextRef.current) {
      observerSubtext.observe(subtextRef.current);
    }

    return () => {
      if (headerRef.current) {
        observerHeader.unobserve(headerRef.current);
      }
      if (subtextRef.current) {
        observerSubtext.unobserve(subtextRef.current);
      }
    };
  }, []);

  return (
    <div>
      {/* Dynamic text container */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Header */}
        <h1
          ref={headerRef}
          style={{
            margin: 0,
            fontSize: "3rem",
            opacity: isVisibleHeader ? 1 : 0, // Fade in when visible
            transform: isVisibleHeader ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s ease, transform 1s ease",
          }}
        >
          OUR MISSION
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          style={{
            fontSize: "1.5rem",
            opacity: isVisibleSubtext ? 1 : 0, // Fade in when visible
            transform: isVisibleSubtext ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1.5s ease, transform 1.5s ease", // Slight delay for subtext
            textAlign: "center",
            maxWidth: "80%",
            lineHeight: "1.6",
          }}
        >
          Our mission is to inspire and empower individuals to reach their full potential through continuous learning and innovation. We aim to create lasting impact by fostering creativity, collaboration, and excellence in everything we do.
        </p>
      </div>
    </div>
  );
};

export default DynamicTextWithObserver;
