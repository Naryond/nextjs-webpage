import React from 'react';
import { Container, Row } from 'react-bootstrap';
import IdeaBoard from './ideaboard';
import Firebase from './firebase';
import RandomQuotes from './randomquotes';

// Pictures are 600 x 375 px

const Projects = () => {
  return (
    <Container>
      <Row>
        <IdeaBoard />
        <Firebase />
        <RandomQuotes />
      </Row>
    </Container>
  );
};

export default Projects;
