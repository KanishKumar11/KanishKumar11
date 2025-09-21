"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const FramerImage = motion(Image);

const CategoryProjectCard = ({ project }) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="relative group"
    >
      {/* Background Layers for Depth */}
      <div className="absolute top-0 -right-2 -z-10 w-[102%] h-[102%] rounded-2xl bg-dark/10 dark:bg-light/10 group-hover:bg-dark/20 dark:group-hover:bg-light/20 transition-colors duration-300" />
      <div className="absolute top-2 -right-1 -z-20 w-[101%] h-[101%] rounded-2xl bg-orange-500/20 group-hover:bg-orange-500/30 transition-colors duration-300" />
      
      <div className="relative bg-light dark:bg-dark border border-solid border-dark/20 dark:border-light/20 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden">
          <FramerImage
            src={project.img}
            alt={`${project.title} - Project showcase`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Live App Badge */}
          {project.isLiveApp && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-4 right-4"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500 text-white shadow-lg">
                ✨ Live App
              </span>
            </motion.div>
          )}
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Quick Action Buttons */}
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <ArrowTopRightOnSquareIcon className="w-4 h-4 text-dark" />
              </Link>
            )}
          </div>
        </div>
        
        {/* Project Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-dark dark:text-light group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
              {project.title}
            </h3>
            {project.type && (
              <span className="text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded-full">
                {project.type}
              </span>
            )}
          </div>
          
          <p className="text-dark/70 dark:text-light/70 text-sm mb-4 line-clamp-3 leading-relaxed">
            {project.summary}
          </p>
          
          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-xs px-2 py-1 bg-dark/5 dark:bg-light/5 text-dark/60 dark:text-light/60 rounded-md border border-dark/10 dark:border-light/10"
                >
                  {tech}
                </motion.span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs px-2 py-1 text-dark/40 dark:text-light/40">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>
          )}
          
          {/* Action Links */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors duration-200"
                >
                  View Project →
                </Link>
              )}
            </div>
            
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default CategoryProjectCard;
