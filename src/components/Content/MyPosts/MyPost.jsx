import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
      <div>
        <div>
          My posts
          <div>
            <textarea className={s.PostText}></textarea>
            <button>New Post</button>
          </div>
            <Post message='Hi, This is very good job!' like='20'/>
            <Post message='Oh, this was pretty cool' like='10'/>
        </div>
      </div>
    )
}

export default MyPosts;