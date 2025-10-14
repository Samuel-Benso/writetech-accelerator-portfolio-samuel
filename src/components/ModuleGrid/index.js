import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

// Import icons (using Lucide React for this example)
import { FileText, Code, Zap, Cpu, Cloud, Globe } from 'lucide-react';

const modules = [
  {
    title: 'Documentation Tooling',
    description: 'How-to guide for setting up a docs-as-code workflow using Docusaurus',
    link: '/documentation-tooling/intro',
    icon: <FileText size={24} />,
    color: '#1DB954' // Spotify green
  },
  {
    title: 'API Documentation',
    description: 'Improved documentation for selected endpoints from a real or public API',
    link: '/api-documentation/intro',
    icon: <Code size={24} />,
    color: '#4285F4' // Blue
  },
  {
    title: 'Documentation Automation',
    description: 'Using tools like Vale, Spectral, and GitHub Actions',
    link: '/docs-automation/intro',
    icon: <Zap size={24} />,
    color: '#FBBC05' // Yellow
  },
  {
    title: 'AI for Documentation',
    description: 'Comparison of AI tools or prompt-based documentation using your own examples',
    link: '/ai-documentation/',
    icon: <Cpu size={24} />,
    color: '#EA4335' // Red
  },
  {
    title: 'DevOps & Cloud',
    description: 'Step-by-step guide for a DevOps/cloud tool or process (e.g., CI/CD, deployment)',
    link: '/devops-cloud-documentation/overview',
    icon: <Cloud size={24} />,
    color: '#34A853' // Green
  },
  {
    title: 'Web3 Documentation',
    description: 'User guide for Web3 tools, white paper draft, or improved API documentation',
    link: '/web3/getting-started',
    icon: <Globe size={24} />,
    color: '#8A2BE2' // Purple
  }
];

function ModuleCard({ title, description, link, icon, color }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardIcon} style={{ backgroundColor: `${color}15` }}>
        <span style={{ color }}>{icon}</span>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle} style={{ color }}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      <div className={styles.cardFooter}>
        <Link to={link} className={styles.cardLink}>
          View Project →
        </Link>
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
            icon={module.icon}
            color={module.color}
          />
        ))}
      </div>
    </section>
  );
}
