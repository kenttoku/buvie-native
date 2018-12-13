import React from 'react'
import { View, Button } from 'react-native';
import { Field } from 'redux-form';
import RFTextView from '../../../../RFTextInput';

const LoginFormView = ({ handleSubmit, valid }) => (
  <View>
    <Field
      name="username"
      component={RFTextView}
    />
    <Field
      name="password"
      component={RFTextView}
    />
    <Button
      disabled={!valid}
      title="Log in"
      onPress={handleSubmit}
    />
  </View>
);

export default LoginFormView;