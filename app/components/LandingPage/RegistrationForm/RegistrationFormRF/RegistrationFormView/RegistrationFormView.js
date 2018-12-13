import React from 'react';
import { Button, View } from 'react-native';

const RegistrationFormView = ({ handleSubmit }) => (
  <View>
    <Button
      title="Submit Hello"
      onPress={handleSubmit}
    />
  </View>
);


export default RegistrationFormView;