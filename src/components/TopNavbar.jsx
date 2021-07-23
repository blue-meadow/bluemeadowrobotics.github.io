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
            {/* <Navbar.Brand href="/" className="MonospaceFont"><span className="BMColor">Blue Meadow</span></Navbar.Brand> */}
            <Nav className="ml-auto">
              <Nav.Link href="#Mission" className="ColorBlack MonospaceFont">MISSION</Nav.Link>
              <Nav.Link href="#Technology" className="ColorBlack MonospaceFont">TECHNOLOGY</Nav.Link>
              <Nav.Link href="#Team" className="ColorBlack MonospaceFont">TEAM</Nav.Link>
              <Nav.Link href="#Contact" className="ColorBlack MonospaceFont">CONTACT</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
      // <nav class="nav flex-column" variant="light" className="sticky-top">
      //   <Navbar.Brand href="/" className="MonospaceFont"><span className="BMColor">Blue Meadow</span></Navbar.Brand>
      //   <a href="#Mission" className="nav-link ColorBlack MonospaceFont">> MISSION</a>
      //   <a href="#Technology" className="nav-link ColorBlack MonospaceFont">> TECHNOLOGY</a>
      //   <a href="#Team" className="nav-link ColorBlack MonospaceFont">> TEAM</a>
      //   <a href="#Contact" className="nav-link ColorBlack MonospaceFont">> CONTACT</a>
      // </nav>
    );
  }
}

export default TopNavbar;
