"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Github, Linkedin, Twitter, Terminal, Cpu, Activity, Zap } from "lucide-react";

// Typing Animation Hook
const useTypingEffect = (text, speed = 80, delay = 500) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayText("");
    setIsComplete(false);

    const startTimeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);

  return { displayText, isComplete };
};

// Code Line Component
const CodeLine = ({ num, children, indent = 0, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: delay * 0.05, duration: 0.3 }}
    className="flex leading-relaxed font-mono text-sm hover:bg-[#2a2d2e] transition-colors"
  >
    <span className="w-10 text-right pr-4 text-[#858585] select-none text-xs leading-6 pt-0.5 shrink-0">{num}</span>
    <div className="flex-1" style={{ paddingLeft: `${indent * 16}px` }}>{children}</div>
  </motion.div>
);

const Keyword = ({ c }) => <span className="text-[#c586c0]">{c}</span>;
const Variable = ({ c }) => <span className="text-[#9cdcfe]">{c}</span>;
const String = ({ c }) => <span className="text-[#ce9178]">{c}</span>;
const Func = ({ c }) => <span className="text-[#dcdcaa]">{c}</span>;
const Plain = ({ c }) => <span className="text-[#d4d4d4]">{c}</span>;
const Comment = ({ c }) => <span className="text-[#6a9955]">{c}</span>;
const Type = ({ c }) => <span className="text-[#4ec9b0]">{c}</span>;

// Terminal Components
const TerminalLine = ({ text }) => (
  <div className="text-[10px] md:text-xs font-mono text-[#cccccc] flex gap-2">
    <span className="text-blue-400">➜</span>
    <span>{text}</span>
  </div>
);

