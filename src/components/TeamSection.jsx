import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';


class TeamSection extends Component {
  render() {
    return (
      <Container fluid className="background-gray">
        <a id="Team"></a>
        <Container className="pt-5 pb-5">
          <Row className="">
            <Col xs={0} md={2}></Col>
            <Col xs={0} md={8}>
              <p className="section-header-text monospace-font bm-blue-color AnimateOnScroll animate__animated animate__fadeIn">TEAM</p>
            </Col>
            <Col xs={0} md={2}></Col>
          </Row>
          <Row className="pt-3">
            <Col xs={0} md={2}></Col>
            <Col xs={8} md={3} className="my-auto mx-auto">
              <div className="">
                <img className="img-fluid rounded responsive-headshot" variant="top" src="images/team/milo-square.jpg"/>
              </div>
            </Col>
            <Col xs={12} md={6} className="my-auto">
              <Card className="card-borderless" border="">
                <Card.Body>
                  <Card.Title className="bm-blue-color team-card-title">Milo Knowles</Card.Title>
                  <Card.Subtitle className="text-muted pb-3 monospace-font">CEO & Founder</Card.Subtitle>
                  <p className="team-card-text">
                    Milo earned his B.S in Computer Science and Masters in AI at MIT. He's
                    developed computer vision and mapping software at autonomous robotics startups including Skydio, Optimus
                    Ride, Adaviv, and Kespry.
                  </p>
                  <Card.Link href="milo@bluemeadow.ai">milo@bluemeadow.ai</Card.Link>
                  <Card.Link href="https://www.linkedin.com/in/milo-knowles/"><span className="fa fa-linkedin"></span></Card.Link>
                  {/* <Card.Link href="https://twitter.com/milo_knowles"><span className="fa fa-twitter"></span></Card.Link> */}
                  {/* <Card.Link href="https://github.com/miloknowles"><span className="fa fa-github"></span></Card.Link> */}
                  {/* <Card.Link href="https://miloknowles.github.io/">Website</Card.Link> */}
                </Card.Body>
              </Card>
            </Col>
            <Col xs={0} md={1}></Col>
          </Row>
        </Container>
      </Container>
    );
  }
};

export default TeamSection;
