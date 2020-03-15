
import * as serviceWorker from "./serviceWorker";
import store from './redux/state';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";


let reRenderTree = (state) => { // put state as argument to send it 
    ReactDOM.render(
        <BrowserRouter>
            <App    state={state} 
                    dispatch={store.dispatch.bind(store)}
                    store={store}/> 
        </BrowserRouter> , document.getElementById("root"));
}

reRenderTree(store.getState()); // we use state as method to send it to 'render function'
store.subscribe(reRenderTree); //func (subscribe) gets reRenderTree's functionality and gives it to (reRenderTree) in 'state. That's why index.js not depends from state.js

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

