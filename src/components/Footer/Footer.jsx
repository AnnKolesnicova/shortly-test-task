import React from 'react';
import logo from 'lib/images/logo-white.svg';
import FacebookIcon from 'lib/images/socialIcons/FacebookIcon';
import TwitterIcon from 'lib/images/socialIcons/TwitterIcon';
import PinterestIcon from 'lib/images/socialIcons/PinterestIcon';
import InstaramIcon from 'lib/images/socialIcons/InstagramIcon';
import styles from './styles.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <img src={logo} alt="Shortly"/>
    <div className={styles.menu}>
      <div className={styles.items}>
        <h4 className={styles.heading}>Features</h4>
        <ul>
          <li><a href="/">Link Shortening</a></li>
          <li><a href="/">Branded Links</a></li>
          <li><a href="/">Analytics</a></li>
        </ul>
      </div>

      <div className={styles.items}>
        <h4 className={styles.heading}>Resources</h4>
        <ul>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Developers</a></li>
          <li><a href="/">Support</a></li>
        </ul>
      </div>
      <div className={styles.items}>
        <h4 className={styles.heading}>Company</h4>
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/">Our Team</a></li>
          <li><a href="/">Careers</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>
    </div>
    <div className={styles.social}>
      <a href="/"><FacebookIcon className={styles.icon}/></a>
      <a href="/"><TwitterIcon className={styles.icon} /></a>
      <a href="/"><PinterestIcon className={styles.icon} /></a>
      <a href="/"><InstaramIcon className={styles.icon} /></a>
    </div>
  </footer>
);

export default Footer;
