import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import { Card, Row, Col } from 'react-bootstrap'


class TechnologySection extends Component {
  render() {
    return (
      <Container fluid className="BackgroundWhite">
        <a id="Technology"></a>
        <Container className="pt-5 pb-5">
          <Row className="">
            <p className="SectionHeaderText MonospaceFont BMColor pl-3 AnimateOnScroll animate__animated animate__fadeInUp">OUR TECHNOLOGY</p>
          </Row>
          <Row>
            <Col>
              <Card className="CardWithoutBorder pt-3">
                <p className="BMSubtitleText">
                  Blue Meadow is developing a low-cost, robotic sensor buoy for seaweed farms.
                </p>
              </Card>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col xs={12} md={7}>
              <img className="img-fluid" src="images/wireframe.svg"></img>
            </Col>
            <Col xs={12} md={5} className="my-auto">
              <Card className="CardWithoutBorder">
                <p className="MonospaceFont SectionHeaderText BMColor">MOBILE SENSING</p>
                <p className="TechBodyText">
                  Unlike a moored sensor buoy, our robot moves around the farm to inspect crops and profile water conditions in 3D.
                </p>
              </Card>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col xs={12} md={7}>
              <img className="img-fluid" src="images/farmview.png"></img>
            </Col>
            <Col xs={12} md={5} className="my-auto">
              <Card className="CardWithoutBorder">
                <p className="MonospaceFont SectionHeaderText BMColor pt-3">WEB DASHBOARD</p>
                <p className="TechBodyText">
                  Farmers can track growth, analyze data, and view real-time conditions through a web dashboard.
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
