import React from 'react';
import GuessNumber from './GuessNumber'
import Login from './Login.js'
import LockedText from './LockedText'
import BackwardsText from './BackwardsText'

import './css/tabs.css'


const randomNumberGenerator = Math.round( (Math.random()*100)+1);

class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state={
      tabPage:'hem'
    }

  }
  changeTab (event,tab){
    console.log(tab);
    this.setState({tabPage:tab})
  }

  render() {
    let currentTab;
    switch(this.state.tabPage) {
      case 'hem':
      currentTab =( <div>
          <h1>Välkommen till lab 31</h1>
          <p>Denna laboration består av övningar i react.js</p>
        </div>);
        break;
      case 'login':
        currentTab = <Login/>
          break;
      case 'lockt':
          currentTab = <LockedText/>
        break;
      case 'backText':
           currentTab = <BackwardsText/>
        break;
        case 'guessNum':
            currentTab = <GuessNumber guess={randomNumberGenerator}/>
          break;
      default:
        console.log('something in tabs whent wrong');
    }

    return (
      <div>
        <div className='tab-button-container'>
        <button onClick={event=> this.changeTab(event,'hem')}>Hem</button>
        <button onClick={event=> this.changeTab(event,'login')} >Logga in</button>
        <button onClick={event=> this.changeTab(event,'lockt')} >Låst textfält</button>
        <button onClick={event=> this.changeTab(event,'backText')} >Baklängestext</button>
        <button onClick={event=> this.changeTab(event,'guessNum')}>Gissa talet</button>
        </div>
        <div className='current-tab-container'>
        {currentTab}
        </div>
      </div>
    );
  }
}

export default Tabs;
