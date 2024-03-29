"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "./hooks/useMousePosition";
const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(true);
  return (
    <motion.div
      animate={{
        WebkitMaskPosition: `${x - 50}px ${y - 50}px`,
      }}
      transition={{ type: "tween", ease: "backOut" }}
      className={`h-screen w-full mask absolute min-h-screen z-[1] blur-[2px] ${
        isHovered ? "bg-none" : "bg-orange-500"
      }`}
    ></motion.div>
  );
};

export default CustomCursor;
