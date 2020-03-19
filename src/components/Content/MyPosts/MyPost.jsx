import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let PostD = props.PostData.map(p => (
    <Post id={p.id} message={p.message} like={p.like} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div>
        My posts
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            className={s.PostText}
            value={props.NewPostText}
          ></textarea>
          <button onClick={onAddPost}>New Post</button>
        </div>
        {PostD}
      </div>
    </div>
  );
};

export default MyPosts;
