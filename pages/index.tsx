import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ideaboard from '../images/ideaboard.png';
import firebasedb from '../images/firebasedb.png';
import quotesgen from '../images/quotesgen.png';
import { Container, Row, Col, Card } from 'react-bootstrap';

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
      <section>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Title>Idea Board (Clearscore Tech Test)</Card.Title>
                <Card.Body>
                  <Link href="https://github.com/Naryond/nextjs-ideaboard">
                    <Card.Img src={'https://i.ibb.co/jg84R3K/Ideaboard.png'} />
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Title>API Rest with Firebase Authentication</Card.Title>
                <Card.Body>
                  <Link href="https://github.com/Naryond/nextjs-APIRestwithFirebaseAuth">
                    <Card.Img src={'https://i.ibb.co/h8zJV3c/Firebasedb.png'} />
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Title>Random Quotes Generator</Card.Title>
                <Card.Body>
                  <Link href="https://github.com/Naryond/nextjs-randomquotesgen">
                    <Card.Img src={'https://i.ibb.co/NK7nkdQ/Quotesgen.png'} />
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
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
