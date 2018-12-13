import React, { Component } from 'react';
import { View } from 'react-native';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

class LandingPage extends Component {
  state = {
    activeForm: 'login'
  }

  render() {
    const { activeForm } = this.state;
    return (
      <View>
        {activeForm === 'registration' && <RegistrationForm />}
        {activeForm === 'login' && <LoginForm />}
      </View>
    );
  }
}

export default LandingPage