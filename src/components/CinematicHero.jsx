"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

// --- SCRAMBLE TEXT COMPONENT ---
const ScrambleText = ({ text, className }) => {
  const [display, setDisplay] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

  useEffect(() => {
    let interval;
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{display}</span>;
}

// --- MATRIX RAIN CANVAS ---
const DataStream = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const columns = Math.floor(width / 20);
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const chars = "0123456789ABCDEF";

    const draw = () => {
      // Translucent black background for trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#3b82f6"; // Blue text
      ctx.font = "14px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];

        // Randomly brighter characters
        if (Math.random() > 0.95) {
          ctx.fillStyle = "#fff";
        } else {
          ctx.fillStyle = "rgba(59, 130, 246, 0.3)"; // Dim blue
        }

        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 opacity-40 pointer-events-none" />;
}

// --- MAIN COMPONENT ---
export default function CinematicHero() {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col justify-center items-center">
      <DataStream />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 mix-blend-screen">
        <div className="mb-4 flex items-center justify-center gap-3">
          <div className="h-[1px] w-12 bg-blue-500/50"></div>
          <span className="text-blue-400 font-mono text-sm tracking-[0.3em]">SYSTEM_READY</span>
          <div className="h-[1px] w-12 bg-blue-500/50"></div>
        </div>

        <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-2">
          <ScrambleText text="KANISH" className="block md:inline mr-4" />
          <ScrambleText text="KUMAR" className="block md:inline text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600" />
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
          Full-Stack Engineer crafting <span className="text-white">high-performance</span> digital
          experiences with a focus on motion and interaction.
        </p>
      </div>

      {/* Decorative HUD Elements */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <div className="font-mono text-xs text-neutral-600 flex flex-col gap-1">
          <p>COORDS: 34.0522° N, 118.2437° W</p>
          <p>STATUS: ONLINE</p>
          <p>VERSION: 2.5.0</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10"
      >
        <ArrowDown className="text-white/30" />
      </motion.div>

    </section>
  );
}
