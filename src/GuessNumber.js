import React from 'react';
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
     infoMessage: '',
     retryFalse: false
   };
   //this.handleSubmit = this.handleSubmit.bind(this);
   // this.handleChange = this.handleChange.bind(this);
   // this.validateChange = this.validateChange.bind(this);
  }
  retryNum(){
    let newNum = Math.round( (Math.random()*100)+1);
  //  console.log('the new number', newNum);

    this.setState({
      theCorrectNumber:newNum,
      infoMessage: '',
      amountOfTries: 0,
      value: '',
      retryFalse:false
    });
    //console.log('the first number ',this.state.theCorrectNumber);
  }
  handleSubmit(event){
    // console.log('length ', this.state.value.length );
    // console.log('value ', Number(this.state.value));
    // console.log('rätt nummer ', this.state.theCorrectNumber);

    if(Number(this.state.value) === 0){
      alert('Du har inte angett något nummer, Skriv in en tal som du tror det hemliga nummret är innan du skickar din gissning!')
    } else if (Number(this.state.value) === this.state.theCorrectNumber) {
      this.setState({
        trueNumber:!this.state.trueNumber,
        infoMessage: 'RÄTT, det hemliga numret var ' + this.state.theCorrectNumber,
        value: '',
        retryFalse:true
      });
    }else if (Number(this.state.value)>this.state.theCorrectNumber) {
      this.setState({
        infoMessage:'För högt, testa igen',
        amountOfTries: this.state.amountOfTries + 1,
        value:''
      });
    }else if (Number(this.state.value)<this.state.theCorrectNumber){
        this.setState({
          infoMessage:'För lågt, testa igen',
          amountOfTries: this.state.amountOfTries + 1,
          value:''
        });
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
    if ((charCode > 47 && charCode < 58 && numberLength <= 3) || charCode===13) {
      console.log(charCode);
    }else {
      event.preventDefault();
    }
  }
  render() {
    let submitUpdateBtn = <input className='guess-submit' type="submit" value="Submit" />;

    switch (this.state.retryFalse) {
      case false:
      submitUpdateBtn = <input className='guess-submit' type="submit" value="Submit" />;

        break;
      case true:
        submitUpdateBtn = <button className='retry-btn' onClick={event=> this.retryNum(event)}>Testa igen</button>;
          break;
      default:

    }

    return (
      <div className='guess-number'>
        <h2>Gör en gissning på ett nummer mellan 1 och 100</h2>

        <form onSubmit={event=>this.handleSubmit(event)}>
        <input className='guess-input' placeholder='1 - 100' type='text' value={this.state.value} onKeyPress={event=>this.validateChange(event)} onChange={event=>this.handleChange(event)}/>
        {submitUpdateBtn}
        </form>
        <p>{this.state.infoMessage}</p>
        <p>Antal försök: {this.state.amountOfTries}</p>
      </div>
    );
  }
}

export default GuessNumber;
