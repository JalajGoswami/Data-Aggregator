import { createSignal } from "solid-js";

const [file, setFile] = createSignal<string>();

const [columns, setColumns] = createSignal<string[]>();

export { file, setFile, columns, setColumns };
