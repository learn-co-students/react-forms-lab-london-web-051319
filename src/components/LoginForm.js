import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  updateUsername= e => {
    this.setState({
      ...this.state,
      username: e.target.value,
    });
  };

  updatePassword = e => {
    this.setState({
      ...this.state,
      password: e.target.value,
    });
  };

  formSubmit = e => {
    e.preventDefault();
    if (this.state.username !== '' && this.state.password !== '') {
      this.props.handleLogin({
        username: this.state.username,
        password: this.state.password
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              onChange={this.updateUsername}
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password"
                   name="password"
                   type="password"
                   onChange={this.updatePassword}
                   value={this.state.password}
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
