"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { Terminal, Code, Cpu, Globe, ArrowRight, Copy, Check } from "lucide-react";
import MagneticButton from "./MagneticButton";
import Image from "next/image";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function AuroraHero() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const copyCommand = () => {
    navigator.clipboard.writeText("npm install kanish-portfolio");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative min-h-screen w-full bg-black overflow-hidden grid place-content-center px-4"
    >
      {/* Floating Elements */}
      <FloatingIcon icon={Code} delay={0} x={-20} y={-20} color="text-blue-400" />
      <FloatingIcon icon={Cpu} delay={1} x={20} y={-30} color="text-purple-400" />
      <FloatingIcon icon={Globe} delay={2} x={-15} y={20} color="text-green-400" />

      {/* Main Terminal Window */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
      >
        {/* Window Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="text-xs text-neutral-500 font-mono">kanish_profile.tsx — VS Code</div>
          <div className="w-16" /> {/* Spacer */}
        </div>

        {/* IDE Content */}
        <div className="p-6 md:p-8 font-mono text-sm md:text-base grid grid-cols-[auto,1fr] gap-6">
          {/* Line Numbers */}
          <div className="text-neutral-700 text-right select-none flex flex-col gap-1">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>

          {/* Code Content */}
          <div className="text-neutral-300 flex flex-col gap-1">
            <div>
              <span className="text-purple-400">const</span> <span className="text-blue-400">Profile</span> = <span className="text-yellow-300">()</span> <span className="text-purple-400">=&gt;</span> {"{"}
            </div>
            <div className="pl-4">
              <span className="text-purple-400">const</span> developer = {"{"}
            </div>
            <div className="pl-8">
              name: <span className="text-green-400">"Kanish Kumar"</span>,
            </div>
            <div className="pl-8">
              role: <span className="text-green-400">"Full-Stack Engineer"</span>,
            </div>
            <div className="pl-8">
              traits: [<span className="text-green-400">"Creative"</span>, <span className="text-green-400">"Detail-Oriented"</span>],
            </div>
            <div className="pl-4">
              {"}"};
            </div>
            <br />
            <div className="pl-4">
              <span className="text-purple-400">return</span> (
            </div>
            <div className="pl-8">
              <span className="text-blue-300">&lt;HeroSection</span>
            </div>
            <div className="pl-12">
              <span className="text-blue-200">title</span>=<span className="text-green-400">"Building Digital Masterpieces"</span>
            </div>
            <div className="pl-8">
              <span className="text-blue-300">/&gt;</span>
            </div>
            <div>{"}"}</div>
          </div>
        </div>

        {/* Interactive Bottom Bar */}
        <div className="border-t border-white/10 bg-black/50 p-4 flex gap-4 items-center justify-between">
          <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-400 bg-white/5 px-3 py-2 rounded-lg border border-white/5 w-full md:w-auto">
            <span className="text-green-500">$</span>
            <span className="flex-1">npm install kanish-portfolio</span>
            <button onClick={copyCommand} className="hover:text-white transition-colors">
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
          <MagneticButton className="hidden md:flex px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg items-center gap-2 transition-colors">
            <span>Execute & Enter</span>
            <ArrowRight size={14} />
          </MagneticButton>
        </div>
      </motion.div>

      {/* Mobile CTA (visible only on mobile where button is hidden in terminal) */}
      <div className="md:hidden mt-8 w-full max-w-xs relative z-10">
        <MagneticButton className="w-full py-4 bg-blue-600 active:bg-blue-700 text-white font-bold rounded-xl flex justify-center items-center gap-2 text-lg shadow-lg shadow-blue-900/20">
          <span>Enter Portfolio</span>
          <ArrowRight size={20} />
        </MagneticButton>
      </div>

    </motion.section>
  );
}

const FloatingIcon = ({ icon: Icon, delay, x, y, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        y: [0, y, 0],
        x: [0, x, 0],
        rotate: [0, 10, -10, 0]
      }}
      transition={{
        duration: 5,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute ${color} pointer-events-none hidden md:block`}
      style={{
        top: `${50 + y}%`,
        left: `${50 + x}%`,
      }}
    >
      <Icon size={40} />
    </motion.div>
  )
}
