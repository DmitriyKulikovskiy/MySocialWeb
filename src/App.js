import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header/header";
import Nav from "./components/Nav/nav";
import Content from "./components/Content/content";
import Messages from "./components/Nav/N.Messages/Messages";
import Music from "./components/Nav/N.Music/Music";
import Friends from "./components/Nav/N.Friends/Friends";
import Settings from "./components/Nav/N.Settings/Settings";
import { Route, BrowserRouter } from "react-router-dom";

function MyWeb() {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        
          <Header />
          <Nav />
        <div className="main-wrapper-content">
          <Route path='/content' component={Content}/>
          <Route path='/Messages' component={Messages}/>
          <Route path='/Music' component={Music}/>
          <Route path='/Friends' component={Friends}/>
          <Route path='/Settings' component={Settings}/>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default MyWeb;
