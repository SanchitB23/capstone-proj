import React from 'react';
import {ErrorMessage, Field} from 'formik';
import styles from './form-input.module.scss';

const FormInputComponent = ({type, name, placeholder, values}) => {
  return (
      <div className={styles.group}>
        <Field type={type} name={name} className={styles['form-input']}/>
        <label
            className={
                (values[name].length ? styles.shrink : '') +
                ' ' +
                styles['form-input-label']
            }
        >
          {placeholder}
        </label>
        <ErrorMessage name={name} component={'div'} className={styles.errorLabel}/>
      </div>
  );
};

export default FormInputComponent;
