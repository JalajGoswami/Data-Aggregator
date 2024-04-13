# README

## About

Desktop app made with Wails & Solid.js for data aggregation from multiple files supporting `csv`, `tsv`, `json` to perform operations on columns like sum, count, avg, so on & their combinations.

## Live Development

To run in live development mode, run `wails dev` in the project directory. This will run the go application along Vite dev server to serve frontend (wtih fast hot reload).

If you want to develop in a browser and have access to your Go methods, there is also a dev server that runs on http://localhost:34115. Connect to this in your browser, and you can call your Go code from devtools.

## Building

To build the redistributable in production mode, run `wails build`.
