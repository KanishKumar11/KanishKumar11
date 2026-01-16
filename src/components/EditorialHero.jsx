"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const Marquee = ({ text, direction = "left", speed = 20 }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap border-y border-white/20 py-4 bg-black">
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
        className="flex gap-12 text-7xl md:text-9xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-500"
      >
        <span className="opacity-90">{text}</span>
        <span className="opacity-90">{text}</span>
        <span className="opacity-90">{text}</span>
        <span className="opacity-90">{text}</span>
      </motion.div>
    </div>
  );
};

export default function EditorialHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#050505] text-white flex flex-col justify-between overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* HEADER / NAV AREA */}
      <div className="p-8 flex justify-between items-start z-10 mix-blend-difference">
        <div className="flex flex-col">
          <span className="text-xs font-mono text-neutral-400 tracking-widest">KANISH KUMAR</span>
          <span className="text-xs font-mono text-neutral-400">© 2025</span>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-mono text-neutral-400 tracking-widest">AVAILABLE FOR WORK</span>
          </div>
          <span className="text-xs font-mono text-neutral-400">LOC: INDIA</span>
        </div>
      </div>

      {/* CENTRAL HERO CONTENT */}
      <motion.div
        style={{ y, opacity }}
        className="flex-1 flex flex-col justify-center px-4 relative z-10"
      >
        <div className="max-w-[90vw] mx-auto">
          <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter text-white mix-blend-difference">
            CREATIVE <br />
            <span className="text-neutral-500">DEVELOPER.</span>
          </h1>
        </div>

        <div className="max-w-[90vw] mx-auto mt-12 flex flex-col md:flex-row gap-8 md:items-end justify-between border-t border-white/20 pt-8">
          <p className="max-w-md text-neutral-400 text-lg md:text-xl font-light leading-relaxed">
            Crafting <span className="text-white">digital experiences</span> that blend aesthetic perfection with engineering precision.
          </p>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono text-neutral-500">SPECIALIZED IN</span>
            <div className="flex gap-4 text-sm font-medium">
              <span>NEXT.JS</span>
              <span>WEBGL</span>
              <span>SYSTEM_DESIGN</span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="group flex items-center gap-2 bg-white text-black px-6 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-neutral-200 transition-colors"
          >
            See My Work
            <ArrowDownRight className="group-hover:rotate-45 transition-transform" />
          </motion.button>
        </div>
      </motion.div>

      {/* FOOTER MARQUEE */}
      <div className="relative z-10 pb-12">
        <Marquee text="FULL STACK • CREATIVE • INTERACTIVE • " speed={40} />
      </div>

    </section>
  );
}
