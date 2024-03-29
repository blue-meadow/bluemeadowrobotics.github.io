import React, { Component } from 'react';

import { Container, Card, Row, Col } from 'react-bootstrap';


// https://css-tricks.com/snippets/html/mailto-links/
class ContactSection extends Component {
  render() {
    return (
      <Container fluid className="background-gray">
        <a id="Contact"></a>
        <Container className="pt-5 pb-5">
          <Row className="">
            <Col xs={0} md={2}></Col>
            <Col xs={12} md={8}>
              <p className="section-header-text monospace-font bm-color-blue AnimateOnScroll animate__animated animate__fadeIn">CONTACT</p>
              <p className="pt-3 body-text">
                We're pilot testing on farms in Spring 2022.
                If you're interesting in finding out more, please get in touch!
              </p>
            </Col>
            <Col xs={0} md={2}></Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default ContactSection;
