import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ideaboard from '../images/ideaboard.png';
import firebasedb from '../images/firebasedb.png';
import quotesgen from '../images/quotesgen.png';
import Card from 'react-bootstrap/Card';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Giuseppe Valeriani</title>
      </Head>
      <header className="header">
        <p>I am a Front End Developer based in London (U.K.)</p>
        <article>
          I can use <strong>JavaScript, React, HTML, CSS, TypeScript</strong>,
          but I can't wait to expand my knowledge.
        </article>
      </header>
      <h3 className="center-section">Here some of my projects</h3>
      <section className="columns">
        <Link href="https://github.com/Naryond/nextjs-ideaboard">
          <p>Idea Board (Clearscore Tech Test)</p>
          <Image src={ideaboard} alt="" width={240} height={160} />
        </Link>
        <Link href="https://github.com/Naryond/nextjs-APIRestwithFirebaseAuth">
          <p>API Rest Call with Firebase Authentication</p>
          <Image src={firebasedb} alt="" width={240} height={160} />
        </Link>
        <Link href="https://github.com/Naryond/nextjs-randomquotesgen">
          <p>Random Quotes Generator</p>
          <Image src={quotesgen} alt="" width={240} height={160} />
        </Link>
      </section>
      <footer className="footer">
        <a href="mailto:giuggey85@gmail.com">E-mail</a>
        <a href="https://github.com/Naryond">Git Hub</a>
        <a href="https://www.linkedin.com/in/giuseppe-valeriani-4b9995115/">
          LinkedIn
        </a>
      </footer>
    </div>
  );
};

export default Home;
