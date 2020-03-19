import React from "react";
import Messages from "./Messages";
import {
  ActionCreatorUpdateMessage,
  ActionCreatorAddMessage
} from "../../../redux/dialogsPage-reducer";
import { connect } from "react-redux";




const mapStateToProps = (state) => {

  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(ActionCreatorAddMessage());
    },
    onMessageChange: (text) => {
      dispatch(ActionCreatorUpdateMessage(text));
    }
  }
}


const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
