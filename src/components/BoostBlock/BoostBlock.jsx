import React from 'react';
import styles from './styles.module.scss';
import Button from 'lib/components/Button';

const BoostBlock = () => (
  <section className={styles.boost}>
    <h1 className={styles.heading}>
      Boost your links today
    </h1>
    <Button>Get Started</Button>
  </section>
);

export default BoostBlock;
