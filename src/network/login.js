import { request } from './request';

export function login(userName,userPass) {
    return request({
        url: '/login',
        method: 'post',
        params:{
            userName:userName,
            userPass:userPass
        }
    })
}
