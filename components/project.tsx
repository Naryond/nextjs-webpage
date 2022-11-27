import React from 'react';
import Link from 'next/link';
import { Card } from 'react-bootstrap';

type ProjectTypes = {
  header: string;
  link: string;
  image: string;
  technologies: string;
  description: string;
};

const Project = ({
  header,
  link,
  image,
  technologies,
  description,
}: ProjectTypes) => {
  return (
    <Card>
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        <Link href={link}>
          <Card.Img src={image} />
        </Link>
        <Card.Footer>Technologies used: {technologies}</Card.Footer>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Project;
