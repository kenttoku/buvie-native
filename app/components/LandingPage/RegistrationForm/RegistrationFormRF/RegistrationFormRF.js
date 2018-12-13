import { reduxForm } from 'redux-form';
import RegistrationFormView from './RegistrationFormView';

const FORM = 'hello';

const validate = ({ username, password }) => {
  const errors = {};
  if (username === undefined) {
    errors.username = 'Required';
  } else if (username.trim() === '') {
    errors.username = 'Must not be blank';
  }

  if (password === undefined) {
    errors.password = 'Required';
  } else if (password.trim() === '') {
    errors.password = 'Must not be blank';
  }

  return errors
}

const RegistrationFormRF = reduxForm({
  form: FORM,
  validate
})(RegistrationFormView);

export default RegistrationFormRF;