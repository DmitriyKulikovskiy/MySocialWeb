import { usersAPI } from "../API/api";


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
          users: state.users.map( u =>  {
              if (u.id === action.userId) {
                  return {...u, followed: true}
              }
              return u;
          })
      }
  case UNFOLLOW:
      return {
          ...state,
          users: state.users.map( u =>  {
              if (u.id === action.userId) {
                  return {...u, followed: false}
              }
              return u;
          })
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

  return (dispatch) => {
    dispatch(setIsLoadingAC(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(setIsLoadingAC(false));
      dispatch(setUserAC(data.items)); //use debugger to know current route of response
      dispatch(totalUserCounterAC(data.totalCount));

    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(setFollowingLoaderAC(true, userId));
    usersAPI.follow(userId).then(response => {
      if (response.data.resultCode == 0) {
        dispatch(followSuccess(userId));
      } 
      dispatch(setFollowingLoaderAC(false, userId));
    });
  };
};

export const unfollow = (userId) => {

  return (dispatch) => {
    dispatch(setFollowingLoaderAC(true, userId));
    usersAPI.unfollow(userId).then(response => {
      if (response.data.resultCode == 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(setFollowingLoaderAC(false, userId));
    });
  };
};




export default UsersReducer;
