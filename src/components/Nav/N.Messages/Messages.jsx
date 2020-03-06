import React from "react";
import s from "./Messages.module.css";
import MessagesItem from "./MessageItem/MessageItem";
import DialogsItem from "./DialogsItem/DialogsItem";
import { BrowserRouter } from "react-router-dom";


function Messages(props) {
  let DialogsD = props.state.DialogsData.map(d => <DialogsItem id={d.id} Name={d.Name} />);
  let MessageD = props.state.MessagesData.map(m => <MessagesItem message={m.message} />);

  return (
    <BrowserRouter>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{DialogsD}</div>

        <div className={s.messages}>{MessageD}</div>
      </div>
    </BrowserRouter>
  );
}

export default Messages;
