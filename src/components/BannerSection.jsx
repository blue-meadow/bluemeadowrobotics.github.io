import React, { Component } from 'react';

import { Container } from 'react-bootstrap';


class BannerSection extends Component {
  render() {
    return (
      <Container fluid id="banner-image-container">
        <div id="banner-placeholder-div">
          <div className="row align-items-center h-100">
            <div className="col-12 mx-auto">
              <p className="text-center my-auto bm-banner-text monospace-font">BLUE MEADOW</p>
              {/* <p className="text-center my-auto bm-subtitle-text monospace-font">Data-driven ocean farming</p> */}
              {/* <img className="mx-auto d-block" src="images/logo.svg" height="200" width="200" /> */}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default BannerSection;
