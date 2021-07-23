import React, { Component } from 'react';

import { Container, Card, Row, Col } from 'react-bootstrap';


// https://css-tricks.com/snippets/html/mailto-links/
class ContactSection extends Component {
  render() {
    return (
      <Container fluid className="BackgroundGray">
        <a id="Contact"></a>
        <Container className="pt-5 pb-5">
          <Row className="">
            <p className="SectionHeaderText MonospaceFont BMColor pl-3 AnimateOnScroll animate__animated animate__fadeInUp">WORK WITH US</p>
          </Row>
          <Row className="">
            <Col xs={0} md={3}></Col>
            <Col xs={12} md={6}>
              <Card className="CardWithoutBorder pt-3">
                {/* <p className="SectionStandoutText">
                  Farmers need an affordable data collection system that can scale to large farms.
                </p> */}
                <p className="pt-3 SectionBodyText">
                  We are actively developing our first prototype, with pilot tests planned for
                  Spring 2022. If you're interested in trying it out,
                  we'd love to hear from you.
                </p>
                <p className="pt-3 SectionBodyText">
                  We're also growing our team! <span className="BMColor">
                  If you're interested in working at an early-stage, climate-focused robotics
                  startup, please <a href="mailto:milo@bluemeadow.ai?cc=izzy@bluemeadow.ai">get in touch.</a></span>
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
