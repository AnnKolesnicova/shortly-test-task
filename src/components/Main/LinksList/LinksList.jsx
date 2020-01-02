import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import CopyToClipboard from 'react-copy-to-clipboard';
import Button from 'lib/components/Button';
import styles from './styles.module.scss';

const LinksList = ({ className, list, onCopy, copyItemSuccess }) => (
  <section className={cx(styles.list, className)}>
    {list.map((item, index) => (
      <div className={styles.item} key={index}>
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
        <CopyToClipboard text={item.shortLink} onCopy={() => onCopy(item.shortLink)}>
          <Button
            className={cx(styles.copyBtn, {
              [styles.copySuccess]: copyItemSuccess === item.shortLink,
            })}
            square
            sm
          >
            {copyItemSuccess === item.shortLink ? 'Copied!' : 'Copy'}
          </Button>
        </CopyToClipboard>
      </div>
    ))}
  </section>
);

LinksList.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array,
  copyItemSuccess: PropTypes.bool,
  onCopy: PropTypes.func.isRequired,
};

LinksList.defaultProps = {
  className: '',
  copyItemSuccess: false,
  list: [],
};

export default LinksList;
