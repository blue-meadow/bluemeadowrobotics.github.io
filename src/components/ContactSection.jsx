import React, { Component } from 'react';

import { Container, Card, Row, Col } from 'react-bootstrap';


// https://css-tricks.com/snippets/html/mailto-links/
class ContactSection extends Component {
  render() {
    return (
      <Container fluid className="background-white">
        <a id="Contact"></a>
        <Container className="pt-5 pb-5">
          <Row className="">
            <p className="section-header-text monospace-font bm-blue-color pl-3 AnimateOnScroll animate__animated animate__fadeInUp">WORK WITH US</p>
          </Row>
          <Row className="">
            <Col xs={0} md={3}></Col>
            <Col xs={12} md={6}>
              <Card className="card-borderless pt-3">
                <p className="pt-3 body-text">
                  We're working on a hardware prototype, with pilot tests planned for
                  Spring 2022. If you're an ocean farmer, we'd love to hear from you.
                </p>
                <p className="pt-3 body-text">
                  We're also growing our team! <span className="bm-blue-color">
                  If you're interested in working at an early-stage, climate-focused robotics
                  startup, please get in touch.</span>
                </p>
              </Card>
            </Col>
            <Col xs={0} md={3}></Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default ContactSection;
