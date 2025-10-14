import React from 'react';
import styles from './styles.module.css';

const companies = [
  {
    name: 'myRide',
    logo: '/img/icons/myride-placeholder.svg',
    alt: 'myRide logo',
    fallbackText: 'myRide'
  },
  {
    name: 'TheCoding ClubHouse',
    logo: '/img/icons/TheCoding ClubHouse.svg',
    alt: 'TheCoding ClubHouse logo',
    fallbackText: 'CCH'
  },
  {
    name: 'Technical Writing Mentorship Program',
    logo: '/img/icons/Technical Writing Mentorship Program.svg',
    alt: 'Technical Writing Mentorship Program logo',
    fallbackText: 'TWM'
  },
  {
    name: 'CMusicAI',
    logo: '/img/icons/CMusicAI.webp',
    alt: 'CMusicAI logo',
    fallbackText: 'CMAI'
  }
];
// Debug: Log the companies data
console.log('Companies data:', companies);

const CompanyLogo = ({ logo, alt, name, fallbackText }) => {
  // Special handling for Technical Writing Mentorship Program
  const isTechnicalWriting = name.includes('Technical Writing');
  
  return (
    <div className={`${styles.logoWrapper} ${isTechnicalWriting ? styles.technicalWritingLogo : ''}`}>
      <div className={styles.logoImageContainer}>
        <img 
          src={logo} 
          alt={alt}
          className={`${styles.logoImage} ${isTechnicalWriting ? styles.technicalWritingImage : ''}`}
          onError={(e) => {
            e.target.style.display = 'none';
            const fallback = e.target.parentNode.querySelector(`.${styles.logoFallback}`);
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <div className={styles.logoFallback}>
          {fallbackText}
        </div>
      </div>
      <div className={styles.companyName}>
        {name}
      </div>
    </div>
  );
};

const CompaniesShowcase = () => {
  return (
    <section className={styles.companies}>
      <div className="container">
        <h2 className={styles.title}>Companies I've Worked With</h2>
        <div className={styles.logoScroller}>
          {[...companies, ...companies].map((company, index) => (
            <div key={`${company.name}-${index}`} className={styles.logoItem}>
              <CompanyLogo 
                name={company.name}
                logo={company.logo}
                alt={company.alt}
                fallbackText={company.fallbackText}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesShowcase;
