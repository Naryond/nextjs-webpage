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
      <nav className="navbar">
        <div className="nav_text"> Giuseppe Valeriani</div>
        <ul className="nav_buttons">
          <li>Home</li>
          <li>Section</li>
          <li>button 1</li>
          <li>button 2</li>
        </ul>
      </nav>
      <header className="header">
        <span className="main_text">You THINK it,</span>
        <span className="main_text">I DEVELOP it.</span>
        <span className="main_subtext">
          It&apos;s EASY! I&apos;m a Front End Developer.
        </span>
      </header>
      <article className="section">
        <br />
        <p className="paragraph">
          I am <strong>Giuseppe Valeriani</strong>, i am based in London (UK)
          and I am learning how to code. I am currently focused on Front End, I
          can use JavaScript, React, HTML, CSS, TypeScript, but I am always
          willing to expand my knowledge.
        </p>
      </article>
      <section>
        <h3 className="project_section">Here some of my projects</h3>
        <div className="boxes">
          <Link href="https://nextjs-ideaboard.vercel.app/">
            <Image src={ideaboard} alt="" width={240} height={160} />
          </Link>
          <Link href="https://nextjs-database-complete.vercel.app/">
            <Image src={firebasedb} alt="" width={240} height={160} />
          </Link>
          <Link href="https://nextjs-randomquotesgen.vercel.app/">
            <Image src={quotesgen} alt="" width={240} height={160} />
          </Link>
        </div>
      </section>
      <footer className="footer">
        <a href="giuggey85@gmail.com" target="_blank" className="links">
          E-mail
        </a>
        <a href="https://github.com/Naryond" className="links">
          Git Hub
        </a>
        <a
          href="https://www.linkedin.com/in/giuseppe-valeriani-4b9995115/"
          className="links"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
};

export default Home;
