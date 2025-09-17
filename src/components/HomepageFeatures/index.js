import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'User-Centered Documentation',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        I transform complex technical concepts into clear, actionable guides that developers actually want to use. Every piece of documentation is crafted with the end-user's journey in mind, reducing support tickets and accelerating product adoption.
      </>
    ),
    metrics: "Reduced onboarding time by 60%"
  },
  {
    title: 'Developer Experience Focus',
    Svg: require('@site/static/img/focus.svg').default,
    description: (
      <>
        I streamline the developer experience by creating comprehensive API references, interactive examples, and seamless integration guides. My documentation doesn't just explain—it empowers developers to build confidently and efficiently.
      </>
    ),
    metrics: "Improved API adoption by 40%"
  },
  {
    title: 'Modern Documentation Systems',
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>
        Leveraging cutting-edge tools like Docusaurus, OpenAPI, and automated workflows, I build scalable documentation ecosystems that grow with your product. Clean code, consistent design, and maintainable architecture are at the core of everything I create.
      </>
    ),
    metrics: "Built 3+ documentation platforms"
  }
];

function Feature({Svg, title, description, metrics}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        {metrics && (
          <div className={styles.metrics}>
            <span className={styles.metricsLabel}>Impact:</span>
            <span className={styles.metricsValue}>{metrics}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
