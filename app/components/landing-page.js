import React, { Component } from 'react';
import { Text, View } from 'react-native';
import RegistrationForm from './registration-form'

class LandingPage extends Component {
  render() {
    return (
      <View>
        <Text>Hello world!</Text>
        <RegistrationForm />
      </View>
    );
  }
}

export default LandingPage