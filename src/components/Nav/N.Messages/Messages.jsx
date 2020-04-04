import React from "react";
import s from "./Messages.module.css";
import MessagesItem from "./MessageItem/MessageItem";
import DialogsItem from "./DialogsItem/DialogsItem";
import { AddMessageReduxForm } from "./message-form";




function Messages(props) {
  let state = props.dialogsPage;

  let DialogsD = state.DialogsData.map(d => <DialogsItem id={d.id} Name={d.Name} />);
  let MessageD = state.MessagesData.map(m => <MessagesItem message={m.message} />);


  let addNewMessage = (values) => {
      props.sendMessage(values.NewMessage)
  }
  
  return (
      <div className={s.dialogs}>
        <div>{DialogsD} </div>

        <div>
           {MessageD}
          <div>
            <AddMessageReduxForm onSubmit={addNewMessage}  />
          </div>
        </div>
      </div>
  );
}



export default Messages;
