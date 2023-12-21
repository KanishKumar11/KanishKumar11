"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname, useRouter } from "next/navigation";
import {
  GithubIcon,
  Instagram,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href = "", title = "", className = "" }) => {
  const url = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] dark:bg-light inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          url === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({
  href = "",
  title = "",
  className = "",
  toggle,
}) => {
  const url = usePathname();
  const router = useRouter();
  const handleClick = () => {
    router.push(href);
    toggle();
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] dark:bg-dark inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          url === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsopen] = useState(false);
  const handleClick = () => {
    setIsopen(!isOpen);
  };

  return (
    <header className="relative w-full px-32 py-8 font-medium flex items-center justify-between bg-light dark:bg-dark dark:text-light z-10 lg:px-16 md:px-12 sm:px-8">
      <div
        className="items-center justify-center flex-col hidden lg:flex cursor-pointer"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </div>
      <div className="w-full  justify-between items-center lg:hidden flex">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://instagram.com/kanishkumar_11/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mr-3"
            whileTap={{ scale: 0.9 }}
          >
            <Instagram className="" />
          </motion.a>
          <motion.a
            href="https://twitter.com/kanishkumar_11/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mr-3"
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon className="" />
          </motion.a>
          <motion.a
            href="https://github.com/KanishKumar11/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mr-3"
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon className="" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/Kanish-kumar"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mr-3"
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon className="" />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="z-[999] flex flex-col w-max px-20  justify-between fixed top-1/2 left-1/2 items-center -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/book-a-call"
              title="Book A Call"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://twitter.com/kanishkumar_11/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mr-3"
              whileTap={{ scale: 0.9 }}
            >
              <TwitterIcon className="" />
            </motion.a>
            <motion.a
              href="https://github.com/KanishKumar11/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mr-3 bg-light rounded-full dark:bg-dark"
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon className="" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/Kanish-kumar"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mr-3"
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon className="" />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      )}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
