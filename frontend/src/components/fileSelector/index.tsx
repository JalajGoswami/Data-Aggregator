import { Component, JSX, createSignal } from "solid-js";

import styles from './style.module.css'

const [file, setFile] = createSignal()

const FileSelector: Component<{}> = (props) => {

    const handleFileSelect: JSX.ChangeEventHandler<HTMLInputElement, Event> = (ev) => {
        console.log(ev.target.files?.[0])
    }

    return <div class={styles.container}>
        <p>Select/Drop a CSV file to be processed</p>
        <input
            type="file" accept="text/csv" class={styles.inputBox}
            onChange={handleFileSelect}
        />
    </div>;
};

export default FileSelector;