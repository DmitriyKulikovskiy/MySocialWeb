import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from './../../../../images/user.png'
import s from "./../user.module.css"
import { FollowUnfollow } from './follow-unfollow'

export const User = ({users,follow,unfollow,followingInProgress,onPageChange,currentPage,...props}) => {
    
    return <div>
        {users.map(u => <div key={u.id}>
            <div>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo}/>
                </NavLink>
            </div>
            
            <div>
                <FollowUnfollow u={u} unfollow={unfollow} follow={follow} followingInProgress={followingInProgress}/>
            </div>

            <div>{u.name}</div>
            <div>{u.status}</div>

            <div>
                 <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </div>
            
            </div>)
        }
    </div>
}