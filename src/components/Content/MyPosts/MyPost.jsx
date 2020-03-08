import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  let PostD = props.PostData.map(p => (
    <Post id={p.id} message={p.message} like={p.like} />
  ));

  // add post REF (link)
  let NewPostElement = React.createRef();

  // add post Element
  let addPost = () => {
    props.addPost();
  };

  //FLUX
  let onPostChange = () => {
    let text = NewPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <div>
        My posts
        <div>
          <textarea onChange={onPostChange} ref={NewPostElement} className={s.PostText} value={props.NewMessage}></textarea>
          <button onClick={addPost}>New Post</button>
        </div>
        {PostD}
      </div>
    </div>
  );
}

export default MyPosts;
