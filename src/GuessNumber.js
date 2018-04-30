import React, { Component } from 'react';
import './css/GuessNumber.css';

class GuessNumber extends React.Component {
  constructor(props){
    super(props);

   // Tillståndet när applikationen startar
   // ska vara ON
   this.state = {
     value:'',
     trueNumber: false,
     theCorrectNumber: props.guess,
     amountOfTries:0,
     infoMessage: ''
   };

   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleChange = this.handleChange.bind(this);
   this.validateChange = this.validateChange.bind(this);
  }
  retryNum(){
    let newNum = Math.round( (Math.random()*100)+1);
    console.log(newNum);
    this.setState({theCorrectNumber:newNum})
    console.log(this.theCorrectNumber);
  }
  handleSubmit(event){
    console.log('rätt nummer ', this.state.theCorrectNumber);
    if (Number(this.state.value) === this.state.theCorrectNumber) {
      this.setState({trueNumber:!this.state.trueNumber});
      this.setState({infoMessage: 'RÄTT, det hemliga numret var ' + this.state.theCorrectNumber})
      this.setState({value:''})
      //console.log('tries ', this.state.amountOfTries);
    }else if (Number(this.state.value)>this.state.theCorrectNumber) {
      this.setState({infoMessage:'För högt, testa igen'})
    //  console.log('för högt');
      this.setState({amountOfTries: this.state.amountOfTries + 1})
      this.setState({value:''})
    }else {
        this.setState({infoMessage:'För lågt, testa igen'})
        this.setState({amountOfTries: this.state.amountOfTries + 1})
        this.setState({value:''})
    }
    event.preventDefault();
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }
  validateChange(event){
    event = (event) ? event : window.event;
    let numberLength =  this.state.value.length + 1;
    let charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 47 && charCode < 58 && (numberLength <= 3 || charCode===13)) {
      console.log(charCode);
    }else {
      event.preventDefault();
    }
  }
  render() {
    return (
      <div className='guess-number'>
        <h2>Gör en gissning på ett nummer mellan 1 och 100</h2>
        <form onSubmit={this.handleSubmit}>
        <input placeholder='1 - 100' type='text' value={this.state.value} onKeyPress={this.validateChange} onChange={this.handleChange}/>
        <input type="submit" value="Submit" />
        </form>
        <button onClick={event=> this.retryNum()}>Testa igen</button>
        <p>{this.state.infoMessage}</p>
        <p>Antal försök: {this.state.amountOfTries}</p>
      </div>
    );
  }
}

export default GuessNumber;
