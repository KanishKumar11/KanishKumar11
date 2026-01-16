"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectList() {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Filter only Featured Projects for this view, or take top 4
  const featured = projects.filter(p => p.type === "Featured Project").slice(0, 5);

  return (
    <section className="min-h-screen bg-[#050505] py-32 px-4 relative">

      <div className="max-w-[90vw] mx-auto relative z-10">
        <div className="flex items-end justify-between mb-16 border-b border-white/20 pb-4">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-500">
            SELECTED <span className="text-white">WORKS</span>
          </h2>
          <span className="hidden md:block text-xs font-mono text-neutral-500">
            ( {featured.length.toString().padStart(2, '0')} )
          </span>
        </div>

        <div className="flex flex-col">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              data-hover
              className="group relative border-b border-white/10 py-12 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer transition-colors hover:bg-white/5 px-4"
            >
              <div className="flex items-baseline gap-8">
                <span className="font-mono text-sm text-neutral-600">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <h3 className="text-4xl md:text-7xl font-bold text-neutral-400 group-hover:text-white transition-colors uppercase tracking-tight">
                  {project.title}
                </h3>
              </div>

              <div className="mt-4 md:mt-0 flex items-center gap-6 md:gap-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex gap-2">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="text-xs font-mono text-neutral-500 border border-neutral-800 px-2 py-1 rounded-full bg-black">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-light text-white hidden md:block">
                  {project.category}
                </span>
                <div className="p-3 bg-white text-black rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Image Preview */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none z-0 mix-blend-screen hidden md:block">
        <AnimatePresence mode="wait">
          {hoveredProject && (
            <motion.div
              key={hoveredProject.id}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image
                src={hoveredProject.img}
                alt={hoveredProject.title}
                fill
                className="object-cover opacity-60 rounded-lg"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
}
