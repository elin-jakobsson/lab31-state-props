import React from 'react';
import './css/BackwardsText.css';

class BackwardsText extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displacement: this.props.displacementPropped,
    }
    this.inputAlter = this.inputAlter.bind(this);
    this.textValue = this.textValue.bind(this);
  }
  inputAlter(event) {
    this.setState({displacement: Number(event.target.value)});
  }
  textValue(event){
    var displacor = event.keyCode + this.state.displacement;
    if(event.keyCode > 64 && event.keyCode < 91){
      while (displacor > 90){
        displacor -= 26;
      }
      while (displacor < 64){
        displacor += 26;
      }
      event.preventDefault();
      event.target.value +=  String.fromCharCode(displacor);
    }
    else if (event.keyCode > 47 && event.keyCode < 58){
      while (displacor > 57){
        displacor -= 10;
      }
      while (displacor < 47){
        displacor += 10;
      }
      event.preventDefault();
      event.target.value +=  String.fromCharCode(displacor);
    }
  }
  render() {
    return (
      <div className = "backwardsContainer">
      <form>
      <input className = "disInput" type = "number" value = {this.state.displacement} onChange={this.inputAlter}/>
      <textarea className = "disTextfield" placeholder = "Displaced letters" onKeyDown={this.textValue}/>
      </form>
      </div>
    );
  }
}

export default BackwardsText;
