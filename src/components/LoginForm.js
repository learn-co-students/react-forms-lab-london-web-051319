import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleUserChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePwdChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.username && this.state.password ? this.props.handleLogin(this.state) : console.log('no sorry')

  }
  

  render() {
    console.log(this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
             id="username" 
             name="username" 
             type="text" 
             onChange={this.handleUserChange}
             />
            </label>
        </div>
        <div>
          <label>
            Password
            <input 
             id="password" 
             name="password" 
             type="password" 
             onChange={this.handlePwdChange}
             />
            </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
