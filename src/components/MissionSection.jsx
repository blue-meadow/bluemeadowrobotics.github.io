import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import { Card, Row, Col } from 'react-bootstrap'


class OpportunitySection extends Component {
  render() {
    return (
      <Container fluid className="BackgroundGray">
        <Container className="pt-5 pb-5">
          <Row className="">
            <p className="SectionHeaderText MonospaceFont BMColor pl-3 AnimateOnScroll animate__animated animate__fadeInUp">OPPORTUNITY</p>
          </Row>
          <Row>
            <Col xs={0} md={3}></Col>
            <Col xs={12} md={6}>
              <Card className="CardWithoutBorder pt-3">
                <p className="SectionStandoutText">
                  Seaweed farms provide abundant, carbon-negative biomass while mitigating climate change.
                </p>
                <p className="pt-3 SectionBodyText">
                  Seaweed requires no fertilizer, fresh water, or arable land, and benefits the ecosystem through
                  de-acidification and excess nutrient removal.
                </p>
                <p className="pt-3 SectionBodyText">It's a versatile ingredient that can be used in plant-based proteins, fertilizer, bioplastic,
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
                {/* <p className="text-muted CitationText pt-3">
                [1] Hoegh-Guldberg, O., et al. (2019). ‘‘The Ocean as a Solution to Climate Change: Five Opportunities for Action.’’
                Report. Washington, DC: World Resources Institute.
                </p>
                <p className="text-muted CitationText">
                [2] Jones, R. (October, 2017). “Aquaculture Could Feed The World And Protect The Planet - If We Get It Right.” The Nature Conservancy.
                </p>
                <p className="text-muted CitationText">
                [3] Woods Hole Oceanographic Institute (WHOI). (January, 2007). Sustainable Marine
                Aquaculture: Fulfilling The Promise; Managing The Risks. Report of the Marine
                Aquaculture Task Force.
                </p> */}
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
