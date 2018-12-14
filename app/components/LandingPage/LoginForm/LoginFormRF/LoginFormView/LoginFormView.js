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

const StyledLogo = styled.Image`
  margin-top: 64;
  margin-bottom: 200;
`;

const StyledView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginFormView = ({
  handleSubmit,
  submitFailed,
  submitSucceeded,
  submitting,
  valid
}) => (
  <StyledView>
    <StyledLogo source={require('../../../../../assets/images/buvie.gif')} />
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
    <Button
      disabled={!valid || submitting}
      title="Log in"
      onPress={handleSubmit}
    />
  </StyledView>
);

export default LoginFormView;