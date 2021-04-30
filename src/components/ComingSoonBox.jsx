import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';


class ComingSoonPlaceholder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page_fill_height: null
    };
  };

  componentDidMount() {
    const viewportHeight = window.innerHeight || document.body.clientHeight;
    var maybeNavbar = document.getElementById("bluemeadow-navbar");
    var maybeFooter = document.getElementById("bluemeadow-footer");

    if (maybeNavbar && maybeFooter) {
      const navbarHeight = maybeNavbar.scrollHeight || maybeNavbar.offsetHeight;
      const footerHeight = maybeFooter.scrollHeight || maybeFooter.offsetHeight;
      this.setState({
        page_fill_height: viewportHeight - navbarHeight - footerHeight
      });
    }
  }

  render() {
    // If height couldn't be computed, fill entire screen. This looks almost as good, but pushes
    // the footer past the end of the page.
    const fillHeight = this.state.page_fill_height ? `${this.state.page_fill_height}px`: "100vh";

    return (
      <Container className="ComingSoonSection" style={{height: fillHeight}}>
        <div class="row align-items-center h-100">
          <div class="col-12 mx-auto">
            <p className="text-center my-auto">COMING SOON</p>
          </div>
        </div>
      </Container>
    );
  }
};


export default ComingSoonPlaceholder;
