import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaRocket,
  FaLinkedin,
} from "react-icons/fa";
import "./About.css";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const highlights = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description: "React, JavaScript, HTML5, CSS3, responsive design",
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description: "Java, Spring Boot, RESTful APIs, microservices",
    },
    {
      icon: FaDatabase,
      title: "Database Management",
      description: "MySQL, PostgreSQL, MongoDB, data modeling",
    },
    {
      icon: FaRocket,
      title: "DevOps & Deployment",
      description: "Docker, AWS, CI/CD, version control with Git",
    },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About Me
          </motion.h2>

          <div className="about-content">
            <motion.div className="about-text" variants={itemVariants}>
              <div className="glass-card">
                <p>
                  I'm currently pursuing B.Tech in Information Technology from
                  KIET Group of Institutions (CGPA: 7.60) and working as a Java
                  Development Intern at Optifyx Technology. I specialize in
                  building robust backend systems and interactive web
                  applications.
                </p>
                <p>
                  During my internship, I've developed complex projects
                  including an Online Reservation System and ATM Interface with
                  console-based functionality. I'm passionate about
                  problem-solving, data structures & algorithms, and creating
                  efficient solutions using Java, Spring Boot, and modern web
                  technologies.
                </p>
                <p>
                  I've also led teams in hackathons, organized successful TED
                  events at my college, and continuously work on personal
                  projects to enhance my skills. My goal is to contribute to
                  innovative software solutions that make a real impact.
                </p>
                <div className="about-links">
                  <motion.a
                    href="https://www.linkedin.com/in/kushagra-tyagi-687180281"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin />
                    <span>Connect on LinkedIn</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div className="highlights-grid" variants={itemVariants}>
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="highlight-card glass-card"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="highlight-icon">
                    <highlight.icon />
                  </div>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
