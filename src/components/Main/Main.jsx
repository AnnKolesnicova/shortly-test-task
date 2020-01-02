import React from 'react';
import useStateList from './container';
import LinkForm from './LinkForm';
import LinksList from './LinksList';
import InfoBlock from './InfoBlock';

import icon1 from './icons/brand-recognition.svg';
import icon2 from './icons/detailed-records.svg';
import icon3 from './icons/fully-customizable.svg';

import styles from './styles.module.scss';

const Main = () => {
  const {
    value, invalidValue,
    onChange, onSubmit,
    list, onCopy, copyItemSuccess,
  } = useStateList([]);

  return (
    <main className={styles.container}>
      <LinkForm
        className={styles.form}
        value={value}
        invalidValue={invalidValue}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <LinksList
        list={list}
        onCopy={onCopy}
        copyItemSuccess={copyItemSuccess}
      />
      <section className={styles.stats}>
        <div className={styles.info}>
          <h1 className={styles.heading}>
            Advanced Statistics
          </h1>
          <p>
            Track how your links are performing across the web with our advanced statistics dashboard.
          </p>
        </div>
        <div className={styles.aboutStats}>
          <InfoBlock
            className={styles.infoBlock}
            heading={'Brand Recognition'}
            caption={'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'}
            icon={icon1}
          />
          <InfoBlock
            className={styles.infoBlock}
            heading={'Detailed Records'}
            caption={'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'}
            icon={icon2}
          />
          <InfoBlock
            className={styles.infoBlock}
            heading={'Fully Customizable'}
            caption={'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'}
            icon={icon3}
          />
        </div>
      </section>
    </main>
  );
};

export default Main;
