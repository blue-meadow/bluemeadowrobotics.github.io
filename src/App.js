import React from 'react';
import logo from './logo.svg';

import './css/style.css';

import TopNavbar from './components/top_navbar';
import Footer from './components/footer';
import MissionSection from './components/mission_section';
import TechnologySection from './components/technology_section';
import TeamSection from './components/team_section';
import ContactSection from './components/contact_section';


function App() {
  return (
    <div className="App">
      <TopNavbar></TopNavbar>
      <Footer></Footer>
      <MissionSection></MissionSection>
      <TechnologySection></TechnologySection>
      <TeamSection></TeamSection>
      <ContactSection></ContactSection>
    </div>
  );
}

export default App;
