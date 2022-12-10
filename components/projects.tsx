import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Project from './project';

// Pictures are 600 x 375 px

const Projects = ({ projects }: any) => {
  return (
    <Container>
      <Row>
        {projects.map((project: string[] | any) => {
          return (
            <Col
              className="d-flex align-items-stretch"
              key={project._id}
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                margin: '6px',
                minWidth: '200px',
              }}
            >
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
