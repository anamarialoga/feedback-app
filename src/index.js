//entry point to React

import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import './index.css';

//React dom renders our app-content into index.html, from index.js, through root;
ReactDOM.render(<App/>, document.getElementById('root'));
