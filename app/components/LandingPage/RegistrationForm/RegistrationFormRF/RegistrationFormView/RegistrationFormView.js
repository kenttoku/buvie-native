import React from 'react';
import { Button, Text, View } from 'react-native';
import { Field } from 'redux-form';
import RFTextView from '../../../../RFTextInput';
import styles from './styles';

const RegistrationFormView = ({
  handleSubmit,
  submitFailed,
  submitSucceeded,
  submitting,
  valid
}) => (
  <View>
    <Field
      name="email"
      component={RFTextView}
      disabled={submitting}
      textContentType="emailAddress"
    />
    <Field
      name="username"
      component={RFTextView}
      disabled={submitting}
      textContentType="username"
    />
    <Field
      name="password"
      component={RFTextView}
      disabled={submitting}
      secureTextEntry={true}
      textContentType="password"
    />
    {!submitting && submitFailed && <Text style={styles.rootFailed}>Submit Failed</Text>}
    {!submitting && submitSucceeded && <Text style={styles.rootSucceeded}>Submit Succeeded</Text>}
    <Button
      disabled={!valid || submitting}
      title="Register"
      onPress={handleSubmit}
    />
  </View>
);

export default RegistrationFormView;