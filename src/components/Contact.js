import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', or ''

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Encode form data for Netlify
    const encode = (data) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    try {
      // Method 1: Netlify Forms (Built-in, most reliable)
      const netlifyResponse = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (netlifyResponse.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitStatus('success');
        alert("✅ Message sent successfully! I'll get back to you within 24 hours.");
        return;
      }

      // Method 2: Getform.io (Simple and reliable)
      const getformResponse = await fetch('https://getform.io/f/bqonvxga', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (getformResponse.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitStatus('success');
        alert("✅ Message sent successfully! I'll get back to you within 24 hours.");
        return;
      }

      // Method 3: Formspree backup
      const formspreeResponse = await fetch('https://formspree.io/f/mrbzgqpj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact from ${formData.name}: ${formData.subject}`
        })
      });

      if (formspreeResponse.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitStatus('success');
        alert("✅ Message sent successfully! I'll get back to you within 24 hours.");
        return;
      }

      // Method 3: Simple mailto fallback with better UX
      const mailtoLink = `mailto:kushagratyagi31@gmail.com?subject=${encodeURIComponent(`Portfolio Contact: ${formData.subject}`)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Copy email to clipboard
      if (navigator.clipboard) {
        await navigator.clipboard.writeText('kushagratyagi31@gmail.com');
      }
      
      // Open mailto
      window.location.href = mailtoLink;
      
      alert("📧 Email copied to clipboard and mail client opened!\n\nIf your mail client didn't open, please email me directly at:\nkushagratyagi31@gmail.com");
      
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus('success');

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // Final fallback - copy email and show contact info
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText('kushagratyagi31@gmail.com');
          alert("📋 Email copied to clipboard!\n\n📧 kushagratyagi31@gmail.com\n📱 +91 7310892568\n🔗 LinkedIn: www.linkedin.com/in/kushagra-tyagi-687180281\n\nPlease email me directly - I'll respond within 24 hours!");
        } else {
          alert("📧 Please contact me directly:\n\nkushagratyagi31@gmail.com\n+91 7310892568\nLinkedIn: www.linkedin.com/in/kushagra-tyagi-687180281\n\nI'll respond within 24 hours!");
        }
      } catch (clipError) {
        alert("📧 Please contact me directly:\n\nkushagratyagi31@gmail.com\n+91 7310892568\nLinkedIn: www.linkedin.com/in/kushagra-tyagi-687180281\n\nI'll respond within 24 hours!");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "kushagratyagi31@gmail.com",
      link: "mailto:kushagratyagi31@gmail.com",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+91 7310892568",
      link: "tel:+917310892568",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Ghaziabad, Uttar Pradesh",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kushagra-tyagi-687180281",
      color: "#0077b5",
    },
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/Starscream-745",
      color: "#333",
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      url: "https://twitter.com/Starscream_745",
      color: "#1da1f2",
    },
  ];

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

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Get In Touch
          </motion.h2>

          <motion.p className="contact-subtitle" variants={itemVariants}>
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology. Let's connect!
          </motion.p>

          <div className="contact-content">
            <motion.div className="contact-info" variants={itemVariants}>
              <div className="glass-card">
                <h3>Contact Information</h3>

                <div className="contact-details">
                  {contactInfo.map((info) => (
                    <motion.div
                      key={info.title}
                      className="contact-item"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="contact-icon">
                        <info.icon />
                      </div>
                      <div className="contact-text">
                        <h4>{info.title}</h4>
                        {info.link ? (
                          <a href={info.link}>{info.value}</a>
                        ) : (
                          <span>{info.value}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="social-section">
                  <h4>Follow Me</h4>
                  <div className="social-links">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: social.color,
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <social.icon />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-container"
              variants={itemVariants}
            >
              <div className="glass-card">
                <h3>Send Message</h3>

                <form 
                  onSubmit={handleSubmit} 
                  className="contact-form"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  {/* Hidden field for Netlify */}
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className={`btn-primary submit-btn ${submitStatus}`}
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? "Sending..." : submitStatus === 'success' ? "Message Sent ✅" : "Send Message"}
                  </motion.button>
                  
                  {submitStatus === 'success' && (
                    <motion.p 
                      className="success-message"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{ color: '#2ECC71', marginTop: '10px', textAlign: 'center' }}
                    >
                      ✅ Message sent successfully! I'll get back to you within 24 hours.
                    </motion.p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.footer
        className="footer"
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="container">
          <p>
            &copy; 2025 Kushagra Tyagi. Built with React & passion for
            innovation.
          </p>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;
