import { reduxForm } from 'redux-form';
import RegistrationFormView from './RegistrationFormView';

const FORM = 'hello';

const RegistrationFormRF = reduxForm({
  form: FORM,
})(RegistrationFormView);

export default RegistrationFormRF;