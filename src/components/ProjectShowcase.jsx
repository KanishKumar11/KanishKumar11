"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Globe, X } from "lucide-react";
import { projects } from "@/data/projects";
import MagneticButton from "./MagneticButton";

const ProjectShowcase = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  const [selectedProject, setSelectedProject] = useState(null);

  // Filter top 10 impressive projects + ensure Gessure/AssureQAI are first
  const showcaseProjects = projects.slice(0, 8);

  return (
    <section ref={containerRef} className="h-[500vh] bg-neutral-900 relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 pl-10 md:pl-32">
          {/* Intro Card */}
          <div className="w-[80vw] md:w-[600px] flex flex-col justify-center shrink-0 p-8">
            <h2 className="text-6xl md:text-8xl font-bold text-white leading-none">
              Selected <span className="text-neutral-500">Works</span>
            </h2>
            <p className="mt-8 text-xl text-neutral-400 max-w-md">
              A curated selection of projects demonstrating full-stack expertise, AI integration, and creative engineering.
            </p>
            <div className="mt-12 flex gap-4">
              <span className="text-sm font-mono text-neutral-500">SCROLL TO EXPLORE →</span>
            </div>
          </div>

          {/* Project Cards */}
          {showcaseProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index + 1}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

const ProjectCard = ({ project, index, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative h-[65vh] w-[85vw] md:w-[700px] bg-neutral-900 rounded-[2.5rem] shrink-0 cursor-none perspective-1000 border border-white/5 shadow-2xl shadow-black/50"
    >
      {/* Parallax Image Container */}
      <motion.div
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-4 rounded-[2rem] overflow-hidden"
      >
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
      </motion.div>

      {/* Overlay Content (Floats above) */}
      <motion.div
        style={{ transform: "translateZ(80px)" }}
        className="absolute inset-0 p-10 flex flex-col justify-between pointer-events-none"
      >
        <div className="flex justify-between items-start">
          <span className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white/20 to-transparent font-outline-2">
            {index.toString().padStart(2, '0')}
          </span>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-4 bg-white text-black rounded-full pointer-events-auto"
          >
            <ArrowUpRight size={28} />
          </motion.div>
        </div>

        <div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{project.title}</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map(tech => (
              <span key={tech} className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-sm text-neutral-200 border border-white/10 shadow-lg">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="bg-neutral-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors z-10"
        >
          <X size={20} className="text-white" />
        </button>

        <div className="h-64 md:h-96 relative w-full">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
        </div>

        <div className="p-8 md:p-12 -mt-20 relative">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map(tech => (
              <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/20">
                {tech}
              </span>
            ))}
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{project.title}</h2>
          <p className="text-xl text-neutral-300 leading-relaxed mb-8">{project.summary}</p>

          <div className="flex gap-4">
            {project.link && (
              <Link href={project.link} target="_blank" className="flex-1">
                <MagneticButton className="w-full py-4 bg-white text-black rounded-xl font-bold hover:bg-neutral-200 transition-colors flex justify-center items-center gap-2">
                  <Globe size={20} /> Visit Site
                </MagneticButton>
              </Link>
            )}
            {project.github && (
              <Link href={project.github} target="_blank" className="flex-1">
                <MagneticButton className="w-full py-4 border border-white/20 text-white rounded-xl font-bold hover:bg-white/5 transition-colors flex justify-center items-center gap-2">
                  <Github size={20} /> View Code
                </MagneticButton>
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectShowcase;
