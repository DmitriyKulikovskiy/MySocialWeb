import React from 'react';
import s from './header.module.css';


function Header() {
    return (
        <header>
            <div className={s.logo}>DarkSpace</div>
        </header>
    )
}

export default Header;