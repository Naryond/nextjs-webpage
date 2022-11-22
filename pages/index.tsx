import type { NextPage } from 'next';
import Head from 'next/head';
import Projects from '../components/projects';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Giuseppe Valeriani</title>
      </Head>
      <header className="header">
        <article className="lead">
          <p className="text-center">
            I am a Front End Developer based in London (U.K.)
          </p>
          <p className="text-center">
            I can use <strong>JavaScript, React, HTML, CSS, TypeScript</strong>,
            but I can't wait to expand my knowledge.
          </p>
        </article>
      </header>
      <h3 className="center-section">Here some of my projects</h3>
      <section>
        <Projects />
      </section>
    </>
  );
};

export default Home;
