import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';


class Footer extends Component {
  render() {
    return (
      <Container fluid>
        <footer className="page-footer pt-1 pb-1" id="bluemeadow-footer">
          <div className="text-center FontMonospace">© 2021 BLUE MEADOW, INC</div>
        </footer>
      </Container>
    );
  }
};

export default Footer;
