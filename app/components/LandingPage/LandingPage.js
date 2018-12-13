import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-native';

import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

class LandingPage extends Component {
  state = {
    activeForm: 'login'
  }

  render() {
    const { loggedIn } = this.props;
    if (loggedIn) {
      return <Redirect to="/dashboard" />
    }

    console.log(this.props)
    const { activeForm } = this.state;
    return (
      <View>
        {activeForm === 'registration' && <RegistrationForm />}
        {activeForm === 'login' && <LoginForm />}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser
})

export default connect(mapStateToProps)(LandingPage)