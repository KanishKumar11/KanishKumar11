"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Star, GitBranch, Eye, Book } from "lucide-react";

// Contribution Graph Colors
const contributionColors = ["bg-[#161b22]", "bg-[#0e4429]", "bg-[#006d32]", "bg-[#26a641]", "bg-[#39d353]"];

export default function About() {
  return (
    <div className="min-h-full w-full bg-[#0d1117] text-[#c9d1d9] font-sans">
      <div className="max-w-5xl mx-auto p-8 md:p-4">

        {/* Repo Header */}
        <div className="flex flex-col gap-4 border-b border-[#30363d] pb-6 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2 text-xl text-[#58a6ff] font-semibold">
              <Book size={20} className="text-[#8b949e]" />
              <span className="hover:underline cursor-pointer">KanishKumar11</span>
              <span className="text-[#8b949e]">/</span>
              <span className="hover:underline cursor-pointer">README.md</span>
              <span className="text-[#8b949e] text-xs border border-[#30363d] rounded-full px-2 py-0.5 ml-2">Public</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <button className="flex items-center gap-1 bg-[#21262d] border border-[#30363d] px-3 py-1 rounded-md hover:bg-[#30363d] text-[#c9d1d9] transition-colors">
                <Eye size={16} className="text-[#8b949e]" /> Watch <span className="bg-[#30363d] px-1.5 rounded-full text-xs ml-1">12</span>
              </button>
              <button className="flex items-center gap-1 bg-[#21262d] border border-[#30363d] px-3 py-1 rounded-md hover:bg-[#30363d] text-[#c9d1d9] transition-colors">
                <GitBranch size={16} className="text-[#8b949e]" /> Fork <span className="bg-[#30363d] px-1.5 rounded-full text-xs ml-1">45</span>
              </button>
              <button className="flex items-center gap-1 bg-[#21262d] border border-[#30363d] px-3 py-1 rounded-md hover:bg-[#30363d] text-[#c9d1d9] transition-colors">
                <Star size={16} className="text-[#e3b341]" /> Star <span className="bg-[#30363d] px-1.5 rounded-full text-xs ml-1">1.2k</span>
              </button>
            </div>
          </div>
        </div>

        {/* Readme Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-[#30363d] rounded-md bg-[#0d1117]"
        >
          {/* Readme Header */}
          <div className="bg-[#161b22] border-b border-[#30363d] p-4 rounded-t-md flex items-center justify-between sticky top-0 md:relative">
            <div className="flex items-center gap-2 font-mono text-sm font-bold">
              <div className="w-6 h-6 rounded-full overflow-hidden border border-[#30363d]">
                <img src="/KanishKumar.png" alt="User" />
              </div>
              <span>KanishKumar11</span>
              <span className="font-normal text-[#8b949e]">update README.md</span>
            </div>
            <div className="text-xs text-[#8b949e] font-mono">latest commit 3d4a21</div>
          </div>

          {/* Readme Body */}
          <div className="p-8 md:p-4 md:text-sm">
            <div className="prose prose-invert max-w-none">

              {/* Intro Section */}
              <div className="text-center mb-10">
                <div className="text-xl font-mono text-[#8b949e] mb-2">Hi there 👋, I'm</div>
                <h1 className="text-5xl md:text-3xl font-black text-white mb-6 tracking-tight">Kanish Kumar</h1>
                <p className="text-xl md:text-lg text-[#58a6ff] font-medium">Full-Stack Engineer.exe</p>

                <div className="flex justify-center gap-4 mt-6">
                  <a href="https://github.com/KanishKumar11" className="text-[#8b949e] hover:text-white transition-colors"><Github /></a>
                  <a href="#" className="text-[#8b949e] hover:text-white transition-colors"><Linkedin /></a>
                  <a href="#" className="text-[#8b949e] hover:text-white transition-colors"><Twitter /></a>
                </div>
              </div>

              <hr className="border-[#30363d] my-8" />

              <div className="grid grid-cols-2 md:grid-cols-1 gap-10">
                {/* Left Col */}
                <div>
                  <h2 className="text-2xl font-bold border-b border-[#30363d] pb-2 mb-4 flex items-center gap-2">
                    <span className="text-2xl">⚡</span> Quick Stats
                  </h2>
                  <ul className="list-disc pl-5 space-y-2 text-[#8b949e]">
                    <li>🔭 I'm currently working on <strong className="text-white">Enterprise SaaS</strong></li>
                    <li>🌱 I'm currently learning <strong className="text-white">Three.js & WebGL</strong></li>
                    <li>💬 Ask me about <strong className="text-white">React, Next.js, Node</strong></li>
                    <li>⚡ Fun fact: <span className="italic">I code in VS Code inside my website</span></li>
                  </ul>
                </div>

                {/* Right Col - Updated Tech Stack */}
                <div>
                  <h2 className="text-2xl font-bold border-b border-[#30363d] pb-2 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🛠</span> Tech Stack
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "TypeScript", "React", "Next.JS", "React Native", "Expo", "Node.js", "NestJS", "MongoDB", "MySQL", "Tailwind CSS"].map(tech => (
                      <span key={tech} className="bg-[#1f6feb]/10 text-[#58a6ff] px-3 py-1 rounded-full text-xs font-semibold border border-[#1f6feb]/20 hover:bg-[#1f6feb]/20 hover:border-[#1f6feb]/50 transition-all cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <hr className="border-[#30363d] my-8" />

              {/* Contribution Graph */}
              <h2 className="text-2xl font-bold border-b border-[#30363d] pb-2 mb-6">
                🟩 Contribution Graph
              </h2>
              <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
                <div className="flex justify-between min-w-[700px]">
                  {Array.from({ length: 52 }).map((_, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                      {Array.from({ length: 7 }).map((_, dayIndex) => {
                        const intensity = Math.random() > 0.3 ? Math.floor(Math.random() * 4) + 1 : 0;
                        return (
                          <motion.div
                            key={dayIndex}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: weekIndex * 0.01 + dayIndex * 0.01 }}
                            className={`w-3 h-3 rounded-sm ${contributionColors[intensity]} border border-[#1b1f230f]`}
                            title={`${intensity} contributions`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-[#8b949e] mt-2 font-mono min-w-[700px]">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                </div>
              </div>

              <hr className="border-[#30363d] my-8" />

              {/* Timeline - Updated with Real Experience */}
              <h2 className="text-2xl font-bold border-b border-[#30363d] pb-2 mb-6">
                ⏳ Commit History
              </h2>
              <div className="space-y-6">
                {/* Zlaark - Current Agency */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-[#3fb950] rounded-full ring-4 ring-[#0d1117] relative z-10" />
                    <div className="w-0.5 h-full bg-[#30363d] -mt-1" />
                  </div>
                  <div className="pb-6">
                    <div className="text-sm text-[#8b949e] font-mono mb-1">Jan 2025 - Present</div>
                    <h3 className="text-lg font-bold text-white">Founder @ <a href="https://zlaark.com" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] hover:underline">Zlaark</a></h3>
                    <p className="text-[#8b949e] mt-1 text-sm">Started my own web development and mobile app development agency. Building digital solutions for clients worldwide.</p>
                  </div>
                </div>
                {/* Current Role */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-[#30363d] border-2 border-[#8b949e] rounded-full ring-4 ring-[#0d1117] relative z-10" />
                    <div className="w-0.5 h-full bg-[#30363d] -mt-1" />
                  </div>
                  <div className="pb-6">
                    <div className="text-sm text-[#8b949e] font-mono mb-1">July 2024 - Present</div>
                    <h3 className="text-lg font-bold text-white">Junior Full Stack Developer @ <span className="text-[#58a6ff]">Sow Tech</span></h3>
                    <p className="text-[#8b949e] mt-1 text-sm">Building complex web applications with enhanced responsibilities. Focused on optimizing application performance and implementing advanced state management techniques.</p>
                  </div>
                </div>
                {/* Internship */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-[#30363d] border-2 border-[#8b949e] rounded-full ring-4 ring-[#0d1117] relative z-10" />
                    <div className="w-0.5 h-full bg-[#30363d] -mt-1" />
                  </div>
                  <div className="pb-6">
                    <div className="text-sm text-[#8b949e] font-mono mb-1">Jan 2024 - July 2024</div>
                    <h3 className="text-lg font-bold text-white">Full Stack Web Developer Intern @ <span className="text-[#58a6ff]">Sow Tech</span></h3>
                    <p className="text-[#8b949e] mt-1 text-sm">Developed full-stack web applications using React, Next.js, Tailwind CSS, and MongoDB. Implemented state management with Zustand.</p>
                  </div>
                </div>
                {/* SuperBeta */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-[#30363d] border-2 border-[#8b949e] rounded-full ring-4 ring-[#0d1117] relative z-10" />
                    <div className="w-0.5 h-full bg-[#30363d] -mt-1" />
                  </div>
                  <div className="pb-6">
                    <div className="text-sm text-[#8b949e] font-mono mb-1">May 2023 - June 2023</div>
                    <h3 className="text-lg font-bold text-white">Front-end Web Developer Intern @ <span className="text-[#58a6ff]">SuperBeta</span></h3>
                    <p className="text-[#8b949e] mt-1 text-sm">Developed responsive web applications. Translated design wireframes into functional interfaces and optimized website performance.</p>
                  </div>
                </div>
                {/* Glaark */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-[#30363d] border-2 border-[#8b949e] rounded-full ring-4 ring-[#0d1117] relative z-10" />
                  </div>
                  <div>
                    <div className="text-sm text-[#8b949e] font-mono mb-1">Feb 2022 - Oct 2022</div>
                    <h3 className="text-lg font-bold text-white">WordPress Developer @ <span className="text-[#58a6ff]">Glaark</span></h3>
                    <p className="text-[#8b949e] mt-1 text-sm">Developed complete websites based on WordPress CMS, helped in improving their SEO performance (Commit: Initial Release).</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
