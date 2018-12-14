import React from 'react';
import { Field } from 'redux-form';
import RFTextView from '../../../../RFTextInput';
import StyledButtonContainer from '../../../../styles/StyledButtonContainer'
import StyledButtonText from '../../../../styles/StyledButtonText'
import StyledFormView from '../../../../styles/StyledFormView'
import StyledFailedText from '../../../../styles/StyledFailedText'

const LoginFormView = ({
  handleSubmit,
  submitFailed,
  submitting,
  valid
}) => (
  <StyledFormView>
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
    {!submitting && submitFailed && <StyledFailedText>Invalid username or password</StyledFailedText>}
    <StyledButtonContainer
      disabled={!valid || submitting}
      onPress={handleSubmit}>
      <StyledButtonText>Log in</StyledButtonText>
    </StyledButtonContainer>
  </StyledFormView>
);

export default LoginFormView;