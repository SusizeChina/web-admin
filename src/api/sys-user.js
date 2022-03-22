import request from '@/utils/request'

export function getUserList(data) {
  return request({
    url: '/v1/user',
    method: 'get',
    params: data
  })
}
export function addUser(data) {
  return request({
    url: '/v1/user',
    method: 'post',
    data: data
  })
}
