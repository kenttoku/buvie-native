import React from 'react';
import styled from 'styled-components/native';
import { Field } from 'redux-form';
import RFTextView from '../../../../RFTextInput';
import StyledButtonContainer from '../../../../styles/StyledButtonContainer'
import StyledButtonText from '../../../../styles/StyledButtonText'

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