import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { reduxForm } from 'redux-form'

const submit = values => {
  console.log('submitting form', values)
}

export class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit.bind(this);

    this.state = {
      email: '',
      username: '',
      password: ''
    }
  }

  handleChange(e, location) {
    console.log(e.currentTarget)
  }

  handleSubmit(values) {

    console.log(values)
  }

  render() {
    return (
      <View>
        <Text>Email:</Text>
        <TextInput onChange={e => this.handleChange(e)}/>
        <TouchableOpacity onPress={values => this.handleSubmit(values)}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
}
};

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) => {
    dispatch(focus('registration', Object.keys(errors[0])));
  }
})(RegistrationForm);