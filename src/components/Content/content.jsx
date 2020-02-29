import React from 'react';
import s from './content.module.css';
import MyPosts from './MyPosts/MyPost';

function Content() {
    return (
      <div>
        <img src="https://cdn.promodj.com/afs/0083e35cd53af4774a34567b8c00bbeb12:d18f81"></img>

        <div>
          ava + description
        </div>

        <MyPosts />
      </div>
    )
}

export default Content;