import React from "react";
import Content from "./content";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {getUserAPI, savePhoto,saveProfile,getStatus,updateStatus} from './../../redux/postPage-reducer'
import { compose } from "redux";


class ProfileContainer extends React.Component {
  
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId
        if(!userId) {
          this.props.history.push('/login')
        }
    }
    this.props.getUserAPI(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }
    
  render() {
    return (
      <div>
        <Content {...this.props}  profile={this.props.profile} status={this.props.status}  updateStatus={this.props.updateStatus} 
                                  isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto} />
      </div>
    );
  }
}

let mapStateToProps = state => ({
  profile: state.postPage.profile,
  status: state.postPage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});



export default compose(
  connect(mapStateToProps, { getUserAPI, getStatus, updateStatus , savePhoto, saveProfile}),
  withRouter
)(ProfileContainer);
