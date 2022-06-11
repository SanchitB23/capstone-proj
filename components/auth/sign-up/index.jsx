import React from 'react';
import {Form, Formik} from 'formik';
import {SignupSchema} from '../../../utils/yup';
import axios from 'axios';
import FormInputComponent from '../form-input';
import styles from './sign-up.module.scss';
import Button from '../../button';
import {useRouter} from "next/router";

const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const router = useRouter()
  const onSubmit = async (values, {resetForm}) => {
    try {
      const res = await axios.post('/api/auth/signup', values);
      resetForm({values: defaultFormFields});
      if (res.status === 201) return router.push('/')
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
      <div className={styles['sign-up-container']}>
        <h2>Don&apos;t have an account?</h2>
        <span>Sign up with email and password</span>
        <Formik
            initialValues={defaultFormFields}
            onSubmit={onSubmit}
            validationSchema={SignupSchema}
        >
          {({isSubmitting, values}) => (
              <Form>
                <FormInputComponent
                    type={'text'}
                    name='name'
                    placeholder='Display Name'
                    values={values}
                />
                <FormInputComponent
                    type={'email'}
                    name='email'
                    placeholder='Email'
                    values={values}
                />
                <FormInputComponent
                    type={'password'}
                    name='password'
                    placeholder='Password'
                    values={values}
                />
                <FormInputComponent
                    type={'password'}
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    values={values}
                />
                <Button type='Submit' disabled={isSubmitting}>
                  Sign Up
                </Button>
              </Form>
          )}
        </Formik>
      </div>
  );
};

export default SignUpForm;
