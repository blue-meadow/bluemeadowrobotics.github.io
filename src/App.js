import React, { Component } from 'react';
// import logo from './logo.svg';

import './css/style.css';

import TopNavbar from './components/TopNavbar';
import Footer from './components/Footer';
import { OpportunitySection, ChallengeSection } from './components/MissionSection';
import TechnologySection from './components/TechnologySection';
import TeamSection from './components/TeamSection';
// import BannerSection from './components/BannerSection';
import ContactSection from './components/ContactSection';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavbar></TopNavbar>
        {/* <BannerSection></BannerSection> */}
        <OpportunitySection></OpportunitySection>
        <ChallengeSection></ChallengeSection>
        <TechnologySection></TechnologySection>
        <TeamSection></TeamSection>
        <ContactSection></ContactSection>
        <Footer></Footer>
      </div>
    );
  }

  /**
   * Add AnimateOnScroll functionality to some objects. Any HTML object with the "AnimateOnScroll"
   * class name will be triggered when the user scrolls to it. Any other classname with the format
   * animate__* is removed initially, and added upon scroll to trigger.
   */
  componentDidMount() {
    // Get all elements with "AnimateOnScroll" in their classlist. Collect
    const triggerElements = Array.from(document.getElementsByClassName("AnimateOnScroll"));

    triggerElements.forEach(element => {
      const animateClassNames = Array.from(element.classList).filter(s => {
        return s.includes("animate__");
      });

      // Add a scroll observer for this object.
      animateClassNames.forEach(name => element.classList.remove(name));

      const scrollObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateClassNames.forEach(name => entry.target.classList.add(name));
            return; // If we added the class, exit the function
          }

          // We're not intersecting, so remove the class!
          animateClassNames.forEach(name => entry.target.classList.remove(name));
        });
      });

      scrollObserver.observe(element);
    });
  }
}

export default App;
