//entry point to React

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import './index.css';
import { About } from "./pages_route/About";
import { FeedbackProvider } from "./context/FeedbackContext.js";

//React dom renders our app-content into index.html, from index.js, through root;
ReactDOM.render(
    <FeedbackProvider>
    {/*Wrap everything into the feedback provider so we can access everything from there through useContext()*/}
    <BrowserRouter>
    {/* Wrap every 'page' into the Router, so we can create paths and switch between them */}
    <Routes>
        <Route path = "/" element={<App/>}/>
        <Route path = "/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </FeedbackProvider>,
     document.getElementById('root')
);
