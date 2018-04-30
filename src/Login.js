import React from 'react';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: this.props.logInStatus,
    };
    this.loginFunction = this.loginFunction.bind(this);
  }
  loginFunction(event) {
    this.setState({loggedIn: !this.state.loggedIn})
  }
  render() {
    let btnText;
    if (this.state.loggedIn === false ){
      btnText = "Log in";
    }
    else if (this.state.loggedIn === true){
      btnText = "Log out";
    }
    return (
      <div className = "loginContainer">
        <button className = "loginBtn" onClick={this.loginFunction}> {btnText} </button>
      </div>
    );
  }
}

export default Login;
