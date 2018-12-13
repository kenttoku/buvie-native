import { reduxForm } from 'redux-form';
import LoginFormView from './LoginFormView';

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

const LoginFormRF = reduxForm({
  form: FORM,
  validate
})(LoginFormView);

export default LoginFormRF;