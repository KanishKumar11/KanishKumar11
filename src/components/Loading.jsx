"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loading = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);

  // Boot sequence lines
  const bootLines = [
    "BIOS Date 01/17/26 10:24:32 Ver: 1.0.2",
    "CPU: AMD Ryzen 9 7950X @ 5.8GHz",
    "Memory Test: 65536K OK",
    "Detecting Primary Master ... Kanish.Portfolio.OS",
    "Detecting Secondary Slave ... None",
    "Loading Kernel ... OK",
    "Initializing Video Adapter ... NVIDIA RTX 5090",
    "Mounting File System ... /dev/sda1 OK",
    "Starting System Services ...",
    "    - Network Manager ... OK",
    "    - UI Subsystem ... OK",
    "    - Portfolio Engine ... OK",
    "System Ready.",
    "Booting ..."
  ];

  useEffect(() => {
    // Add lines one by one
    let lineIndex = 0;
    const lineInterval = setInterval(() => {
      if (lineIndex < bootLines.length) {
        setLines(prev => [...prev, bootLines[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(lineInterval);
      }
    }, 150);

    // Progress bar
    let prog = 0;
    const progInterval = setInterval(() => {
      prog += 2;
      setProgress(prog);
      if (prog >= 100) {
        clearInterval(progInterval);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 500);
      }
    }, 40);

    return () => {
      clearInterval(lineInterval);
      clearInterval(progInterval);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] bg-black text-[#00ff00] font-mono p-10 md:p-4 flex flex-col justify-between overflow-hidden cursor-none"
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.8 } }}
    >
      {/* Scanline overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none" />

      {/* Boot Log */}
      <div className="flex flex-col gap-1 text-sm md:text-xs z-20">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="whitespace-pre-wrap"
          >
            {line}
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-3 h-5 bg-[#00ff00]"
        />
      </div>

      {/* Footer / Progress */}
      <div className="z-20 w-full max-w-2xl">
        <div className="flex justify-between mb-2 text-xs uppercase tracking-widest text-[#00ff00]/60">
          <span>Loading Assets</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 w-full bg-[#003300] border border-[#005500]">
          <motion.div
            className="h-full bg-[#00ff00]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loading;
