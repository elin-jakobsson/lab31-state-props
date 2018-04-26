import React from 'react';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      btnText: "Null",
    };
    this.loginFunction = this.loginFunction.bind(this);
  }
  loginFunction(event) {
    this.setState({loggedIn: !this.state.loggedIn})
  }
  render() {
    if (this.state.loggedIn === false ){
      this.state.btnText = "Log in";
    }
    else if (this.state.loggedIn === true){
      this.state.btnText = "Log out";
    }
    return (
      <div className = "loginContainer">
        <button className = "loginBtn" onClick={this.loginFunction}> {this.state.btnText} </button>
      </div>
    );
  }
}

export default Login;
