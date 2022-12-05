import type { NextPage } from 'next';
import Head from 'next/head';
import Projects from '../components/projects';
import About from '../components/about';

const Home: NextPage = () => {
  return (
    <div className="p-5">
      <Head>
        <title>Giuseppe Valeriani</title>
      </Head>
      <header className="my-5" id="home">
        <article className="lead">
          <h1 className="text-center my-5">
            I am a Front End Developer based in London
          </h1>
          <h5 className="text-center">
            I am focussed on
            <strong> ReactJS, TypeScript, JavaScript, HTML, CSS </strong>
            and I can't wait to expand my knowledge learning new things.
          </h5>
        </article>
      </header>
      <p className="text-center mb-5">Some of my projects</p>
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
    </div>
  );
};

export default Home;
