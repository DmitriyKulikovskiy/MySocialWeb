import React from "react";
import Content from "./content";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {getUserAPI} from './../../redux/postPage-reducer'
import { compose } from "redux";
import {getStatus,updateStatus} from './../../redux/postPage-reducer'

class ProfileContainer extends React.Component {
  componentDidMount() {
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
    
  render() {
    return (
      <div>
        <Content {...this.props} profile={this.props.profile} status={this.props.status}  updateStatus={this.props.updateStatus} />
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
  withRouter,
  connect(mapStateToProps, { getUserAPI, getStatus, updateStatus })
)(ProfileContainer);
