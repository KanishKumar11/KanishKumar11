"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <MotionLink
        href="/"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold dark:border-light border border-solid border-transparent"
      >
        {/* <Image src="/images/svgs/logo.svg" alt='logo' width={64} height={64} /> */}
        KK
      </MotionLink>
    </div>
  );
};

export default Logo;
