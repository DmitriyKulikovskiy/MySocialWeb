const FOllOW = "FOllOW";
const UNFOLLOW = "UNFOLLOW";
const USERS = "USERS";
const CURRENT_PAGE = "CURRENT_PAGE";
const TOTAL_USER_COUNTER = "TOTAL_USER_COUNTER";

let initialState = {
  users: [],
  pageSize: 10,
  totalUserCounter: 0,
  currentPage: 1
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOllOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followedStatus: true };
          }
          return u;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followedStatus: false };
          }
          return u;
        })
      };
    case USERS:
      return {
        ...state,
        users: action.users
      };
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
    default:
      return state;
  }
};

// create Action Creator
export const followAC = userID => ({ type: "FOllOW", userID });
export const unFollowAC = userID => ({ type: "UNFOLLOW", userID });
export const setUserAC = users => ({ type: "USERS", users });
export const currentPageAC = currentPage => ({type: "CURRENT_PAGE", currentPage})
export const totalUserCounterAC = totalUserCounter => ({ type: "TOTAL_USER_COUNTER", totalUserCounter });

export default UsersReducer;
