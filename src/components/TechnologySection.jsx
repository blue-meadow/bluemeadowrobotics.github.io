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
              {/* <p className="section-header-text monospace-font bm-blue-color AnimateOnScroll animate__animated animate__fadeIn">TECHNOLOGY</p> */}
              <p className="section-standout-text">
                Blue Meadow is developing a platform for data-driven ocean farming.
              </p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <p className="section-header-text monospace-font bm-blue-color AnimateOnScroll animate__animated animate__fadeIn">
                DATA COLLECTION ROBOT
              </p>
            </Col>
          </Row>
          <Row className="pb-3">
            <Col>
              <p className="body-text">
                Our data collection robot monitors water conditions throughout the growing season.
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
                The robot profiles the entire water column using its tethered sensor package.
              </p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <p className="section-header-text monospace-font bm-blue-color AnimateOnScroll animate__animated animate__fadeIn">
                FARMER DASHBOARD
              </p>
            </Col>
          </Row>
          <Row className="pb-3">
            <Col>
              <p className="body-text">
                Blue Meadow's farmer dashboard translates raw data into actionable insights.
              </p>
            </Col>
          </Row>
          <Row className="">
            <Col>
              <img className="img-fluid" src="images/farmview.png"></img>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} className="">
              <Card className="card-borderless">
                <p className="monospace-font section-header-text bm-blue-color pt-5">PREDICT AND PREVENT LOSSES</p>
                <p className="body-text">
                  The dashboard notifies farmers when a potential disease, fouling, or mortality risk is detected.
                </p>
              </Card>
            </Col>
            <Col xs={12} md={4} className="">
              <Card className="card-borderless">
                <p className="monospace-font section-header-text bm-blue-color pt-5">IMPROVE CROP YIELDS</p>
                <p className="body-text">
                  Determine the optimal positioning of gear in the water column.
                </p>
              </Card>
            </Col>
            <Col xs={12} md={4} className="">
              <Card className="card-borderless">
                <p className="monospace-font section-header-text bm-blue-color pt-5">PLAN TASKS</p>
                <p className="body-text">
                  Plan seeding, harvesting, and other tasks based on current conditions.
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
