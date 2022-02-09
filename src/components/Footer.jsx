import React from "react";
import { Navbar, Container } from "react-bootstrap";
import LinkedinLogo from '../assets/images/Linkedin.png';

export default function Footer() {
  return (
    <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
      <Container className="justify-content-center">
        <Navbar.Brand>
          <a href="https://www.linkedin.com/in/andres-felipe-paniagua-lema-89236a163/" 
            target="_blank"
            style={{textDecoration: 'none'}}>
            <img src={LinkedinLogo} alt="Linkedin" width={25}/> 
            <span> </span>
          </a>

          Andrés Felipe Paniagua Lema - .Net Developer:
          
          <a className="text-black" href="https://github.com/AndresPaniagua" target="_blank">
          <span> Own Repository </span>
          </a>
          
          © 2022
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
