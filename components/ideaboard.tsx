import React from 'react';
import Link from 'next/link';
import { Card, Col } from 'react-bootstrap';

const IdeaBoard = () => {
  return (
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
  );
};

export default IdeaBoard;
