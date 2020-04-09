import { usersAPI, profileAPI } from "../API/api";

const ADD_POST = "ADD_POST";

const PROFILE_PAGE = "PROFILE_PAGE";
const SET_STATUS = 'SET_STATUS'

let initialState = {
  PostData: [
    { id: 1, message: "Hi, This is very good job!", like: 20 },
    { id: 2, message: "Oh, this was pretty cool", like: 10 }
  ],
  profile: null,
  status: ""
};

const postPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: action.NewPostText,
        like: 0
      };
      return {
        ...state,
        PostData: [newPost, ...state.PostData]
      };
    }

    
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }

    case PROFILE_PAGE: {
      return {
        ...state, 
        profile: action.profile
      }
    }

    default:
      return state;
  }
};

// action creator = object which has at least property 'type';
// action objects to MyPost
export const ActionCreatorAddPost = (NewPostText) => ({ type: "ADD_POST", NewPostText });
export const profileAC = (profile) => ({type: 'PROFILE_PAGE', profile});
export const setStatus = (status) => ({type: 'SET_STATUS', status});

export const getUserAPI = (userId) =>  async (dispatch) => {

    let response = await usersAPI.getProfile(userId);
    dispatch(profileAC(response.data)); 
}

export const getStatus = (userId) => async (dispatch) => {

    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data)); 
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
      if(response.data.resultCode === 0) {
      dispatch(setStatus(status));
      
    }
}

export default postPageReducer;
