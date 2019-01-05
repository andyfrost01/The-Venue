import React, { Component } from 'react';
import Header from './components/header_footer/header';
import Featured from './components/featured'
import './resources/styles.css'

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '150vh', backgroundColor: 'blue'}}>
        <Header/>
        <Featured/>
      </div>
    );
  }
}

export default App;
