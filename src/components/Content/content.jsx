import React from "react";
import Profile from "./Profile/profile";
import MyPostsContainer from "./MyPosts/MyPost_Container";

function Content(props) {
  return (
    <div>
      <img src="https://cdn.promodj.com/afs/0083e35cd53af4774a34567b8c00bbeb12:d18f81"></img>
      <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer />
    </div>
  );
}


export default Content;