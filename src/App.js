import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/nav";
import Music from "./components/Nav/N.Music/Music";
import Friends from "./components/Nav/N.Friends/Friends";
import Settings from "./components/Nav/N.Settings/Settings";
import { Route, withRouter } from "react-router-dom";
import MessagesContainer from "./components/Nav/N.Messages/message_container";
import UsersContainer from "./components/Nav/N.Users/Users-container";
import ProfileContainer from "./components/Content/Content-container";
import HeaderContainer from "./components/Header/header-container";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import MainLoader from "./components/Commons/MainLoader/MainLoader";
import {initializeApp} from "./redux/app-reducer"




class MyWeb extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
 }

  render() {
 
    if(!this.props.initialized) {
      return <MainLoader />
    }
    
    return (
      <div className="main-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="main-wrapper-content">
          <Route path="/Login" render={() => <Login />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/Messages" render={() => <MessagesContainer />} />
          <Route path="/Users" render={() => <UsersContainer />} />
          <Route path="/Music" render={() => <Music />} />
          <Route path="/Friends" render={() => <Friends />} />
          <Route path="/Settings" render={() => <Settings />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(MyWeb); 
