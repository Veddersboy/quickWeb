import React, { useEffect, useRef, useState } from "react";
import "./DynamicText.css";

const DynamicTextWithObserver = () => {
  const [isVisibleHeader, setIsVisibleHeader] = useState(false);
  const [isVisibleSubtext, setIsVisibleSubtext] = useState(false);
  const headerRef = useRef(null);
  const subtextRef = useRef(null);

  useEffect(() => {
    // Check if IntersectionObserver is supported
    if ("IntersectionObserver" in window) {
      const observerHeader = new IntersectionObserver(
        ([entry]) => {
          setIsVisibleHeader(entry.isIntersecting);
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -10% 0px",
        }
      );

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
    } else {
      // Fallback for older browsers or environments without IntersectionObserver
      setIsVisibleHeader(true);
      setIsVisibleSubtext(true);
    }
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
          className={`fade-in ${isVisibleHeader ? "visible" : ""}`}
        >
          OUR MISSION
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          className={`fade-in ${isVisibleSubtext ? "visible" : ""}`}
        >
          Our mission is to inspire and empower individuals to reach their full
          potential through continuous learning and innovation. We aim to create
          lasting impact by fostering creativity, collaboration, and excellence
          in everything we do.
        </p>
      </div>
    </div>
  );
};

export default DynamicTextWithObserver;
