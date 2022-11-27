import React from 'react';
import Link from 'next/link';
import { Card, Col } from 'react-bootstrap';

const Firebase = () => {
  return (
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
  );
};

export default Firebase;
