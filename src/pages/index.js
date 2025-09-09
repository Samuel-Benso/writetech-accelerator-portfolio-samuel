import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import SkillsShowcase from '@site/src/components/SkillsShowcase';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.greeting}>👋 Hello, I'm</div>
            <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
              Samuel Benson
            </Heading>
            <div className={styles.heroSubtitle}>
              Technical Writer & Software Engineer
            </div>
            <p className={clsx('hero__subtitle', styles.heroDescription)}>
              I transform complex technical concepts into clear, actionable documentation that empowers developers and drives product adoption. Welcome to my WriteTech Accelerator portfolio.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>5+</div>
                <div className={styles.statLabel}>Projects Completed</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>3</div>
                <div className={styles.statLabel}>Documentation Tools</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>User-Focused</div>
              </div>
            </div>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                📖 View Portfolio
              </Link>
              <Link
                className="button button--outline button--secondary button--lg"
                to="/blog">
                ✍️ Read My Blog
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.profileCard}>
              <div className={styles.profileImageContainer}>
                <img 
                  src="/img/samuel-benson.jpg" 
                  alt="Samuel Benson"
                  className={styles.profileImage}
                />
              </div>
              <div className={styles.profileBadge}>
                <span className={styles.badgeText}>Available for Hire</span>
                <span className={styles.badgeIcon}>🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Samuel Benson - Technical Writer & Software Engineer`}
      description="Technical Writer and Software Engineer specializing in developer documentation, API references, and user-focused content. Explore my WriteTech Accelerator portfolio showcasing documentation projects and technical writing expertise.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <SkillsShowcase />
      </main>
    </Layout>
  );
}
