
import React from 'react';
import s from './user.module.css';
import userPhoto from '../../../images/user.png';
import { NavLink } from 'react-router-dom';




const Users = (props) => {

        let pagesCount = Math.ceil(props.totalUserCounter / props.pageSize); // share total users on current users on page
        let pages = [];
    
        for(let i=1;i < pagesCount; i++ ) {  
            pages.push(i);
        }
      
        return <div>
            {pages.map(p => {
           
            return  <span 
                className={props.currentPage === p && s.selectedPage} 
                onClick={ () => {props.onPageChange(p)} } > {p} </span>})}
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo}/>
                        </NavLink>
                    </div>
                    <div>
                    <div>
                        {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} 
                        onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>

                         : <button disabled={props.followingInProgress.some(id => id === u.id)}

                         onClick={() => { props.follow(u.id) }}>
                         Follow</button> 
                        }
                            

                    </div>
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    
}

    


export default Users;