import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '开箱即用',
    description: (
      <>
        基于 Docusaurus 的文档站点骨架，安装依赖后即可本地预览、构建与部署。
      </>
    ),
  },
  {
    title: '专注内容',
    description: (
      <>
        在 <code>docs</code> 目录下写 Markdown 即可，站点结构、导航、样式由框架自动处理。
      </>
    ),
  },
  {
    title: '静态产物',
    description: (
      <>
        构建生成纯静态文件，可部署到 GitHub Pages、Nginx、对象存储等任意静态托管。
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
