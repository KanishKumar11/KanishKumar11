"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";

const SpotlightHero = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  // Text Reveal Effect
  const text = "Kanish Kumar";
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black selection:bg-blue-500/30">
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      <div className="z-10 flex flex-col items-center px-4">
        <motion.div variants={container} initial="hidden" animate="visible" className="flex overflow-hidden">
          {letters.map((letter, index) => (
            <motion.span variants={child} key={index} className="text-[12vw] sm:text-[150px] font-bold tracking-tighter text-white/90 leading-none hover:text-blue-500 transition-colors duration-500 cursor-default">
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-xl md:text-2xl font-light text-neutral-400 tracking-wider text-center max-w-2xl"
        >
          Full-Stack Developer <span className="text-blue-500 mx-2">•</span> Creative Technologist
        </motion.p>

        <div className="mt-12 flex gap-6">
          <MagneticButton className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors">
            View Projects
          </MagneticButton>
          <MagneticButton className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors">
            Contact Me
          </MagneticButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent"></div>
      </motion.div>
    </div>
  );
};

export default SpotlightHero;
