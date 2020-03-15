const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const postPageReducer = (state,action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
            id: 3,
            message: state.NewPostText,
            like: 0
        }
            state.PostData.push(newPost);
            state.NewPostText = ""; // clear text-area
            return state;
        case UPDATE_NEW_POST_TEXT :
            state.NewPostText = action.newText;
            return state;
        default:
            return state;
    }
}

// action creator = object which has at least property 'type'; 
// action objects to MyPost
export const ActionCreatorAddPost = () => ({type: "ADD_POST"});
export const ActionCreatorUpdatePost = (text) => ({type: "UPDATE_NEW_POST_TEXT", newText: text});

export default postPageReducer;