import React, { Component } from 'react'
import LoginForm from "./components/LoginForm";
import TwitterMessage from "./components/TwitterMessage";

class App extends Component {

  // login = ({ username, password }) => {
  login = (event) => {
    let username = event.target[0].value;
    let password = event.target[1].value;
    console.log(`Logging in ${username} with password ${password}`);
  };

  render() {
    return (
      <div>

        <h1>
          <pre>LoginForm</pre>
        </h1><br/>
        <LoginForm handleLogin={this.login} />

        <h1>
          <pre>TwitterMessage</pre>
        </h1><br/>
        <TwitterMessage maxChars={140} />



      </div>
    )
  }
}

export default App
