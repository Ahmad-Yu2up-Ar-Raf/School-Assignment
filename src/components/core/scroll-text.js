// src/components/core/scroll-text.js
'use client';
import React from 'react';
import ScrollBaseAnimation from './text-marquee'; // Ganti dengan path yang sesuai
import { motion } from 'framer-motion';

const TextAnimation = ({ text, variants, classname, as: Component = 'h1', letterAnime = false }) => {
  return (
    <ScrollBaseAnimation clasname={classname}>
      {letterAnime ? (
        <span>
          {text.split('').map((letter, index) => (
            <motion.span
              key={index}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.05 }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ) : (
        <Component variants={variants} initial="hidden" animate="visible">
          {text}
        </Component>
      )}
    </ScrollBaseAnimation>
  );
};

export default TextAnimation;