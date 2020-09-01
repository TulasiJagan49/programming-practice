import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';

const NavigationBar = ({ title }) => (
  <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">{title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link active="true" href="https://www.linkedin.com/in/tulasi-jagan-23b183b4/" target="_blank">LinkedIn</Nav.Link>
          <Nav.Link active="true" href="https://github.com/TulasiJagan49/" target="_blank">Github</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <footer style={{
      backgroundColor: "#101010",
      borderTop: "1px solid #E7E7E7",
      textAlign: "center",
      padding: "20px",
      position: "fixed",
      left: "0",
      bottom: "0",
      height: "60px",
      width: "100%",
    }}><p> Copyright &copy; <a href="mailto:jaganmeruga777@gmail.com">jaganmeruga777@gmail.com</a> </p></footer>
  </div>
);

export default NavigationBar;