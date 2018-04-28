import React from 'react';

class BackwardsText extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displacement: 1,
    }
    this.inputAlter = this.inputAlter.bind(this);
    this.textValue = this.textValue.bind(this);
  }
  inputAlter(event) {
    this.setState({displacement: Number(event.target.value)});
  }
  textValue(event){
    if(event.which > 64 && event.which < 91){
      var displacor = event.which + this.state.displacement;
      while (displacor > 90){
        displacor -= 26;
      }
      while (displacor < -64){
        displacor += 26;
      }
      event.preventDefault();
      event.target.value +=  String.fromCharCode(displacor);
    }
  }
  render() {
    return (
      <div className = "backwardsContainer">
      <input type = "number" value = {this.state.displacement} onChange={this.inputAlter}/>
      <textarea placeholder = "Displaced letters" onKeyDown={this.textValue}/>
      </div>
    );
  }
}

export default BackwardsText;
