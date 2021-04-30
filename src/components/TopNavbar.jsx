import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class TopNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="BackgroundWhite" variant="light" sticky="top" id="bluemeadow-navbar">
        <Navbar.Brand href="/" className="MonospaceFont">BLUE MEADOW</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Aligned with the left side of the navbar */}
          <Nav className="mr-auto">
            <Nav.Link href="/#mission" className="ColorBlack MonospaceFont">Mission</Nav.Link>
            <Nav.Link href="/#technology" className="ColorBlack MonospaceFont">Technology</Nav.Link>
          </Nav>
          {/* Aligned with the right side of the navbar */}
          <Nav>
          <Nav.Link href="/#team" className="ColorBlack MonospaceFont">Team</Nav.Link>
            <Nav.Link href="/#contact" className="ColorBlack MonospaceFont">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNavbar;
