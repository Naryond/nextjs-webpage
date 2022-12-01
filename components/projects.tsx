import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Project from './project';

// Pictures are 600 x 375 px

const projectsList = [
  {
    header: 'Idea Board (Clearscore Tech Test)',
    image: 'https://i.ibb.co/3SmJ277/ideaboard.png',
    technologies: 'ReactJS, NextJS, TypeScript, Uuidv4 (random ID generator)',
    description:
      'This is the ClearScore Tech Test focused to build an Idea Board with tiles the user can easily create, erase, modify.',
    githubLink: 'https://github.com/Naryond/nextjs-ideaboard',
    liveAppLink: 'https://nextjs-ideaboard.vercel.app/',
  },
  {
    header: 'Firebase Authenticated Website',
    image: 'https://i.ibb.co/tQCq0RB/firebasedb.png',
    technologies:
      'ReactJS, NextJS, TypeScript, API Rest, Firebase, React Hook Form, NextRouter, Bootstrap, ChartJS',
    description:
      'Website authenticated with Firebase that holds a GitHub Users Search Bar',
    githubLink: 'https://github.com/Naryond/nextjs-APIRestwithFirebaseAuth',
    liveAppLink: 'https://nextjs-database-complete.vercel.app/',
  },
  {
    header: 'Random Quotes Generator',
    image: 'https://i.ibb.co/NK7nkdQ/Quotesgen.png',
    technologies: 'ReactJs, NextJs, TypeScript, API Rest',
    description: 'Simple rendering of an API Rest call on website',
    githubLink: 'https://github.com/Naryond/nextjs-randomquotesgen',
    liveAppLink: 'https://nextjs-randomquotesgen.vercel.app/',
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
                image={project.image}
                technologies={project.technologies}
                description={project.description}
                githubLink={project.githubLink}
                liveAppLink={project.liveAppLink}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Projects;
