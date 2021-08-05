import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';


// NOTE(milo): If we get more team members, use this vertical card layout.
// class TeamCardIzzy extends Component {
//   render() {
//     return (
//       <Card border="secondary">
//         <Card.Img className="img-fluid pb-1" variant="top" src="images/izzy1_square.jpg" style={{padding: 20}}/>
//         <Card.Body>
//           <Card.Title className="BMColor">Izzy Brand</Card.Title>
//           <Card.Subtitle className="text-muted mb-3 MonospaceFont">CTO & Co-Founder</Card.Subtitle>
//           <Card.Text>
//             Milo earned his B.S in Computer Science and M.Eng in Artificial Intelligence at MIT,
//             where his research focused on robotic perception and computer vision. He has experience
//             developing software for autonomous robots at startups including Skydio, Optimus
//             Ride, Adaviv, and Kespry.
//           </Card.Text>
//             <Card.Link href="izzy@bluemeadow.ai">izzy@bluemeadow.ai</Card.Link>
//             <Card.Link href="https://www.linkedin.com/in/izzybrand/"><span className="fa fa-linkedin"></span></Card.Link>
//             {/* <Card.Link href="https://twitter.com/milo_knowles"><span className="fa fa-twitter"></span></Card.Link> */}
//             <Card.Link href="https://github.com/IzzyBrand"><span className="fa fa-github"></span></Card.Link>
//             <Card.Link href="https://izzybrand.com/">Website</Card.Link>
//         </Card.Body>
//       </Card>
//     );
//   }
// };


class TeamCardMilo extends Component {
  render() {
    return (
      <Row className="pt-3">
        <Col xs={0} md={2}></Col>
        <Col xs={12} md={3} className="my-auto">
          <div className="">
            <img className="img-fluid pb-1" variant="top" src="images/milo-square.png" style={{padding: 0}}/>
          </div>
        </Col>
        <Col xs={12} md={6} className="my-auto">
          <Card className="CardWithoutBorder" border="">
          <Card.Body>
            <Card.Title className="BMColor TeamCardTitle">Milo Knowles</Card.Title>
            <Card.Subtitle className="text-muted pb-3 MonospaceFont">CEO & Co-Founder</Card.Subtitle>
            <p className="TeamCardText">
              Milo earned his B.S in Computer Science and Masters in AI at MIT. He's
              developed computer vision and mapping software at autonomous robotics startups including Skydio, Optimus
              Ride, Adaviv, and Kespry.
            </p>
            {/* where his research focused on robotic perception, state estimation, and learning. */}
            <Card.Link href="milo@bluemeadow.ai">milo@bluemeadow.ai</Card.Link>
            <Card.Link href="https://www.linkedin.com/in/milo-knowles/"><span className="fa fa-linkedin"></span></Card.Link>
            {/* <Card.Link href="https://twitter.com/milo_knowles"><span className="fa fa-twitter"></span></Card.Link> */}
            <Card.Link href="https://github.com/miloknowles"><span className="fa fa-github"></span></Card.Link>
            <Card.Link href="https://miloknowles.github.io/">Website</Card.Link>
          </Card.Body>
        </Card>
        </Col>
        <Col xs={0} md={1}></Col>
      </Row>
    );
  }
};


class TeamCardIzzy extends Component {
  render() {
    return (
      <Row className="pt-3 pb-3">
        <Col xs={0} md={2}></Col>
        <Col xs={12} md={3} className="my-auto">
          <div className="">
            <img className="img-fluid pb-1" variant="top" src="images/izzy-square.jpg" style={{padding: 0}}/>
          </div>
        </Col>
        <Col xs={12} md={6} className="my-auto">
          <Card className="CardWithoutBorder" border="">
          <Card.Body>
            <Card.Title className="BMColor TeamCardTitle">Isaiah Brand</Card.Title>
            <Card.Subtitle className="text-muted pb-3 MonospaceFont">CTO & Co-Founder</Card.Subtitle>
            <p className="TeamCardText">
              Izzy completed a B.S in Applied Math and Computer Science at Brown, and
              a Masters in AI at MIT. His industry robotics experience includes multi-agent thermalling
              with unmanned gliders (Microsoft Research), wind estimation and motion planning for drones (Skydio)
              and autonomous agricultural surveying (Greensight Agronomics).
            </p>
            {/*where his research focused on vision, reinforcement learning, and motion planning.*/}
            <Card.Link href="izzy@bluemeadow.ai">izzy@bluemeadow.ai</Card.Link>
            <Card.Link href="https://www.linkedin.com/in/izzybrand/"><span className="fa fa-linkedin"></span></Card.Link>
            <Card.Link href="https://github.com/IzzyBrand"><span className="fa fa-github"></span></Card.Link>
            {/* <Card.Link href="https://izzybrand.com/">Website</Card.Link> */}
          </Card.Body>
        </Card>
        </Col>
        <Col xs={0} md={1}></Col>
      </Row>
    );
  }
};


class TeamSection extends Component {
  render() {
    return (
      <Container fluid className="BackgroundGray">
        <a id="Team"></a>
        <Container className="pt-5 pb-5">
          <Row className="">
            <p className="SectionHeaderText MonospaceFont BMColor pl-3 AnimateOnScroll animate__animated animate__fadeInUp">OUR TEAM</p>
          </Row>
          <TeamCardMilo></TeamCardMilo>
          <TeamCardIzzy></TeamCardIzzy>
        </Container>
      </Container>
    );
  }
};

export default TeamSection;
