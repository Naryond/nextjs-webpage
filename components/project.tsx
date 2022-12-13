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
    <Card className="dimension">
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        <Card.Img src={image} />
        <Card.Text>{description}</Card.Text>
        <Card.Text>Technologies used: {technologies}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link target="_blank" href={githubLink}>
          GitHub Repo
        </Card.Link>
        <Card.Link target="_blank" href={liveAppLink}>
          Live App
        </Card.Link>
      </Card.Footer>
    </Card>
  );
};

export default Project;
