import type { NextPage } from 'next';
import Head from 'next/head';
import Projects from '../components/projects';
import About from '../components/about';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Giuseppe Valeriani</title>
      </Head>
      <header className="header" id="home">
        <article className="lead">
          <p className="text-center">
            I am a Front End Developer based in London (U.K.)
          </p>
          <p className="text-center">
            I can use{' '}
            <strong>ReactJS, JavaScript, HTML, CSS, TypeScript</strong>, but I
            can't wait to expand my knowledge.
          </p>
        </article>
      </header>
      <h3 className="center-section">Here some of my projects</h3>
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
    </>
  );
};

export default Home;
