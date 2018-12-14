import { reduxForm } from 'redux-form';
import RegistrationFormView from './RegistrationFormView';

const FORM = 'hello';

const validate = ({ email, username, password }) => {
  const errors = {};
  if (email === undefined) {
    errors.email = 'Required';
  } else if (email.trim() === '') {
    errors.email = 'Must not be blank';
  } else if (email.trim() !== email) {
    errors.email = 'Cannot start or end with whitespace';
  }

  if (username === undefined) {
    errors.username = 'Required';
  } else if (username.trim() === '') {
    errors.username = 'Must not be blank';
  } else if (username.trim() !== username) {
    errors.username = 'Cannot start or end with whitespace';
  }

  if (password === undefined) {
    errors.password = 'Required';
  } else if (password.trim() === '') {
    errors.password = 'Must not be blank';
  } else if (password.trim() !== password) {
    errors.password = 'Cannot start or end with whitespace';
  } else if (password.length < 10) {
    errors.password = 'Must be at least 10 characters long';
  }

  return errors;
};

const RegistrationFormRF = reduxForm({
  form: FORM,
  validate
})(RegistrationFormView);

export default RegistrationFormRF;