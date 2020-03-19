const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
  PostData: [
    { id: 1, message: "Hi, This is very good job!", like: 20 },
    { id: 2, message: "Oh, this was pretty cool", like: 10 }
  ],
  NewPostText: ""
};

const postPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: state.NewPostText,
        like: 0
      };
      return {
        ...state,
        PostData: [newPost, ...state.PostData],
        NewPostText: ""
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        NewPostText: action.newText
      };
    }
    default:
      return state;
  }
};

// action creator = object which has at least property 'type';
// action objects to MyPost
export const ActionCreatorAddPost = () => ({ type: "ADD_POST" });
export const ActionCreatorUpdatePost = text => ({
  type: "UPDATE_NEW_POST_TEXT",
  newText: text
});

export default postPageReducer;
