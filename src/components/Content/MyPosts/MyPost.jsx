import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";


function MyPosts(props) {

  let PostD = props.PostData.map(p => <Post id={p.id} message={p.message} like={p.like} />)
  return (
    <div>
      <div>
        My posts
        <div>
          <textarea className={s.PostText}></textarea>
          <button>New Post</button>
        </div>
         {PostD}
      </div>
    </div>
  );
}

export default MyPosts;
