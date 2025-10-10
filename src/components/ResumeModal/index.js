import React, { useState, useRef, useEffect } from 'react';
import Resume from '../Resume';
import styles from './styles.module.css';

const ResumeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const resumeRef = useRef(null);

  const downloadResume = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    
    // Get the resume content
    const resumeContent = document.querySelector(`.${styles.resume}`);
    if (!resumeContent) return;

    // Basic HTML template for printing
    const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Samuel Benson - Resume</title>
          <meta charset="UTF-8">
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 2rem;
            }
            .header { text-align: center; margin-bottom: 2rem; padding-bottom: 1.5rem; }
            .contact { text-align: center; margin-bottom: 1.5rem; }
            .contact a { color: #1DB954; text-decoration: none; }
            .section { margin-bottom: 1.5rem; }
            .section h2 { 
              color: #1DB954; 
              border-bottom: 2px solid #1DB954;
              padding-bottom: 0.5rem;
              margin-top: 1.5rem;
            }
            .experience { margin-bottom: 1.5rem; }
            .experience h3 { margin: 0.5rem 0; }
            .company { 
              color: #666; 
              font-weight: 500;
              margin-bottom: 0.5rem;
              display: block;
            }
            ul { 
              margin: 0.5rem 0 1rem 1.25rem; 
              padding: 0;
            }
            li { 
              margin-bottom: 0.5rem; 
              line-height: 1.5;
            }
            @media print {
              @page { margin: 1cm; }
              body { padding: 0; }
              a { text-decoration: none; color: #333; }
            }
          </style>
        </head>
        <body>
          ${resumeContent.outerHTML}
          <div style="text-align: center; margin-top: 2rem; padding: 1rem; color: #666; font-size: 0.9rem;">
            <p>Generated from samuelbenso.dev - Last updated: ${new Date().toLocaleDateString()}</p>
          </div>
        </body>
      </html>
    `;

    // Write content to the new window
    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();

    // Wait for content to load before printing
    printWindow.onload = function() {
      setTimeout(() => {
        printWindow.print();
        // Close the window after printing
        printWindow.onafterprint = function() {
          printWindow.close();
        };
      }, 500);
    };
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

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
        View Resume
      </a>

      {isOpen && (
        <div 
          className={styles.modalOverlay}
          onClick={handleOverlayClick}
        >
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>
                Resume - Samuel Benson
              </h2>
              <div className={styles.modalActions}>
                <button 
                  onClick={downloadResume}
                  className={styles.downloadButton}
                  aria-label="Download resume as PDF"
                >
                  <span>📄</span> Download PDF
                </button>
              </div>
            </div>
            <div className={styles.modalBody}>
              <div ref={resumeRef}>
                <Resume />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeModal;
