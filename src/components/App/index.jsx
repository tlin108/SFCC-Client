import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Tung Ling&#39;s Spotify Code Challenge</h2>
        </div>
        <p className="App-intro">
          To get started, please click <Link to="/people">here</Link> to head to /people page.
        </p>
      </div>
    );
  }
}

export default App;