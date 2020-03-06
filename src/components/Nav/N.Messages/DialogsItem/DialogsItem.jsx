import React from "react";
import {NavLink} from "react-router-dom";

function DialogsItem(props) {
    let path = "/Messages" + props.id;
  return (
    <div>
      <NavLink to={path}>{props.Name}</NavLink>
    </div>
  );
}

export default DialogsItem;
