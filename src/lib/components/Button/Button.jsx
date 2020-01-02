import React from 'react';
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
//
// Button.propTypes = {
//   children: React.PropTypes.oneOfType([
//     React.PropTypes.arrayOf(React.PropTypes.node),
//     React.PropTypes.node,
//   ]).isRequired,
//   className: PropTypes.string,
//   type: PropTypes.string,
//   disabled: PropTypes.bool,
//   secondary: PropTypes.bool,
//   inverse: PropTypes.bool,
//   transparent: PropTypes.bool,
//   circle: PropTypes.bool,
//   flat: PropTypes.bool,
//   lg: PropTypes.bool,
//   md: PropTypes.bool,
//   sm: PropTypes.bool,
//   leftIcon: PropTypes.node,
//   rightIcon: PropTypes.node,
// };
//
// Button.defaultProps = {
//   className: '',
//   disabled: false,
//   secondary: false,
//   inverse: false,
//   transparent: false,
//   flat: false,
//   circle: false,
//   type: 'button',
//   lg: false,
//   md: false,
//   sm: false,
//   leftIcon: undefined,
//   rightIcon: undefined,
// };

export default Button;
