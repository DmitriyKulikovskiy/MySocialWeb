import React from "react";
import { connect } from "react-redux";
import {  follow, unfollow ,setFollowingLoaderAC, currentPageAC, getUser } from "../../../redux/users-reducer";
import Users from './Users';
import MainLoader from "../../Commons/MainLoader/MainLoader";
import { compose } from "redux";
import {getUsers , getPageSize, getTotalUserCounter, getCurrentPage, getIsLoading,getFollowingInProgress} from "../../../redux/users-selector"




class UsersComponent extends React.Component {
    componentDidMount() {
        this.props.getUser(this.props.currentPage, this.props.pageSize );
        
    }

    onPageChange = (pageNumber) => {
        this.props.getUser( pageNumber ,this.props.pageSize );
        
    };
  
    render(){
    
        return <>
            {this.props.isLoading ? <MainLoader /> : null}
            <Users 
                totalUserCounter={this.props.totalUserCounter}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow} 
                follow={this.props.follow}
                onPageChange={this.onPageChange} //without props because it is class's func
                followingInProgress={this.props.followingInProgress}
                
        /> 
    </> }
}



let mapStateToProps = (state) => {
 
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCounter: getTotalUserCounter(state) ,
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingInProgress(state) 
    }
}

export default compose(

    connect(mapStateToProps, {follow, unfollow ,currentPageAC, setFollowingLoaderAC, getUser })
)(UsersComponent);





