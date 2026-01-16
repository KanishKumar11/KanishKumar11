"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GitCommit, GitBranch, GitPullRequest, Calendar, Building } from "lucide-react";

const experiences = [
  {
    role: "Founder & Lead Developer",
    company: "Zlaark",
    date: "2024 - Present",
    type: "commit",
    message: "feat: launched production-ready agency",
    description: " founded a digital agency specializing in high-performance web solutions. Led a team of 3 developers to deliver 15+ client projects including extensive e-commerce platforms and AI-integrated SaaS products."
  },
  {
    role: "Senior Full Stack Engineer",
    company: "Freelance",
    date: "2022 - 2024",
    type: "merge",
    message: "merge: extensive client portfolio",
    description: "Delivered complex custom web applications for international clients. Specialized in Next.js, React Native, and cloud architecture (AWS/Vercel). Achieved 100% client satisfaction rate."
  },
  {
    role: "Frontend Developer",
    company: "Tech Corp (Mock)",
    date: "2021 - 2022",
    type: "commit",
    message: "style: refined ui/ux patterns",
    description: "Focused on creating pixel-perfect user interfaces and optimizing frontend performance. Reduced load times by 40% through code splitting and asset optimization."
  }
];

const ExperienceTimeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-32 px-4 md:px-20 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <GitBranch className="text-blue-500" size={32} />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Commit History</h2>
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} index={index} />
          ))}

          {/* Initial Commit decoration */}
          <div className="absolute -bottom-8 -left-[9px] w-5 h-5 rounded-full bg-neutral-800 border-2 border-neutral-600"></div>
        </div>
      </div>
    </section>
  );
};

const ExperienceItem = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative pl-12 group"
    >
      {/* Timeline Node */}
      <div className={`absolute -left-[9px] top-1 w-5 h-5 rounded-full border-4 border-black transition-colors duration-300 z-10 
                ${experience.type === 'merge' ? 'bg-purple-500 box-content' : 'bg-blue-500'}
                group-hover:scale-125
            `}></div>

      <div className="bg-neutral-900/50 hover:bg-neutral-900 border border-white/5 hover:border-white/10 p-6 rounded-2xl transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="font-mono text-sm text-neutral-500 flex items-center gap-2">
            <span className="text-blue-400">{experience.message}</span>
            <span className="text-neutral-700">7h ago</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-400 text-sm bg-white/5 px-3 py-1 rounded-full w-fit">
            <Calendar size={14} />
            <span>{experience.date}</span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
          {experience.role}
          {experience.type === 'merge' && <GitPullRequest size={20} className="text-purple-500" />}
        </h3>

        <div className="flex items-center gap-2 text-neutral-400 mb-4">
          <Building size={16} />
          <span>{experience.company}</span>
        </div>

        <p className="text-neutral-300 leading-relaxed">
          {experience.description}
        </p>
      </div>
    </motion.div>
  );
}

export default ExperienceTimeline;
