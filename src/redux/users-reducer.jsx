import { usersAPI } from "../API/api";
import {followUnfollowMethodItem} from "./user-helper/follow-unfollow"


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const USERS = "USERS";
const CURRENT_PAGE = "CURRENT_PAGE";
const TOTAL_USER_COUNTER = "TOTAL_USER_COUNTER";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
const FOLLOW_STATUS_LOADING = "FOLLOW_STATUS_LOADING";

let initialState = {
  users: [],
  pageSize: 15,
  totalUserCounter: 0,
  currentPage: 1,
  isLoading: false,
  followingInProgress: []
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
          ...state,
          users: followUnfollowMethodItem(state.users, action.userId, 'id', {followed: true })
      }
  case UNFOLLOW:
      return {
          ...state,
          users: followUnfollowMethodItem(state.users, action.userId, 'id', {followed: false })
      }
    case USERS:
      return {
        ...state,
        users: action.users
      }

    case CURRENT_PAGE:
      return {
        ...state,
          currentPage: action.currentPage
      }

    case TOTAL_USER_COUNTER:
      return {
        ...state,
        totalUserCounter: action.totalUserCounter
      }

    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    
    case FOLLOW_STATUS_LOADING:
      return {
        ...state, 
        followingInProgress: action.isLoading
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
   }

    default:
      return state;
  }
};

//  Action Creators
export const followSuccess = (userId) => ({type: 'FOLLOW', userId })
export const unfollowSuccess = (userId) => ({type: 'UNFOLLOW', userId })
export const setUserAC = (users) => ({ type: "USERS", users });
export const currentPageAC = (currentPage) => ({type: "CURRENT_PAGE", currentPage})
export const totalUserCounterAC = (totalUserCounter) => ({ type: "TOTAL_USER_COUNTER", totalUserCounter });
export const setIsLoadingAC = (isLoading) => ({ type: "TOGGLE_IS_LOADING", isLoading });
export const setFollowingLoaderAC = (isLoading, userId) => ({ type: "FOLLOW_STATUS_LOADING", isLoading, userId});


export const getUser = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(setIsLoadingAC(true));
    dispatch(currentPageAC(currentPage));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setIsLoadingAC(false));
    dispatch(setUserAC(data.items)); //use debugger to know current route of response
    dispatch(totalUserCounterAC(data.totalCount));
  };
};

const followUnfollowMethod = async (dispatch,userId,ApiMethod,actionCreator) => {
  dispatch(setFollowingLoaderAC(true, userId));
  let response = await ApiMethod(userId);
  if (response.data.resultCode == 0) {
    dispatch(actionCreator(userId));
  } 
  dispatch(setFollowingLoaderAC(false, userId));
}

export const follow = (userId) => {
  return async (dispatch) => {
    followUnfollowMethod(dispatch,userId,usersAPI.follow.bind(usersAPI), followSuccess);
  };
};

export const unfollow = (userId) => {

  return async (dispatch) => {
    followUnfollowMethod(dispatch,userId,usersAPI.unfollow.bind(usersAPI),unfollowSuccess);
  }
};




export default UsersReducer;
