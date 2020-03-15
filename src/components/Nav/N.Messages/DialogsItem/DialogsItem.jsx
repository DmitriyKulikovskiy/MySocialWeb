import React from "react";
import {NavLink} from "react-router-dom";
import s from './item.module.css';

function DialogsItem(props) {
    let path = "/Messages" + props.id;
  return (
    <div className={s.boxDialog}>
      <img className={s.photo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSm5Dyx-Vf2NrWR0gPUhk74ZOuwDaUjiaG_iUPzETYzhLDTEqF-"></img>
      <NavLink to={path} className={s.dialogName}>{props.Name}</NavLink>
    </div>
  );
}

export default DialogsItem;
