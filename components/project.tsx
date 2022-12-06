import React from 'react';
import { Card } from 'react-bootstrap';

type ProjectTypes = {
  header: string;
  image: string;
  technologies: string;
  description: string;
  githubLink: string;
  liveAppLink: string;
};

const Project = ({
  header,
  image,
  technologies,
  description,
  githubLink,
  liveAppLink,
}: ProjectTypes) => {
  return (
    <Card>
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
