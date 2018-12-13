import React, { Component } from 'react';
import LoginFormRF from './LoginFormRF';


const wait = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});


class LoginForm extends Component {
  handleSubmit = async ({ username, password }) => {
    await wait();
    console.log(`username: ${username}`);
    console.log(`password: ${password}`);
  }

  render() {
    return <LoginFormRF onSubmit={this.handleSubmit} />;
  }
}

export default LoginForm;