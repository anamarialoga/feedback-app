//entry point to React

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import './index.css';
import { About } from "./pages_route/About";

//React dom renders our app-content into index.html, from index.js, through root;
ReactDOM.render(
    <BrowserRouter>
    <Routes>
        <Route path = "/" element={<App/>}/>
        <Route path = "/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>,
     document.getElementById('root')
);
