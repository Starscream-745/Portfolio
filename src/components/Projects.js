import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaJava, FaReact, FaDatabase } from 'react-icons/fa';
import { SiSpring, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { 
  TrainReservationThumbnail, 
  ATMInterfaceThumbnail, 
  LibraryManagementThumbnail, 
  DSAVisualizerThumbnail 
} from './ProjectThumbnails';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "Online Reservation System",
      description: "Comprehensive reservation system with all necessary fields for online bookings. Features centralized database, user authentication, and real-time availability checking. Built during internship at Optifyx Technology.",
      thumbnail: TrainReservationThumbnail,
      technologies: [
        { name: "Java", icon: FaJava, color: "#f89820" },
        { name: "Spring Boot", icon: SiSpring, color: "#6db33f" },
        { name: "MySQL", icon: FaDatabase, color: "#4479a1" },
        { name: "HTML/CSS", icon: FaReact, color: "#61dafb" }
      ],
      github: "https://github.com/Starscream-745/reservation-system",
      live: "https://kushagra-reservation.vercel.app",
      featured: true
    },
    {
      title: "ATM Interface System",
      description: "Console-based ATM application with five different classes implementing core banking functionalities. Features transaction history, withdrawal, deposit, transfer, and balance inquiry operations.",
      thumbnail: ATMInterfaceThumbnail,
      technologies: [
        { name: "Java", icon: FaJava, color: "#f89820" },
        { name: "OOP", icon: SiSpring, color: "#6db33f" },
        { name: "Console", icon: FaDatabase, color: "#4479a1" }
      ],
      github: "https://github.com/Starscream-745/ATM_Automated_Teller_Machine",
      live: "https://github.com/Starscream-745/ATM_Automated_Teller_Machine"
    },
    {
      title: "Library Management System",
      description: "A console-based Java Library Management System that demonstrates core Object-Oriented Programming (OOP) concepts such as classes, objects, encapsulation, and method interaction. This system allows you to manage books and users, issue and return books, and display records through a simple terminal interface.",
      thumbnail: LibraryManagementThumbnail,
      technologies: [
        { name: "Java", icon: FaJava, color: "#f89820" },
        { name: "OOP", icon: SiSpring, color: "#6db33f" },
        { name: "Console", icon: FaDatabase, color: "#4479a1" },
        { name: "File I/O", icon: FaDatabase, color: "#667eea" }
      ],
      github: "https://github.com/Starscream-745/Library_Management_System",
      live: "https://github.com/Starscream-745/Library_Management_System"
    },
    {
      title: "DSA Visualizer",
      description: "Interactive educational tool for teaching Sorting and Searching Algorithms in Data Structures. Step-by-step visual representation helping students understand algorithm execution in real-time.",
      thumbnail: DSAVisualizerThumbnail,
      technologies: [
        { name: "HTML5", icon: FaReact, color: "#e34f26" },
        { name: "CSS3", icon: FaReact, color: "#1572b6" },
        { name: "JavaScript", icon: FaReact, color: "#f7df1e" },
        { name: "Algorithms", icon: FaDatabase, color: "#ff6b6b" }
      ],
      github: "https://github.com/Starscream-745/dsa-visualizer",
      live: "https://github.com/Starscream-745/dsa-visualizer"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={projectVariants}>
            Featured Projects
          </motion.h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`project-card glass-card ${project.featured ? 'featured' : ''}`}
                variants={projectVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="project-image">
                  <div className="project-thumbnail">
                    <project.thumbnail />
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a
                        href={project.github}
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <div key={tech.name} className="tech-tag">
                        <tech.icon style={{ color: tech.color }} />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;