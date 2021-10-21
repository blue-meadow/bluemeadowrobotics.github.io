import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap'


class MissionSection extends Component {
  render() {
    return (
      <Container fluid>
          <Container className="my-auto" id="banner-placeholder-div">
            <Row className="align-items-center h-100">
              <Col xs={0} md={2}></Col>
              <Col xs={12} md={8}>
                <p className="section-header-text monospace-font bm-color-white AnimateOnScroll animate__animated animate__fadeIn">MISSION</p>
                <p className="pt-3 body-text bm-color-white">
                  Seaweed, oysters, and other low-trophic crops can provide an abundant source of
                  biomass while addressing climate change and restoring coastal ecosystems.
                  They require zero inputs to produce, draw down carbon, de-acidify the ocean, and remove excess nutrients.
                </p>
                <p className="pt-3 body-text bm-color-white">
                  Blue Meadow's mission is to build technology that enables regenerative ocean farmers to
                  accelerate, scale, and measure their impact.
                </p>
              </Col>
              <Col xs={0} md={2}></Col>
            </Row>
          </Container>
      </Container>
    );
  }
}


export { MissionSection };
