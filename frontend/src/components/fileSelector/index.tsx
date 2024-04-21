import { Component } from "solid-js";

import { ReadColumns, SelectFile } from "../../../wailsjs/go/main/App";
import { setColumns, setFile } from "../../states/file";
import styles from './style.module.css';


const FileSelector: Component<{}> = (props) => {
    async function handleFileSelect() {
        const filePath = await SelectFile()
        setFile(filePath)
        setColumns(await ReadColumns(filePath))
    }

    return <div class={styles.container}>
        <p id="MyWebView">Select/Drop a CSV file to be processed</p>
        <div
            class={styles.inputBox}
            onClick={handleFileSelect}
        />
    </div>;
};

export default FileSelector;