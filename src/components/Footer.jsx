import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Footer() {
  return (
    <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
      <Container className="justify-content-center">
        <Navbar.Brand href="#">
          Andrés Felipe Paniagua Lema - .Net Developer:
          <a className="text-black" href="https://github.com/AndresPaniagua">
            Own Repository
          </a>
          © 2022
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
