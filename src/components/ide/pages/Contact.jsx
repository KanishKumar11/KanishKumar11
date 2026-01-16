"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Project Inquiry",
    message: ""
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="h-full w-full bg-[#1e1e1e] p-6 overflow-y-auto">
      <div className="max-w-2xl mx-auto">

        {/* Comment Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-sm mb-8 text-[#6a9955] leading-relaxed"
        >
          <div>/*</div>
          <div>&nbsp;* Want to work together?</div>
          <div>&nbsp;* Fill out this CSS-styled form</div>
          <div>&nbsp;* and I'll get back to you ASAP.</div>
          <div>&nbsp;*/</div>
        </motion.div>

        {/* CSS Class Declaration */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="font-mono text-sm mb-4"
        >
          <span className="text-[#d7ba7d]">.contact-form</span> <span className="text-[#ffd700]">{"{"}</span>
        </motion.div>

        {/* Form as CSS Properties */}
        <form onSubmit={handleSubmit} className="space-y-4 pl-8 border-l-2 border-[#333] ml-4">

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-col gap-1 md:flex-col sm:items-start group"
          >
            <label className="text-blue-400 font-mono text-sm shrink-0">name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='"Your Name"'
              required
              className="flex-1 bg-transparent text-[#ce9178] border-b border-[#333] focus:border-blue-500 outline-none font-mono text-sm py-2 placeholder-[#555] transition-colors"
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-1"
          >
            <label className="text-blue-400 font-mono text-sm">email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='"you@example.com"'
              required
              className="flex-1 bg-transparent text-[#ce9178] border-b border-[#333] focus:border-blue-500 outline-none font-mono text-sm py-2 placeholder-[#555] transition-colors"
            />
          </motion.div>

          {/* Subject */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-col gap-1"
          >
            <label className="text-blue-400 font-mono text-sm">subject:</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="flex-1 bg-[#1e1e1e] text-[#ce9178] border-b border-[#333] focus:border-blue-500 outline-none font-mono text-sm py-2 cursor-pointer"
            >
              <option value="Project Inquiry">"Project Inquiry"</option>
              <option value="Job Opportunity">"Job Opportunity"</option>
              <option value="Collaboration">"Collaboration"</option>
              <option value="Just Saying Hi">"Just Saying Hi"</option>
            </select>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-1"
          >
            <label className="text-blue-400 font-mono text-sm">message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder='"Hello Kanish, I wanted to reach out about..."'
              rows={5}
              required
              className="w-full bg-transparent text-[#ce9178] border border-[#333] focus:border-blue-500 outline-none font-mono text-sm p-3 placeholder-[#555] resize-none rounded transition-colors"
            />
          </motion.div>
        </form>

        {/* Closing Brace */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
          className="font-mono text-sm mt-4 mb-8"
        >
          <span className="text-[#ffd700]">{"}"}</span>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="pl-8"
        >
          <button
            onClick={handleSubmit}
            disabled={status !== "idle"}
            className={`font-mono text-sm px-8 py-3 rounded-lg transition-all flex items-center gap-3 ${status === "success"
                ? "bg-green-600/20 text-green-400 border border-green-600/50"
                : "bg-blue-600 hover:bg-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/30"
              } disabled:opacity-70 disabled:cursor-not-allowed`}
          >
            {status === "submitting" ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>sending()...</span>
              </>
            ) : status === "success" ? (
              <>
                <Check size={16} />
                <span>message.sent!</span>
              </>
            ) : (
              <>
                <Send size={16} />
                <span>sendMessage()</span>
              </>
            )}
          </button>
        </motion.div>

      </div>
    </div>
  );
}
