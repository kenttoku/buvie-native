import React, { Component } from 'react';
import RegistrationFormRF from './RegistrationFormRF';

class RegistrationForm extends Component {
  handleSubmit = () => {
    console.log('SUBMITTED');
  }

  render() {
    return <RegistrationFormRF onSubmit={this.handleSubmit} />;
  }
}

export default RegistrationForm;