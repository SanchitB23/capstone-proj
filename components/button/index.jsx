import React from 'react';
import styles from './button.module.scss';

export const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, button_type, ...otherProps }) => {
  return (
    <button
      className={styles['button-container'] + ' ' + styles[button_type]}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
