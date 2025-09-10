import React from 'react';
import styles from './styles.module.css';

export default function Resume() {
  return (
    <div className={styles.resume}>
      <div className={styles.header}>
        <h1 className={styles.name}>Samuel Benson</h1>
        <div className={styles.contact}>
          <span>samyben554@gmail.com</span>
          <span>+2348148439986</span>
        </div>
        <div className={styles.links}>
          <a href="https://linkedin.com/in/samuel-benson" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://hashnode.com/@samuel-benson" target="_blank" rel="noopener noreferrer">Hashnode</a>
          <a href="https://medium.com/@samuel-benson" target="_blank" rel="noopener noreferrer">Medium</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Portfolio</a>
          <a href="https://github.com/samuel-benson" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Professional Summary</h2>
        <p className={styles.summary}>
          Technical Writer with hands-on experience creating user-centered documentation across open source and web3 ecosystems. 
          Skilled in API documentation, developer guides, tutorials, and technical blogs. Adept at collaborating with cross-functional 
          teams to simplify complex information into clear and engaging content. Passionate about open source, with proven expertise 
          in content migration, documentation QA, and adapting to modern toolchains.
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
            <li>Contributed to the documentation migration from Hugo to Docusaurus, restoring missing content and standardizing structure for better readability.</li>
            <li>Optimized performance by replacing hosted images with local assets and ensuring consistent rendering, metadata, and footer design.</li>
            <li>Used quiz components and course cards for API, Markdown, and AsciiDoc courses, enhancing interactivity and learner engagement.</li>
          </ul>
        </div>

        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <h3 className={styles.jobTitle}>myRide</h3>
            <span className={styles.jobPeriod}>April 2024 – Present (Part-time)</span>
          </div>
          <h4 className={styles.jobRole}>Technical Writer & Onboarding Lead</h4>
          <ul className={styles.jobDescription}>
            <li>Transformed raw UX notes into developer-ready UX documentation, accelerating implementation and reducing rework.</li>
            <li>Streamlined onboarding by creating a documentation hub, cutting new team member ramp-up time by over a week.</li>
            <li>Tracked multi-team progress using GitHub project boards, boosting cross-functional visibility and delivery consistency.</li>
          </ul>
        </div>

        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <h3 className={styles.jobTitle}>The Coding Clubhouse</h3>
            <span className={styles.jobPeriod}>January 2025 – Present (Volunteer)</span>
          </div>
          <h4 className={styles.jobRole}>Content Administrator</h4>
          <ul className={styles.jobDescription}>
            <li>Managed and published technical content for 80+ learners, ensuring clarity and alignment with learning goals.</li>
            <li>Trained 10+ learners on foundational concepts of Computer Science including loops and conditionals setting a foundation for software development.</li>
            <li>Increased content delivery efficiency by organizing a content workflow using Trello and Google Docs.</li>
          </ul>
        </div>

        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <h3 className={styles.jobTitle}>The Good Docs Project</h3>
            <span className={styles.jobPeriod}>March 2025 – Present (Open Source)</span>
          </div>
          <h4 className={styles.jobRole}>Contributor – Knowledge Base & Chronologue Working Groups</h4>
          <ul className={styles.jobDescription}>
            <li>Collaborated with the Knowledge Base Working Group to write internal documentation that proactively reduces support ticket volume.</li>
            <li>Contributed to the Chronologue Working Group, crafting documentation samples like API references, changelogs, and release notes using community-approved templates.</li>
            <li>Participated in editorial reviews and discussions to maintain quality and consistency across published content.</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills & Technical Tools</h2>
        
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <h3 className={styles.skillCategoryTitle}>Documentation Tools</h3>
            <div className={styles.skillsList}>
              <span className={styles.skill}>Docusaurus (95%)</span>
              <span className={styles.skill}>Markdown (98%)</span>
              <span className={styles.skill}>Git/GitHub (90%)</span>
              <span className={styles.skill}>OpenAPI/Swagger (85%)</span>
              <span className={styles.skill}>MKDocs</span>
              <span className={styles.skill}>Mintlify</span>
              <span className={styles.skill}>Astro Starlight</span>
              <span className={styles.skill}>GitBook</span>
              <span className={styles.skill}>Confluence</span>
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h3 className={styles.skillCategoryTitle}>Technical Skills</h3>
            <div className={styles.skillsList}>
              <span className={styles.skill}>React (80%)</span>
              <span className={styles.skill}>JavaScript (85%)</span>
              <span className={styles.skill}>API Documentation (95%)</span>
              <span className={styles.skill}>Technical Writing (98%)</span>
              <span className={styles.skill}>HTML/CSS</span>
              <span className={styles.skill}>Python</span>
              <span className={styles.skill}>Java</span>
              <span className={styles.skill}>C++</span>
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h3 className={styles.skillCategoryTitle}>Content Strategy & Tools</h3>
            <div className={styles.skillsList}>
              <span className={styles.skill}>User Experience (90%)</span>
              <span className={styles.skill}>Information Architecture (88%)</span>
              <span className={styles.skill}>Content Planning (92%)</span>
              <span className={styles.skill}>Developer Advocacy (85%)</span>
              <span className={styles.skill}>Postman</span>
              <span className={styles.skill}>Jira</span>
              <span className={styles.skill}>Notion</span>
              <span className={styles.skill}>Lucidchart</span>
              <span className={styles.skill}>Miro</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Personal (Side) Projects</h2>
        
        <div className={styles.project}>
          <h3 className={styles.projectTitle}>Plaid API Docs (Postman)</h3>
          <p className={styles.projectDescription}>
            Recreated Plaid API reference using Postman collections, featuring interactive endpoints and detailed documentation.
          </p>
        </div>

        <div className={styles.project}>
          <h3 className={styles.projectTitle}>The Movie Database (TMDb) API Docs (Mintlify)</h3>
          <p className={styles.projectDescription}>
            Used Mintlify to build interactive API documentation for TMDb with clean UI/UX for developers.
          </p>
        </div>

        <div className={styles.project}>
          <h3 className={styles.projectTitle}>Vue.js Docs Recreation (Astro + Starlight)</h3>
          <p className={styles.projectDescription}>
            Wrote an audit report, and replicated the Vue.js docs site using Astro and Starlight SSG with improved layout, navigation, and SEO optimization.
          </p>
        </div>

        <div className={styles.project}>
          <h3 className={styles.projectTitle}>OpenMadness Documentation (VuePress)</h3>
          <p className={styles.projectDescription}>
            Collaborated in a team of 6 to create a full documentation suite from scratch using VuePress—including setup guides, API references, and feature overviews.
          </p>
        </div>
      </section>
    </div>
  );
}
