import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import { Card, Row, Col } from 'react-bootstrap'


class MissionSection extends Component {
  render() {
    return (
      <Container fluid className="background-gray" id="mission-container">
        <a id="Mission"></a>
        <Container className="pt-5 pb-5">
          <Row>
            <Col xs={0} md={2}></Col>
            <Col xs={12} md={8}>
              <p className="section-header-text monospace-font bm-blue-color AnimateOnScroll animate__animated animate__fadeIn">WHY OCEAN FARMING?</p>
              <p className="pt-3 body-text">
                Seaweed, oysters, and other low-trophic crops can provide an abundant source of
                biomass while addressing climate change and restoring coastal ecosystems.
                They require zero inputs to produce, draw down carbon, de-acidify the ocean, and remove excess nutrients.
              </p>
              <p className="pt-3 body-text bm-blue-color">
                Blue Meadow's mission is to build technology that helps regenerative ocean farmers
                accelerate, scale, and measure their impact.
              </p>
            </Col>
            <Col xs={0} md={2}></Col>
          </Row>
        </Container>
      </Container>
    );
  }
};


class OpportunitySection extends Component {
  render() {
    return (
      <Container fluid className="background-white" id="mission-container">
        <a id="Mission"></a>
        <Container className="pt-5 pb-5">
          <Row>
            <Col xs={0} md={2}></Col>
            <Col xs={12} md={8}>
              <Card className="card-borderless pt-3">
                <p className="section-header-text monospace-font bm-blue-color AnimateOnScroll animate__animated animate__fadeIn pt-1">
                OPPORTUNITY
                </p>
                <p className="section-standout-text">
                  Seaweed can mitigate climate change while providing an abundant source of biomass for
                  food, fertilizer, bioplastic, feed, and biofuel.
                </p>
                <p className="pt-3 body-text bm-blue-color">
                  It requires zero inputs to farm, de-acidifies the ocean, removes excess nutrients, and provides habitat.
                </p>
                <p className="text-muted citation-text pt-3 pb-1">
                [1] Godin, Melissa. “The Ocean Farmers Trying to Save the World With Seaweed.” Time. September 4, 2020. https://time.com/5848994/seaweed-climate-change-solution/
                </p>
                {/* <p className="text-muted citation-text pt-3">
                [2] Duarte CM, Wu J, Xiao X, Bruhn A and Krause-Jensen D (2017).
                Can Seaweed Farming Play a Role in Climate Change Mitigation and Adaptation?
                Front. Mar. Sci. 4:100. doi: 10.3389/fmars.2017.00100
                </p> */}
              </Card>
            </Col>
            <Col xs={0} md={2}></Col>
          </Row>
        </Container>
      </Container>
    );
  }
};


class ChallengeSection extends Component {
  render() {
    return (
      <Container fluid className="background-gray">
        <Container className="pt-5 pb-5">
          <Row>
            <Col xs={0} md={2}></Col>
            <Col xs={12} md={8}>
              <Card className="card-borderless pt-3">
                <p className="section-header-text monospace-font bm-blue-color AnimateOnScroll animate__animated animate__fadeIn pt-1">
                  CHALLENGE
                </p>
                <p className="section-standout-text">
                Seaweed farmers need affordable, real-time data on crops and water conditions.
                </p>
                <p className="pt-3 body-text bm-blue-color">
                Seaweed needs a precise balance of light, nutrients, and flow for optimal growth. Detecting disease, fouling, and environmental changes is critical for avoiding losses.
                </p>
                <p className="text-muted citation-text pt-3 pb-1">
                [1] Michael Y. Roleda & Catriona L. Hurd (2019) Seaweed nutrient physiology: application of concepts to aquaculture and bioremediation, Phycologia, 58:5, 552-562. https://doi.org/10.1080/00318884.2019.1622920.
                </p>
              </Card>
            </Col>
            <Col xs={0} md={2}></Col>
          </Row>
        </Container>
      </Container>
    );
  }
};


export { OpportunitySection, ChallengeSection, MissionSection };
