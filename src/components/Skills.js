import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaJava,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { SiSpring, SiMysql, SiPostgresql, SiMongodb } from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: FaJava, level: 90, color: "#f89820" },
        { name: "JavaScript", icon: FaJs, level: 85, color: "#f7df1e" },
        { name: "C", icon: FaDatabase, level: 70, color: "#00599c" },
        { name: "C++", icon: FaDatabase, level: 70, color: "##E4CB4C" },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML5", icon: FaHtml5, level: 92, color: "#e34f26" },
        { name: "CSS3", icon: FaCss3Alt, level: 88, color: "#1572b6" },
        { name: "React", icon: FaReact, level: 80, color: "#61dafb" },
        { name: "Node.js", icon: FaNodeJs, level: 75, color: "#339933" },
      ],
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "MySQL", icon: SiMysql, level: 88, color: "#4479a1" },
        { name: "MongoDB", icon: SiMongodb, level: 75, color: "#47a248" },
        { name: "PostgreSQL", icon: SiPostgresql, level: 70, color: "#336791" },
        { name: "AWS", icon: FaAws, level: 65, color: "#ff9900" },
      ],
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "Spring Boot", icon: SiSpring, level: 85, color: "#6db33f" },
        { name: "Git", icon: FaGitAlt, level: 90, color: "#f05032" },
        { name: "Docker", icon: FaDocker, level: 70, color: "#2496ed" },
        {
          name: "IntelliJ IDEA",
          icon: FaDatabase,
          level: 88,
          color: "#000000",
        },
        { name: "Eclipse", icon: FaDatabase, level: 85, color: "#2c2255" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={categoryVariants}>
            Skills & Technologies
          </motion.h2>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="skill-category glass-card"
                variants={categoryVariants}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.5,
                      }}
                    >
                      <div className="skill-header">
                        <div className="skill-info">
                          <skill.icon
                            className="skill-icon"
                            style={{ color: skill.color }}
                          />
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      </div>

                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          animate={
                            inView ? { width: `${skill.level}%` } : { width: 0 }
                          }
                          transition={{
                            delay:
                              categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                            duration: 1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
