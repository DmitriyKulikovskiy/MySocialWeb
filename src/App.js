import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/nav";
import Music from "./components/Nav/N.Music/Music";
import Friends from "./components/Nav/N.Friends/Friends";
import Settings from "./components/Nav/N.Settings/Settings";
import { Route } from "react-router-dom";
import MessagesContainer from "./components/Nav/N.Messages/message_container";
import UsersContainer from "./components/Nav/N.Users/Users-container";
import ProfileContainer from "./components/Content/Content-container";
import HeaderContainer from "./components/Header/header-container";






function MyWeb() {

  return (
      <div className="main-wrapper">
          <HeaderContainer />
          <Nav />
        <div className="main-wrapper-content">
          <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
          <Route path='/Messages' render={() => <MessagesContainer/>}/>
          <Route path='/Users' render={() => <UsersContainer />}/>
          <Route path='/Music' render={() => <Music />}/>
          <Route path='/Friends' render={() => <Friends />}/>
          <Route path='/Settings' render={() => <Settings />}/>
        </div>

      </div>
  );
}

export default MyWeb;
