import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';


class BannerSection extends Component {
  render() {
    return (
      <Container fluid style={{height: "100vh"}}>
        {/* <img className="img-fluid" src="images/Banner2.svg"></img> */}
        {/* <div className="responsive-container-1-2 animate__animated animate__fadeIn animate__slow">
          <img src="images/farmsim10.png" className="img-fluid"></img>
        </div> */}
        <Container className="pt-3 pb-5 my-auto">
          <Row>
            <Col>
            <div className="responsive-container-1-3 animate__animated animate__fadeIn animate__slow">
              <img src="images/usv_render_side.png" className="img-fluid"></img>
            </div>
            </Col>
          </Row>
          <a id="Mission"></a>
          <Row className="pt-5 pb-5">
            <Col>
              <p className="BMColor BMTitleText MonospaceFont animate__animated animate__fadeIn">
                Blue Meadow
              </p>
              <p className="BMSubtitleText animate__animated animate__fadeIn animate__slower">
                Intelligent, autonomous robots for regenerative ocean farming
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
            <div className="responsive-container-1-3 animate__animated animate__fadeIn animate__slow">
              <img src="images/farmsim10.png" className="img-fluid"></img>
            </div>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default BannerSection;
