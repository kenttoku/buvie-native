import React from 'react';
import { TextInput, Text, View } from 'react-native';
import styled from 'styled-components/native';
import styles from './styles';

// const styles = StyleSheet.create({
//   rootInput: {
//     borderWidth: 1,
//     height: 40,
//     padding: 10,
//   },
//   rootError: {
//     color: 'red',
//   },
// });

// style={[
//   styles.rootInput,
//   {
//     color: disabled ? 'gray' : 'black',
//     borderColor: !valid && touched ? 'red' : 'gray'
//   },
// ]}

const StyledTextInput = styled.TextInput`
  height: 40;
  border-bottom-color: ${props => props.isRed ? 'red' : '#8b8b99'};
  border-bottom-width: 1;
  color: #fff;
  width: 200;
`;

const StyledView = styled.View`
  width: 100%;

`;

const StyledLabel = styled.Text`
  color: #fff;
  margin-top: 24;
`;

const StyledError = styled.Text`
  color: red;
  margin-top: 24;
`;

const RFTextInput = ({
  input: { onBlur, onChange, onFocus, value },
  meta: { error, touched, valid },
  disabled,
  secureTextEntry,
  textContentType,
  placeholder
}) => (
  <StyledView>
    {(!valid && touched) ? <StyledError>{placeholder} ({error})</StyledError> : <StyledLabel>{placeholder}</StyledLabel>}
    <StyledTextInput
      placeholder={placeholder}
      placeholderTextColor="grey"
      textContentType={textContentType}
      secureTextEntry={secureTextEntry}
      editable={!disabled}
      selectTextOnFocus={!disabled}
      onBlur={onBlur}
      onChangeText={onChange}
      onFocus={onFocus}
      value={value}
      isRed={!valid && touched}
    />
  </StyledView>
);

export default RFTextInput;