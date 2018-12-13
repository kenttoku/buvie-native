import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-native';

import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

class LandingPage extends Component {
  state = {
    activeForm: 'login'
  }

  toggleForm() {
    let activeForm = 'login'
    if (this.state.activeForm === 'login') {
      activeForm = 'registration'
    }
    this.setState({activeForm})
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
        <Button
          title="Toggle Form"
          onPress={() => this.toggleForm()}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser
})

export default connect(mapStateToProps)(LandingPage)