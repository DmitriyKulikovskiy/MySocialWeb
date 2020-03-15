import React from "react";
import s from "./messageItem.module.css";
import { Route } from "react-router-dom";


function MessagesItem(props) {
    return (
      <div className={s.message}>{props.message}</div>

    )
  }

export default MessagesItem;