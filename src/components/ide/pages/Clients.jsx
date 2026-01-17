"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import { Users, Quote, Star, Activity, Server, Shield, Terminal, Globe, ChevronLeft, ChevronRight } from "lucide-react";

// --- Data ---
const clients = [
  { name: "Lincify", logo: "/images/brands/lincify.png", website: "https://lincify.in", type: "Digital Agency", status: "Connected" },
  { name: "Inovact", logo: "/images/brands/inovact.webp", website: "https://inovact.in", type: "Social Platform", status: "verified" },
  { name: "LancerX", logo: "/images/brands/lancerx.webp", website: "https://lancerx.in", type: "Freelance Hub", status: "Active" },
  { name: "DevOps Story", logo: "/images/brands/devopsstory.svg", website: "https://thedevopsstory.com", type: "Tech Publication", status: "Connected" },
  { name: "YoHr Consultancy", logo: "/images/brands/YoHrConsultancy.webp", website: "https://yohrconsultancy.com", type: "HR SaaS", status: "Verified" },
  { name: "Gupta Tutorials", logo: "/images/brands/guptatutorials.webp", website: "https://guptastutorial.com", type: "EdTech", status: "Active" },
];

const testimonials = [
  {
    quote: "Highly recommend Zlaark — fast delivery, excellent quality, clear communication, and great value. My go-to team for future web projects.",
    author: "Happy Client",
    role: "Business Owner",
    rating: 5,
    id: "REV-1024"
  },
  {
    quote: "Shoutout to Zlaark! Amazing work, fast delivery, and great attention to detail. Highly recommended!",
    author: "Satisfied Customer",
    role: "Startup Founder",
    rating: 5,
    id: "REV-2048"
  },
  {
    quote: "I highly recommend Zlaark for their professionalism, quality work, and reliable delivery. A great development partner.",
    author: "Tech Client",
    role: "Product Manager",
    rating: 5,
    id: "REV-4096"
  },
];

// --- Components ---

const SpotlightCard = ({ children, className = "" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`relative border border-[#30363d] bg-[#161b22] overflow-hidden group ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(56, 189, 248, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

const StatCard = ({ icon: Icon, label, value, color }) => (
  <div className="bg-[#161b22]/50 border border-[#30363d] p-4 rounded-lg flex items-center gap-4">
    <div className={`p-3 rounded-md bg-opacity-10 ${color.bg} ${color.text}`}>
      <Icon size={24} />
    </div>
    <div>
      <div className="text-2xl font-bold text-white font-mono">{value}</div>
      <div className="text-xs text-[#8b949e] uppercase tracking-wider">{label}</div>
    </div>
  </div>
);

export default function Clients() {
  const [activeReview, setActiveReview] = useState(0);

  return (
    <div className="min-h-full w-full bg-[#0d1117] text-[#c9d1d9] font-sans overflow-y-auto custom-scrollbar p-8 md:p-4">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* --- Header / HUD --- */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between border-b border-[#30363d] pb-6"
          >
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <Activity className="text-blue-500" />
                Network Connections
              </h1>
              <p className="text-[#8b949e] mt-1 font-mono text-sm">Est. connections and verified integrations</p>
            </div>
            <div className="flex gap-2 text-xs font-mono text-[#58a6ff] bg-[#1f6feb]/10 px-3 py-1 rounded border border-[#1f6feb]/30">
              <span className="w-2 h-2 rounded-full bg-[#58a6ff] animate-pulse mt-1" />
              SYSTEM ONLINE
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 md:grid-cols-1 gap-4"
          >
            <StatCard icon={Server} label="Active Clients" value="20+" color={{ bg: "bg-blue-500", text: "text-blue-500" }} />
            <StatCard icon={Shield} label="Projects Secure" value="35+" color={{ bg: "bg-green-500", text: "text-green-500" }} />
            <StatCard icon={Activity} label="Satisfaction Rate" value="100%" color={{ bg: "bg-purple-500", text: "text-purple-500" }} />
          </motion.div>
        </div>

        {/* --- Client Grid --- */}
        <div>
          <h2 className="text-sm font-bold text-[#8b949e] uppercase tracking-widest mb-6 flex items-center gap-2">
            <Globe size={14} /> Active Nodes
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                <a href={client.website} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <SpotlightCard className="rounded-xl p-6 h-full hover:border-[#58a6ff]/50 transition-colors">
                    <div className="flex flex-col h-full gap-4">
                      {/* Logo Area */}
                      <div className="h-12 flex items-center justify-start filter grayscale hover:grayscale-0 transition-all duration-500">
                        <img src={client.logo} alt={client.name} className="max-h-full max-w-[120px] object-contain" />
                      </div>

                      <div className="mt-auto">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-bold text-white">{client.name}</h3>
                          <span className="text-[10px] text-green-400 border border-green-500/30 bg-green-500/10 px-1.5 py-0.5 rounded uppercase">{client.status}</span>
                        </div>
                        <p className="text-xs text-[#8b949e] font-mono">{client.type}</p>
                      </div>
                    </div>
                  </SpotlightCard>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- Testimonials / Review Logs --- */}
        <div>
          <h2 className="text-sm font-bold text-[#8b949e] uppercase tracking-widest mb-6 flex items-center gap-2">
            <Terminal size={14} /> Review Logs
          </h2>

          <div className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden font-mono text-sm relative">
            {/* Terminal Header */}
            <div className="bg-[#161b22] border-b border-[#30363d] px-4 py-2 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#fa7970]" />
                <div className="w-3 h-3 rounded-full bg-[#faa356]" />
                <div className="w-3 h-3 rounded-full bg-[#7ce38b]" />
              </div>
              <div className="text-[#8b949e] text-xs">user_reviews.log</div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeReview}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="text-[#8b949e]">
                    <span className="text-purple-400">timestamp</span>: {new Date().toISOString().split('T')[0]}<br />
                    <span className="text-blue-400">review_id</span>: <span className="text-green-400">"{testimonials[activeReview].id}"</span><br />
                    <span className="text-blue-400">author</span>: <span className="text-[#e3b341]">"{testimonials[activeReview].author}"</span>
                  </div>

                  <div className="border-l-2 border-[#30363d] pl-4 py-2 my-4">
                    <span className="text-[#8b949e]">// Message content</span>
                    <p className="text-[#c9d1d9] text-base md:text-sm mt-1 leading-relaxed">
                      "{testimonials[activeReview].quote}"
                    </p>
                  </div>

                  <div className="flex gap-1">
                    {Array.from({ length: testimonials[activeReview].rating }).map((_, i) => (
                      <Star key={i} size={14} className="text-[#e3b341] fill-[#e3b341]" />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="absolute top-1/2 -translate-y-1/2 right-4 flex flex-col gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveReview(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === activeReview ? 'bg-[#58a6ff] scale-125' : 'bg-[#30363d]'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
