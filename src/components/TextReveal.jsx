"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TextReveal = ({ children, className = "" }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div
      ref={container}
      style={{ opacity, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default TextReveal;
