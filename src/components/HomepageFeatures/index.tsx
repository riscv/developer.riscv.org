import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Specification Developers',
    Svg: require('@site/static/img/specdev.png').default,
    button:'Start Reading',
    link: '/docs/spec/reference',
    description: (
      <>
        For those contributing to the ISA or another specification. 
      </>
    ),
  },
  {
    title: 'Hardware Developers',
    Svg: require('@site/static/img/hardwaredev.png').default,
    button:'Start Building',
    link: '/docs/hardware/overview',
    description: (
      <>
        For those enabling SoC's and other hardware DevKits. 
      </>
    ),
  },
  {
    title: 'Software Developers',
    Svg: require('@site/static/img/softwaredev.png').default,
    button:'Start compiling',
    link: '/docs/software/overview',
    description: (
      <>
        For System and Application Developers who compile.
      </>
    ),
  },
];

function Feature({title, Svg,button,link, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/*<Svg className={styles.featureSvg} role="img" />*/}
        <img src={Svg} role="img" width="200" height="200"/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={link}>
            {button}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row ">
          <div className="col text--center">
            <Heading as="h1">Get Started</Heading>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
