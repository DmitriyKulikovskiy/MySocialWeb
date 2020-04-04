import { authAPI } from "../API/api";
import { stopSubmit } from "redux-form";

const SET_AUTH = "SET_AUTH";


let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:

      return {
        ...state,
        ...action.payload //more popular 'payload' instead of 'data'
      }

    default:
      return state;
  }
};

//  Action Creator
export const setAuthAC = (userId, email, login, isAuth) => ({ type: "SET_AUTH", payload: {userId, email, login,isAuth} });


export const getAuth = () => 
 (dispatch) => {
   return authAPI.authMe().then(response => {
      if (response.data.resultCode === 0) {
          let {id, login, email} = response.data.data;
          dispatch(setAuthAC(id, email, login, true));
      }
  });
}


//API thunks of LOGIN/LOGOUT
export const login = (login, password, rememberMe) => dispatch => {


  authAPI.login(login, password, rememberMe).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthAC());
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
      dispatch(stopSubmit("login", {_error: message}));
    }	            
  });
};

export const logOut = () => dispatch => {
  authAPI.logOut().then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthAC(null,null,null,false));
    }
  });
};




export default AuthReducer;
