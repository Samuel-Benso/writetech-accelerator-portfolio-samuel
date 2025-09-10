import React, { useState } from 'react';
import Resume from '../Resume';
import styles from '../Resume/styles.module.css';

const downloadResume = () => {
  // Create a new window with the resume content for printing/saving as PDF
  const printWindow = window.open('', '_blank');
  const resumeContent = document.querySelector(`.${styles.resume}`);
  
  if (printWindow && resumeContent) {
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Samuel Benson - Resume</title>
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 2rem;
            }
            .header { text-align: center; margin-bottom: 2rem; padding-bottom: 1.5rem; border-bottom: 2px solid #1DB954; }
            .name { font-size: 2.5rem; font-weight: 700; margin: 0 0 0.5rem 0; color: #1DB954; }
            .contact { display: flex; justify-content: center; gap: 2rem; margin-bottom: 1rem; flex-wrap: wrap; }
            .contact span { font-weight: 500; color: #666; }
            .links { display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap; }
            .links a { color: #1DB954; text-decoration: none; font-weight: 500; }
            .section { margin-bottom: 2rem; }
            .sectionTitle { font-size: 1.5rem; font-weight: 700; color: #1DB954; margin: 0 0 1rem 0; padding-bottom: 0.5rem; border-bottom: 1px solid #e0e0e0; }
            .summary { font-size: 1rem; color: #555; margin: 0; }
            .job { margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid #f0f0f0; }
            .jobHeader { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.25rem; flex-wrap: wrap; gap: 0.5rem; }
            .jobTitle { font-size: 1.2rem; font-weight: 600; color: #333; margin: 0; }
            .jobPeriod { font-weight: 500; color: #1DB954; font-size: 0.9rem; }
            .jobRole { font-size: 1rem; font-weight: 500; color: #666; margin: 0 0 0.5rem 0; font-style: italic; }
            .jobDescription { margin: 0; padding-left: 1.2rem; }
            .jobDescription li { margin-bottom: 0.3rem; color: #555; }
            .skillsGrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; }
            .skillCategory { background: #f8f9fa; padding: 1.2rem; border-radius: 8px; border-left: 4px solid #1DB954; }
            .skillCategoryTitle { font-size: 1.1rem; font-weight: 600; color: #1DB954; margin: 0 0 0.8rem 0; }
            .skillsList { display: flex; flex-wrap: wrap; gap: 0.5rem; }
            .skill { background: white; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.85rem; color: #555; border: 1px solid #e0e0e0; font-weight: 500; }
            .project { margin-bottom: 1.2rem; padding: 1rem; background: #f8f9fa; border-radius: 6px; border-left: 3px solid #1DB954; }
            .projectTitle { font-size: 1.1rem; font-weight: 600; color: #333; margin: 0 0 0.5rem 0; }
            .projectDescription { margin: 0; color: #555; font-size: 0.95rem; }
            @media print { body { padding: 1rem; } }
          </style>
        </head>
        <body>
          ${resumeContent.innerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    
    // Trigger print dialog which allows saving as PDF
    setTimeout(() => {
      printWindow.print();
    }, 250);
  }
};

export default function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <a 
        href="#"
        onClick={(e) => {
          e.preventDefault();
          openModal();
        }}
        className="button button--primary button--lg"
      >
        View Full Resume
      </a>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Resume - Samuel Benson</h2>
              <div className={styles.modalActions}>
                <button 
                  className={styles.downloadButton}
                  onClick={downloadResume}
                  aria-label="Download resume as PDF"
                >
                  📄 Download PDF
                </button>
                <button 
                  className={styles.closeButton}
                  onClick={closeModal}
                  aria-label="Close resume"
                >
                  ×
                </button>
              </div>
            </div>
            <div className={styles.modalBody}>
              <Resume />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
