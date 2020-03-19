import React from 'react';
import s from './Post.module.css';


function Post(props) {
    return (
      <div>
        <div className={s.item}>
          <img className={s.icon} src="https://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/katniss-in-hunger-games-quarter-quell.jpg?itok=EjlmQdtR"></img>
          {props.message}
          <span className={s.like}>Like {props.like}</span>
        </div>  
      </div>
    )
}

export default Post;