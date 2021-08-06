import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';


class BannerSection extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     page_fill_height: null
  //   };
  // };

  // Do some math to make sure the banner covers exactly the screen (minus navbar).
  // componentDidMount() {
  //   const viewportHeight = window.innerHeight || document.body.clientHeight;
  //   var maybeNavbar = document.getElementById("bluemeadow-navbar");

  //   if (maybeNavbar) {
  //     const navbarHeight = maybeNavbar.scrollHeight || maybeNavbar.offsetHeight;
  //     this.setState({
  //       page_fill_height: viewportHeight - navbarHeight
  //     });
  //   }
  // }

  render() {
    // If height couldn't be computed, fill entire screen. This looks almost as good, but pushes
    // the next section slightly below the bottom of the screen.
    // const fillHeight = this.state.page_fill_height ? `${this.state.page_fill_height}px`: "100vh";

    return (
      <Container fluid id="banner-image-container">
        <div id="banner-placeholder-div">
        </div>
      </Container>
    );
  }
}

export default BannerSection;
