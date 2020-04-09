import React from 'react'

export const FollowUnfollow = ({unfollow,follow ,followingInProgress, u}) => {

    return <div>
        {u.followed
            ? <button disabled={followingInProgress.some(id => id === u.id)} 
            onClick={ () => {unfollow(u.id)} }>Unfollow</button>

            : <button disabled={followingInProgress.some(id => id === u.id)}
             onClick={() => {follow(u.id) }}>
             Follow</button> 
        }
    </div>
}