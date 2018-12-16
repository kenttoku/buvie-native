import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-native';
import styled from 'styled-components/native';

import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Navigation from '../Navigation';

const StyledLogo = styled.Image`
  width: 247;
  height: 73;
  margin-top: 64;
  margin-bottom: 100;
`;

const StyledView = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 44px;ß
`;

const StyledFormContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButtonContainer = styled.TouchableOpacity`
  text-align: center;
`;

const StyledButtonText = styled.Text`
  font-size: 17;
  color: #fff;
  text-align: center;
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

          <StyledLogo source={require('../../assets/images/buvielogoname.png')} />
          {activeForm === 'registration' && <RegistrationForm />}
          {activeForm === 'login' && <LoginForm />}
        </StyledFormContainer>

        {activeForm === 'registration' &&
        <StyledButtonContainer
          onPress={() => this.toggleForm()}
        >
          <StyledButtonText>Already a member? Login</StyledButtonText>
        </StyledButtonContainer>}

        {activeForm === 'login' &&
        <StyledButtonContainer
          onPress={() => this.toggleForm()}
        >
          <StyledButtonText>Not a member? Sign Up</StyledButtonText>
        </StyledButtonContainer>}
      </StyledView>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser
});

export default connect(mapStateToProps)(LandingPage);