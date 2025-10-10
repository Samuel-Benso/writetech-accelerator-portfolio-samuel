import React from 'react';
import styles from './styles.module.css';

const Resume = () => {
  return (
    <div className={styles.resume}>
      <header className={styles.header}>
        <h1>Samuel Benson</h1>
        <p className={styles.contact}>
          Lagos, Nigeria | +234 814 843 9986 | samyben554@gmail.com<br />
          <a href="https://linkedin.com/in/samuelbenso" target="_blank" rel="noopener noreferrer" className={styles.link}>
            LinkedIn Profile
          </a>{' '}
          |{' '}
          <a href="https://github.com/Samuel-Benso" target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub Portfolio
          </a>
        </p>
      </header>

      <section className={styles.section}>
        <h2>Technical Writer & API Documentation Specialist</h2>
        <p>
          Technical writer with 2+ years of experience creating clear, user-focused documentation for developers. 
          Skilled in API documentation, technical writing, and developer advocacy. Passionate about making complex 
          technical concepts accessible through well-structured documentation and tutorials. Currently open to new 
          opportunities and available to start immediately.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Professional Experience</h2>
        
        <div className={styles.experience}>
          <h3>Technical Writer & Documentation Lead (Volunteer)</h3>
          <p className={styles.company}>myRide | April 2024 – Present</p>
          <ul>
            <li>Reduced development ambiguity by 40% through comprehensive iOS app requirement documentation</li>
            <li>Created ecosystem documentation covering server architecture, database schemas, and APIs</li>
            <li>Implemented version-controlled documentation system, reducing support tickets by 50%</li>
          </ul>
        </div>

        <div className={styles.experience}>
          <h3>Technical Writing Intern</h3>
          <p className={styles.company}>GAOTEK | May 2025 – August 2025</p>
          <ul>
            <li>Researched and wrote web content and product details to help developers build faster</li>
            <li>Created clear, concise documentation that improved developer experience</li>
            <li>Collaborated with developers to understand technical concepts and translate them into user-friendly content</li>
          </ul>
        </div>

        <div className={styles.experience}>
          <h3>Editor & Content Migration Contributor (Volunteer)</h3>
          <p className={styles.company}>Technical Writing Mentorship Program | May 2025 – Present</p>
          <ul>
            <li>Migrated documentation from Hugo to Docusaurus, standardizing templates and improving navigation</li>
            <li>Optimized page performance by replacing hosted images with local assets and normalizing metadata</li>
          </ul>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Education</h2>
        <div className={styles.education}>
          <h3>BSc in Computer Science</h3>
          <p>Akwa Ibom State University, Nigeria | 2018 - 2022</p>
          <p>Coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Web Development</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Skills</h2>
        <div className={styles.skills}>
          <p>
            <strong>Technical:</strong> API Documentation, Technical Writing, User Guides, OpenAPI/Swagger, Markdown, REST APIs
          </p>
          <p>
            <strong>Technologies:</strong> JavaScript, React, Git, Docusaurus, VS Code, Postman
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Projects</h2>
        <div className={styles.project}>
          <h3>API Documentation Portal</h3>
          <p>Developed comprehensive API documentation for a fintech startup using OpenAPI and Swagger UI, reducing integration time by 40%.</p>
          <p><strong>Technologies:</strong> OpenAPI, Swagger UI, Docusaurus, GitHub Actions</p>
        </div>
        <div className={styles.project}>
          <h3>Refract Documentation</h3>
          <p>Created and maintained developer documentation for Refract, focusing on clear API references and integration guides. Improved developer experience with practical examples and troubleshooting guides.</p>
          <p><strong>Technologies:</strong> Markdown, Docusaurus, OpenAPI, React, GitHub</p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
