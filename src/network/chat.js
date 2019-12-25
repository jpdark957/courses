import { request } from './request';

export function appuser() {
    return request({
        method:'get',
        url: '/appusers'
    })
}


export function chatlog(touser) {
    return request({
        method:'get',
        url: '/chatlog/'+touser
    })
}