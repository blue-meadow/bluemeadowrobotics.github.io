import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class TopNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" className="" variant="light" sticky="" id="bluemeadow-navbar">
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#Mission" className="bm-color-black monospace-font">MISSION</Nav.Link>
              <Nav.Link href="#Technology" className="bm-color-black monospace-font">TECHNOLOGY</Nav.Link>
              <Nav.Link href="#Team" className="bm-color-black monospace-font">TEAM</Nav.Link>
              <Nav.Link href="#Contact" className="bm-color-black monospace-font">CONTACT</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNavbar;
