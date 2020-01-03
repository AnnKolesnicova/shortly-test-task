import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from 'lib/components/Button';
import styles from './styles.module.scss';

const LinkForm = ({
  className,
  value, invalidValue,
  onSubmit, onChange,
}) => (
  <div className={cx(styles.container, className)}>
    <form
      className={styles.form}
      onSubmit={onSubmit}
    >
      <input
        className={cx(styles.input, { [styles.invalid]: invalidValue })}
        type="url"
        placeholder="Shorten a link here..."
        onChange={e => onChange(e.target.value)}
        value={value}
      />
      {invalidValue && <p className={styles.error}>Please add a link</p>}
      <Button square type="submit" className={styles.shortenBtn}>
        Shorten it!
      </Button>
    </form>
  </div>
);

LinkForm.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  invalidValue: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

LinkForm.defaultProps = {
  className: '',
  value: '',
  invalidValue: false,
};

export default LinkForm;
