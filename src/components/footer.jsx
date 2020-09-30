import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';


class Footer extends Component {
  render() {
    return (
      <Container fluid>
        <footer className="page-footer pt-1 pb-1" id="bluemeadow-footer">
          <div className="text-center FontMonospace">© 2020 BLUE MEADOW</div>
        </footer>
      </Container>
    );
  }
};

export default Footer;
