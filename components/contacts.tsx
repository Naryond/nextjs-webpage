import React from 'react';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

const Contacts = () => {
  return (
    <Container className="d-flex justify-content-around p-4">
      <div>
        <Link
          href="mailto:giuggey85@gmail.com"
          target={'_blank'}
          className="contacts-links"
        >
          <Image
            src="/gmail.png"
            width={40}
            height={40}
            alt="Email link icon"
          />
          Email
        </Link>
      </div>
      <div>
        <Link
          href="https://github.com/Naryond"
          target={'_blank'}
          className="contacts-links"
        >
          <Image
            src="/github-mark.png"
            width={40}
            height={40}
            alt="Github link icon"
          />{' '}
          GitHub
        </Link>
      </div>
      <div>
        <Link
          href="https://www.linkedin.com/in/giuseppe-valeriani-4b9995115/"
          target={'_blank'}
          className="contacts-links"
        >
          <Image
            src="/linkedin.png"
            width={40}
            height={40}
            alt="Linkedin link icon"
          />
          Linked In
        </Link>
      </div>
    </Container>
  );
};

export default Contacts;
