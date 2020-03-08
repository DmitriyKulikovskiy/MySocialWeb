import React from "react";
import s from "./content.module.css";
import MyPosts from "./MyPosts/MyPost";
import Profile from "./Profile/profile";


function Content(props) {
  
  return (
    <div>
      <img src="https://cdn.promodj.com/afs/0083e35cd53af4774a34567b8c00bbeb12:d18f81"></img>

      <Profile />
      <MyPosts PostData={props.state.PostData} dispatch={props.dispatch} NewPostText={props.state.NewPostText} />
      
    </div>
  );
}

export default Content;
