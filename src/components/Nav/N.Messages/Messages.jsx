import React from "react";
import s from "./Messages.module.css";
import MessagesItem from "./MessageItem/MessageItem";
import DialogsItem from "./DialogsItem/DialogsItem";
import { BrowserRouter } from "react-router-dom";


function Messages(props) {
  let state = props.dialogsPage;

  let DialogsD = state.DialogsData.map(d => <DialogsItem id={d.id} Name={d.Name} />);
  let MessageD = state.MessagesData.map(m => <MessagesItem message={m.message} />);
  let NewMessage = state.NewMessage;


  let OnSendMessage = () => {
    props.sendMessage();
  }


  let OnMessageChange = (e) => {
    let text = e.target.value;
    props.onMessageChange(text);
  }
  
  
  return (
    <BrowserRouter>
      <div className={s.dialogs}>
        <div>{DialogsD} </div>

        <div> {MessageD}
          <div>
          <textarea onChange={OnMessageChange}  value={NewMessage}></textarea>
          </div>
          
          <div>
          <button onClick={OnSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Messages;
