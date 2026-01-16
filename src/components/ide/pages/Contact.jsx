"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Terminal, AlertCircle, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Project Inquiry",
    message: ""
  });
  const [logs, setLogs] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-scroll terminal
  const terminalRef = useRef(null);
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addLog = (msg, type = 'info') => {
    setLogs(prev => [...prev, { msg, type, time: new Date().toLocaleTimeString() }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setLogs([]); // Clear previous logs

    // Simulate Network Request
    addLog("Initializing request...", "info");
    await new Promise(r => setTimeout(r, 600));

    addLog(`POST /api/contact`, "command");
    addLog(`Payload: { name: "${formData.name}", email: "${formData.email}" ... }`, "info");

    await new Promise(r => setTimeout(r, 800));
    addLog("Encrypting message...", "warning");

    await new Promise(r => setTimeout(r, 800));
    addLog("Handshake successful. Status: 200 OK", "success");
    addLog("Message sent successfully.", "success");

    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "Project Inquiry", message: "" });
  };

  // Line Number Helpers
  const LineNumber = ({ num }) => (
    <div className="text-[#858585] text-right pr-4 select-none font-mono text-sm leading-6 opacity-50 w-8 shrink-0">
      {num}
    </div>
  );

  return (
    <div className="min-h-full w-full bg-[#1e1e1e] flex flex-col items-center justify-center p-4 md:p-8 relative">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 z-10">

        {/* Editor Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-[#1e1e1e] border border-[#333] rounded-xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Tab Header */}
          <div className="flex items-center bg-[#252526] border-b border-[#333] px-4 py-2">
            <div className="flex gap-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            <span className="text-[#ccc] text-xs font-sans">contact.css</span>
          </div>

          {/* Editor Content */}
          <div className="flex-1 flex p-4 bg-[#1e1e1e]">
            {/* Gutter (Static Line Numbers logic simplified for visuals) */}
            <div className="flex flex-col gap-[2px] pt-1">
              {Array.from({ length: 16 }).map((_, i) => <LineNumber key={i} num={i + 1} />)}
            </div>

            {/* Code Area */}
            <div className="flex-1 font-mono text-sm leading-6">
              <div className="text-[#6a9955]">/* Send me a message */</div>

              <div className="mt-2">
                <span className="text-[#d7ba7d]">.contact-form</span> <span className="text-[#ffd700]">{`{`}</span>
              </div>

              <form onSubmit={handleSubmit} className="pl-4 border-l border-[#333] ml-1 space-y-2 mt-1">

                {/* Name */}
                <div className="flex items-center group">
                  <span className="text-[#9cdcfe] w-24 shrink-0">name:</span>
                  <span className="text-[#ce9178] mr-1">"</span>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="bg-transparent outline-none text-[#ce9178] w-full placeholder:text-[#ce9178]/30"
                    required
                  />
                  <span className="text-[#ce9178]">";</span>
                </div>

                {/* Email */}
                <div className="flex items-center group">
                  <span className="text-[#9cdcfe] w-24 shrink-0">email:</span>
                  <span className="text-[#ce9178] mr-1">"</span>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="bg-transparent outline-none text-[#ce9178] w-full placeholder:text-[#ce9178]/30"
                    required
                  />
                  <span className="text-[#ce9178]">";</span>
                </div>

                {/* Subject */}
                <div className="flex items-center group">
                  <span className="text-[#9cdcfe] w-24 shrink-0">subject:</span>
                  <span className="text-[#ce9178] mr-1">"</span>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-[#1e1e1e] outline-none text-[#ce9178] w-full cursor-pointer appearance-none"
                  >
                    <option>Project Inquiry</option>
                    <option>Job Opportunity</option>
                    <option>Collaboration</option>
                    <option>Just Saying Hi</option>
                  </select>
                  <span className="text-[#ce9178]">";</span>
                </div>

                {/* Message */}
                <div className="flex flex-col group mt-2">
                  <div className="flex items-start">
                    <span className="text-[#9cdcfe] w-24 shrink-0">message:</span>
                    <span className="text-[#ce9178]">"</span>
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="bg-transparent outline-none text-[#ce9178] w-full h-32 ml-24 -mt-6 resize-none placeholder:text-[#ce9178]/30 leading-6"
                    required
                  />
                  <div className="ml-24 -mt-1"><span className="text-[#ce9178]">";</span></div>
                </div>

                {/* Submit Trigger - styled as a function call */}
                <div className="mt-4 opacity-80 hover:opacity-100 transition-opacity">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="flex items-center gap-2 text-[#dcdcaa] hover:text-white transition-colors disabled:cursor-not-allowed"
                  >
                    <span className="text-[#c586c0]">sendMessage</span>
                    <span className="text-[#ffd700]">(</span>
                    <span className="text-[#9cdcfe]">this</span>
                    <span className="text-[#ffd700]">);</span>
                    {isSubmitting && <span className="animate-pulse text-[#6a9955]">// sending...</span>}
                  </button>
                </div>

              </form>

              <div className="mt-1">
                <span className="text-[#ffd700]">{`}`}</span>
              </div>

            </div>
          </div>
        </motion.div>


        {/* Visual / Terminal Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          {/* Info Card */}
          <div className="bg-[#1e1e1e] border border-[#333] rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Send size={120} />
            </div>
            <h2 className="text-2xl font-bold text-[#e1e1e1] mb-2 font-mono">Let's Connect</h2>
            <p className="text-gray-400 mb-6 font-mono text-sm leading-relaxed">
              I'm currently accepting new projects and opportunities.
              Fill out the "code" on the left to initialize a secure transmission.
            </p>
            <div className="flex gap-4 text-sm font-bold font-mono">
              <div className="text-[#4fc1ff]">Available_For_Hire: <span className="text-[#ce9178]">true</span></div>
              <div className="text-[#4fc1ff]">Response_Time: <span className="text-[#ce9178]">"&lt; 24h"</span></div>
            </div>
          </div>

          {/* Terminal Output */}
          <div className="flex-1 bg-[#1e1e1e] border border-[#333] rounded-xl overflow-hidden flex flex-col">
            <div className="bg-[#252526] border-b border-[#333] px-4 py-2 flex items-center justify-between">
              <span className="text-xs font-sans text-gray-400 flex items-center gap-2">
                <Terminal size={12} /> OUTPUT
              </span>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-gray-600" />
                <div className="w-2 h-2 rounded-full bg-gray-600" />
              </div>
            </div>

            <div ref={terminalRef} className="flex-1 p-4 font-mono text-xs overflow-y-auto custom-scrollbar space-y-2 font-bold">
              <div className="text-gray-500">Microsoft Windows [Version 10.0.19045.4291]</div>
              <div className="text-gray-500">(c) Microsoft Corporation. All rights reserved.</div>
              <div className="mb-4" />

              <div className="text-[#e1e1e1]">{"C:\\Users\\Visitor\\>"} <span className="animate-pulse">_</span></div>

              <AnimatePresence>
                {logs.map((log, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex items-start gap-2 ${log.type === 'error' ? 'text-red-400' :
                      log.type === 'success' ? 'text-green-400' :
                        log.type === 'warning' ? 'text-yellow-400' :
                          log.type === 'command' ? 'text-blue-400' : 'text-gray-300'
                      }`}
                  >
                    <span className="text-gray-600 shrink-0">[{log.time}]</span>
                    {log.type === 'success' && <CheckCircle2 size={14} className="mt-0.5" />}
                    {log.type === 'error' && <AlertCircle size={14} className="mt-0.5" />}
                    <span>{log.msg}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
