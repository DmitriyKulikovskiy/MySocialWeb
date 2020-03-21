
import React from 'react';
import s from './user.module.css';
import * as axios from 'axios';
import userPhoto from '../../../images/user.png';


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items); //use debugger to know current route of response
                this.props.setTotalUserCounter(response.data.totalCount)
            });
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items); 
                });     
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUserCounter / this.props.pageSize);
        let pages = [];
    
        for(let i=1;i < pagesCount; i++ ) {
            pages.push(i);
        }

        return <div>
            {pages.map(p => {
            return  <span 
                className={this.props.currentPage === p && s.selectedPage} 
                onClick={ () => {this.onPageChange(p)} } > {p} </span>})}
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo}/>
                    </div>
                    <div>
                    <div>
                        {u.followedStatus 
                        ? <button onClick={() => {this.props.unFollow(u.id)}}>Follow</button> 
                        : <button onClick={() => {this.props.follow(u.id)}}>Unfollow</button>}
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
}


export default Users;