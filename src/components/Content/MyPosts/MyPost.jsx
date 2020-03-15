import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";
import {ActionCreatorAddPost,ActionCreatorUpdatePost} from '../../../redux/postPage-reducer'

const MyPosts = (props) => {
  let state = props.store.getState().postPage;

  let PostD = state.PostData.map(p => (
    <Post id={p.id} message={p.message} like={p.like} />
  ));

  let NewPostText = state.NewPostText;

  // add post Element
  let addPost = () => {
    props.dispatch(ActionCreatorAddPost());
  };

  //FLUX
  let onPostChange = (e) => {
    let text = e.target.value;
    props.dispatch(ActionCreatorUpdatePost(text));
  };
 
  return (
    <div>
      <div>
        My posts
        <div>
          <textarea onChange={onPostChange} className={s.PostText} value={NewPostText}></textarea>
          <button onClick={addPost}>New Post</button>
        </div>
        {PostD}
      </div>
    </div>
  );
}


export default MyPosts;
