import React from "react";
import s from "./Messages.module.css";
import MessagesItem from "./MessageItem/MessageItem";
import DialogsItem from "./DialogsItem/DialogsItem";
import { BrowserRouter } from "react-router-dom";


function Messages(props) {


  let DialogsD = props.state.DialogsData.map(d => <DialogsItem id={d.id} Name={d.Name} />);
  let MessageD = props.state.MessagesData.map(m => <MessagesItem message={m.message} />);

  //create link
  let NewMessageElement = React.createRef();

  //create func send message from state
  let sendMessage = () => {
    props.dispatch({type: 'SEND-MESSAGE'});
  }

  //textarea change and send info to state -> UL
  let onMessageChange = () => {
    let text = NewMessageElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-MESSAGE', newMessage: text});
  }
  debugger;
  return (
    <BrowserRouter>
      <div className={s.dialogs}>
        <div>{DialogsD} </div>

        <div> {MessageD}
          <textarea onChange={onMessageChange}  ref={NewMessageElement} value={props.newMessage}></textarea>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Messages;
