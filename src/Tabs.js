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
    //console.log(tab);
    this.setState({tabPage:tab})
  }

  render() {
    let currentTabCss = 'current-tab-container';
    let currentTab;

    let homeBtn: 'btn-active';
    let locktBtn: 'btn-neutral';
    let loginBtn: 'btn-neutral';
    let BackwardsTextBtn: 'btn-neutral';
    let guessNumBtn: 'btn-neutral';
    switch(this.state.tabPage) {
      case 'hem':
      currentTab =( <div className='start-greating'>
          <h1>Välkommen till lab 31</h1>
          <p>Denna laboration består av övningar med props och state i react.js</p>
          <p className='createdBy'><em>Skapad av Elin Jakobsson och Albin Engman</em></p>
        </div>);
      currentTabCss='current-tab-container';

      homeBtn = 'btn-active';
      locktBtn = 'btn-neutral';
      loginBtn = 'btn-neutral';
      BackwardsTextBtn = 'btn-neutral';
      guessNumBtn = 'btn-neutral';

        break;
      case 'login':
        currentTab = <Login logInStatus = {false}/>
        currentTabCss = 'current-tab-container-login';

        homeBtn = 'btn-neutral';
        locktBtn = 'btn-neutral';
        loginBtn = 'btn-active';
        BackwardsTextBtn = 'btn-neutral';
        guessNumBtn = 'btn-neutral';

          break;
      case 'lockt':
          currentTab = <LockedText isChecked = {false}/>
          currentTabCss = 'current-tab-container-lockt';

          homeBtn = 'btn-neutral';
          locktBtn = 'btn-active';
          loginBtn = 'btn-neutral';
          BackwardsTextBtn = 'btn-neutral';
          guessNumBtn = 'btn-neutral';

        break;
      case 'backText':
           currentTab = <BackwardsText displacementPropped = {0}/>
            currentTabCss='current-tab-container-backText';

            homeBtn = 'btn-neutral';
            locktBtn = 'btn-neutral';
            loginBtn = 'btn-neutral';
            BackwardsTextBtn = 'btn-active';
            guessNumBtn = 'btn-neutral';

        break;
        case 'guessNum':
            currentTab = <GuessNumber guess={randomNumberGenerator}/>
            currentTabCss='current-tab-container-guessNum';

            homeBtn = 'btn-neutral';
            locktBtn = 'btn-neutral';
            loginBtn = 'btn-neutral';
            BackwardsTextBtn = 'btn-neutral';
            guessNumBtn = 'btn-active';

          break;
      default:
        console.log('something in tabs whent wrong');
    }

    return (
      <div className='all-tabs-container'>
        <div className='tab-button-container'>
        <button className={homeBtn} onClick={event=> this.changeTab(event,'hem')}>Hem</button>
        <button className={loginBtn} onClick={event=> this.changeTab(event,'login')} >Logga in</button>
        <button className={locktBtn} onClick={event=> this.changeTab(event,'lockt')} >Låst textfält</button>
        <button className={BackwardsTextBtn} onClick={event=> this.changeTab(event,'backText')} >Baklängestext</button>
        <button className={guessNumBtn} onClick={event=> this.changeTab(event,'guessNum')}>Gissa talet</button>
        </div>
        <div className={currentTabCss}>
        {currentTab}
        </div>
      </div>
    );
  }
}

export default Tabs;
