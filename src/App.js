import React, { Suspense } from "react";
import "./App.css";
import Nav from "./components/Nav/nav";
import Music from "./components/Nav/N.Music/Music";
import Friends from "./components/Nav/N.Friends/Friends";
import Settings from "./components/Nav/N.Settings/Settings";
import { Route, withRouter } from "react-router-dom";
import MessagesContainer from "./components/Nav/N.Messages/message_container";
import HeaderContainer from "./components/Header/header-container";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import MainLoader from "./components/Commons/MainLoader/MainLoader";
import {initializeApp} from "./redux/app-reducer"
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

// lazy components loading 
const ProfileContainer = React.lazy(() => import('./components/Content/Content-container'));
const UsersContainer = React.lazy(() => import('./components/Nav/N.Users/Users-container'));




class MyWeb extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
 }

  render() {
 
    if(!this.props.initialized) {
      return <MainLoader />
    }

    return (
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

 let AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp}))(MyWeb); 

const AppWeb = (props) => {
    return <BrowserRouter>
         <Provider store={store}>
             <AppContainer />
         </Provider>
     </BrowserRouter>
 }


 export default AppWeb;
 

 