import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ideaboard from '../images/ideaboard.png';
import firebasedb from '../images/firebasedb.png';
import quotesgen from '../images/quotesgen.png';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Giuseppe Valeriani</title>
      </Head>
      <nav>
        <ul className="nav-list">
          <div> Giuseppe Valeriani</div>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </nav>
      <header className="header">
        <span className="main-text">You THINK it,</span>
        <span className="main-text">I DEVELOP it.</span>
        <span className="main-subtext">
          It&apos;s EASY! I&apos;m a Front End Developer.
        </span>
      </header>
      <article className="center-section">
        <p className="paragraph">
          I am <strong>Giuseppe Valeriani</strong>, i am based in London (UK)
          and I am learning how to code. I am currently focused on Front End, I
          can use JavaScript, React, HTML, CSS, TypeScript, but I am always
          willing to expand my knowledge.
        </p>
      </article>
      <h3 className="center-section">Here some of my projects</h3>
      <section className="columns">
        <Link href="https://nextjs-ideaboard.vercel.app/">
          <Image src={ideaboard} alt="" width={240} height={160} />
        </Link>
        <Link href="https://nextjs-database-complete.vercel.app/">
          <Image src={firebasedb} alt="" width={240} height={160} />
        </Link>
        <Link href="https://nextjs-randomquotesgen.vercel.app/">
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
