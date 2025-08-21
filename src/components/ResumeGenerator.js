import React from 'react';
import './ResumeGenerator.css';

const ResumeGenerator = () => {
  const generatePDF = () => {
    window.print();
  };

  return (
    <div className="resume-container" id="resume">
      <div className="resume-header">
        <h1>KUSHAGRA TYAGI</h1>
        <div className="contact-info">
          <span>📧 kushagratyagi31@gmail.com</span>
          <span>📱 +91 7310892568</span>
          <span>🔗 www.linkedin.com/in/kushagra-tyagi-687180281</span>
          <span>💻 github.com/Starscream-745</span>
        </div>
      </div>

      <section className="resume-section">
        <h2>EDUCATION</h2>
        <div className="education-item">
          <div className="education-header">
            <h3>KIET Group of Institutions</h3>
            <span>Nov 2022 - Present</span>
          </div>
          <p>Bachelor of Technology in Information Technology (App. CGPA: 7.60)</p>
          <p>Ghaziabad, Uttar Pradesh</p>
        </div>
        <div className="education-item">
          <div className="education-header">
            <h3>Vishwa Bandhu Academy (Central Board of Secondary Education)</h3>
            <span>Apr 2007 - Mar 2022</span>
          </div>
          <p>PCM (Percentage: 92%)</p>
          <p>Gajraula, Uttar Pradesh</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>INTERNSHIP</h2>
        <div className="internship-item">
          <div className="internship-header">
            <h3>Optifyx Technology</h3>
            <span>Aug 2024 - Sep 2024</span>
          </div>
          <p><strong>Java Development Internship</strong></p>
          <ul>
            <li><strong>ONLINE RESERVATION SYSTEM:</strong> This Online Reservation System includes all the necessary fields which are required during online reservation system. The basic idea behind this project is to save data in a central database which can be accessed by any authorize person to get information and saves time and burden which are being faced by their customers.</li>
            <li><strong>ATM INTERFACE:</strong> This complex project consists of five different classes and is a console-based application. When the system starts the user is prompted with user id and user pin. On entering the details successfully, then ATM functionalities are unlocked. The project allows to perform following operations: Transactions History; Withdraw; Deposit; Transfer; Quit.</li>
            <li><strong>Participant and Team Leader IEEE SSH hackathon:</strong> Led a team to build an interactive sorting visualizer project. Integrated an AI-powered chatbot for user assistance.</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>PROJECTS</h2>
        <div className="project-item">
          <div className="project-header">
            <h3>Weather App 🔗</h3>
            <span>Self Project</span>
          </div>
          <p><strong>HTML, CSS, JavaScript</strong></p>
          <p>This project is a weather application designed to enhance user engagement by providing real-time weather updates alongside a visually appealing interface. The core feature of the app is its ability to change the background dynamically based on the city searched.</p>
        </div>
        <div className="project-item">
          <div className="project-header">
            <h3>DSA Visualizer 🔗</h3>
            <span>Self Project</span>
          </div>
          <p><strong>HTML, CSS, JavaScript, ReactJs, NodeJs, JAVA</strong></p>
          <p>This project is an interactive Generative AI tool designed to teach Sorting and Searching Algorithms in DSA. It is step-by-step visual representation of the Sorting and Searching algorithms, allowing students to see how the array is sorted in real-time.</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>SKILLS</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Programming Languages:</h4>
            <p>Java, Python, C, SQL, MySQL, HTML, CSS, JavaScript</p>
          </div>
          <div className="skill-category">
            <h4>Data Structures and Algorithm</h4>
          </div>
          <div className="skill-category">
            <h4>Databases & Cloud Deployment:</h4>
            <p>MySQL, MongoDB, Postgresql, AWS, Streamlit, GCP, Git, Docker</p>
          </div>
          <div className="skill-category">
            <h4>JAVA Packages/Frameworks:</h4>
            <p>IntelliJ, Eclipse, J2EE, Spring, SpringBoot, RestAPI, Spring MVC, Hibernate, Apache Tomcat, Django, ReactJs</p>
          </div>
          <div className="skill-category">
            <h4>Growth Strategy</h4>
          </div>
          <div className="skill-category">
            <h4>Problem Solving, Quantitative Research, Qualitative Research, Communication Skills</h4>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>ACCOLADES</h2>
        <ul>
          <li>Facilitated by the college Dean for organising a successful TED event.</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>CO-CURRICULAR/EXTRA-CURRICULAR</h2>
        <div className="activity-item">
          <h4>TEDxKIET:</h4>
          <p>It is an independently organized TED event at KIET Group of Institutions, aimed at fostering a culture of ideas, innovation, and inspiration. This platform brings together thought leaders, change makers, and creative minds to share their experiences, insights, and visions for a better world. As the Production Head for TEDKIET, I was responsible for overseeing the entire production process, ensuring that the technical and visual aspects of our events ran smoothly.</p>
        </div>
      </section>

      <button className="print-btn" onClick={generatePDF}>
        Download as PDF
      </button>
    </div>
  );
};

export default ResumeGenerator;