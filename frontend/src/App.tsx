import type { Component } from 'solid-js';

import styles from './App.module.css';
import Header from './components/header';
import FileSelector from './components/fileSelector';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header />
      <FileSelector />
    </div>
  );
};

export default App;
