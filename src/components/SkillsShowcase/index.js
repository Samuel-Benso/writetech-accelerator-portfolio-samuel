import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import ResumeModal from '../ResumeModal';
import styles from './styles.module.css';

const skillsData = [
  {
    category: "Documentation Tools",
    skills: [
      { name: "Docusaurus", level: 95 },
      { name: "Markdown", level: 98 },
      { name: "Git/GitHub", level: 90 },
      { name: "OpenAPI/Swagger", level: 85 }
    ]
  },
  {
    category: "Technical Skills",
    skills: [
      { name: "React", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "API Documentation", level: 95 },
      { name: "Technical Writing", level: 98 }
    ]
  },
  {
    category: "Content Strategy",
    skills: [
      { name: "User Experience", level: 90 },
      { name: "Information Architecture", level: 88 },
      { name: "Content Planning", level: 92 },
      { name: "Developer Advocacy", level: 85 }
    ]
  }
];

const testimonials = [
  {
    quote: "Clear, comprehensive documentation that actually helps developers get started quickly.",
    author: "Developer Experience Focus",
    role: "WriteTech Accelerator"
  },
  {
    quote: "Transforms complex technical concepts into accessible, actionable guides.",
    author: "Technical Communication",
    role: "Portfolio Showcase"
  }
];

function SkillBar({ skill }) {
  return (
    <div className={styles.skillItem}>
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillLevel}>{skill.level}%</span>
      </div>
      <div className={styles.skillBarContainer}>
        <div 
          className={styles.skillBar}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}

function SkillCategory({ category, skills }) {
  return (
    <div className={styles.skillCategory}>
      <Heading as="h3" className={styles.categoryTitle}>
        {category}
      </Heading>
      <div className={styles.skillsList}>
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.quote}>"{testimonial.quote}"</div>
      <div className={styles.author}>
        <div className={styles.authorName}>{testimonial.author}</div>
        <div className={styles.authorRole}>{testimonial.role}</div>
      </div>
    </div>
  );
}

export default function SkillsShowcase() {
  return (
    <section className={styles.skillsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Technical Expertise & Skills
          </Heading>
          <p className={styles.sectionDescription}>
            A comprehensive toolkit for creating exceptional developer experiences through documentation
          </p>
        </div>
        
        <div className={styles.skillsGrid}>
          {skillsData.map((categoryData, index) => (
            <SkillCategory 
              key={index}
              category={categoryData.category}
              skills={categoryData.skills}
            />
          ))}
        </div>

        <div className={styles.testimonialsSection}>
          <Heading as="h3" className={styles.testimonialsTitle}>
            What Sets My Work Apart
          </Heading>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <Heading as="h3" className={styles.ctaTitle}>
              Ready to Transform Your Documentation?
            </Heading>
            <p className={styles.ctaDescription}>
              Let's discuss how I can help improve your developer experience and product adoption through clear, user-focused documentation.
            </p>
            <div className={styles.ctaButtons}>
              <ResumeModal />
              <a 
                href="https://www.notion.so"
                className="button button--outline button--primary button--lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Browse Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
