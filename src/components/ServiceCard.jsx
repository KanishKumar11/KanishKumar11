"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative group"
    >
      {/* Background Layers */}
      <div className="absolute top-0 -right-1 -z-10 w-[101%] h-[101%] rounded-xl bg-dark/5 dark:bg-light/5 group-hover:bg-dark/10 dark:group-hover:bg-light/10 transition-colors duration-300" />
      <div className="absolute top-1 -right-0.5 -z-20 w-[100.5%] h-[100.5%] rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors duration-300" />
      
      <div className="relative text-center p-6 bg-light dark:bg-dark border border-solid border-dark/10 dark:border-light/10 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300">
        {/* Icon Container */}
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 dark:from-orange-500 dark:to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
        >
          <span className="text-3xl filter drop-shadow-sm">{icon}</span>
        </motion.div>
        
        {/* Content */}
        <h3 className="text-lg font-semibold text-dark dark:text-light mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-dark/70 dark:text-light/70 text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Hover Accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 dark:from-orange-500 dark:to-orange-400 origin-left"
        />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
