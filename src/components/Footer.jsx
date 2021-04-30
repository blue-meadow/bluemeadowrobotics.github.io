import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';


class Footer extends Component {
  render() {
    return (
      <Container fluid className="BackgroundGray">
        <footer className="page-footer pt-3 pb-3" id="bluemeadow-footer">
          <div className="text-center MonospaceFont AnimateOnScroll">© 2021 BLUE MEADOW, INC</div>
        </footer>
      </Container>
    );
  }
};

export default Footer;
