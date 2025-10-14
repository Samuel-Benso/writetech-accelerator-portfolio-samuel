import React, { useState, useRef, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import Resume from '../Resume';
import styles from './styles.module.css';

const ResumeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const resumeRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadResume = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!resumeRef.current || isDownloading) return;
    
    setIsDownloading(true);
    
    try {
      const element = resumeRef.current;
      
      // Create a temporary container for the resume
      const container = document.createElement('div');
      container.style.position = 'fixed';
      container.style.left = '0';
      container.style.top = '0';
      container.style.width = '210mm';
      container.style.padding = '20mm';
      container.style.background = 'white';
      container.style.zIndex = '10000';
      container.style.boxSizing = 'border-box';
      container.style.visibility = 'hidden'; // Hide the container
      
      // Add a style element to control the print layout
      const style = document.createElement('style');
      style.textContent = `
        @page { margin: 0; }
        body { margin: 0; padding: 0; }
        * { box-sizing: border-box; }
        .resume-section { 
          page-break-inside: avoid;
          margin-bottom: 1rem;
        }
        h2, h3, h4, p, ul, li {
          margin-top: 0.25rem;
          margin-bottom: 0.25rem;
        }
      `;
      document.head.appendChild(style);
           
      // Clone the resume content
      const clone = element.cloneNode(true);
      clone.style.all = 'revert';
      clone.style.width = '100%';
      clone.style.height = 'auto';
      clone.style.padding = '0';
      clone.style.margin = '0';
      
      // Add to container and document
      container.appendChild(clone);
      document.body.appendChild(container);
      
      try {
        // Initialize PDF
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });
        
        // Set margins (in mm)
        const margin = 20;
        const pageWidth = 210 - (2 * margin);
        const pageHeight = 297 - (2 * margin);
        
        // Function to capture the entire resume in two pages
        const captureResume = async () => {
          // First, get the total height of the resume
          container.style.visibility = 'visible';
          container.style.height = 'auto';
          container.style.overflow = 'visible';
          
          // Wait for the browser to render the content
          await new Promise(resolve => setTimeout(resolve, 100));
          
          const totalHeight = clone.scrollHeight;
          const pageHeight = 1122; // A4 height in pixels at 96 DPI (297mm)
          const firstPageHeight = pageHeight * 0.9; // Leave some margin
          
          // Capture first page (top portion)
          let canvas1 = await html2canvas(clone, {
            scale: 2,
            useCORS: true,
            logging: true,
            backgroundColor: '#ffffff',
            height: firstPageHeight,
            windowHeight: firstPageHeight,
            y: 0,
            scrollY: 0,
            onclone: (clonedDoc) => {
              // Ensure the cloned document has proper styles
              const style = document.createElement('style');
              style.textContent = `
                @page { margin: 0; }
                body { margin: 0; padding: 0; }
                * { box-sizing: border-box; }
                .resume-section { 
                  page-break-inside: avoid;
                  margin-bottom: 0.75rem;
                }
                h2, h3, h4, p, ul, li {
                  margin-top: 0.25rem;
                  margin-bottom: 0.25rem;
                }
              `;
              clonedDoc.head.appendChild(style);
            }
          });
          
          // Add first page to PDF
          const imgWidth1 = pageWidth;
          const imgHeight1 = (canvas1.height * imgWidth1) / canvas1.width;
          
          pdf.addImage(
            canvas1.toDataURL('image/png', 1.0),
            'PNG',
            margin,
            margin,
            imgWidth1,
            imgHeight1
          );
          
          // Add second page if needed
          if (totalHeight > firstPageHeight) {
            pdf.addPage();
            
            // Capture second page (bottom portion)
            const canvas2 = await html2canvas(clone, {
              scale: 2,
              useCORS: true,
              logging: true,
              backgroundColor: '#ffffff',
              height: totalHeight - firstPageHeight,
              windowHeight: totalHeight - firstPageHeight,
              y: firstPageHeight,
              scrollY: firstPageHeight,
              onclone: (clonedDoc) => {
                const style = document.createElement('style');
                style.textContent = `
                  @page { margin: 0; }
                  body { margin: 0; padding: 0; }
                  * { box-sizing: border-box; }
                `;
                clonedDoc.head.appendChild(style);
              }
            });
            
            // Add second page to PDF
            const imgWidth2 = pageWidth;
            const imgHeight2 = (canvas2.height * imgWidth2) / canvas2.width;
            
            pdf.addImage(
              canvas2.toDataURL('image/png', 1.0),
              'PNG',
              margin,
              margin,
              imgWidth2,
              imgHeight2
            );
          }
        };
        
        // Start capturing the resume in two pages
        await captureResume();
        
        // Save the PDF
        pdf.save('Samuel_Benson_Resume.pdf');
        
      } finally {
        // Clean up
        document.body.removeChild(container);
        // Remove the style element we added
        if (style && style.parentNode) {
          style.parentNode.removeChild(style);
        }
      }
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('An error occurred while generating the PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
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
                  disabled={isDownloading}
                >
                  {isDownloading ? 'Generating...' : (
                    <>
                      <span>📄</span> Download PDF
                    </>
                  )}
                </button>
                <button 
                  onClick={closeModal}
                  className={styles.closeButton}
                  aria-label="Close modal"
                >
                  &times;
                </button>
              </div>
            </div>
            <div className={styles.modalBody}>
              <div ref={resumeRef} className={styles.resumeContainer}>
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
