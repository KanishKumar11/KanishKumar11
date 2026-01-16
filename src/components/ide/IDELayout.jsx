"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  FileCode, Search, GitBranch, Settings,
  Menu, X, ChevronRight, ChevronDown,
  Box, Mail, User
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import Page Components
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

// --- CONTEXT ---
const IDEContext = createContext({});
export const useIDE = () => useContext(IDEContext);

// --- ACTIVITY BAR (Desktop Only) ---
const ActivityBar = () => {
  const { activeTab, setActiveTab, sidebarVisible, setSidebarVisible } = useIDE();

  const Icon = ({ name, icon: IconComponent }) => (
    <div
      onClick={() => {
        if (activeTab === name && sidebarVisible) setSidebarVisible(false);
        else { setActiveTab(name); setSidebarVisible(true); }
      }}
      className={`p-3 cursor-pointer transition-colors relative ${activeTab === name && sidebarVisible ? "text-white" : "text-[#858585] hover:text-white"}`}
    >
      <IconComponent size={24} strokeWidth={1.5} />
      {activeTab === name && sidebarVisible && <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-blue-500" />}
    </div>
  );

  return (
    // Desktop: flex, Mobile (md): hidden
    <div className="w-12 bg-[#333333] flex flex-col items-center py-2 h-full z-20 shrink-0 md:hidden">
      <Icon name="explorer" icon={FileCode} />
      <Icon name="search" icon={Search} />
      <Icon name="git" icon={GitBranch} />
      <div className="flex-1" />
      <Icon name="settings" icon={Settings} />
    </div>
  );
};

// --- MOBILE HEADER (Mobile Only) ---
const MobileHeader = () => {
  const { sidebarVisible, setSidebarVisible } = useIDE();
  return (
    // Desktop: hidden, Mobile (md): flex
    <div className="h-12 bg-[#1e1e1e] border-b border-[#333] items-center px-4 justify-between shrink-0 z-50 relative hidden md:flex">
      <span className="font-bold text-white tracking-widest text-sm">KANISH.DEV</span>
      <button onClick={() => setSidebarVisible(!sidebarVisible)} className="text-white p-2">
        {sidebarVisible ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>
  );
};

// --- EXPLORER SIDEBAR ---
const Explorer = ({ files, onSelect }) => {
  const [open, setOpen] = useState(true);
  const { activeFile } = useIDE();

  return (
    <div className="w-60 bg-[#252526] h-full flex flex-col border-r border-[#1e1e1e] select-none overflow-y-auto">
      <div className="px-4 py-3 text-[11px] font-bold text-[#bbbbbb] tracking-wider">EXPLORER</div>

      <div onClick={() => setOpen(!open)} className="flex items-center gap-1 px-1 py-1 text-[#cccccc] font-bold text-xs cursor-pointer hover:bg-[#2a2d2e]">
        {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        <span>PORTFOLIO</span>
      </div>

      {open && (
        <div className="flex flex-col">
          {files.map(file => (
            <div
              key={file.id}
              onClick={() => onSelect(file.id)}
              className={`flex items-center gap-2 py-1 px-4 pl-6 cursor-pointer text-sm transition-colors border-l-2 ${activeFile === file.id
                  ? "bg-[#37373d] text-white border-blue-400"
                  : "text-[#969696] border-transparent hover:bg-[#2a2d2e] hover:text-[#cccccc]"
                }`}
            >
              <file.icon size={14} className={file.color} />
              <span>{file.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// --- TAB BAR ---
const TabBar = ({ files }) => {
  const { activeFile, setActiveFile } = useIDE();

  return (
    <div className="h-9 bg-[#252526] flex items-center overflow-x-auto shrink-0">
      {files.map(file => (
        <div
          key={file.id}
          onClick={() => setActiveFile(file.id)}
          className={`flex items-center gap-2 px-3 h-full min-w-[100px] border-r border-[#1e1e1e] text-sm cursor-pointer select-none ${activeFile === file.id
              ? "bg-[#1e1e1e] text-white border-t-2 border-t-blue-400"
              : "bg-[#2d2d2d] text-[#969696] hover:bg-[#1e1e1e]"
            }`}
        >
          <file.icon size={14} className={file.color} />
          <span className="truncate">{file.name}</span>
        </div>
      ))}
    </div>
  );
};

// --- STATUS BAR ---
const StatusBar = () => (
  <div className="h-6 bg-[#007acc] text-white flex items-center px-3 text-[11px] select-none justify-between shrink-0 z-30">
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1"><GitBranch size={10} /><span>main*</span></div>
      <span className="md:hidden">0 errors</span>
    </div>
    <div className="flex items-center gap-3">
      <span className="md:hidden">TypeScript React</span>
      <span className="hidden md:inline">TSX</span>
    </div>
  </div>
);

// --- MAIN LAYOUT ---
export default function IDELayout() {
  const [activeFile, setActiveFile] = useState("home");
  const [activeTab, setActiveTab] = useState("explorer");
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const files = [
    { id: "home", name: "home.tsx", icon: FileCode, color: "text-blue-400", component: Home },
    { id: "projects", name: "projects.tsx", icon: Box, color: "text-yellow-400", component: Projects },
    { id: "about", name: "about.md", icon: User, color: "text-purple-400", component: About },
    { id: "contact", name: "contact.css", icon: Mail, color: "text-cyan-400", component: Contact },
  ];

  const ActiveComponent = files.find(f => f.id === activeFile)?.component;

  // Loading effect on file change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500 + Math.random() * 300);
    return () => clearTimeout(timer);
  }, [activeFile]);

  // Hide sidebar on mobile initially
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 767) {
      setSidebarVisible(false);
    }
  }, []);

  return (
    <IDEContext.Provider value={{ activeFile, setActiveFile, sidebarVisible, setSidebarVisible, activeTab, setActiveTab }}>
      <div className="fixed inset-0 bg-[#1e1e1e] flex flex-col text-[#cccccc] font-sans overflow-hidden">

        {/* Mobile Header - hidden on desktop, flex on mobile */}
        <MobileHeader />

        <div className="flex-1 flex overflow-hidden min-h-0">
          {/* Activity Bar - flex on desktop, hidden on mobile */}
          <ActivityBar />

          {/* Desktop Sidebar - flex on desktop, hidden on mobile */}
          <AnimatePresence mode="popLayout">
            {sidebarVisible && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 240, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-[#252526] z-10 md:hidden shrink-0 overflow-hidden"
              >
                <Explorer files={files} onSelect={setActiveFile} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Sidebar Overlay - hidden on desktop, block on mobile */}
          <AnimatePresence>
            {sidebarVisible && (
              <div className="absolute inset-0 z-40 hidden md:flex" style={{ top: '48px', bottom: '24px' }}>
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="w-64 bg-[#252526] h-full shadow-2xl z-50 border-r border-[#333]"
                >
                  <Explorer files={files} onSelect={(id) => { setActiveFile(id); setSidebarVisible(false); }} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 bg-black/60 backdrop-blur-sm"
                  onClick={() => setSidebarVisible(false)}
                />
              </div>
            )}
          </AnimatePresence>

          {/* Main Editor Area */}
          <div className="flex-1 flex flex-col min-w-0 min-h-0 bg-[#1e1e1e] relative z-0">
            <TabBar files={files} />

            {/* Loading Bar */}
            {loading && (
              <div className="h-[2px] w-full bg-[#1e1e1e] overflow-hidden relative shrink-0">
                <motion.div
                  className="absolute h-full bg-blue-500 w-[30%]"
                  initial={{ x: "-100%" }}
                  animate={{ x: "400%" }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                />
              </div>
            )}

            {/* Breadcrumbs */}
            <div className="h-6 bg-[#1e1e1e] flex items-center px-4 text-xs text-[#969696] gap-1 shrink-0">
              <span>src</span><ChevronRight size={12} /><span>pages</span><ChevronRight size={12} />
              <span className="text-white">{files.find(f => f.id === activeFile)?.name}</span>
            </div>

            {/* Content Area */}
            <div className="flex-1 relative overflow-hidden min-h-0">
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div
                    key="loader"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full w-full flex flex-col items-center justify-center text-[#858585] gap-3"
                  >
                    <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                    <span className="text-xs font-mono">loading module...</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key={activeFile}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="h-full w-full overflow-y-auto"
                  >
                    {ActiveComponent && <ActiveComponent onNavigate={setActiveFile} />}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <StatusBar />
      </div>
    </IDEContext.Provider>
  );
}
