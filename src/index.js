
import * as serviceWorker from "./serviceWorker";
import state, {subscribe} from './redux/state';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, updateNewPostText, sendNewMessage, updateNewMessage } from "./redux/state";
import { BrowserRouter } from "react-router-dom";


let reRenderTree = (state) => { // put state as argument to send it 
    ReactDOM.render(
        <BrowserRouter>
            <App    state={state} 
                    addPost={addPost} 
                    updateNewPostText={updateNewPostText} 
                    sendNewMessage={sendNewMessage}
                    updateNewMessage={updateNewMessage}/> 

        </BrowserRouter> , document.getElementById("root"));
}

// we use state as method to send it to 'render function'
reRenderTree(state);
subscribe(reRenderTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

