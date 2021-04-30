import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


class TeamCardMilo extends Component {
  render() {
    return (
      <Card border="secondary">
        <Card.Img variant="top" src="images/milo1.png" style={{padding: 20}}/>
        <Card.Body>
          <Card.Title>Milo Knowles</Card.Title>
          <Card.Subtitle className="text-muted mb-3 MonospaceFont">CEO & Co-Founder</Card.Subtitle>
          <Card.Text>
            Milo earned his B.S in Computer Science and M.Eng in Artificial Intelligence at MIT,
            where his research focused on robotic perception and computer vision. He has experience
            developing software for autonomous robots at startups including Skydio, Optimus
            Ride, Adaviv, and Kespry.
          </Card.Text>
            <Card.Link href="milo@bluemeadow.ai">milo@bluemeadow.ai</Card.Link>
            <Card.Link href="https://www.linkedin.com/in/milo-knowles/"><span className="fa fa-linkedin"></span></Card.Link>
            {/* <Card.Link href="https://twitter.com/milo_knowles"><span className="fa fa-twitter"></span></Card.Link> */}
            <Card.Link href="https://github.com/miloknowles"><span className="fa fa-github"></span></Card.Link>
            <Card.Link href="https://miloknowles.github.io/">Website</Card.Link>
        </Card.Body>
      </Card>
    );
  }
};


class TeamCardIzzy extends Component {
  render() {
    return (
      <Card border="secondary">
        <Card.Img variant="top" src="images/izzy1_square.jpg" style={{padding: 20}}/>
        <Card.Body>
          <Card.Title>Izzy Brand</Card.Title>
          <Card.Subtitle className="text-muted mb-3 MonospaceFont">CTO & Co-Founder</Card.Subtitle>
          <Card.Text>
            Milo earned his B.S in Computer Science and M.Eng in Artificial Intelligence at MIT,
            where his research focused on robotic perception and computer vision. He has experience
            developing software for autonomous robots at startups including Skydio, Optimus
            Ride, Adaviv, and Kespry.
          </Card.Text>
            <Card.Link href="izzy@bluemeadow.ai">izzy@bluemeadow.ai</Card.Link>
            <Card.Link href="https://www.linkedin.com/in/izzybrand/"><span className="fa fa-linkedin"></span></Card.Link>
            {/* <Card.Link href="https://twitter.com/milo_knowles"><span className="fa fa-twitter"></span></Card.Link> */}
            <Card.Link href="https://github.com/IzzyBrand"><span className="fa fa-github"></span></Card.Link>
            <Card.Link href="https://izzybrand.com/">Website</Card.Link>
        </Card.Body>
      </Card>
    );
  }
};


export { TeamCardMilo, TeamCardIzzy }
