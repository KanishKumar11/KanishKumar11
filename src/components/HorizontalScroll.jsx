"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import MagneticButton from "./MagneticButton";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "EcoTracker",
    subtitle: "Sustainable Living App",
    description: "A mobile application helping users track their carbon footprint with AI-powered suggestions.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2613&auto=format&fit=crop", // Placeholder
    tags: ["React Native", "AI", "Node.js"],
    link: "/projects/ecotracker"
  },
  {
    title: "CryptoVault",
    subtitle: "DeFi Dashboard",
    description: "Real-time cryptocurrency analytics dashboard using WebSockets and 3D data visualization.",
    image: "https://images.unsplash.com/photo-1639322537228-ad714291f20c?q=80&w=2602&auto=format&fit=crop",
    tags: ["Next.js", "Three.js", "WebSockets"],
    link: "/projects/cryptovault"
  },
  {
    title: "NeonSpace",
    subtitle: "Digital Art Gallery",
    description: "Immersive 3D gallery for NFT artists to showcase work in a virtual environment.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    tags: ["WebGL", "React", "Solidity"],
    link: "/projects/neonspace"
  },
  {
    title: "TaskFlow",
    subtitle: "Productivity Suite",
    description: "Team collaboration platform with real-time editing and kanban boards.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2672&auto=format&fit=crop",
    tags: ["Vue", "Firebase", "Tailwind"],
    link: "/projects/taskflow"
  },
];

const HorizontalScroll = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-300vw", // Move by 3 full viewports (since we have 4 items, we show 1 and scroll 3)
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
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
    <section className="overflow-hidden bg-black text-white">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="flex h-screen w-[400vw] flex-row relative">
          {projects.map((project, index) => (
            <div key={index} className="h-screen w-screen flex items-center justify-center p-8 md:p-20 relative border-r border-white/10">
              {/* Background Number */}
              <span className="absolute top-10 left-10 text-[20vw] font-bold text-white/5 leading-none select-none">
                0{index + 1}
              </span>

              <div className="flex flex-col md:flex-row gap-12 items-center w-full max-w-7xl z-10">
                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                  <div>
                    <h3 className="text-blue-500 font-medium tracking-wider uppercase mb-2">{project.subtitle}</h3>
                    <h2 className="text-5xl md:text-7xl font-bold leading-tight">{project.title}</h2>
                  </div>
                  <p className="text-neutral-400 text-lg md:text-xl max-w-md">{project.description}</p>

                  <div className="flex gap-4 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-1 rounded-full border border-white/20 text-sm text-neutral-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={project.link}>
                    <MagneticButton className="mt-8 flex items-center gap-2 group text-white">
                      <span className="text-lg border-b border-white group-hover:border-blue-500 transition-colors">View Case Study</span>
                      <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </MagneticButton>
                  </Link>
                </div>

                {/* Image/Preview */}
                <div className="w-full md:w-1/2 ">
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
