import { Component } from "solid-js";

import styles from './style.module.css'

const Header: Component = (props) => {

    return <h2 class={styles.title}>Data Aggregator</h2>;
};

export default Header;