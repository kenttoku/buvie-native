import React, { Component } from 'react';
import LoginFormRF from './LoginFormRF';

class LoginForm extends Component {
  handleSubmit = ({ username, password }) => {
    console.log(`username: ${username}`);
    console.log(`password: ${password}`);
  }

  render() {
    return <LoginFormRF onSubmit={this.handleSubmit} />;
  }
}

export default LoginForm;