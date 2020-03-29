import React from 'react';
import s from './header.module.css';
import { NavLink } from 'react-router-dom';


function Header(props) {
    
    return (
        <header>
            <div className={s.logo}>Dark Space</div>
            <div className={s.login}>
                {props.isAuth   ? props.login 
                                : <NavLink to={'/login'}>Login In </NavLink>}
            </div>
        </header>
    )
}

export default Header;