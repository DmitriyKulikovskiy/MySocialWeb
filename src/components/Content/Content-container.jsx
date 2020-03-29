import React from "react";
import Content from "./content";
import { connect } from "react-redux";
import { profileAC } from "../../redux/postPage-reducer";
import { withRouter } from "react-router-dom";
import { usersAPI } from "../../API/api";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
        userId = 2;
    }

    usersAPI.getProfile(userId).then(response => {
        this.props.profileAC(response.data);  //use debugger to know current route of response
      }
    );
  }

  render() {
    return (
      <div>
        <Content {...this.props} profile={this.props.profile}/>
      </div>
    );
  }
}


let mapStateToProps = (state) => ({
  profile: state.postPage.profile
});

let withRouterDataUserContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {profileAC})(withRouterDataUserContainer);