import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Project from './project';

import type { ListProjectsType } from '../pages';

// Pictures are 600 x 375 px

const Projects = ({ projects }: ListProjectsType) => {
  return (
    <Container>
      <Row className="schema">
        {projects.map((project) => {
          return (
            <Col
              className="d-flex align-items-stretch m-2"
              key={project._id}
              style={{
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
