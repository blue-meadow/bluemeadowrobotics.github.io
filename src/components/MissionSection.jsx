import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import { Card, Row, Col } from 'react-bootstrap'


class OpportunitySection extends Component {
  render() {
    return (
      <Container fluid className="BackgroundGray">
        <Container className="pt-5 pb-5">
          <Row className="">
            <p className="SectionHeader MonospaceFont ColorMeadowBlue pl-3 AnimateOnScroll">OPPORTUNITY</p>
          </Row>
          <Row>
            <Col xs={0} md={3}></Col>
            <Col xs={12} md={6}>
              <Card className="CardWithoutBorder pt-3">
                <p className="SectionStandoutText">
                  Regenerative ocean farms can provide abundant, carbon-negative food while mitigating climate change.
                </p>
                <p className="pt-3 SectionBodyText">
                Marine aquaculture has been identified as a critical resource for feeding a growing
                population while mitigating climate change. Ocean foods like kelp, oysters, and mussels
                are carbon-negative, and provide vital ecosystem benefits such as ocean
                de-acidification, excess nutrient removal, and carbon sequestration.
                </p>
                <p className="text-muted CitationFont pt-3">
                [1] Hoegh-Guldberg, O., et al. (2019). ‘‘The Ocean as a Solution to Climate Change: Five Opportunities for Action.’’
                Report. Washington, DC: World Resources Institute.
                </p>
                <p className="text-muted CitationFont">
                [2] Jones, R. (October, 2017). “Aquaculture Could Feed The World And Protect The Planet - If We Get It Right.” The Nature Conservancy.
                </p>
                <p className="text-muted CitationFont">
                [3] Woods Hole Oceanographic Institute (WHOI). (January, 2007). Sustainable Marine
                Aquaculture: Fulfilling The Promise; Managing The Risks. Report of the Marine
                Aquaculture Task Force.
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
            <p className="SectionHeader MonospaceFont ColorMeadowBlue pl-3 AnimateOnScroll">CHALLENGE</p>
          </Row>
          <Row>
            <Col xs={0} md={3}></Col>
            <Col xs={12} md={6}>
              <Card className="CardWithoutBorder pt-3">
                <p className="SectionStandoutText">
                  Farmers need an affordable data collection system that can scale to large farms.
                </p>
                <p className="pt-3 SectionBodyText">
                Ocean farms are dynamic, 3D environments that are difficult to observe from the
                surface. Manual inspection of crops, equipment, and conditions across the entire farm is
                infeasible to do on a regular basis. Data collected by static sensors, divers, or
                remote-operated vehicles (ROVs) is typically insufficient, labor-intensive, or expensive to collect.
                </p>
                <p className="text-muted CitationFont pt-3">
                [1] Lovatelli, A., Aguilar-Manjarrez, J. & Soto, D., eds. (2013). Expanding mariculture
                farther offshore: technical, environmental, spatial and governance challenges.
                FAO Technical Workshop, 22–25 March 2010, Orbetello, Italy. FAO Fisheries and Aquaculture
                Proceedings No. 24. Rome, FAO. 73 pp.
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
