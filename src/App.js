import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './Login.js'
import LockedText from './LockedText'
import BackwardsText from './BackwardsText'
import './App.css';
import GuessNumber from './GuessNumber'

const randomNumberGenerator =Math.round( (Math.random()*10)+1);
class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
        <GuessNumber guess={randomNumberGenerator}/>
        <Login/>
        <LockedText/>
        <BackwardsText/>
      </div>
    );
  }
}

export default App;
