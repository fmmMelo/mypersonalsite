/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout>
      <header className={classnames('hero hero-header', styles.heroBanner)}>

        <div className="container-perfil">

          <img href="https://github.com/fmmMelo" src="https://avatars3.githubusercontent.com/u/48595814?s=460&v=4"></img>
          
          <h1 className="hero__title">Felipe Melo Moura</h1>
          
          <div className="perfil-links">

            <a href="https://github.com/fmmMelo" alt="mygithub">GitHub</a>
            <a href="/" alt="myfacebook">Facebook</a>
            <a href="https://www.linkedin.com/in/felipe-melo-a17b39196/" alt="mygilinkedin">LinkedIn</a>
          
           </div>

        </div>

      </header>
    </Layout>
  );
}

export default Home;
