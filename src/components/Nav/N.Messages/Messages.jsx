import React from 'react';
import s from './Messages.module.css';
import { NavLink } from 'react-router-dom';

function Messages() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>  
                <div className={s.dialog}>
                   <NavLink to="/Messages/1">Man</NavLink> 
                </div>   

                <div className={s.dialog}>
                <NavLink to="/Messages/2">Antony</NavLink> 
                </div>   

                <div className={s.dialog}>
                    <NavLink to="/Messages/3">sdsd</NavLink>
                </div>

                <div className={s.dialog}>
                    <NavLink to="/Messages/4">Antony</NavLink>
                </div>

                <div className={s.dialog}>
                <NavLink to="/Messages/5">Antonssy</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hi</div>
            </div>
        </div>
    )
}

export default Messages;