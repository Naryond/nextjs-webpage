import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand>Giuseppe Valeriani</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <NavDropdown title="Contacts">
            <NavDropdown.Item href="mailto:giuggey85@gmail.com">
              Email
            </NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/Naryond">
              Git Hub
            </NavDropdown.Item>
            <NavDropdown.Item href="https://www.linkedin.com/in/giuseppe-valeriani-4b9995115/">
              Linked In
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
