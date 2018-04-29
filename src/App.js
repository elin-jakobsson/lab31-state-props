import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './Login.js'
import LockedText from './LockedText'
import BackwardsText from './BackwardsText'
import Tabs from './Tabs'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
        <Tabs/>

        <Login/>
        <LockedText/>
        <BackwardsText/>
      </div>
    );
  }
}

export default App;
