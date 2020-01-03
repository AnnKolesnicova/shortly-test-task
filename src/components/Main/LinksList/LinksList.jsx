import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import CopyToClipboard from 'react-copy-to-clipboard';
import Button from 'lib/components/Button';
import styles from './styles.module.scss';

const LinksList = ({ className, list, onCopy, copyItemSuccess }) => (
  <section className={cx(styles.list, className)}>
    {list.map(item => (
      <div className={styles.item} key={item.id}>
        <p className={styles.link}>
          {item.link}
        </p>
        <a
          className={styles.shortLink}
          href={item.shortLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.shortLink}
        </a>
        <CopyToClipboard
          text={item.shortLink}
          onCopy={() => onCopy(item.id)}
        >
          <Button
            className={cx(styles.copyBtn, {
              [styles.copySuccess]: copyItemSuccess === item.id,
            })}
            square
            sm
          >
            {copyItemSuccess === item.id ? 'Copied!' : 'Copy'}
          </Button>
        </CopyToClipboard>
      </div>
    ))}
  </section>
);

LinksList.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array,
  copyItemSuccess: PropTypes.string,
  onCopy: PropTypes.func.isRequired,
};

LinksList.defaultProps = {
  className: '',
  copyItemSuccess: '',
  list: [],
};

export default LinksList;
