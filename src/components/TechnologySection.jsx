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
              <Card className="card-borderless pt-3">
                <p className="section-header-text monospace-font bm-blue-color AnimateOnScroll animate__animated animate__fadeIn">TECHNOLOGY</p>
                <p className="section-standout-text">
                  Blue Meadow is developing a data collection robot for ocean farms.
                </p>
              </Card>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col xs={12} md={7}>
              <img className="img-fluid" src="images/wireframe.svg"></img>
            </Col>
            <Col xs={12} md={5} className="my-auto">
              <Card className="card-borderless">
                <p className="monospace-font section-header-text bm-blue-color pt-5">FULL FARM SITE COVERAGE</p>
                <p className="body-text">
                  The robot can capture data at any position and depth on the farm.
                  This avoids the cost and complexity of deploying an array of static sensors.
                </p>
                <p className="monospace-font section-header-text bm-blue-color pt-5">MAINTENANCE-FREE DEPLOYMENT</p>
                <p className="body-text">
                  After each mission, the robot secures itself to a buoy for recharging and data upload.
                  It periodically lifts the sensor payload out of the water to prevent biofouling.
                </p>
              </Card>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <img className="img-fluid" src="images/farmview.png"></img>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} className="my-auto">
              <Card className="card-borderless">
                <p className="monospace-font section-header-text bm-blue-color pt-5">REAL-TIME DASHBOARD</p>
                <p className="body-text">
                  Farmers can track the state of their crops, equipment, and site remotely.
                </p>
              </Card>
            </Col>
            <Col xs={12} md={6} className="my-auto">
              <Card className="card-borderless">
                <p className="monospace-font section-header-text bm-blue-color pt-5">DATA-DRIVEN INSIGHTS</p>
                <p className="body-text">
                  Predictive models of crop growth and fouling help farmers improve yields and plan tasks.
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
