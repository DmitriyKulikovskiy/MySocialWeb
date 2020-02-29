import React from 'react';
import s from './nav.module.css';
import { NavLink } from 'react-router-dom';


function Nav() {
    return (
        <div className={s.nav}>

            <div className={s.box}>
                <img src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/16931781451548233622-256.png"></img>
                <NavLink to="Content" className={s.item_button} activeClassName={s.ActiveLink}>Profile</NavLink>
            </div>
                    
            <div className={s.box}>
                <img src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/2969073921577437003-256.png"></img>
                <NavLink to="Messages" className={`${s.item_button}  ${s.up}`} activeClassName={s.ActiveLink}>Messages</NavLink>
            </div>
      
            <div className={s.box}>
                <img src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/20236604531551938932-256.png"></img>
                <NavLink to="Music" className={`${s.item_button}  ${s.up}`} activeClassName={s.ActiveLink}>Music</NavLink>
            </div>
         
            <div className={s.box}>
                <img src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/4429314411556281663-256.png"></img>
                <NavLink to="Friends" className={`${s.item_button}  ${s.up}`} activeClassName={s.ActiveLink}>Friends</NavLink>
            </div>
     
            <div className={s.box}>
                <img src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/1222113511552644365-256.png"></img>
                <NavLink to="Settings" className={`${s.item_button}  ${s.up}`} activeClassName={s.ActiveLink}>Settings</NavLink>
            </div>

        </div>
    )
}

export default Nav;