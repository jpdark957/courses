import { request } from './request';

export function getHomeTab() {
  return request({
    url: '/home/label'
  })

}