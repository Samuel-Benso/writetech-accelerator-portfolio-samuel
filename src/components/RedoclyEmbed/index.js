import React, { useEffect, useRef } from 'react';
import Layout from '@theme/Layout';

export default function RedoclyEmbed() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Load Redoc script if not already loaded
    if (!window.Redoc) {
      const script = document.createElement('script');
      script.src = 'https://cdn.redocly.com/redoc/v2.5.0/bundles/redoc.standalone.js';
      script.async = true;
      script.onload = () => {
        initRedoc();
      };
      document.head.appendChild(script);
    } else {
      initRedoc();
    }

    function initRedoc() {
      if (containerRef.current && window.Redoc) {
        // Clear any existing content
        containerRef.current.innerHTML = '';
        
        // Initialize Redoc with the API spec
        window.Redoc.init(
          '/chimoney-spec.yaml', // Path to your spec file in static folder
          {
            scrollYOffset: 60,
            theme: {
              colors: {
                primary: {
                  main: '#1DB954'
                }
              },
              typography: {
                fontSize: '14px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }
            }
          },
          containerRef.current
        );
      }
    }

    return () => {
      // Cleanup if needed
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <Layout
      title="Chimoney API Documentation"
      description="Interactive API documentation for Chimoney API built with Redocly"
    >
      <div
        ref={containerRef}
        style={{
          minHeight: '100vh',
          width: '100%'
        }}
      />
    </Layout>
  );
}
