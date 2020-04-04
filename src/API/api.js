

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
        console.warn('Obsolete method. Please use profileAPI.')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/` , {status}) // in this case we can use only status because it repeats
    }
}


export const authAPI = {

    authMe() {
        return instance.get(`auth/me`)
    },
    login(email,password,rememberMe = false) {
        return instance.post(`auth/login`, {email,password,rememberMe})
    },
    logOut() {
        return instance.delete(`auth/login`)
    }
}

