"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  BookOpenIcon,
  PhoneIcon,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
} from "lucide-react";

// Links configuration
const links = [
  {
    title: "Home",
    icon: <HomeIcon className="h-full w-full p-2" />,
    href: "/",
  },
  {
    title: "About",
    icon: <UserIcon className="h-full w-full p-2" />,
    href: "/about",
  },
  {
    title: "Projects",
    icon: <BriefcaseIcon className="h-full w-full p-2" />,
    href: "/projects",
  },
  {
    title: "Articles",
    icon: <BookOpenIcon className="h-full w-full p-2" />,
    href: "/articles",
  },
  {
    title: "Contact",
    icon: <PhoneIcon className="h-full w-full p-2" />,
    href: "/book-a-call",
  },
];

const FloatingDock = () => {
  let mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] hidden md:flex h-16 gap-4 items-end rounded-2xl glass-dock px-4 pb-3">
      {links.map((link) => (
        <IconContainer mouseX={mouseX} key={link.title} {...link} />
      ))}
    </div>
  );
};

// Mobile simplified dock
export const MobileDock = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-[100] flex md:hidden px-6 py-4 justify-between items-center rounded-2xl glass-dock border border-white/20">
      {links.slice(0, 5).map((link) => (
        <Link href={link.href} key={link.title} className="text-gray-400 hover:text-white transition-colors">
          {React.cloneElement(link.icon, { className: "h-6 w-6" })}
        </Link>
      ))}
    </div>
  )
}

function IconContainer({ mouseX, title, icon, href }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width }}
        className="aspect-square w-10 rounded-full bg-neutral-800 flex items-center justify-center relative group border border-neutral-700 hover:bg-neutral-700 transition-colors"
      >
        <div className="w-full h-full flex items-center justify-center text-white">
          {icon}
        </div>
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 w-auto p-2 m-2 min-w-max rounded-md glass text-white text-xs font-bold transition-all duration-100 scale-0 origin-bottom group-hover:scale-100">
          {title}
        </span>
      </motion.div>
    </Link>
  );
}

export default FloatingDock;
