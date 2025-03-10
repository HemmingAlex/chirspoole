// components/WeddingSnowParticleOverlay.jsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";

const WeddingSnowParticleOverlay = ({
  children,
  id = "wedding-snow-particles-js",
  showStats = false,
  config = {
    particles: {
      number: {
        value: 120, // Increased particle count for snow effect
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ["#ffd700", "#ffcc33", "#d4af37", "#ffdf00", "#f8de7e"],
      },
      shape: {
        type: ["circle", "star"], // Only using circles and stars
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.6,
        random: true,
        anim: {
          enable: true,
          speed: 0.8,
          opacity_min: 0.2,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: true,
          speed: 1.5,
          size_min: 0.5,
          sync: false,
        },
      },
      line_linked: {
        enable: false, // Disabled lines between particles
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none", // Moving downward like snow
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "window", // Changed from "canvas" to "window" for better interaction
      events: {
        onhover: {
          enable: true,
          mode: "repulse", // Changed to repulse for a snow-like interaction
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100, // Increased repulse distance
          duration: 0.4, // Increased duration for smoother effect
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  },
  backgroundColor = "#000000",
  backgroundImage = "",
}) => {
  const containerRef = useRef(null);
  const statsRef = useRef(null);
  const [particlesLoaded, setParticlesLoaded] = useState(false);
  const [statsLoaded, setStatsLoaded] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    // Initialize particles once the scripts are loaded
    if (
      particlesLoaded &&
      typeof window !== "undefined" &&
      window.particlesJS
    ) {
      window.particlesJS(id, config);

      // Setup stats if enabled and loaded
      if (showStats && statsLoaded && window.Stats) {
        const stats = new window.Stats();
        stats.setMode(0);
        stats.domElement.style.position = "absolute";
        stats.domElement.style.left = "0px";
        stats.domElement.style.top = "0px";
        statsRef.current.appendChild(stats.domElement);

        const updateStats = () => {
          stats.begin();
          stats.end();

          if (
            window.pJSDom[0].pJS.particles &&
            window.pJSDom[0].pJS.particles.array
          ) {
            if (countRef.current) {
              countRef.current.innerText =
                window.pJSDom[0].pJS.particles.array.length;
            }
          }

          requestAnimationFrame(updateStats);
        };

        requestAnimationFrame(updateStats);
      }
    }
  }, [particlesLoaded, statsLoaded, id, config, showStats]);

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden", // Prevent particles from creating scrollbars
  };

  const particlesStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: backgroundColor || "transparent",
    backgroundImage: backgroundImage ? `url("${backgroundImage}")` : "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    zIndex: 1, // Lower z-index than content
    pointerEvents: "all", // Ensure particles receive mouse events
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2, // Higher z-index than particles
    pointerEvents: "auto", // Ensure content is interactive
  };

  const statsStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 3,
    display: showStats ? "block" : "none",
  };

  const counterStyle = {
    background: "#000022",
    position: "absolute",
    top: "48px",
    left: 0,
    width: "80px",
    color: "#ffd700",
    fontSize: "0.8em",
    textAlign: "left",
    textIndent: "4px",
    lineHeight: "14px",
    paddingBottom: "2px",
    fontFamily: "Helvetica, Arial, sans-serif",
    fontWeight: "bold",
    borderRadius: "0 0 3px 3px",
    marginTop: "5px",
    marginLeft: "5px",
    WebkitUserSelect: "none",
    display: showStats ? "block" : "none",
  };

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js"
        onLoad={() => setParticlesLoaded(true)}
        strategy="afterInteractive"
      />

      {showStats && (
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/stats.js/r16/Stats.min.js"
          onLoad={() => setStatsLoaded(true)}
          strategy="afterInteractive"
        />
      )}

      <div ref={containerRef} style={containerStyle}>
        <div id={id} style={particlesStyle}></div>
        <div style={contentStyle}>{children}</div>
        <div ref={statsRef} style={statsStyle}></div>

        {showStats && (
          <div style={counterStyle} className="count-particles">
            <span ref={countRef} className="js-count-particles">
              --
            </span>{" "}
            particles
          </div>
        )}
      </div>
    </>
  );
};

export default WeddingSnowParticleOverlay;