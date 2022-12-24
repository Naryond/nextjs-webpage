import React from 'react';
import { Card } from 'react-bootstrap';

import type { ProjectType } from '../pages';

const Project = ({
  header,
  image,
  technologies,
  description,
  githubLink,
  liveAppLink,
}: ProjectType) => {
  return (
    <Card>
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        <Card.Img src={image} width={600} height={375} />
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          Technologies used: <strong>{technologies}</strong>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link
          style={{ textDecoration: 'none' }}
          target="_blank"
          href={githubLink}
        >
          GitHub Repo
        </Card.Link>
        <Card.Link
          style={{ textDecoration: 'none' }}
          target="_blank"
          href={liveAppLink}
        >
          Live App
        </Card.Link>
      </Card.Footer>
    </Card>
  );
};

export default Project;
