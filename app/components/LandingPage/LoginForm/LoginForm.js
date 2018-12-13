import React, { Component } from 'react';
import LoginFormRF from './LoginFormRF';
import { login } from '../../../actions'
import { connect } from 'react-redux'

class LoginForm extends Component {
  handleSubmit = async ({ username, password }) => {
    await this.props.dispatch(login(username, password));
  }

  render() {
    return <LoginFormRF onSubmit={this.handleSubmit} />;
  }
}

export default connect()(LoginForm);