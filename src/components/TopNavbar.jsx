import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';


class TopNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="" variant="light" sticky="" id="bluemeadow-navbar">
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container>
            <Navbar.Brand href="/" className="MonospaceFont"><span className="BMColor">Blue Meadow</span></Navbar.Brand>
            {/* <Nav.Link href="/" className="ColorBlack MonospaceFont"><span className="BMColor mr-auto">Blue Meadow</span></Nav.Link> */}
            <Nav className="ml-auto">
              <Nav.Link href="#Mission" className="ColorBlack MonospaceFont">MISSION</Nav.Link>
              <Nav.Link href="#Technology" className="ColorBlack MonospaceFont">TECHNOLOGY</Nav.Link>
              <a href="#Team" className="nav-link ColorBlack MonospaceFont">TEAM</a>
              <a href="#Contact" className="nav-link ColorBlack MonospaceFont">CONTACT</a>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNavbar;
