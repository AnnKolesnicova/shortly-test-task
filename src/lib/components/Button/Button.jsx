import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Button.module.scss';

const Button = ({
  className, children,
  square,
  sm,
  ...other
}) => (
  <button
    className={cx(
      styles.button,
      {
        [styles.square]: square,
        [styles.sm]: sm,
      },
      className,
    )}
    {...other}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  square: PropTypes.bool,
  sm: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  square: false,
  sm: false,
};

export default Button;
