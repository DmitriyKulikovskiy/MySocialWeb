import React from "react";
import { connect } from "react-redux";
import { followAC, unFollowAC, setUserAC, currentPageAC, totalUserCounterAC } from "../../../redux/users-reducer";
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCounter: state.usersPage.totalUserCounter,
        currentPage: state. usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unFollow: (userID) => {
            dispatch(unFollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUserAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(currentPageAC(pageNumber));
        },
        setTotalUserCounter: (totalUserCounter) => {
            dispatch(totalUserCounterAC(totalUserCounter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);