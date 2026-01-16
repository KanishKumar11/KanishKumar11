"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal, FileCode, Folder, GitBranch, Search, Settings,
  Menu, X, Minus, Square, Play, ChevronRight, ChevronDown,
  Command, Coffee, Activity, Globe, Layout
} from "lucide-react";

// --- FILE TREE COMPONENT ---
const FileTree = ({ activeFile, onFileSelect }) => {
  const [openFolders, setOpenFolders] = useState({ src: true, components: true, pages: true });

  const toggleFolder = (folder) => {
    setOpenFolders(prev => ({ ...prev, [folder]: !prev[folder] }));
  };

  const FileItem = ({ name, icon: Icon, color, indent = 4 }) => (
    <div
      onClick={() => onFileSelect(name)}
      className={`flex items-center gap-2 py-1 px-4 cursor-pointer text-sm transition-colors ${activeFile === name ? "bg-[#37373d] text-white" : "text-[#969696] hover:bg-[#2a2d2e] hover:text-[#cccccc]"
        }`}
      style={{ paddingLeft: `${indent * 12}px` }}
    >
      <Icon size={14} className={color} />
      <span>{name}</span>
    </div>
  );

  return (
    <div className="flex flex-col py-2 font-sans select-none">
      <div className="px-4 py-2 text-xs font-bold text-[#bbbbbb] tracking-wider flex items-center justify-between">
        EXPLORER
      </div>

      {/* Portfolio Folder */}
      <div className="flex items-center gap-1 px-2 py-1 text-[#cccccc] cursor-pointer" onClick={() => toggleFolder('root')}>
        <ChevronDown size={14} />
        <span className="text-xs font-bold">KANISH-PORTFOLIO</span>
      </div>

      {/* SRC Folder */}
      <div className="flex items-center gap-1 px-6 py-1 text-[#cccccc] cursor-pointer hover:bg-[#2a2d2e]" onClick={() => toggleFolder('src')}>
        {openFolders.src ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        <Folder size={14} className="text-blue-400" />
        <span className="text-sm">src</span>
      </div>

      {openFolders.src && (
        <>
          <FileItem name="page.tsx" icon={FileCode} color="text-blue-400" indent={3} />
          <FileItem name="layout.tsx" icon={FileCode} color="text-blue-400" indent={3} />
          <FileItem name="globals.css" icon={Layout} color="text-cyan-400" indent={3} />

          {/* Components Folder */}
          <div className="flex items-center gap-1 py-1 text-[#cccccc] cursor-pointer hover:bg-[#2a2d2e]"
            style={{ paddingLeft: '36px' }}
            onClick={() => toggleFolder('components')}>
            {openFolders.components ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            <Folder size={14} className="text-orange-400" />
            <span className="text-sm">components</span>
          </div>

          {openFolders.components && (
            <>
              <FileItem name="Hero.tsx" icon={FileCode} color="text-yellow-400" indent={5} />
              <FileItem name="Projects.tsx" icon={FileCode} color="text-yellow-400" indent={5} />
              <FileItem name="Contact.tsx" icon={FileCode} color="text-yellow-400" indent={5} />
            </>
          )}
        </>
      )}

      <FileItem name="package.json" icon={FileCode} color="text-red-400" indent={1} />
      <FileItem name="README.md" icon={Command} color="text-purple-400" indent={1} />
    </div>
  );
};

// --- SYNTAX HIGHLIGHTED CODE ---
const CodeEditor = () => {
  return (
    <div className="font-mono text-sm md:text-base leading-relaxed p-4 md:p-8 overflow-y-auto h-full text-[#d4d4d4]">
      {/* Line Numbers & Code */}
      <div className="flex">
        <div className="flex flex-col text-right pr-6 select-none text-[#6e7681]">
          {Array.from({ length: 25 }, (_, i) => (
            <span key={i + 1} className="h-7">{i + 1}</span>
          ))}
        </div>
        <div className="flex-1">
          <div className="h-7"><span className="text-[#c586c0]">import</span> React <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">'react'</span>;</div>
          <div className="h-7"><span className="text-[#c586c0]">import</span> {"{ Engineer }"} <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">'@universe/creators'</span>;</div>
          <div className="h-7"><span className="text-[#c586c0]">import</span> {"{ Passion, Skills }"} <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">'./attributes'</span>;</div>
          <div className="h-7">&nbsp;</div>
          <div className="h-7"><span className="text-[#569cd6]">const</span> <span className="text-[#dcdcaa]">Portfolio</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#ffd700]">()</span> <span className="text-[#569cd6]">=&gt;</span> {"{"}</div>
          <div className="h-7 pl-6"><span className="text-[#569cd6]">const</span> <span className="text-[#9cdcfe]">developer</span> <span className="text-[#d4d4d4]">=</span> {"{"}</div>
          <div className="h-7 pl-10"><span className="text-[#9cdcfe]">name</span><span className="text-[#9cdcfe]">:</span> <span className="text-[#ce9178]">'Kanish Kumar'</span>,</div>
          <div className="h-7 pl-10"><span className="text-[#9cdcfe]">role</span><span className="text-[#9cdcfe]">:</span> <span className="text-[#ce9178]">'Full-Stack Engineer'</span>,</div>
          <div className="h-7 pl-10"><span className="text-[#9cdcfe]">location</span><span className="text-[#9cdcfe]">:</span> <span className="text-[#ce9178]">'India'</span>,</div>
          <div className="h-7 pl-10"><span className="text-[#9cdcfe]">status</span><span className="text-[#9cdcfe]">:</span> <span className="text-[#ce9178]">'Open to Opportunities'</span></div>
          <div className="h-7 pl-6">{"}"};</div>
          <div className="h-7">&nbsp;</div>
          <div className="h-7 pl-6"><span className="text-[#c586c0]">return</span> (</div>
          <div className="h-7 pl-10"><span className="text-[#808080]">&lt;</span><span className="text-[#4ec9b0]">Layout</span><span className="text-[#808080]">&gt;</span></div>
          <div className="h-7 pl-14"><span className="text-[#808080]">&lt;</span><span className="text-[#4ec9b0]">Header</span></div>
          <div className="h-7 pl-20"><span className="text-[#9cdcfe]">title</span><span className="text-[#d4d4d4]">=</span>{"{"}<span className="text-[#ce9178]">`Hi, I'm $`{`{developer.name}`}</span>{"}"}</div>
          <div className="h-7 pl-20"><span className="text-[#9cdcfe]">subtitle</span><span className="text-[#d4d4d4]">=</span>{"{"}<span className="text-[#9cdcfe]">developer</span>.<span className="text-[#9cdcfe]">role</span>{"}"}</div>
          <div className="h-7 pl-14"><span className="text-[#808080]">/&gt;</span></div>
          <div className="h-7 pl-14"><span className="text-[#808080]">&lt;</span><span className="text-[#4ec9b0]">Hero</span></div>
          <div className="h-7 pl-20"><span className="text-[#9cdcfe]">description</span><span className="text-[#d4d4d4]">=</span><span className="text-[#ce9178]">"Building scalable web apps"</span></div>
          <div className="h-7 pl-20"><span className="text-[#9cdcfe]">action</span><span className="text-[#d4d4d4]">=</span>{"{"}<span className="text-[#569cd6]">()</span> <span className="text-[#569cd6]">=&gt;</span> <span className="text-[#dcdcaa]">viewProjects</span><span className="text-[#ffd700]">()</span>{"}"}</div>
          <div className="h-7 pl-14"><span className="text-[#808080]">/&gt;</span></div>
          <div className="h-7 pl-10"><span className="text-[#808080]">&lt;/</span><span className="text-[#4ec9b0]">Layout</span><span className="text-[#808080]">&gt;</span></div>
          <div className="h-7 pl-6">);</div>
          <div className="h-7">{"}"};</div>
          <div className="h-7">&nbsp;</div>
          <div className="h-7"><span className="text-[#c586c0]">export</span> <span className="text-[#c586c0]">default</span> <span className="text-[#dcdcaa]">Portfolio</span>;</div>
        </div>
      </div>
    </div>
  );
};

// --- TERMINAL COMPONENT ---
const TerminalPanel = () => {
  const [lines, setLines] = useState([
    { text: "npm install dependencies...", type: "info" },
    { text: "loaded 50+ projects", type: "success" },
    { text: "found 1 developer: Kanish Kumar (Available)", type: "warning" },
    { text: "starting dev server on localhost:3000...", type: "info" },
  ]);

  return (
    <div className="h-48 bg-[#1e1e1e] border-t border-[#37373d] flex flex-col font-mono text-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-[#1e1e1e] border-b border-[#37373d]">
        <div className="flex gap-4">
          <span className="text-white border-b border-orange-400 px-1 cursor-pointer">TERMINAL</span>
          <span className="text-[#969696] hover:text-[#cccccc] px-1 cursor-pointer">OUTPUT</span>
          <span className="text-[#969696] hover:text-[#cccccc] px-1 cursor-pointer">DEBUG CONSOLE</span>
          <span className="text-[#969696] hover:text-[#cccccc] px-1 cursor-pointer">PROBLEMS</span>
        </div>
        <div className="flex gap-2 text-[#969696]">
          <X size={14} className="cursor-pointer hover:text-white" />
          <ChevronDown size={14} className="cursor-pointer hover:text-white" />
        </div>
      </div>
      <div className="p-4 overflow-y-auto flex-1 font-mono text-xs md:text-sm">
        {lines.map((line, i) => (
          <div key={i} className="mb-1">
            <span className="text-[#969696] mr-2">➜</span>
            <span className={
              line.type === "success" ? "text-green-400" :
                line.type === "warning" ? "text-yellow-400" :
                  line.type === "error" ? "text-red-400" :
                    "text-[#cccccc]"
            }>
              {line.text}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-blue-400">~/visitor/portfolio</span>
          <span className="text-green-400">git:(main)</span>
          <span className="text-[#cccccc]">$</span>
          <span className="animate-pulse w-2 h-4 bg-[#cccccc]"></span>
        </div>
      </div>
    </div>
  );
};

// --- MAIN IDE HERO ---
export default function Hero() {
  const [activeFile, setActiveFile] = useState("page.tsx");
  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <section className="h-screen w-full bg-[#1e1e1e] flex text-[#cccccc] overflow-hidden pt-14 md:pt-0">

      {/* Activity Bar (Leftmost) */}
      <div className="w-12 bg-[#333333] flex flex-col items-center py-4 gap-6 border-r border-[#1e1e1e] z-20">
        <FileCode size={24} className={`cursor-pointer transition-colors ${sidebarVisible ? "text-white" : "text-[#858585] hover:text-white"}`} onClick={() => setSidebarVisible(!sidebarVisible)} />
        <Search size={24} className="text-[#858585] cursor-pointer hover:text-white transition-colors" />
        <GitBranch size={24} className="text-[#858585] cursor-pointer hover:text-white transition-colors" />
        <div className="flex-1" />
        <Settings size={24} className="text-[#858585] cursor-pointer hover:text-white transition-colors" />
      </div>

      {/* Sidebar (File Tree) */}
      <AnimatePresence>
        {sidebarVisible && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 250, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="bg-[#252526] h-full flex flex-col border-r border-[#1e1e1e] hidden md:flex"
          >
            <FileTree activeFile={activeFile} onFileSelect={setActiveFile} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Editor Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#1e1e1e]">

        {/* Tab Bar */}
        <div className="h-9 bg-[#252526] flex items-center overflow-x-auto">
          <div className={`
            flex items-center gap-2 px-3 h-full min-w-[120px] bg-[#1e1e1e] border-t-2 border-blue-400 text-white text-sm cursor-pointer select-none
          `}>
            <span className="text-blue-400 text-xs">TSX</span>
            <span>{activeFile}</span>
            <X size={14} className="ml-auto hover:bg-[#333333] rounded p-0.5" />
          </div>
          <div className="px-3 text-[#969696] hover:bg-[#2d2d2d] h-full flex items-center cursor-pointer text-sm gap-2">
            <span className="text-yellow-400 text-xs">TS</span>
            <span>globals.css</span>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="h-6 bg-[#1e1e1e] flex items-center px-4 text-xs text-[#969696] gap-1">
          <span>src</span>
          <ChevronRight size={12} />
          <span>pages</span>
          <ChevronRight size={12} />
          <span className="text-white">{activeFile}</span>
        </div>

        {/* Editor Content */}
        <div className="flex-1 relative overflow-hidden flex flex-col lg:flex-row">
          {/* Code View */}
          <div className="flex-1 flex flex-col h-full border-r border-[#37373d]">
            <CodeEditor />
            <TerminalPanel />
          </div>

          {/* Preview Panel - Visible on Large Screens */}
          <div className="w-[40%] hidden lg:flex flex-col bg-black">
            <div className="h-8 bg-[#333333] flex items-center justify-between px-3">
              <span className="text-xs text-[#cccccc] font-sans">Browser Preview: localhost:3000</span>
              <div className="flex gap-2">
                <Globe size={12} className="text-[#cccccc]" />
              </div>
            </div>
            <div className="flex-1 relative bg-black flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full mx-auto mb-6 blur-2xl opacity-50" />
                <h2 className="text-3xl font-bold text-white mb-2">Kanish Kumar</h2>
                <p className="text-blue-400 font-mono text-sm mb-6">&lt;FullStackDeveloper /&gt;</p>
                <button className="px-6 py-2 bg-white text-black text-sm font-bold rounded hover:bg-gray-200 transition-colors">
                  View Work
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Status Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#007acc] text-white flex items-center px-4 text-xs select-none z-30 justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 hover:bg-white/20 px-1 rounded cursor-pointer">
            <GitBranch size={12} />
            <span>main*</span>
          </div>
          <div className="flex items-center gap-1 hover:bg-white/20 px-1 rounded cursor-pointer">
            <Activity size={12} />
            <span>0 errors, 0 warnings</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="hover:bg-white/20 px-1 rounded cursor-pointer">Ln 12, Col 34</span>
          <span className="hover:bg-white/20 px-1 rounded cursor-pointer">UTF-8</span>
          <span className="hover:bg-white/20 px-1 rounded cursor-pointer">TypeScript React</span>
          <span className="hover:bg-white/20 px-1 rounded cursor-pointer hidden md:inline">Prettier</span>
        </div>
      </div>

    </section>
  );
}
