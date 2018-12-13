import React from 'react'
import { Button, Text, View } from 'react-native';
import { Field } from 'redux-form';
import RFTextView from '../../../../RFTextInput';
import styles from './styles';

const LoginFormView = ({
  handleSubmit,
  submitFailed,
  submitSucceeded,
  submitting,
  valid
}) => (
  <View>
    <Field
      name="username"
      component={RFTextView}
      disabled={submitting}
    />
    <Field
      name="password"
      component={RFTextView}
      disabled={submitting}
    />
    {!submitting && submitFailed && <Text style={styles.rootFailed}>Submit Failed</Text>}
    {!submitting && submitSucceeded && <Text style={styles.rootSucceeded}>Submit Succeeded</Text>}
    <Button
      disabled={!valid || submitting}
      title="Log in"
      onPress={handleSubmit}
    />
  </View>
);

export default LoginFormView;