import React from 'react';
import { motion } from 'framer-motion';
import './GlowingShapes.css';

const GlowingShapes = () => {
  return (
    <div className="glowing-shapes-container">
      {/* Large glowing orb - top right */}
      <motion.div
        className="large-orb orb-1"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.8, 0.4],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Medium glowing orb - middle left */}
      <motion.div
        className="medium-orb orb-2"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Small glowing orb - bottom right */}
      <motion.div
        className="small-orb orb-3"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.5, 0.9, 0.5],
          rotate: [0, -360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="geometric-shape shape-1"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="geometric-shape shape-2"
        animate={{
          rotateZ: [0, 360],
          x: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="geometric-shape shape-3"
        animate={{
          rotateX: [0, 180, 360],
          rotateY: [0, 180, 360],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Pulsing rings */}
      <motion.div
        className="pulsing-ring ring-1"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.8, 0, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
      
      <motion.div
        className="pulsing-ring ring-2"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.6, 0, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
          delay: 1
        }}
      />
    </div>
  );
};

export default GlowingShapes;