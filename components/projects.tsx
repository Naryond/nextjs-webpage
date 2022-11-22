import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header>Idea Board (Clearscore Tech Test)</Card.Header>
            <Card.Body>
              <Link href="https://github.com/Naryond/nextjs-ideaboard">
                <Card.Img src={'https://i.ibb.co/jg84R3K/Ideaboard.png'} />
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>API Rest with Firebase Authentication</Card.Header>
            <Card.Body>
              <Link href="https://github.com/Naryond/nextjs-APIRestwithFirebaseAuth">
                <Card.Img src={'https://i.ibb.co/h8zJV3c/Firebasedb.png'} />
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Random Quotes Generator</Card.Header>
            <Card.Body>
              <Link href="https://github.com/Naryond/nextjs-randomquotesgen">
                <Card.Img src={'https://i.ibb.co/NK7nkdQ/Quotesgen.png'} />
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
