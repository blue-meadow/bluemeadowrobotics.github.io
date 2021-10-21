import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import { Card, Row, Col } from 'react-bootstrap'


class TechnologySection extends Component {
  render() {
    return (
      <Container fluid className="background-white">
        <a id="Technology"></a>
        <Container className="pt-5 pb-5">
          {/* <Row>
            <Col>
              <p className="section-standout-text">
                Blue Meadow is developing a platform for data-driven, regenerative ocean farming.
              </p>
            </Col>
          </Row> */}
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
                Our low-cost, vertical profiling system monitors environmental parameters throughout the growing season.
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
                Each unit is completely self-sufficient through solar charging, remote data upload, and biofouling prevention.
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
                The system re-positions underwater sensors using a tether, which allows it to measure the entire water column.
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
                Blue Meadow's web dashboard translates environmental data into actionable insights for farmers.
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
                <p className="monospace-font section-header-text bm-blue-color pt-5">REDUCE LOSSES</p>
                <p className="body-text">
                  Early warnings for disease, fouling, and mortality can help farmers prevent significant losses in revenue.
                </p>
              </Card>
            </Col>
            <Col xs={12} md={4} className="">
              <Card className="card-borderless">
                <p className="monospace-font section-header-text bm-blue-color pt-5">IMPROVE YIELDS</p>
                <p className="body-text">
                  Optimizing the positioning of crops based on environmental parameters enables
                  farmers to maximize productivity on their site.
                </p>
              </Card>
            </Col>
            <Col xs={12} md={4} className="">
              <Card className="card-borderless">
                <p className="monospace-font section-header-text bm-blue-color pt-5">PLAN CRITICAL TASKS</p>
                <p className="body-text">
                  Farmers can leverage forecasts of future crop growth and fouling risk to help guide harvest timing.
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
