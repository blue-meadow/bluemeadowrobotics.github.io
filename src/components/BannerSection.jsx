import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';


class BannerSection extends Component {
  render() {
    return (
      <Container fluid style={{height: "100vh"}}>
        {/* <img className="img-fluid" src="images/Banner2.svg"></img> */}
        <Container className="pt-5 pb-5">
          <Row>
            <Col>
            <div className="responsive-container-916 animate__animated animate__fadeIn">
              <img src="images/auv_render.png" className="img-fluid"></img>
            </div>
            </Col>
          </Row>
          <a id="Mission"></a>
          <Row className="pt-5">
            <Col>
              <p className="ColorMeadowBlue BlueMeadowTitle MonospaceFont animate__animated animate__fadeIn">
                Blue Meadow
              </p>
              <p className="HeaderFont animate__animated animate__fadeIn animate__slower">
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
