"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Word-by-word reveal component
const WordReveal = ({ children, className = "" }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.3"],
  });

  const words = children.split(" ");

  return (
    <p ref={container} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const y = useTransform(progress, range, [10, 0]);

  return (
    <motion.span style={{ opacity, y }} className="inline-block mr-[0.3em]">
      {children}
    </motion.span>
  );
};

// Skills data
const skills = [
  { name: "Next.js", color: "from-white to-gray-400" },
  { name: "React", color: "from-cyan-400 to-blue-500" },
  { name: "Three.js", color: "from-purple-400 to-pink-500" },
  { name: "Node.js", color: "from-green-400 to-emerald-500" },
  { name: "TypeScript", color: "from-blue-400 to-blue-600" },
  { name: "AI/ML", color: "from-orange-400 to-red-500" },
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={containerRef}
      className="min-h-screen py-32 px-8 relative overflow-hidden bg-[#050505]"
    >
      {/* Subtle grid background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-neutral-500 tracking-[0.3em] uppercase">
            [ ABOUT ]
          </span>
        </motion.div>

        {/* Main Statement - Word by Word Reveal */}
        <div className="mb-24">
          <WordReveal className="text-4xl md:text-6xl lg:text-7xl font-medium text-white/90 leading-[1.1] tracking-tight max-w-5xl">
            I build digital products that live at the intersection of engineering excellence and aesthetic perfection.
          </WordReveal>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y border-white/10 py-12"
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "3+", label: "Years Experience" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "15+", label: "Technologies" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-500 font-mono tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-neutral-500 tracking-[0.3em] uppercase mb-8"
          >
            [ EXPERTISE ]
          </motion.h3>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group relative"
              >
                <div
                  className={`px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm 
                             text-white font-medium text-sm md:text-base
                             hover:border-white/30 hover:bg-white/10 transition-all duration-300
                             cursor-default`}
                >
                  <span
                    className={`bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                  >
                    {skill.name}
                  </span>
                </div>
                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  );
}
