import React, { Component } from 'react';
import AboutMe from '../Components/AboutMe';
import Showcase from '../Components/Showcase';

class LandingPage extends Component {
  render() {
    return (
      <>
        <Showcase />
        <AboutMe />
      </>
    );
  }
}

export default LandingPage;
