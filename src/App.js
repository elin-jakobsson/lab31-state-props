import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './Login.js'
import LockedText from './LockedText'
import BackwardsText from './BackwardsText'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
        <Login></Login>
        <LockedText></LockedText>
        <BackwardsText></BackwardsText>
      </div>
    );
  }
}

export default App;
