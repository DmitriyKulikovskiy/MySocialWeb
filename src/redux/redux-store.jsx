import { createStore, combineReducers } from "redux";
import dialogsPageReducer from "./dialogsPage-reducer";
import postPageReducer from "./postPage-reducer";
import UsersReducer from "./users-reducer";


let reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    postPage: postPageReducer,
    usersPage: UsersReducer
});

let store = createStore(reducers);


export default store;