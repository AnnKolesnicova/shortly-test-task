import React from 'react';
import Header from 'components/Header';
import About from 'components/About';
import Main from 'components/Main';
import Boost from 'components/Boost';
import Footer from 'components/Footer';
import styles from './App.module.scss';

const App = () => (
  <div className={styles.container}>
    <Header/>
    <About/>
    <Main/>
    <Boost/>
    <Footer/>
  </div>
);

export default App;
