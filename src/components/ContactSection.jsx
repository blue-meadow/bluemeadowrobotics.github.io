import React, { Component } from 'react';

import { Container, Card, Row, Col } from 'react-bootstrap';


class ContactSection extends Component {
  render() {
    return (
      <Container fluid className="BackgroundGray">
        <a id="Contact"></a>
        <Container className="pt-5 pb-5">
          <Row className="">
            <p className="SectionHeader MonospaceFont ColorMeadowBlue pl-3 AnimateOnScroll">WORK WITH US</p>
          </Row>
          <Row className="">
            <Col xs={0} md={3}></Col>
            <Col xs={12} md={6}>
              <Card className="CardWithoutBorder pt-3">
                {/* <p className="SectionStandoutText">
                  Farmers need an affordable data collection system that can scale to large farms.
                </p> */}
                <p className="pt-3 SectionBodyText">
                  We are actively developing our AUV and surface station, with pilot tests planned for
                  Fall 2021 - Spring 2022. If you're interested in trying out our technology,
                  we'd love to hear from you.
                </p>
                <p className="pt-3 SectionBodyText">
                  We're also looking for roboticists, hardware engineers, marine biologists,
                  and aquaculture experts to add to the team. <span className="ColorMeadowBlue">
                  If you're interested in working at an early-stage, climate-focused robotics
                  startup, please get in touch!</span>
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
