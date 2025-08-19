import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        I make documentation simple and clear. Whether it is onboarding guides, API docs, or UI/UX specs, I structure content so anyone can get started quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/focus.svg').default,
    description: (
      <>
        I handle the documentation details: structure, clarity, and usability, so teams can focus on building. Just like moving files into a docs folder, I make sure content fits seamlessly into the workflow.
      </>
    ),
  },
  {
    title: 'Powered by Experience',
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>
        With a background in React-based tools and modern doc frameworks, I extend and customize documentation systems while keeping consistency across headers, footers, and overall style.
      </>
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
