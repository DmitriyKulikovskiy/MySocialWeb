import { autAPI } from "../API/api";

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
        ...action.data,
        isAuth: true
      }

    default:
      return state;
  }
};

//  Action Creator
export const setAuthAC = (userId, email, login) => ({ type: "SET_AUTH", data: {userId, email, login} });


export const getAuth = () => 
 (dispatch) => {
    autAPI.authMe().then(response => {
      if (response.data.resultCode === 0) {
          let {id, login, email} = response.data.data;
          dispatch(setAuthAC(id, email, login));
      }
  });
  }


export default AuthReducer;
