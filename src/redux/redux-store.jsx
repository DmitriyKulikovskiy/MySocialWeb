import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import dialogsPageReducer from "./dialogsPage-reducer";
import postPageReducer from "./postPage-reducer";
import UsersReducer from "./users-reducer";
import AuthReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import AppReducer from "./app-reducer";


let reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    postPage: postPageReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
    app: AppReducer
});

//tool from Chrome 'redux'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;