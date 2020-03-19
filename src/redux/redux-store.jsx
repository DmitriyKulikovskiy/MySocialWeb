import { createStore, combineReducers } from "redux";
import dialogsPageReducer from "./dialogsPage-reducer";
import postPageReducer from "./postPage-reducer";


let reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    postPage: postPageReducer
});

let store = createStore(reducers);


export default store;