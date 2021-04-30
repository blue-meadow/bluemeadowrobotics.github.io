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
            <p className="SectionHeader MonospaceFont ColorMeadowBlue pl-3">OUR TECHNOLOGY</p>
          </Row>
          <Row>
            <Col xs={0} md={2}></Col>
            <Col xs={12} md={8}>
              <Card className="CardWithoutBorder pt-3">
                <p className="SectionStandoutText">
                  Blue Meadow is developing low-cost, autonomous robots that monitor
                  ocean farms for the entire growing season.
                </p>
              </Card>
            </Col>
            <Col xs={0} md={2}></Col>
          </Row>
          <Row className="pt-5">
            <Col xs={12} md={7}>
              <img className="img-fluid" src="images/AutonomyDemo.svg"></img>
            </Col>
            <Col xs={12} md={5} className="my-auto">
              <Card className="CardWithoutBorder">
                <p className="MonospaceFont SectionHeader ColorMeadowBlue">UNDERWATER ROBOT</p>
                <p className="SectionBodyText">
                  An autonomous underwater vehicle (AUV) collects images and sensor data across the farm.
                  Our autonomy software enables it to navigate, avoid obstacles, and complete complex
                  tasks.
                </p>
              </Card>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col xs={12} md={7}>
              <img className="img-fluid" src="images/usv_render.png"></img>
            </Col>
            <Col xs={12} md={5} className="my-auto">
              <Card className="CardWithoutBorder">
                <p className="MonospaceFont SectionHeader ColorMeadowBlue pt-3">SURFACE STATION</p>
                <p className="SectionBodyText">
                  The AUV is tethered to a surface station, allowing it to recharge and upload data.
                  The surface station enables long-term deployment of the AUV without maintenance,
                  and uplinks data to the cloud via a cellular or satelite network.
                </p>
              </Card>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col xs={12} md={7}>
              <img className="img-fluid" src="images/platform.png"></img>
            </Col>
            <Col xs={12} md={5} className="my-auto">
              <Card className="CardWithoutBorder">
                <p className="MonospaceFont SectionHeader ColorMeadowBlue pt-3">DATA PLATFORM</p>
                <p className="SectionBodyText">
                  Collected data is visualized through a web application. We are working with
                  farmers to develop data analysis tools that can save time, boost yields, and
                  optimize farm design.
                </p>
              </Card>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col xs={0} md={2}></Col>
            <Col xs={12} md={8}>
              <Card className="">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p className="SectionBodyText">
                      {' '}
                      The central challenge of ocean farming is that our “soil” turns over a thousand times a day,
                      and we can't see what we grow. This means we need embedded sensors in our farms and have to
                      deploy autonomous underwater “fish” to keep an eye on our crops. We need technology to track
                      underwater weather.{' '}
                    </p>
                    <footer className="blockquote-footer">
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
