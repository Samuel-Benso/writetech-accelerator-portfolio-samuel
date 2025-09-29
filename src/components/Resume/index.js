import React from 'react';
import styles from './styles.module.css';

export default function Resume() {
  return (
    <div className={styles.resume}>
      <div className={styles.header}>
        <h1 className={styles.name}>SAMUEL BENSON</h1>
        <h2 className={styles.title}>Technical Writer | API Documentation Specialist</h2>
        <div className={styles.contact}>
          <span>Lagos, Nigeria | Remote | samyben554@gmail.com | +2348148439986</span>
        </div>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/samuelbenso" target="_blank" rel="noopener noreferrer">linkedin.com/in/samuelbenso</a>
          <span> | </span>
          <a href="https://github.com/Samuel-Benso" target="_blank" rel="noopener noreferrer">github.com/Samuel-Benso</a>
        </div>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>PROFESSIONAL SUMMARY</h2>
        <p className={styles.summary}>
          Technical Writer with 3+ years of experience creating developer documentation, API references, and user guides. 
          Proven track record of reducing support tickets by 50% and improving developer onboarding time through clear, 
          concise documentation. Skilled in Docusaurus, Markdown, OpenAPI, and version control.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>EXPERIENCE</h2>
        
        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <h3 className={styles.jobTitle}>myRide</h3>
            <span className={styles.jobPeriod}>April 2024 – Present</span>
          </div>
          <h4 className={styles.jobRole}>Technical Writer & Documentation Lead</h4>
          <ul className={styles.jobDescription}>
            <li>Reduced development ambiguity by 40% through comprehensive iOS app requirement documentation and user flows</li>
            <li>Created ecosystem documentation covering server architecture, database schemas, and APIs, accelerating third-party onboarding by 35%</li>
            <li>Implemented version-controlled documentation system, reducing support tickets by 50%</li>
          </ul>
        </div>

        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <h3 className={styles.jobTitle}>The Coding Clubhouse</h3>
            <span className={styles.jobPeriod}>January 2025 – Present</span>
          </div>
          <h4 className={styles.jobRole}>Technical Writer & Documentation Lead</h4>
          <ul className={styles.jobDescription}>
            <li>Cut developer onboarding time by 50% through comprehensive documentation for NGO websites</li>
            <li>Improved UI consistency by 60% by creating Tailwind CSS implementation guides and component libraries</li>
            <li>Reduced UI-related bugs by 45% through documentation-driven development practices</li>
          </ul>
        </div>

        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <h3 className={styles.jobTitle}>Technical Writing Mentorship Program</h3>
            <span className={styles.jobPeriod}>May 2025 – Present</span>
          </div>
          <h4 className={styles.jobRole}>Editor & Content Migration Contributor</h4>
          <ul className={styles.jobDescription}>
            <li>Migrated documentation from Hugo to Docusaurus, standardizing templates and improving navigation</li>
            <li>Optimized page performance by replacing hosted images with local assets and normalizing metadata</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>TECHNICAL SKILLS</h2>
        <div className={styles.skillsList}>
          <span className={styles.skill}>API Documentation</span>
          <span className={styles.skill}>Technical Writing</span>
          <span className={styles.skill}>Docusaurus</span>
          <span className={styles.skill}>Markdown</span>
          <span className={styles.skill}>OpenAPI/Swagger</span>
          <span className={styles.skill}>Git & GitHub</span>
          <span className={styles.skill}>JavaScript</span>
          <span className={styles.skill}>Postman</span>
          <span className={styles.skill}>React</span>
          <span className={styles.skill}>RESTful APIs</span>
          <span className={styles.skill}>Tailwind CSS</span>
          <span className={styles.skill}>Documentation as Code</span>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>EDUCATION</h2>
        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <h3 className={styles.jobTitle}>B.Sc. Computer Science</h3>
            <span className={styles.jobPeriod}>Graduated 2022</span>
          </div>
          <p className={styles.jobRole}>Akwa Ibom State University, Nigeria</p>
        </div>
      </section>
    </div>
  );
}
