"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

// Get featured projects
const featuredProjects = projects
  .filter((p) => p.type === "Featured Project")
  .slice(0, 4);

const ProjectsHorizontal = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: `-${(featuredProjects.length - 1) * 100}vw`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${featuredProjects.length * 1000}`,
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-[#050505] text-white">
      {/* Section Header */}
      <div className="px-8 md:px-20 py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-end justify-between">
          <div>
            <span className="text-xs font-mono text-neutral-500 tracking-[0.3em] uppercase block mb-4">
              [ SELECTED WORK ]
            </span>
            <h2 className="text-4xl md:text-6xl font-bold">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Projects
              </span>
            </h2>
          </div>
          <span className="hidden md:block text-6xl font-bold text-white/10">
            0{featuredProjects.length}
          </span>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="flex h-screen"
          style={{ width: `${featuredProjects.length * 100}vw` }}
        >
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="h-screen w-screen flex items-center justify-center p-8 md:p-20 relative"
            >
              {/* Background Number */}
              <span className="absolute top-10 left-10 text-[15vw] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                0{index + 1}
              </span>

              <div className="flex flex-col lg:flex-row gap-12 items-center w-full max-w-7xl z-10">
                {/* Image/Preview */}
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden group cursor-pointer">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Hover CTA */}
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <div className="flex gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6 order-1 lg:order-2">
                  <div>
                    <span className="text-blue-400 font-mono text-sm tracking-wider uppercase mb-3 block">
                      {project.category?.replace("-", " ") || "Featured"}
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
                      {project.title}
                    </h2>
                  </div>

                  <p className="text-neutral-400 text-lg md:text-xl max-w-lg leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  <div className="flex gap-4 mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-white"
                    >
                      <span className="text-lg border-b border-white/50 group-hover:border-blue-400 transition-colors pb-1">
                        View Project
                      </span>
                      <ArrowUpRight
                        className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                        size={20}
                      />
                    </a>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Vertical Separator */}
              {index < featuredProjects.length - 1 && (
                <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* View All Projects Link */}
      <div className="px-8 md:px-20 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <span className="font-medium">View All Projects</span>
            <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHorizontal;
