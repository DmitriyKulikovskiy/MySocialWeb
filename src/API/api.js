

import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "a0df2397-7bb5-4c90-a447-742e7484a7a0"
    }
});


export const usersAPI = {
    
    getUsers(currentPage = 1, pageSize = 15) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    }
}



export const autAPI = {

    authMe() {
        return instance.get(`auth/me`)
    }
}