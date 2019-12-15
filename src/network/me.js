import { request } from './request';

export function updateUser(userNumber,userNickname) {
    return request({
        url: '/user',
        method: 'put',
        params: {
            userNumber,
            userNickname
        }
    })
}
export function updatePass(oldpass,pass) {
    return request({
        url: '/user/pass',
        method: 'put',
        params: {
            oldpass,
            pass
        }
    })
}
