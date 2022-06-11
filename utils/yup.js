import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  confirmPassword: Yup.string().when('password', {
    is: (val) => (val && val.length > 0),
    then: Yup.string().oneOf(
      [Yup.ref('password')],
      'Both password need to be the same'
    ),
  }),
});
export const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});
