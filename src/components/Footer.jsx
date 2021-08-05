import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';


class Footer extends Component {
  render() {
    return (
      <Container fluid className="BackgroundWhite">
        <footer className="page-footer pt-3 pb-3" id="bluemeadow-footer">
          <div className="text-center MonospaceFont AnimateOnScroll animate__animated animate__fadeInUp">
            <small>© 2021 BLUE MEADOW, INC</small>
        </div>
        </footer>
      </Container>
    );
  }
};

export default Footer;
