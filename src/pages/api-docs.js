import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { RedocStandalone } from 'redoc';
import styles from './api-docs.module.css';

export default function ApiDocsPage() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout
      title="API Documentation"
      description="Interactive API documentation with Redoc">
      <div className={styles.apiContainer}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <h1>API Documentation</h1>
              <p>Interactive API reference documentation generated from OpenAPI specification.</p>
            </div>
          </div>
        </div>
        <div className={styles.redocContainer}>
          <RedocStandalone 
            specUrl="/chimoney-spec.yaml"
            options={{
              theme: {
                colors: {
                  primary: {
                    main: '#1DB954', // Match your site's primary color
                  },
                },
                typography: {
                  fontFamily: 'var(--ifm-font-family-base)',
                  fontSize: 'var(--ifm-font-size-base)',
                  lineHeight: 'var(--ifm-line-height-base)',
                  code: {
                    fontSize: 'var(--ifm-code-font-size)',
                    fontFamily: 'var(--ifm-font-family-monospace)',
                  },
                  headings: {
                    fontFamily: 'var(--ifm-heading-font-family)',
                    lineHeight: 'var(--ifm-heading-line-height)',
                  },
                },
                sidebar: {
                  backgroundColor: 'var(--ifm-background-surface-color)',
                  textColor: 'var(--ifm-font-color-base)',
                  activeTextColor: 'var(--ifm-color-primary)',
                  groupItems: {
                    activeBackgroundColor: 'var(--ifm-menu-color-background-active)',
                    activeTextColor: 'var(--ifm-menu-color-active)',
                    textTransform: 'uppercase',
                  },
                },
                rightPanel: {
                  backgroundColor: 'var(--ifm-background-surface-color)',
                  textColor: 'var(--ifm-font-color-base)',
                },
              },
              scrollYOffset: 60, // Height of your navbar
              hideDownloadButton: false,
              expandResponses: '200,201,204',
              requiredPropsFirst: true,
              sortPropsAlphabetically: true,
            }}
          />
        </div>
      </div>
    </Layout>
  );
}
