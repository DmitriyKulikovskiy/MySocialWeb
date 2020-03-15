import React from "react";
import s from "./Messages.module.css";
import MessagesItem from "./MessageItem/MessageItem";
import DialogsItem from "./DialogsItem/DialogsItem";
import { BrowserRouter } from "react-router-dom";
import {ActionCreatorUpdateMessage, ActionCreatorAddMessage} from "../../../redux/dialogsPage-reducer"


function Messages(props) {
 
  let state = props.store.getState().dialogsPage;

  let DialogsD = state.DialogsData.map(d => <DialogsItem id={d.id} Name={d.Name} />);
  let MessageD = state.MessagesData.map(m => <MessagesItem message={m.message} />);
  let NewMessage = state.NewMessage;

  //create func send message from state
  let sendMessage = () => {
    props.store.dispatch(ActionCreatorAddMessage());
  }

  //textarea changes and sends info to state -> UL
  let onMessageChange = (e) => {
    let text = e.target.value;
    props.store.dispatch(ActionCreatorUpdateMessage(text));
  }
  
  
  return (
    <BrowserRouter>
      <div className={s.dialogs}>
        <div>{DialogsD} </div>

        <div> {MessageD}
          <div>
          <textarea onChange={onMessageChange}  value={NewMessage}></textarea>
          </div>
          
          <div>
          <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Messages;
