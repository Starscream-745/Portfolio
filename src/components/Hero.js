import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="hero section">
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              Hi, I'm <span className="highlight">Kushagra Tyagi</span>
            </motion.h1>
            
            <motion.h2 
              className="hero-subtitle"
              variants={itemVariants}
            >
             Full Stack Engineer
            </motion.h2>
            
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              B.Tech in Information Technology from KIET Group of Institutions. 
              Passionate about building scalable applications with Java, Spring Boot, and modern web technologies.
              Currently interning at Optifyx Technology, developing innovative solutions.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              
              <motion.a
                href="/Kushagra_Tyagi_Resume.pdf"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download="Kushagra_Tyagi_Resume.pdf"
              >
                <FaDownload /> Resume PDF
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="social-links"
              variants={itemVariants}
            >
              {[
                { icon: FaGithub, href: 'https://github.com/Starscream-745', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/kushagra-tyagi-687180281', label: 'LinkedIn' },
                { icon: FaEnvelope, href: 'mailto:kushagratyagi31@gmail.com', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            variants={itemVariants}
          >
            <motion.div
              className="floating-card"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="code-snippet">
                <div className="code-header">
                  <div className="code-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="code-title">kushagra.java</span>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="keyword">public class</span> <span className="class-name">Developer</span> {'{'}
                  </div>
                  <div className="code-line indent">
                    <span className="keyword">private</span> <span className="type">String</span> name = <span className="string">"Kushagra"</span>;
                  </div>
                  <div className="code-line indent">
                    <span className="keyword">private</span> <span className="type">String[]</span> skills = {'{'}
                  </div>
                  <div className="code-line indent2">
                    <span className="string">"Java"</span>, <span className="string">"Spring Boot"</span>, <span className="string">"MySQL"</span>
                  </div>
                  <div className="code-line indent">
                    {'}'};
                  </div>
                  <div className="code-line">
                    {'}'}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
