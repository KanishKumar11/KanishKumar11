"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText"; // Reusing existing component if suitable, or we create a new one.

const HeroModern = () => {
  return (
    <div className="h-[40rem] w-full bg-black bg-grid-white/[0.05] relative flex flex-col items-center justify-center overflow-hidden">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="z-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic
          </h2>
        </motion.div>

        <div className="mt-8">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-4">
            Building the <br /> Future of Web.
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto"
        >
          I craft high-performance websites with stunning aesthetics.
          Merging code and design to create unforgettable digital experiences.
        </motion.p>

        <div className="mt-8 flex gap-4">
          <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            My Work
          </button>
          <button className="px-8 py-2 rounded-full bg-transparent border border-neutral-600 text-neutral-300 hover:bg-neutral-800 transition duration-200">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroModern;
