import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import { TeamCardMilo, TeamCardIzzy } from './TeamCard';


class TeamSection extends Component {
  render() {
    return (
      <Container fluid>
        <a id="Team"></a>
        <Container className="pt-5 pb-5">
          <Row className="">
            <p className="SectionHeader MonospaceFont ColorMeadowBlue pl-3 AnimateOnScroll">OUR TEAM</p>
          </Row>
          <Row className="pt-5">
            <Col xs={0} md={2}></Col>
            <Col xs={12} md={4}>
              <TeamCardMilo></TeamCardMilo>
            </Col>
            <Col xs={12} md={4}>
              <TeamCardIzzy></TeamCardIzzy>
            </Col>
            <Col xs={0} md={2}></Col>
          </Row>
        </Container>
      </Container>
    );
  }
};

export default TeamSection;
