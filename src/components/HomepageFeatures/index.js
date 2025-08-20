import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'My Documentation Approach',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        I turn complex tools into clear, step-by-step guides. From API references to onboarding flows, I write so users don’t just read—they understand and act.</>
    ),
  },
  {
    title: 'What I Bring to the Table',
    Svg: require('@site/static/img/focus.svg').default,
    description: (
      <>
        I do the heavy lifting on clarity, structure, and usability. Your team ships faster while I make sure the docs fit smoothly into the workflow. </>
    ),
  },
  {
    title: 'Why Teams Trust My Docs',
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>
       I blend technical know-how with clean design. With experience in React and modern doc frameworks, I build systems that stay consistent, scalable, and user-friendly. </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
