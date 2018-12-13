import React from 'react';
import { TextInput, Text, View } from 'react-native';
import styles from './styles';

const RFTextInput = ({
  input: { onBlur, onChange, onFocus, value },
  meta: { error, touched, valid }
}) => (
  <View>
    <TextInput
      onBlur={onBlur}
      onChangeText={onChange}
      onFocus={onFocus}
      value={value}
      style={[styles.rootInput, { borderColor: !valid && touched ? 'red' : 'gray' }]}
    />
    {!valid && touched && <Text style={styles.rootError}>{error}</Text>}
  </View>
);

export default RFTextInput;