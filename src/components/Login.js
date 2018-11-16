import React, { Component } from 'react';

class Login extends Component {


  login(){
    let {
      REACT_APP_DOMAIN,
      REACT_APP_CLIENT_ID,
    } = process.env;

    //fancy way of saying 'localhost:4000/auth/callback?'
    let uri = `${encodeURIComponent(window.location.origin)}/auth/callback`

    //this is something you'll set up one time during your personal/group project, and not need to look at again
    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${uri}&response_type=code`
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default Login;
