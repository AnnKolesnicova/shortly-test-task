import React from 'react';
import styles from './styles.module.scss';
import logoImage from 'lib/images/logo.svg'
import mobileMenuImage from 'lib/images/menu.svg'
import Button from 'lib/components/Button';

const Header = () => (
  <header className={styles.header}>
    <img src={logoImage} alt="Shortly" className={styles.logo}/>
    <nav className={styles.nav}>
      <input className={styles.menuBtn} type="checkbox" id="menuBtn"/>
      <label className={styles.menuIcon} htmlFor="menuBtn">
        <span className={styles.navicon}>
          <img src={mobileMenuImage} alt=""/>
        </span>
      </label>
        <div className={styles.menu}>
          <ul className={styles.items}>
          <li><a href="/">Features</a></li>
          <li><a href="/">Pricing</a></li>
          <li><a href="/">Resources</a></li>
        </ul>
        <div className={styles.auth}>
          <a href="/">Login</a>
          <Button sm className={styles.authBtn}>Sign Up</Button>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
