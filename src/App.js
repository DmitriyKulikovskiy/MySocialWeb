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
import { Route } from "react-router-dom";




function MyWeb(props) {

  return (
      <div className="main-wrapper">
          <Header />
          <Nav />
        <div className="main-wrapper-content">
          <Route path='/content' render={() => <Content  
            dispatch={props.dispatch} 
            store={props.store} />}/>

          <Route path='/Messages' render={() => <Messages 
            store={props.store} 
            dispatch={props.dispatch}/>}/>
          <Route path='/Music' render={() => <Music />}/>
          <Route path='/Friends' render={() => <Friends />}/>
          <Route path='/Settings' render={() => <Settings />}/>
        </div>

      </div>
  );
}

export default MyWeb;
