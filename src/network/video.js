import { request } from './request'
export function videoList(currentPage,pageSize) {
  return request({
    method: 'get',
    url: '/video/'+currentPage+'/'+pageSize
  })
}
export function videoDetail(videoId) {
  return request({
    method: 'get',
    url: '/videoDetail/' + videoId
  })
}
export function videoComment(parentId) {
  return request({
    methods: 'get',
    url: '/videoComment/' + parentId
  })
}
export function videoCommentAdd(parentId,vcContent) {
  return request({
    method: 'post',
    url: '/byuser/videoCommentAdd',
    params: {
      parentId,
      vcContent
    }
  })
}