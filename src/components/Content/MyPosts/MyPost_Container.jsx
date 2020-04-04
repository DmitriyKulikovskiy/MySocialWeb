
import {ActionCreatorAddPost} from '../../../redux/postPage-reducer'
import MyPosts from "./MyPost";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
  
  return {
    PostData: state.postPage.PostData,
    NewPostText: state.postPage.NewPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (NewPostText) => {
      dispatch(ActionCreatorAddPost(NewPostText));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;







  

