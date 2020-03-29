import { createStore, combineReducers, applyMiddleware } from "redux";
import dialogsPageReducer from "./dialogsPage-reducer";
import postPageReducer from "./postPage-reducer";
import UsersReducer from "./users-reducer";
import AuthReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    postPage: postPageReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;