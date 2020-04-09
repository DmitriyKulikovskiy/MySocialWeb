
import React from 'react';
import { User } from './user-components/user';
import { UserPageChange } from './user-components/user-page-change';


const Users = ({pageSize,totalUserCounter,users,follow,unfollow,followingInProgress,currentPage,onPageChange}) => {
    return <div>
        <UserPageChange totalUserCounter={totalUserCounter} pageSize={pageSize}  onPageChange={onPageChange} currentPage={currentPage}/>
        <User users={users} followingInProgress={followingInProgress} follow={follow} unfollow={unfollow}/>
    </div>
    
}


export default Users;