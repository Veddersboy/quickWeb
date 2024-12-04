import React, { useEffect, useRef, useState } from "react";
import "./DynamicText.css";

const DynamicTextWithObserver = () => {
  // State for visibility of all sections
  const [visibility, setVisibility] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
  });

  const refs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
  };

  useEffect(() => {
    if ("IntersectionObserver" in window) {
      const createObserver = (key) =>
        new IntersectionObserver(
          ([entry]) => {
            setVisibility((prev) => ({ ...prev, [key]: entry.isIntersecting }));
          },
          { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
        );

      const observers = Object.keys(refs).reduce((acc, key) => {
        if (refs[key].current) {
          const observer = createObserver(key);
          observer.observe(refs[key].current);
          acc[key] = observer;
        }
        return acc;
      }, {});

      return () => {
        Object.keys(observers).forEach((key) => {
          if (refs[key].current) observers[key].unobserve(refs[key].current);
        });
      };
    } else {
      setVisibility({
        section1: true,
        section2: true,
        section3: true,
        section4: true,
      });
    }
  }, []);

  return (
    <div style={{ paddingBottom: "50px" }}>
      {/* Section 1 */}
      <div
        ref={refs.section1}
        className={`fade-in ${visibility.section1 ? "visible" : ""}`}
      >
        <h1>OUR MISSION</h1>
        <p>
        Our mission here at Industry University is to revolutionize higher education by providing a debt-free, work-force learning experience that prepares students for the real world. Through a streamlined curriculum focused on internship-based core classes, we aim to bridge the gap between academics and hands-on learning/experience, enabling students to gain practical skills while companies invest in their future. By removing traditional barriers such as excessive general education requirements and direct tuition costs, we empower students to focus on mastering their craft and contributing meaningfully to the workforce. The goal of our university is to create a diverse environment of students and real world working environments which will allow for a seamless transition into the world outside of academics. Whether that be creating your own business or creating the newest technology, the goal is for students to feel confident in their major and themselves, and be debt free all before their graduation.
        </p>
      </div>

      {/* Section 2 */}
      <div
        ref={refs.section2}
        className={`fade-in ${visibility.section2 ? "visible" : ""}`}
      >
        <h1>WHY CHOOSE US</h1>
        <p>
          We provide debt-free education with real-world internship-based
          learning experiences that prepare students for the workforce.
        </p>
      </div>

      {/* Section 3 */}
      <div
        ref={refs.section3}
        className={`fade-in ${visibility.section3 ? "visible" : ""}`}
      >
        <h1>OUR VISION</h1>
        <p>
          Our vision is to foster a community of innovative thinkers who will
          shape the future of technology and society.
        </p>
      </div>

      {/* Section 4 */}
      <div
        ref={refs.section4}
        className={`fade-in ${visibility.section4 ? "visible" : ""}`}
      >
        <h1>APPLY NOW</h1>
        <p>
          Be part of the revolution. Join us and experience an education that
          prioritizes real-world learning and eliminates financial barriers.
        </p>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
          onClick={() => window.location.href = "https://forms.gle/QnmS3hs2mahbQWJ57"}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default DynamicTextWithObserver;
