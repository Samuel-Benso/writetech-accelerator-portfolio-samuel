import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

const modules = [
  {
    title: 'Documentation Tooling',
    description: 'How-to guide for setting up a docs-as-code workflow using Docusaurus',
    link: '/documentation-tooling/intro'
  },
  {
    title: 'API Documentation',
    description: 'Improved documentation for selected endpoints from a real or public API',
    link: '/api-documentation/intro'
  },
  {
    title: 'Documentation Automation',
    description: 'Using tools like Vale, Spectral, and GitHub Actions',
    link: '/docs-automation/intro'
  },
  {
    title: 'AI for Documentation',
    description: 'Comparison of AI tools or prompt-based documentation using your own examples',
    link: '/ai-documentation/'
  },
  {
    title: 'DevOps & Cloud',
    description: 'Step-by-step guide for a DevOps/cloud tool or process (e.g., CI/CD, deployment)',
    link: '/devops-cloud-documentation/overview'
  },
  {
    title: 'Web3 Documentation',
    description: 'User guide for Web3 tools, white paper draft, or improved API documentation',
    link: '/web3/getting-started'
  }
];

function ModuleCard({ title, description, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardFooter}>
          <Link to={link} className={styles.cardLink}>
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ModuleGrid() {
  return (
    <section className={styles.moduleGridContainer}>
      <div className={styles.moduleGrid}>
        {modules.map((module, idx) => (
          <ModuleCard 
            key={idx}
            title={module.title}
            description={module.description}
            link={module.link}
          />
        ))}
      </div>
    </section>
  );
}
