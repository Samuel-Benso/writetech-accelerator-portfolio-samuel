import React from 'react';
import styles from './styles.module.css';

export default function Resume() {
  return (
    <div className={styles.resume}>
      <div className={styles.header}>
        <h1 className={styles.name}>Samuel Benson</h1>
        <h2 className={styles.title}>Technical Writer | API Documentation | Developer Experience</h2>
        <div className={styles.contact}>
          <span>Lagos, Nigeria | Open to Remote (Global)</span>
          <span>samyben554@gmail.com</span>
          <span>+2348148439986</span>
        </div>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/samuelbenso" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://writetech-accelerator-portfolio-sam-phi.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
          <a href="https://github.com/Samuel-Benso" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Profile Summary</h2>
        <p className={styles.summary}>
          Technical Writer experienced in developer documentation for open source and web3. 
          Specializes in API documentation, developer guides, and content strategy. Skilled in creating 
          clear, comprehensive documentation that enhances developer experience and reduces support needs. 
          Collaborates effectively with cross-functional teams to produce high-quality technical content.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Work Experience</h2>
        
        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <h3 className={styles.jobTitle}>Technical Writing Mentorship Program (TWMP)</h3>
            <span className={styles.jobPeriod}>May 2025 – Present (Volunteer)</span>
          </div>
          <h4 className={styles.jobRole}>Editor & Content Migration Contributor</h4>
          <ul className={styles.jobDescription}>
            <li>Migrated docs from Hugo to Docusaurus and restored missing pages; standardized templates for consistent navigation and readability.</li>
            <li>Replaced hosted images with local assets and normalized metadata, reducing external requests and improving page stability.</li>
          </ul>
        </div>

        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <h3 className={styles.jobTitle}>myRide</h3>
            <span className={styles.jobPeriod}>April 2024 – Present (Part-time)</span>
          </div>
          <h4 className={styles.jobRole}>Technical Writer & Onboarding Lead</h4>
          <ul className={styles.jobDescription}>
            <li>Converted raw UX notes into developer-ready specs and guides, reducing rework by ~20% and speeding implementation.</li>
            <li>Built a central docs hub that cut new-hire ramp-up time by 7+ days; improved cross-team visibility via GitHub project boards.</li>
          </ul>
        </div>

        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <h3 className={styles.jobTitle}>The Coding Clubhouse</h3>
            <span className={styles.jobPeriod}>January 2025 – Present (Volunteer)</span>
          </div>
          <h4 className={styles.jobRole}>Content Administrator</h4>
          <ul className={styles.jobDescription}>
            <li>Published and maintained technical lessons for 80+ learners; aligned content with weekly learning goals.</li>
            <li>Introduced a Trello/Docs workflow to streamline planning and increase on-time delivery by ~25%.</li>
          </ul>
        </div>

        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <h3 className={styles.jobTitle}>The Good Docs Project</h3>
            <span className={styles.jobPeriod}>March 2025 – Present (Open Source)</span>
          </div>
          <h4 className={styles.jobRole}>Contributor – Knowledge Base & Chronologue Working Groups</h4>
          <ul className={styles.jobDescription}>
            <li>Authored internal KB docs that reduced repeat support questions by ~15% and improved first-time-fix guidance.</li>
            <li>Drafted API refs, release notes, and changelogs using community templates; contributed to editorial reviews for consistency.</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <h3 className={styles.jobTitle}>Bachelor of Science in Computer Science</h3>
            <span className={styles.jobPeriod}>Graduated October 2022</span>
          </div>
          <p className={styles.jobRole}>Akwa Ibom State University, Nigeria</p>
          <ul className={styles.jobDescription}>
            <li>Relevant Coursework: Software Engineering, Database Systems, Web Development, Technical Writing</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Technical Skills</h2>
        <div className={styles.skillsList}>
          <span className={styles.skill}>API Documentation</span>
          <span className={styles.skill}>Developer Guides</span>
          <span className={styles.skill}>Technical Writing</span>
          <span className={styles.skill}>Markdown</span>
          <span className={styles.skill}>Docusaurus</span>
          <span className={styles.skill}>Git & GitHub</span>
          <span className={styles.skill}>OpenAPI/Swagger</span>
          <span className={styles.skill}>Postman</span>
          <span className={styles.skill}>JavaScript</span>
          <span className={styles.skill}>React</span>
          <span className={styles.skill}>RESTful APIs</span>
          <span className={styles.skill}>Documentation as Code</span>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Key Projects</h2>
        
        <div className={styles.project}>
          <h3 className={styles.projectTitle}>Plaid API Documentation</h3>
          <p className={styles.projectDescription}>
            Recreated Plaid API reference using Postman with interactive endpoints and detailed examples, improving developer experience.
          </p>
        </div>

        <div className={styles.project}>
          <h3 className={styles.projectTitle}>TMDb API Documentation</h3>
          <p className={styles.projectDescription}>
            Built interactive API docs for The Movie Database using Mintlify, focusing on clean UI/UX for developers.
          </p>
        </div>

        <div className={styles.project}>
          <h3 className={styles.projectTitle}>Vue.js Docs Recreation</h3>
          <p className={styles.projectDescription}>
            Recreated Vue.js documentation with Astro and Starlight, enhancing navigation and SEO.
          </p>
        </div>
      </section>
    </div>
  );
}
