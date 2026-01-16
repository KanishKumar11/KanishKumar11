"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Code, Cpu, ChevronRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

const TerminalHero = () => {
  const [text, setText] = useState("");
  const fullText = "Full-Stack Developer | Creative Technologist";
  const [showCursor, setShowCursor] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Interactive Background Grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
      />

      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
        }}
      />

      {/* Terminal Window Container */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl relative z-10"
      >
        {/* Window Header */}
        <div className="h-10 bg-neutral-900/80 backdrop-blur-md rounded-t-xl border border-white/10 flex items-center px-4 gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="flex-1 text-center text-xs text-neutral-500 font-mono">kanish_portfolio — -zsh</div>
        </div>

        {/* Terminal Content */}
        <div className="bg-black/80 backdrop-blur-xl border-x border-b border-white/10 rounded-b-xl p-6 md:p-12 min-h-[400px] flex flex-col justify-center shadow-2xl shadow-blue-900/10">

          {/* Command 1 */}
          <div className="font-mono mb-6">
            <div className="flex items-center gap-2 text-green-500 text-sm md:text-base">
              <span className="text-blue-500">➜</span>
              <span>~</span>
              <span className="text-neutral-400">$ whoami</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mt-2 tracking-tight">Kanish Kumar</h1>
          </div>

          {/* Command 2 */}
          <div className="font-mono mb-8">
            <div className="flex items-center gap-2 text-green-500 text-sm md:text-base">
              <span className="text-blue-500">➜</span>
              <span>~</span>
              <span className="text-neutral-400">$ cat role.txt</span>
            </div>
            <div className="text-xl md:text-3xl text-neutral-300 mt-2 font-light">
              {text}
              {showCursor && <span className="text-blue-500">|</span>}
            </div>
          </div>

          {/* Buttons (Non-tech friendly) */}
          <div className="flex flex-wrap gap-4 mt-8">
            <MagneticButton className="group flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all">
              <Terminal size={18} />
              <span>View Projects</span>
            </MagneticButton>

            <MagneticButton className="group flex items-center gap-2 px-6 py-3 border border-white/20 hover:bg-white/10 text-white rounded-lg font-medium transition-all">
              <Code size={18} />
              <span>Read Code</span>
            </MagneticButton>
          </div>
        </div>
      </motion.div>

      {/* Floating Elements (Decorations) */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] opacity-20 hidden md:block"
      >
        <Code size={120} className="text-blue-500" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-[10%] opacity-20 hidden md:block"
      >
        <Cpu size={120} className="text-purple-500" />
      </motion.div>

    </section>
  );
};

export default TerminalHero;
