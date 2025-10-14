import React, { useState, useRef, useEffect } from 'react';
import Resume from '../resume';
import styles from './styles.module.css';

const ResumeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const resumeRef = useRef(null);

  const downloadResume = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Get the resume content
    const resumeContent = document.querySelector('.resume');
    if (!resumeContent) {
      console.error('Resume content not found');
      return;
    }

    // Create a clone to avoid modifying the original
    const contentClone = resumeContent.cloneNode(true);
    
    // Remove any existing print buttons or non-essential elements
    const printButtons = contentClone.querySelectorAll('button, .no-print');
    printButtons.forEach(btn => btn.remove());

    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      console.error('Failed to open print window');
      return;
    }

    // Basic HTML template for printing
    const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Samuel Benson - Resume</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
            body { 
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 2rem;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .header { 
              text-align: center; 
              margin-bottom: 2rem; 
              padding-bottom: 1.5rem; 
              border-bottom: 2px solid #f0f0f0;
            }
            .contact { 
              text-align: center; 
              margin-bottom: 1.5rem; 
              color: #555;
            }
            .contact a { 
              color: #1DB954; 
              text-decoration: none; 
            }
            .section { 
              margin-bottom: 2rem; 
              page-break-inside: avoid;
            }
            .section h2 { 
              color: #1DB954; 
              border-bottom: 2px solid #1DB954;
              padding-bottom: 0.5rem;
              margin: 1.5rem 0 1rem;
            }
            .experience { 
              margin-bottom: 1.5rem; 
              page-break-inside: avoid;
            }
            .experience h3 { 
              margin: 0.5rem 0 0.25rem; 
              color: #333;
            }
            .company { 
              color: #666; 
              font-weight: 500;
              margin-bottom: 0.5rem;
              display: block;
              font-style: italic;
            }
            ul { 
              margin: 0.5rem 0 1rem 1.5rem; 
              padding: 0;
            }
            li { 
              margin-bottom: 0.5rem; 
              line-height: 1.5;
            }
            .skills p {
              margin: 0.5rem 0;
            }
            @media print {
              @page { 
                margin: 1cm;
                size: A4;
              }
              body { 
                padding: 0.5cm;
                font-size: 12pt;
                line-height: 1.4;
              }
              a { 
                text-decoration: none; 
                color: #333;
              }
              .section {
                margin-bottom: 1rem;
              }
              .experience {
                margin-bottom: 1rem;
              }
            }
          </style>
        </head>
        <body>
          ${contentClone.outerHTML}
          <div style="text-align: center; margin-top: 2rem; padding: 1rem; color: #666; font-size: 0.9rem; border-top: 1px solid #eee;">
            <p>Generated from samuelbenso.dev - Last updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <script>
            // Auto-print when the window loads
            window.onload = function() {
              setTimeout(function() {
                window.print();
                // Close the window after a short delay to allow printing to start
                setTimeout(function() {
                  window.close();
                }, 100);
              }, 500);
            };
          </script>
        </body>
      </html>
    `;

    // Write content to the new window
    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();
    
    // Focus the window (helps with some browsers)
    printWindow.focus();
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
