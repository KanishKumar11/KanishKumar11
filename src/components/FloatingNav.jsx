"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Home, User, Folder, Mail, Github, Twitter, Linkedin } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: <Home size={18} /> },
  { name: "About", href: "/about", icon: <User size={18} /> },
  { name: "Projects", href: "/projects", icon: <Folder size={18} /> },
  { name: "Contact", href: "/book-a-call", icon: <Mail size={18} /> },
];

const socials = [
  { href: "https://github.com/KanishKumar11", icon: <Github size={18} /> },
  { href: "https://twitter.com/kanishkumar_11", icon: <Twitter size={18} /> },
  { href: "https://linkedin.com/in/Kanish-kumar", icon: <Linkedin size={18} /> },
];

const FloatingNav = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="fixed top-6 right-6 z-50 flex flex-col items-end"
    >
      <motion.div
        animate={{
          width: isHovered ? "auto" : "48px",
          height: isHovered ? "auto" : "48px",
          borderRadius: "24px"
        }}
        className="bg-neutral-900/80 backdrop-blur-md border border-white/10 overflow-hidden shadow-lg flex flex-col items-end"
      >
        {/* Toggle Button / Reduced View */}
        <div className={`h-12 w-12 flex items-center justify-center cursor-pointer transition-colors ${!isHovered ? 'text-white' : 'text-neutral-400'}`}>
          <div className="flex flex-col gap-1.5 items-end">
            <span className="w-6 h-0.5 bg-current rounded-full"></span>
            <span className="w-4 h-0.5 bg-current rounded-full"></span>
          </div>
        </div>

        {/* Expanded Menu Content */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-2 p-4 pt-0 min-w-[200px]"
            >
              <div className="w-full h-[1px] bg-white/10 my-2"></div>

              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
                  >
                    {item.icon}
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                ))}
              </nav>

              <div className="w-full h-[1px] bg-white/10 my-2"></div>

              <div className="flex gap-2 justify-center">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-neutral-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default FloatingNav;
