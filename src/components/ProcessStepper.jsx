"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ProcessStepper = ({ steps, title = "Development Process" }) => {
  return (
    <section className="mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-dark dark:text-light mb-12"
      >
        {title}
      </motion.h2>

      <div className="relative">
        {/* Connection Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 dark:from-orange-500 dark:to-orange-400 hidden lg:block origin-left"
        ></motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Step Circle */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative z-10 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 dark:from-orange-500 dark:to-orange-400 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              >
                <span className="text-xl font-bold text-white">
                  {step.step}
                </span>
              </motion.div>

              {/* Step Content */}
              <div className="max-w-xs">
                <h3 className="text-lg font-semibold text-dark dark:text-light mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-dark/70 dark:text-light/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Mobile Connection Line */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="w-0.5 h-8 bg-gradient-to-b from-orange-400 to-orange-600 dark:from-orange-500 dark:to-orange-400 mt-4 lg:block hidden origin-top"
                ></motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessStepper;
