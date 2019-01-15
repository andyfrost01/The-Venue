import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Header from './components/header_footer/header.js';
import Featured from './components/featured'
import VenueInfo from './components/venue_info'
import Hightlights from './components/hightlights';
import Pricing from './components/pricing'
import Location from './components/location'
import Footer from './components/header_footer/footer'

import './resources/styles.css'

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '150vh', backgroundColor: 'blue'}}>
        <Header/>
        <Element name="feature">
          <Featured/>
        </Element>
        <Element name="venueinfo">
          <VenueInfo/>
        </Element>
        <Element name="highlight">
          <Hightlights/>
        </Element>
        <Element name="pricing">
          <Pricing/>
        </Element>
        <Element name="location">
          <Location/>
        </Element>
        <Footer/>
      </div>
    );
  }
}

export default App;
