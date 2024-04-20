import { Show, type Component } from 'solid-js';

import styles from './App.module.css';
import Header from './components/header';
import FileSelector from './components/fileSelector';
import AggregationGenerator from './components/aggregationGen/aggregationGen';
import { columns, file } from './states/file';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header />
      <div>{file()}</div>
      <Show when={!file()}>
        <FileSelector />
      </Show>
      <AggregationGenerator />
      {columns()}
    </div>
  );
};

export default App;
