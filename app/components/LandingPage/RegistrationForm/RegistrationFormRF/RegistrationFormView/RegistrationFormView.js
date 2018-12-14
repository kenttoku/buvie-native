import React from 'react';
import { Field } from 'redux-form';
import RFTextView from '../../../../RFTextInput';
import StyledButtonContainer from '../../../../styles/StyledButtonContainer'
import StyledButtonText from '../../../../styles/StyledButtonText'
import StyledFormView from '../../../../styles/StyledFormView'
import StyledFailedText from '../../../../styles/StyledFailedText'

const RegistrationFormView = ({
  handleSubmit,
  submitFailed,
  submitting,
  valid
}) => (
  <StyledFormView>
    <Field
      placeholder="Email"
      name="email"
      component={RFTextView}
      disabled={submitting}
      textContentType="emailAddress"
    />
    <Field
      placeholder="Username"
      name="username"
      component={RFTextView}
      disabled={submitting}
      textContentType="username"
    />
    <Field
      placeholder="Password"
      name="password"
      component={RFTextView}
      disabled={submitting}
      secureTextEntry={true}
      textContentType="password"
    />
    {!submitting && submitFailed && <StyledFailedText>Try again.</StyledFailedText>}
    <StyledButtonContainer
      disabled={!valid || submitting}
      onPress={handleSubmit}>
      <StyledButtonText>Register</StyledButtonText>
    </StyledButtonContainer>
  </StyledFormView>
);

export default RegistrationFormView;