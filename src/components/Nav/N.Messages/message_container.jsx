import React from "react";
import Messages from "./Messages";
import {ActionCreatorAddMessage} from "../../../redux/dialogsPage-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (NewMessage) => {
      dispatch(ActionCreatorAddMessage(NewMessage));
    }
  }
}

export default compose( withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Messages);


