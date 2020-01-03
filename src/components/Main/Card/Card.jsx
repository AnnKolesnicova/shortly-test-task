import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.scss';

const Card = ({
  className,
  heading, caption, icon,
}) => (
  <section className={cx(styles.infoBlock, className)}>
    <div className={styles.icon}>
      <img src={icon} alt={heading} />
    </div>
    <h1 className={styles.heading}>
      {heading}
    </h1>
    <p>{caption}</p>
  </section>
);

Card.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  caption: PropTypes.string,
  icon: PropTypes.string,
};

Card.defaultProps = {
  className: '',
  heading: '',
  caption: '',
  icon: '',
};

export default Card;
