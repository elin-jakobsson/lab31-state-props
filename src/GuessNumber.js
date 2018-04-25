import React from 'react';
import './css/GuessNumber.css'



class GuessNumber extends React.Component {
  constructor(props){
    super(props);

   // Tillståndet när applikationen startar
   // ska vara ON
   this.state = {
     trueNumber: false
   };

   this.fun = this.fun.bind(this);
  }
  fun(event){
    console.log('I work');
    this.setState({trueNumber:!this.state.trueNumber});
    console.log(this.state.trueNumber);
  }

  render() {
    return (
      <div className='guess-number'>
        <input placeholder='1 - 100' type='text'/>
        <button onClick={this.fun}>Testa nummer</button>
      </div>
    );
  }
}

export default GuessNumber;
