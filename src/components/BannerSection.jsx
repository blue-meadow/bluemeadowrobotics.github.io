import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';


class BannerSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page_fill_height: null
    };
  };

  // Do some math to make sure the banner covers exactly the screen (minus navbar).
  componentDidMount() {
    const viewportHeight = window.innerHeight || document.body.clientHeight;
    var maybeNavbar = document.getElementById("bluemeadow-navbar");
    var maybeFooter = document.getElementById("bluemeadow-footer");

    if (maybeNavbar && maybeFooter) {
      const navbarHeight = maybeNavbar.scrollHeight || maybeNavbar.offsetHeight;
      // const footerHeight = maybeFooter.scrollHeight || maybeFooter.offsetHeight;
      this.setState({
        page_fill_height: viewportHeight - navbarHeight
      });
    }
  }

  render() {
    // If height couldn't be computed, fill entire screen. This looks almost as good, but pushes
    // the next section slightly below the bottom of the screen.
    const fillHeight = this.state.page_fill_height ? `${this.state.page_fill_height}px`: "100vh";

    return (
      <Container fluid>
        <Container className="pt-3 pb-5 my-auto">
          <Row>
            <Col>
            <div className="responsive-container-1-3 animate__animated animate__fadeIn animate__slow">
              <img src="images/USVRenderWide.png" className="img-fluid"></img>
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
              <img src="images/farmsim12.png" className="img-fluid"></img>
            </div>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default BannerSection;
