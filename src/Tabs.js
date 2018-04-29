import React from 'react';
import GuessNumber from './GuessNumber'
import Login from './Login.js'
import LockedText from './LockedText'
import BackwardsText from './BackwardsText'

import './css/tabs.css'


const randomNumberGenerator =Math.round( (Math.random()*100)+1);

class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state={
      tabPage:'hem'
    }
    this.homeTab = this.homeTab.bind(this);
    this.lockTab = this.lockTab.bind(this);
    this.loginTab = this.loginTab.bind(this);
    this.backTextTab = this.backTextTab.bind(this);
    this.guessTab = this.guessTab.bind(this);

  }
  homeTab(event){
      this.setState({tabPage:'hem'});
  }
  lockTab(event){
    this.setState({tabPage:'lockt'});
  }
  loginTab(event){
    this.setState({tabPage:'login'});
  }
  backTextTab(event){
    this.setState({tabPage:'backText'});
  }
  guessTab(event){
    this.setState({tabPage:'guessNum'});
  }
  render() {

    const currentTab =(this.state.tabPage==='hem') ?
      <div>
        <h1>Välkommen till lab 31</h1>
        <p>Denna laboration består av övningar i react.js</p>
      </div>
    :(this.state.tabPage==='login') ?
      <Login/>
    :(this.state.tabPage==='lockt') ?
      <LockedText/>
    :(this.state.tabPage==='backText') ?
      <BackwardsText/>
    :(this.state.tabPage==='guessNum') ?
    <GuessNumber guess={randomNumberGenerator}/>
    : 'hem'

    return (
      <div>
        <div className='tab-button-container'>
        <button onClick={this.homeTab}>Hem</button>
        <button onClick={this.loginTab} >Logga in</button>
        <button onClick={this.lockTab} >Låst textfält</button>
        <button onClick={this.backTextTab} >Baklängestext</button>
        <button onClick={this.guessTab}>Gissa talet</button>
        </div>
        <div className='current-tab-container'>
        {currentTab}
        </div>
      </div>
    );
  }
}

export default Tabs;
