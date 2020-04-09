import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppWeb from './App'



  ReactDOM.render(<AppWeb  /> ,  document.getElementById("root")
  );


serviceWorker.unregister();
