import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import { TeamCardMilo, TeamCardIzzy } from './TeamCard';

class TeamSection extends Component {
  render() {
    return (
      <Container fluid>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <TeamCardMilo></TeamCardMilo>
            </Col>
            <Col xs={12} md={6}>
              <TeamCardIzzy></TeamCardIzzy>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
};

export default TeamSection;
