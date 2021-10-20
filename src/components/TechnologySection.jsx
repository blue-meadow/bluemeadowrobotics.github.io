import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import { Card, Row, Col } from 'react-bootstrap'


class TechnologySection extends Component {
  render() {
    return (
      <Container fluid className="background-white">
        <a id="Technology"></a>
        <Container className="pt-5 pb-5">
          <Row>
            <Col>
              <p className="section-standout-text">
                Blue Meadow is developing a platform for data-driven, regenerative ocean farming.
              </p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <p className="section-header-text monospace-font bm-blue-color AnimateOnScroll animate__animated animate__fadeIn">
                HARDWARE PLATFORM
              </p>
            </Col>
          </Row>
          <Row className="pb-3">
            <Col>
              <p className="body-text">
                Our low-cost, autonomous data collection robot monitors water conditions throughout the growing season.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={7}>
              <img className="img-fluid" src="images/topside.png"></img>
            </Col>
            <Col xs={12} md={5} className="my-auto">
              <p className="monospace-font section-header-text bm-blue-color">MAINTENANCE-FREE DEPLOYMENT</p>
              <p className="body-text">
                The system is completely self-sufficient through solar charging, remote data upload, and biofouling mitigation.
              </p>
            </Col>
          </Row>
          <Row className="pt-3 pb-5">
            <Col xs={12} md={7}>
              <img className="img-fluid" src="images/payload.png"></img>
            </Col>
            <Col xs={12} md={5} className="my-auto">
              <p className="monospace-font section-header-text bm-blue-color">VERTICAL PROFILING</p>
              <p className="body-text">
                The robot collects data throughout the water column using a tethered sensor package.
              </p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <p className="section-header-text monospace-font bm-blue-color AnimateOnScroll animate__animated animate__fadeIn">
                SOFTWARE PLATFORM
              </p>
            </Col>
          </Row>
          <Row className="pb-3">
            <Col>
              <p className="body-text">
                Blue Meadow's farmer dashboard visualizes and translates raw data into actionable insights.
              </p>
            </Col>
          </Row>
          <Row className="">
            <Col>
              {/* <img className="img-fluid" src="images/farmview.png"></img> */}
              <img className="img-fluid" src="images/farmview2.png"></img>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} className="">
              <Card className="card-borderless">
                <p className="monospace-font section-header-text bm-blue-color pt-5">PREVENT LOSSES</p>
                <p className="body-text">
                  Receive early warnings for disease, fouling, and other environmental risks.
                </p>
              </Card>
            </Col>
            <Col xs={12} md={4} className="">
              <Card className="card-borderless">
                <p className="monospace-font section-header-text bm-blue-color pt-5">PREDICT & IMPROVE YIELDS</p>
                <p className="body-text">
                  Predict crop growth based on environmental factors at the farm site. Determine the optimal positioning of gear to maximize growth rate.
                </p>
              </Card>
            </Col>
            <Col xs={12} md={4} className="">
              <Card className="card-borderless">
                <p className="monospace-font section-header-text bm-blue-color pt-5">PLAN TASKS</p>
                <p className="body-text">
                  Plan seeding and harvesting times based on current and projected water conditions.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
};

export default TechnologySection;