export default function Home({ onNavigate }) {
  const { displayText, isComplete } = useTypingEffect("Kanish Kumar", 100, 800);
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setUptime(u => u + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatUptime = (s) => {
    const hrs = Math.floor(s / 3600).toString().padStart(2, '0');
    const mins = Math.floor((s % 3600) / 60).toString().padStart(2, '0');
    const secs = (s % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    // Desktop: flex-row, Mobile (md): flex-col
    <div className="h-full w-full flex flex-row md:flex-col bg-[#1e1e1e]">

      {/* CODE EDITOR VIEW */}
      <div className="flex-1 overflow-y-auto p-4 min-h-[400px]">
        <CodeLine num={1} delay={1}><Keyword c="import" /> <Plain c="React" /> <Keyword c="from" /> <String c="'react'" /><Plain c=";" /></CodeLine>
        <CodeLine num={2} delay={2}><Keyword c="import" /> <Plain c="{ " /><Type c="RuntimeEnvironment" /><Plain c=" }" /> <Keyword c="from" /> <String c="'@kanish/core'" /><Plain c=";" /></CodeLine>
        <CodeLine num={3} delay={3}><Plain c="" /></CodeLine>
        <CodeLine num={4} delay={4}><Keyword c="export default function" /> <Func c="System" /><Plain c="() {" /></CodeLine>
        <CodeLine num={5} delay={5} indent={1}><Keyword c="const" /> <Variable c="profile" /> <Plain c="= {" /></CodeLine>
        <CodeLine num={6} delay={6} indent={2}><Variable c="user" /><Plain c=": " /><String c="'Kanish Kumar'" /><Plain c="," /></CodeLine>
        <CodeLine num={7} delay={7} indent={2}><Variable c="process" /><Plain c=": " /><String c="'Full-Stack Engineer.exe'" /><Plain c="," /></CodeLine>
        <CodeLine num={8} delay={8} indent={2}><Variable c="loc" /><Plain c=": " /><String c="'India (IN)'" /><Plain c="," /></CodeLine>
        <CodeLine num={9} delay={9} indent={2}><Variable c="status" /><Plain c=": " /><String c="'RUNTIME ACTIVE'" /></CodeLine>
        <CodeLine num={10} delay={10} indent={1}><Plain c="};" /></CodeLine>
        <CodeLine num={11} delay={11}><Plain c="" /></CodeLine>
        <CodeLine num={12} delay={12} indent={1}><Keyword c="return" /> <Plain c="(" /></CodeLine>
        <CodeLine num={13} delay={13} indent={2}><Plain c="<" /><Type c="RuntimeEnvironment" /><Plain c=">" /></CodeLine>
        <CodeLine num={14} delay={14} indent={3}><Plain c="<" /><Type c="SystemMonitor" /> <Variable c="cpu" /><Plain c="='12%'" /> <Variable c="mem" /><Plain c="='64MB'" /><Plain c=" />" /></CodeLine>
        <CodeLine num={15} delay={15} indent={3}><Plain c="<" /><Type c="HolographicCard" /><Plain c=">" /></CodeLine>
        <CodeLine num={16} delay={16} indent={4}><Plain c="<" /><Type c="Avatar" /><Plain c=" src=" /><String c="'/me.png'" /><Plain c=" />" /></CodeLine>
        <CodeLine num={17} delay={17} indent={4}><Plain c="<" /><Type c="Info" /><Plain c=" data={profile} />" /></CodeLine>
        <CodeLine num={18} delay={18} indent={4}><Plain c="<" /><Type c="ExecuteButton" /> <Variable c="onClick" /><Plain c="{() => " /><Func c="init" /><Plain c="('projects')} />" /></CodeLine>
        <CodeLine num={19} delay={19} indent={3}><Plain c="</" /><Type c="HolographicCard" /><Plain c=">" /></CodeLine>
        <CodeLine num={20} delay={20} indent={3}><Plain c="<" /><Type c="ConsoleOutput" /> <Variable c="logs" /><Plain c="={logs} />" /></CodeLine>
        <CodeLine num={21} delay={21} indent={2}><Plain c="</" /><Type c="RuntimeEnvironment" /><Plain c=">" /></CodeLine>
        <CodeLine num={22} delay={22} indent={1}><Plain c=");" /></CodeLine>
        <CodeLine num={23} delay={23}><Plain c="}" /></CodeLine>
      </div>

      {/* LIVE PREVIEW / RUNTIME ENVIRONMENT */}
      <div className="flex-1 bg-[#0d0d0d] border-l border-[#333] flex-col lg:hidden flex relative overflow-hidden font-mono">

        {/* Background - NO GRID, just simple gradient as requested */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-[#111]" />

        {/* Runtime Header */}
        <div className="h-10 bg-[#161616] flex items-center px-4 justify-between border-b border-[#333] shrink-0 z-10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-green-500 font-bold">RUNTIME ACTIVE</span>
          </div>
          <div className="flex gap-4 text-[10px] text-[#666]">
            <div className="flex items-center gap-1"><Cpu size={10} /> <span>CPU: 12%</span></div>
            <div className="flex items-center gap-1"><Activity size={10} /> <span>MEM: 64MB</span></div>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 relative z-10">

          {/* Holographic Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-sm bg-[#1e1e1e]/80 backdrop-blur-md border border-[#333] p-6 rounded-xl relative group shadow-2xl"
          >
            {/* Corner Accents */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-blue-500" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-blue-500" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-blue-500" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-blue-500" />

            <div className="flex items-center gap-6 mb-6">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-blue-500 rounded-full blur opacity-20 animate-pulse" />
                <img
                  src="/KanishKumar.png"
                  alt="Kanish"
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#444] relative z-10"
                />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-[#1e1e1e] rounded-full z-20" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">{displayText}</h2>
                <p className="text-blue-400 text-xs mt-1">Full-Stack Engineer.exe</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-[#111] p-2 rounded border border-[#333]">
                <div className="text-[10px] text-[#666] mb-1">LOCATION</div>
                <div className="text-xs text-[#ccc]">India (IN)</div>
              </div>
              <div className="bg-[#111] p-2 rounded border border-[#333]">
                <div className="text-[10px] text-[#666] mb-1">UPTIME</div>
                <div className="text-xs text-green-400 font-mono">{formatUptime(uptime)}</div>
              </div>
            </div>

            <motion.button
              onClick={() => onNavigate && onNavigate('projects')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded text-sm font-bold flex items-center justify-center gap-2 transition-colors relative overflow-hidden"
            >
              <Zap size={14} className="fill-current" />
              <span>INITIALIZE PROJECTS</span>
            </motion.button>
          </motion.div>

        </div>

        {/* Console / Terminal Output */}
        <div className="h-32 bg-[#111] border-t border-[#333] p-3 font-mono overflow-hidden shrink-0">
          <div className="flex items-center gap-2 text-[#666] text-[10px] mb-2 border-b border-[#222] pb-1">
            <Terminal size={10} />
            <span>CONSOLE OUTPUT</span>
          </div>
          <div className="flex flex-col gap-1">
            <TerminalLine text="System initialized." />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <TerminalLine text="Loading user profile data..." />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
              <TerminalLine text="Assets loaded: 43ms" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}>
              <TerminalLine text="Waiting for user input..." />
            </motion.div>
            {isComplete && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="animate-pulse">
                <div className="text-[10px] text-blue-400 flex gap-2">
                  <span>➜</span>
                  <span className="w-2 h-4 bg-blue-400 block" />
                </div>
              </motion.div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
