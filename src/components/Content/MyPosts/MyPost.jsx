import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";
import { PostFormReduxForm } from "./post-form";


const MyPosts = React.memo (props => {
  let PostD = props.PostData.map(p => (
    <Post id={p.id} message={p.message} like={p.like} />
  ));

 

  let addNewPost = (values) => {
    props.addPost(values.NewPostText);
  };
  return (
    <div>
      <div>
        My posts
        <div>
          <PostFormReduxForm onSubmit={addNewPost}/>
        </div>
        {PostD}
      </div>
    </div>
  );
});

export default MyPosts;
