import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import { Field } from 'redux-form';
import RFTextView from '../../../../RFTextInput';

const StyledFailedText = styled.Text`
  color: red;
  text-align: center;
  font-size: 40;
`;

const StyledSuccessText = styled.Text`
  color: green;
  text-align: center;
`;

const StyledView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButtonContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #A33944;
  opacity: ${props => props.disabled ? '0.5' : '1'};
  margin-top: 16px;
  width: 200;
  height: 48;
`;

const StyledButtonText = styled.Text`
  color: #fff;
  font-size: 20;
`;


const LoginFormView = ({
  handleSubmit,
  submitFailed,
  submitSucceeded,
  submitting,
  valid
}) => (
  <StyledView>
    <Field
      name="username"
      placeholder="Username"
      component={RFTextView}
      disabled={submitting}
      textContentType="username"
    />
    <Field
      name="password"
      placeholder="Password"
      component={RFTextView}
      disabled={submitting}
      secureTextEntry={true}
      textContentType="password"
    />
    {!submitting && submitFailed && <StyledFailedText>Submit Failed</StyledFailedText>}
    {!submitting && submitSucceeded && <StyledSuccessText>Submit Succeeded</StyledSuccessText>}
    <StyledButtonContainer
      disabled={!valid || submitting}
      onPress={handleSubmit}>
      <StyledButtonText>Log in</StyledButtonText>
    </StyledButtonContainer>
  </StyledView>
);

export default LoginFormView;