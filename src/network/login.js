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
export function logout() {
    return request({
        url: '/logout',
        method: 'post'
    })
}

export function mail(mail) {
    return request({
        url: '/user/mail',
        method: 'post',
        params: {
            mail
        }
    })
}
export function retrieveassword(mail,code,pass) {
    return request({
        url: '/user',
        method: 'put',
        params: {
            mail,
            code,
            pass
        }
    })
}
export function add(user) {
    return request({
        url: '/user',
        method: 'post',
        params: {
            userName:user.name,
            userPass:user.pass,
            userNickname:user.userNickname,
            userNumber:user.userNumber,
            mail:user.mail,
            code:user.code
        }
    })
}

