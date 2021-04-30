import React from 'react';
// import logo from './logo.svg';

import './css/style.css';

import TopNavbar from './components/TopNavbar';
import Footer from './components/Footer';
import { OpportunitySection, ChallengeSection } from './components/MissionSection';
import TechnologySection from './components/TechnologySection';
import TeamSection from './components/TeamSection';
import BannerSection from './components/BannerSection';
import ContactSection from './components/ContactSection';


function App() {
  return (
    <div className="App">
      <TopNavbar></TopNavbar>
      <BannerSection></BannerSection>
      <OpportunitySection></OpportunitySection>
      <ChallengeSection></ChallengeSection>
      <TechnologySection></TechnologySection>
      <TeamSection></TeamSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
