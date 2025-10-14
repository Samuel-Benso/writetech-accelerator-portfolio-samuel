import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const ModuleCard = ({ title, description, link }) => {
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
};

export default ModuleCard;
