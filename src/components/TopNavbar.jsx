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
            <Nav.Link href="#Mission" className="ColorBlack MonospaceFont">Mission</Nav.Link>
            <Nav.Link href="#Technology" className="ColorBlack MonospaceFont">Technology</Nav.Link>
          </Nav>
          {/* Aligned with the right side of the navbar */}
          <Nav>
            <a href="#Team" className="nav-link ColorBlack MonospaceFont">Team</a>
            <a href="#Contact" className="nav-link ColorBlack MonospaceFont">Contact</a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNavbar;
