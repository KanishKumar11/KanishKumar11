"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 1500; // ms
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center text-white cursor-wait"
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="relative overflow-hidden">
        <motion.h1
          className="text-[15vw] leading-none font-black mix-blend-difference"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {Math.round(progress)}
        </motion.h1>
      </div>

      <div className="flex flex-col items-center gap-2 mt-4 font-mono text-xs text-neutral-500 tracking-widest uppercase">
        <p>
          {progress < 100 ? "Loading Assets" : "System Ready"}
        </p>
        <div className="w-24 h-[1px] bg-neutral-800 relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-white"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loading;
