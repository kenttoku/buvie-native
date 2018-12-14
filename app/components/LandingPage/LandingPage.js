import React, { Component } from 'react';
import { Text, TouchableOpacity, Button, View } from 'react-native';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-native';
import styled from 'styled-components/native';

import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

const StyledLogo = styled.Image`
  margin-top: 64;
  margin-bottom: 100;
`;

const StyledView = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledFormContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButtonText = styled.Text`
  font-size: 17;
  color: #fff;
`;

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeForm: 'login'
    };
  }

  toggleForm() {
    let activeForm = 'login';
    if (this.state.activeForm === 'login') {
      activeForm = 'registration';
    }
    this.setState({ activeForm });
  }

  render() {
    const { loggedIn } = this.props;
    if (loggedIn) {
      return <Redirect to="/dashboard" />;
    }

    const { activeForm } = this.state;
    return (
      <StyledView>
        <StyledFormContainer>

          <StyledLogo source={require('../../assets/images/buvie.gif')} />
          {activeForm === 'registration' && <RegistrationForm />}
          {activeForm === 'login' && <LoginForm />}
        </StyledFormContainer>

        {activeForm === 'registration' &&
        <TouchableOpacity
          onPress={() => this.toggleForm()}
        >
          <StyledButtonText>Already a member? Login</StyledButtonText>
        </TouchableOpacity>}

        {activeForm === 'login' &&
        <TouchableOpacity
          onPress={() => this.toggleForm()}
        >
          <StyledButtonText>Not a member? Sign Up</StyledButtonText>
        </TouchableOpacity>}
      </StyledView>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser
});

export default connect(mapStateToProps)(LandingPage);