import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand>Giuseppe Valeriani</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarmenu" />
        <Navbar.Collapse id="navbarmenu">
          <Nav className="ms-auto">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
