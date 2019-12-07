import { request } from './request';

export function commentList(currentPage,pageSize) {
    return request({
        method:'get',
        url: '/commentList/'+currentPage+'/'+pageSize
    })
}

export function add(grade,userContent) {
    return request({
        url: '/byuser/comment',
        method:'post',
        params:{
            grade,
            userContent
        }
    })
}
