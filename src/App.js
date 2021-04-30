import React, { Component } from 'react';
// import logo from './logo.svg';

import './css/style.css';

import TopNavbar from './components/TopNavbar';
import Footer from './components/Footer';
import { OpportunitySection, ChallengeSection } from './components/MissionSection';
import TechnologySection from './components/TechnologySection';
import TeamSection from './components/TeamSection';
import BannerSection from './components/BannerSection';
import ContactSection from './components/ContactSection';


class App extends Component {
  render() {
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

  componentDidMount() {
    // Any object with this name in its class list will be given the AnimateOnScroll behavior.
    const queryClassName = "AnimateOnScroll";
    const toggleClassName = ["animate__animated", "animate__fadeIn"];

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // const square = entry.target.querySelector(queryClassName);

        if (entry.isIntersecting) {
          toggleClassName.forEach(name => entry.target.classList.add(name));
          return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        toggleClassName.forEach(name => entry.target.classList.remove(name));
      });
    });

    var elements = Array.from(document.getElementsByClassName(queryClassName));
    console.log(elements);
    for (let el of elements) {
      observer.observe(el);
    }
  }
}

export default App;
