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
        <Card.Footer>Technologies used: {technologies}</Card.Footer>
        <Card.Text>{description}</Card.Text>
        <Card.Link href={githubLink}>GitHub Repo</Card.Link>
        <Card.Link href={liveAppLink}>Live App</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Project;
