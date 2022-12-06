import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="d-md-flex">
      <div className="row mt-5 justify-content-around align-items-center">
        <p className="col">
          I am a self taught Front Edn Developer. I have had the help of a
          mentor for several months. I focussed on learning{' '}
          <strong>JavaScript’s </strong>
          fundamentals and moving primarily to <strong>React</strong>. With it I
          build a few projects, mostly on <strong>Next JS</strong>, that involve
          the use and understanding of{' '}
          <strong>Bootstrap, Firebase, React-Hook-Form, Sanity, NodeJS</strong>{' '}
          and some other functional tools such <strong>GitHub</strong> and{' '}
          <strong>Trello</strong>.
        </p>
        <p>
          I am also determined to grow as a developer and as value for the
          company. I will keep studying the frameworks I am going to work with
          for better understanding and knowledge and the new technologies that
          might be required using in order to perform the tasks assigned.
        </p>
      </div>
    </Container>
  );
};

export default About;
