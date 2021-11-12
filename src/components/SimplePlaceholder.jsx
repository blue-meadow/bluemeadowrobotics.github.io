import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap'


class SimplePlaceholder extends Component {
  render() {
    return (
      <Container fluid id="coming-soon">
        <Row className="h-100 align-items-center">
          <Col>
            <div>
              <p className="bm-coming-soon-text text-center">CO<sub>2</sub>MING SOON</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
};


export default SimplePlaceholder;
