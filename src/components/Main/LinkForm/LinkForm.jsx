import React from 'react';
import cx from 'classnames';
import Button from 'lib/components/Button';
import styles from './styles.module.scss';

const LinkForm = ({
  className,
  value, invalidValue,
  onSubmit, onChange
}) => {

  return (
    <div className={cx(styles.container, className)}>
      <form
        className={styles.form}
        onSubmit={onSubmit}
      >
        <input
          className={cx(styles.input, {[styles.invalid]: invalidValue})}
          type="url"
          placeholder="Shorten a link here..."
          onChange={onChange}
          value={value}
        />
        {invalidValue && <p className={styles.error}>Please add a link</p>}
        <Button square type="submit" className={styles.shortenBtn}>
          Shorten it!
        </Button>
      </form>
    </div>
  );
};

export default LinkForm;
