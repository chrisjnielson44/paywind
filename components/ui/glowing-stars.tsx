'use client'
import React, { useState, useEffect, useRef, ReactNode, FC, MouseEvent } from "react";
import { motion } from "framer-motion";

interface GlowingStarsHeroBackgroundProps {
  className?: string;
  children?: ReactNode;
}

export const GlowingStarsHeroBackground: FC<GlowingStarsHeroBackgroundProps> = ({ className = "", children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [glowingStars, setGlowingStars] = useState<Set<number>>(new Set<number>());

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    const container = containerRef.current;
    if (!container) return;

    const { left, top } = container.getBoundingClientRect();
    const x = clientX - left; // Mouse x position within the container
    const y = clientY - top; // Mouse y position within the container

    // Calculate proximity for each star
    const proximityStars = new Set<number>();
    const stars = container.querySelectorAll('.star');
    stars.forEach((star: { getBoundingClientRect: () => any; }, index: number) => {
      const starRect = star.getBoundingClientRect();
      const starX = starRect.left + starRect.width / 2 - left;
      const starY = starRect.top + starRect.height / 2 - top;
      const distance = Math.sqrt(Math.pow(starX - x, 2) + Math.pow(starY - y, 2));

      if (distance < 70) { // Glowing effect threshold (50 pixels)
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

interface IllustrationProps {
  glowingStars: Set<number>;
}

const Illustration: FC<IllustrationProps> = ({ glowingStars }) => {
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

interface StarProps {
  isGlowing: boolean;
}
const Star: FC<StarProps> = React.memo(({ isGlowing }) => {
  return (
    <motion.div
      className={`star h-[2px] w-[2px] rounded-full ${isGlowing ? "bg-primary" : "bg-white/20"}`}
      layoutId={isGlowing ? "glow" : undefined}
      transition={{ duration: 0.5 }}
    />
  );
});