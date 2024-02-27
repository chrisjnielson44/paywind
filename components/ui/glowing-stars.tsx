'use client'
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const GlowingStarsHeroBackground = ({ className, children }) => {
  const containerRef = useRef(null);

  const [glowingStars, setGlowingStars] = useState(new Set());

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = clientX - left; // Mouse x position within the container
    const y = clientY - top; // Mouse y position within the container

    // Calculate proximity for each star
    const proximityStars = new Set();
    const stars = containerRef.current.querySelectorAll('.star');
    stars.forEach((star, index) => {
      const starRect = star.getBoundingClientRect();
      const starX = starRect.left + starRect.width / 2 - left;
      const starY = starRect.top + starRect.height / 2 - top;
      const distance = Math.sqrt(Math.pow(starX - x, 2) + Math.pow(starY - y, 2));

      if (distance < 50) { // Glowing effect threshold (100 pixels)
        proximityStars.add(index);
      }
    });

    setGlowingStars(proximityStars);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative min-h-full w-full ${className}`}
      style={{ background: "" }}
    >
      <Illustration glowingStars={glowingStars} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const Illustration = ({ glowingStars }) => {
  const stars = 2500; // Number of stars
  const columns = 100; // Columns in the grid

  return (
    <div
      className="absolute top-0 left-0 max-h-full h-full w-full"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "2px",
      }}
    >
      {[...Array(stars)].map((_, index) => (
        <Star key={index} isGlowing={glowingStars.has(index)} />
      ))}
    </div>
  );
};

const Star = React.memo(({ isGlowing }) => {
  return (
    <motion.div
      className={`star h-[2px] w-[2px] rounded-full ${isGlowing ? "bg-primary" : "bg-white/20"}`}
      layoutId={isGlowing ? "glow" : undefined}
      transition={{ duration: 0.5 }}
    />
  );
});