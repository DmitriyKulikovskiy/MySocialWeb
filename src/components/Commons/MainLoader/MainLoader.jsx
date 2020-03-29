import s from './MainLoader.module.css'
import React from 'react';

const MainLoader = (props) => {
    return (
        <div className={s.mainBoxLoader}><div className={s.lds_ring}><div></div><div></div><div></div><div></div></div></div>
    )
}

export default MainLoader;