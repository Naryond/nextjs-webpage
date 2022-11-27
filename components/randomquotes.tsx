import React from 'react';
import Link from 'next/link';
import { Card, Col } from 'react-bootstrap';

const RandomQuotes = () => {
  return (
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
  );
};

export default RandomQuotes;
