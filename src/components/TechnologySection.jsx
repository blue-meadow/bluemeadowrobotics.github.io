import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import { Card, Row, Col } from 'react-bootstrap'


class TechnologySection extends Component {
  render() {
    return (
      <Container fluid className="BackgroundGray">
        <a id="Technology"></a>
        <Container className="pt-5 pb-5">
          <Row className="">
            <p className="SectionHeaderText MonospaceFont BMColor pl-3 AnimateOnScroll animate__animated animate__fadeInUp">OUR TECHNOLOGY</p>
          </Row>
          <Row>
            <Col>
              <Card className="CardWithoutBorder pt-3">
                <p className="BMSubtitleText">
                  Blue Meadow is developing a low-cost, robotic monitoring system for seaweed farms.
                </p>
              </Card>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col xs={12} md={7}>
              <img className="img-fluid" src="images/Wireframe.svg"></img>
            </Col>
            <Col xs={12} md={5} className="my-auto">
              <Card className="CardWithoutBorder">
                <p className="MonospaceFont SectionHeaderText BMColor">AUTONOMOUS ROBOT</p>
                <p className="TechBodyText">
                  Our robot collects images and sensor data across the farm. It can move laterally
                  and vertically to build up a 3D profile of water conditions. Solar charging, remote data upload,
                  and biofouling control allows it to stay on the farm indefinitely.
                </p>
              </Card>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col xs={12} md={7}>
              <img className="img-fluid" src="images/farmview2.png"></img>
            </Col>
            <Col xs={12} md={5} className="my-auto">
              <Card className="CardWithoutBorder">
                <p className="MonospaceFont SectionHeaderText BMColor pt-3">DATA PLATFORM</p>
                <p className="TechBodyText">
                  Our web dashboard allows farmers to keep track of their farm without hauling any
                  equipment out of the water. We are developing analysis tools that
                  can <span className="BMColor">improve yields, reduce labor costs, and
                  quantify the ecosystem services provided by farms.</span>
                </p>
              </Card>
            </Col>
          </Row>
          <Row className="pt-5 mt-5 pb-5">
            <Col xs={0} md={2}></Col>
            <Col xs={12} md={8}>
              <Card className="AnimateOnScroll">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p className="SectionBodyText">
                      {' '}
                      The central challenge of ocean farming is that our “soil” turns over a thousand times a day,
                      and we can't see what we grow. This means we need embedded sensors in our farms and have to
                      deploy autonomous underwater “fish” to keep an eye on our crops. We need technology to track
                      underwater weather.{' '}
                    </p>
                    <footer className="blockquote-footer BodyFont">
                      Bren Smith (Founder of GreenWave) in <cite title="Source Title">Eat Like a Fish</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={0} md={2}></Col>
          </Row>
        </Container>
      </Container>
    );
  }
};

export default TechnologySection;
