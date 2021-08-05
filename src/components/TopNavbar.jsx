import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';


class TopNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" className="" variant="light" sticky="" id="bluemeadow-navbar">
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Navbar.Brand href="/" className="MonospaceFont"><span className="BMColor SectionHeaderText">BLUE MEADOW</span></Navbar.Brand> */}
            <Nav className="ml-auto">
              <Nav.Link href="#Mission" className="ColorBlack MonospaceFont">MISSION</Nav.Link>
              <Nav.Link href="#Technology" className="ColorBlack MonospaceFont">TECHNOLOGY</Nav.Link>
              <Nav.Link href="#Team" className="ColorBlack MonospaceFont">TEAM</Nav.Link>
              <Nav.Link href="#Contact" className="ColorBlack MonospaceFont">CONTACT</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNavbar;
