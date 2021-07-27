import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import { Card, Row, Col } from 'react-bootstrap'


class OpportunitySection extends Component {
  render() {
    return (
      <Container fluid className="BackgroundGray">
        <a id="Mission"></a>
        <Container className="pt-5 pb-5">
          <Row className="">
            <p className="SectionHeaderText MonospaceFont BMColor pl-3 AnimateOnScroll animate__animated animate__fadeInUp">OPPORTUNITY</p>
          </Row>
          <Row>
            <Col xs={0} md={3}></Col>
            <Col xs={12} md={6}>
              <Card className="CardWithoutBorder pt-3">
                <p className="SectionStandoutText">
                  Seaweed farms can provide abundant, carbon-negative biomass while mitigating climate change.
                </p>
                <p className="pt-3 SectionBodyText BMColor">
                  Seaweed requires no fertilizer, fresh water, or arable land, and benefits the ocean through
                  de-acidification and excess nutrient removal.
                </p>
                <p className="pt-3 SectionBodyText">It's a versatile ingredient that's being used in plant-based proteins, fertilizer, bioplastic,
                animal feed, and biofuel.
                </p>
                <p className="text-muted CitationText pt-3">
                [1] Godin, Melissa. “The Ocean Farmers Trying to Save the World With Seaweed.” Time. September 4, 2020. https://time.com/5848994/seaweed-climate-change-solution/
                </p>
                <p className="text-muted CitationText pt-3">
                [2] Duarte CM, Wu J, Xiao X, Bruhn A and Krause-Jensen D (2017).
                Can Seaweed Farming Play a Role in Climate Change Mitigation and Adaptation?
                Front. Mar. Sci. 4:100. doi: 10.3389/fmars.2017.00100
                </p>
              </Card>
            </Col>
            <Col xs={0} md={3}></Col>
          </Row>
        </Container>
      </Container>
    );
  }
};


class ChallengeSection extends Component {
  render() {
    return (
      <Container fluid className="BackgroundWhite">
        <Container className="pt-5 pb-5">
          <Row className="">
            <p className="SectionHeaderText MonospaceFont BMColor pl-3 AnimateOnScroll animate__animated animate__fadeInUp">CHALLENGE</p>
          </Row>
          <Row>
            <Col xs={0} md={3}></Col>
            <Col xs={12} md={6}>
              <Card className="CardWithoutBorder pt-3">
                <p className="SectionStandoutText">
                  Farmers need affordable, real-time data on crops and water conditions.
                </p>
                <p className="pt-3 SectionBodyText">
                Seaweed requires a precise balance of light, nutrients, and flow speed for optimal growth.
                Early detection of disease, fouling, and environmental changes is critical for avoiding losses.
                </p>
                <p className="text-muted CitationText pt-3">
                [1] Michael Y. Roleda & Catriona L. Hurd (2019) Seaweed nutrient physiology: application of concepts to aquaculture and bioremediation, Phycologia, 58:5, 552-562. https://doi.org/10.1080/00318884.2019.1622920.
                </p>
              </Card>
            </Col>
            <Col xs={0} md={3}></Col>
          </Row>
        </Container>
      </Container>
    );
  }
};


export { OpportunitySection, ChallengeSection };
