import React from 'react';
import cx from 'classnames';
import CopyToClipboard from 'react-copy-to-clipboard';
import Button from 'lib/components/Button';
import styles from './styles.module.scss';

const LinksList = ({ className, list, onCopy, copyBtnText }) => (
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
        <CopyToClipboard text={item.shortLink} onCopy={onCopy}>
          <Button
            className={cx(styles.copyBtn, {
              [styles.copySuccess]: copyBtnText === 'Copied!',
            })}
            square
            sm
          >
            {copyBtnText}
          </Button>
        </CopyToClipboard>
      </div>
    ))}
  </section>
);

export default LinksList;
