import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Project from './project';

// Pictures are 600 x 375 px

const projectsList = [
  {
    header: 'Idea Board (Clearscore Tech Test)',
    link: 'https://github.com/Naryond/nextjs-ideaboard',
    image: 'https://i.ibb.co/jg84R3K/Ideaboard.png',
    technologies: 'ReactJS, NextJS, TypeScript, Uuidv4 (random ID generator)',
    description:
      'This is the ClearScore Tech Test focused to build an Idea Board with tiles the user can easily create, erase, modify.',
  },
  {
    header: 'API Rest with Firebase Authentication',
    link: 'https://github.com/Naryond/nextjs-APIRestwithFirebaseAuth',
    image: 'https://i.ibb.co/h8zJV3c/Firebasedb.png',
    technologies:
      'ReactJS, NextJS, TypeScript, API Rest, Firebase, React Hook Form, NextRouter, Bootstrap, ChartJS',
    description:
      'Website authenticated with Firebase that holds a GitHub Users Search Bar',
  },
  {
    header: 'Random Quotes Generator',
    link: 'https://github.com/Naryond/nextjs-randomquotesgen',
    image: 'https://i.ibb.co/NK7nkdQ/Quotesgen.png',
    technologies: 'ReactJs, NextJs, TypeScript, API Rest',
    description: 'Simple rendering of an API Rest call on website',
  },
];

const Projects = () => {
  return (
    <Container>
      <Row>
        {projectsList.map((project) => {
          return (
            <Col key={project.header}>
              <Project
                header={project.header}
                link={project.link}
                image={project.image}
                technologies={project.technologies}
                description={project.description}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Projects;
