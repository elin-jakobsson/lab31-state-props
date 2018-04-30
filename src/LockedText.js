import React from 'react';

class LockedText extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      checked: false,
    }

    this.checkFunction = this.checkFunction.bind(this);
  }
  checkFunction(event){
    this.setState({checked: !this.state.checked});
  }
  render() {
    let disabled;
    if (this.state.checked === true){
      disabled = false;
    }
    else if (this.state.checked === false){
      disabled = true;
    }
    return (
      <div className = "lockedTextContainer">
      <div className = "checkContainer">
        <input type = "checkbox" id = "textCheck" onClick = {this.checkFunction}/>
        <label htmlFor = "textCheck">Enable textarea</label>
      </div>
      <textarea placeholder = "Only writable when checked!" disabled = {disabled} ></textarea>
      </div>
    );
  }
}

export default LockedText;
