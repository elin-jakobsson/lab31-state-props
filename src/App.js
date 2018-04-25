import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GuessNumber from './GuessNumber'

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
        <GuessNumber/>
      </div>
    );
  }
}

export default App;
