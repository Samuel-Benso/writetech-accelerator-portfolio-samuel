import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import ModuleGrid from '@site/src/components/ModuleGrid';
import styles from './index.module.css';

export default function About() {
  return (
    <Layout
      title="About Me | Samuel Benson"
      description="Learn more about Samuel Benson, Technical Writer and Documentation Engineer"
    >
      <header className={clsx('hero hero--primary', styles.aboutHero)}>
        <div className="container">
          <h1>About Me</h1>
          <p className="hero__subtitle">
            I'm Samuel Benson, a Technical Writer and Documentation Engineer. I specialize in creating clear, 
            user-focused technical content, and I'm passionate about improving software and API documentation 
            for better usability.
          </p>
        </div>
      </header>

      <main className={styles.aboutContent}>
        <div className="container">
          <section className={styles.section}>
            <h2>My WriteTech Accelerator Journey</h2>
            <p>
              This portfolio showcases the practical skills I've built during the WriteTech Accelerator Programme, 
              as well as my journey exploring Docs-as-Code workflows. Each module represents a key area of 
              technical writing and documentation that I've mastered.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Project Modules</h2>
            <p>
              Click on any card to explore the projects and see my approach to creating clear, 
              user-focused documentation.
            </p>
            <div className={styles.moduleGridWrapper}>
              <ModuleGrid />
            </div>
          </section>

          <section className={styles.section}>
            <h2>Get In Touch</h2>
            <div className={styles.contactLinks}>
              <Link to="https://linkedin.com/in/your-profile" className="button button--secondary">
                LinkedIn
              </Link>
              <Link to="https://your-notion-portfolio.com" className="button button--secondary">
                Notion Portfolio
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
