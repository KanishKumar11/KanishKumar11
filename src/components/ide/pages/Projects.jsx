"use client";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Search, ExternalLink, Github, Star, CheckCircle, Download, LayoutGrid, List, Sparkles, Box, Terminal, X, Code, Cpu, Globe } from "lucide-react";
import { projects } from "../../../data/projects";

const CATEGORIES = [
  { id: "all", label: "All Systems" },
  { id: "web-applications", label: "Web Modules" },
  { id: "ai-ml", label: "Neural Nets" },
  { id: "mobile-apps", label: "Mobile Units" },
];

// Installation Terminal (Kept as is, it's good)
const InstallationTerminal = ({ project, onClose, onComplete }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const steps = [
      { text: `> git clone https://github.com/kanish/${project.id}.git`, delay: 500 },
      { text: `> cd ${project.id}`, delay: 1200 },
      { text: `> npm install`, delay: 1800 },
      { text: `> installing core modules...`, delay: 2500 },
      { text: `> optimizing build...`, delay: 3500 },
      { text: `> npm run dev`, delay: 4000 },
      { text: `> Deployment Ready on localhost:3000`, delay: 4800, action: true }
    ];

    let timeouts = [];
    steps.forEach(({ text, delay, action }) => {
      const timeout = setTimeout(() => {
        setLogs(prev => [...prev, text]);
        if (action) setTimeout(onComplete, 800);
      }, delay);
      timeouts.push(timeout);
    });
    return () => timeouts.forEach(clearTimeout);
  }, [project, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 font-mono"
    >
      <div className="w-full max-w-2xl bg-[#0d1117] border border-[#30363d] rounded-lg shadow-2xl overflow-hidden flex flex-col relative">
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
        <div className="bg-[#161b22] px-4 py-3 flex items-center justify-between border-b border-[#30363d]">
          <div className="flex items-center gap-2 text-[#7d8590]">
            <Terminal size={14} className="text-green-500" />
            <span className="text-xs">INSTALLING: {project.title.toUpperCase()}</span>
          </div>
        </div>
        <div className="p-6 h-80 overflow-y-auto font-mono text-sm text-[#c9d1d9] space-y-2 relative">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
          {logs.map((log, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-green-500 mr-2">$</span>{log}
            </motion.div>
          ))}
          <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 h-4 bg-green-500 inline-block align-middle ml-1" />
        </div>
      </div>
    </motion.div>
  );
};

// 3D Tilt Card
const HolographicCard = ({ project, index, onInstall }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full bg-[#161618] border border-[#333] hover:border-blue-500/50 rounded-xl overflow-hidden flex flex-col transition-colors duration-500 shadow-xl"
      >
        {/* Holographic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

        {/* Image Section - Top Half */}
        <div className="h-52 relative bg-black/40 overflow-hidden border-b border-[#222] group-hover:border-blue-500/20 transition-colors">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 desaturate-0 group-hover:desaturate-0"
          />

          {/* Floating Icon */}
          <div className="absolute top-4 left-4 w-12 h-12 bg-black/80 backdrop-blur-md border border-[#444] rounded-lg p-2 shadow-lg flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
            <img src={project.img} className="w-full h-full object-contain" />
          </div>

          {/* Status Pill */}
          {project.isLiveApp && (
            <div className="absolute top-4 right-4 bg-green-900/80 text-green-400 text-[10px] px-2 py-1 rounded-sm font-mono border border-green-700/50 flex items-center gap-1.5 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              ONLINE
            </div>
          )}
        </div>

        {/* Content Section - Bottom Half */}
        <div className="p-5 flex flex-col flex-1 relative z-10">

          <div className="mb-4">
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{project.title}</h3>
            <p className="text-xs text-[#666] font-mono flex items-center gap-2">
              <span className="text-blue-400">v{(Math.random() * 2 + 1).toFixed(1)}.0</span>
              <span>•</span>
              <span>{(Math.random() * 10 + 1).toFixed(1)}k installs</span>
            </p>
          </div>

          <p className="text-xs text-[#999] leading-relaxed line-clamp-3 mb-4 flex-1 font-sans">
            {project.summary}
          </p>

          {/* Tech Matrix */}
          <div className="flex flex-wrap gap-1.5 mb-5 opacity-60 group-hover:opacity-100 transition-opacity">
            {project.technologies?.slice(0, 4).map(tech => (
              <span key={tech} className="text-[10px] px-1.5 py-0.5 bg-[#222] border border-[#333] text-[#aaa] rounded-sm font-mono">
                {tech}
              </span>
            ))}
          </div>

          {/* Cyber Action Button */}
          <button
            onClick={() => onInstall(project)}
            className="mt-auto w-full group/btn relative overflow-hidden bg-[#222] hover:bg-blue-600 border border-[#333] hover:border-blue-500/50 text-white text-xs font-bold py-2.5 rounded transition-all duration-300 active:scale-95"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Download size={14} /> INSTALL MODULE
            </span>
          </button>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [installingProject, setInstallingProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = filter === "all" || project.category === filter;
      const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.technologies?.some(t => t.toLowerCase().includes(search.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [filter, search]);

  const handleInstall = (project) => {
    setInstallingProject(project);
  };

  const handleInstallationComplete = () => {
    if (installingProject) {
      window.open(installingProject.link || installingProject.linkStore || '#', '_blank');
      setInstallingProject(null);
    }
  };

  return (
    <div className="min-h-full flex flex-col bg-[#0d0d0d] text-[#c9d1d9] font-sans relative">

      {/* Background Noise Only - Removed Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />

      <AnimatePresence>
        {installingProject && (
          <InstallationTerminal
            project={installingProject}
            onClose={() => setInstallingProject(null)}
            onComplete={handleInstallationComplete}
          />
        )}
      </AnimatePresence>

      {/* Modern Header */}
      <div className="p-6 border-b border-[#30363d] bg-[#0d0d0d]/80 backdrop-blur-md z-20 shrink-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-3">
              <Cpu className="text-blue-500" />
              <span>SYSTEM MODULES</span>
            </h1>
            <p className="text-xs text-[#8b949e] mt-1 font-mono">Select a module to initialize installation sequence.</p>
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#161b22] border border-[#30363d] text-sm text-white px-4 py-2 pl-10 rounded-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder-[#484f58]"
              placeholder="Search modules..."
            />
            <Search size={16} className="absolute left-3.5 top-2.5 text-[#484f58]" />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 mt-6 overflow-x-auto pb-1 no-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${filter === cat.id
                ? "bg-blue-500/10 border-blue-500/50 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                : "bg-[#21262d] border-[#30363d] text-[#8b949e] hover:bg-[#30363d]"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="flex-1 p-6 relative z-10">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-3 xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-6 pb-20">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <HolographicCard key={project.id} project={project} index={index} onInstall={handleInstall} />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 opacity-50">
            <Box size={64} strokeWidth={1} />
            <p className="mt-4 font-mono text-sm">NO MODULES FOUND</p>
          </div>
        )}
      </div>

    </div>
  );
}
