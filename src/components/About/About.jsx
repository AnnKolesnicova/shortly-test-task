import React from 'react';
import styles from './styles.module.scss';
import aboutImage from 'lib/images/work-image.png'
import Button from 'lib/components/Button';

const About = () => (
  <section className={styles.about}>
    <div className={styles.info}>
      <h1 className={styles.heading}>
        More than just  shorter links
      </h1>
      <p className={styles.description}>
        Build your brand’s recognition and get detailed insights on how your links are performing.
      </p>
      <Button>Get started</Button>
    </div>
    <img src={aboutImage} className={styles.image} alt="More than just shorter links"/>
  </section>
);

export default About;
