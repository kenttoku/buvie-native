import React, { Component } from 'react';
import RegistrationFormRF from './RegistrationFormRF';
import { login, registerUser } from '../../../actions'
import { connect } from 'react-redux'

class RegistrationForm extends Component {
  handleSubmit = async ({ email, username, password }) => {
    const user = { email, username, password };
    await this.props.dispatch(registerUser(user))
    await this.props.dispatch(login(username, password))
  }

  render() {
    return <RegistrationFormRF onSubmit={this.handleSubmit} />;
  }
}

export default connect()(RegistrationForm);