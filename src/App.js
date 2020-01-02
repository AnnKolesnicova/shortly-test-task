import React from 'react';
import styles from './App.module.scss';
import Header from 'components/Header';
import About from 'components/About';
import Main from 'components/Main';
import BoostBlock from 'components/BoostBlock';
import Footer from 'components/Footer';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <About />
      <Main />
      <BoostBlock />
      <Footer />
    </div>
  );
}

export default App;
