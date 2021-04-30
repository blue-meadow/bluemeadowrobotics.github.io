import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';


class BannerSection extends Component {
  render() {
    return (
      <Container fluid>
        {/* <img className="img-fluid" src="images/Banner2.svg"></img> */}
        <Container className="pt-5 pb-5">
          <Row>
            <Col>
              <img src="images/Banner2.svg" className="img-fluid"></img>
            </Col>
          </Row>
          <a id="Mission"></a>
          <Row className="mt-5">
            <Col>
              <p className="ColorMeadowBlue BlueMeadowTitle MonospaceFont">
                Blue Meadow
              </p>
              <p className="HeaderFont">
                Intelligent, autonomous robots for regenerative ocean farming
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default BannerSection;
