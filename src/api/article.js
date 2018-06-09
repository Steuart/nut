import request from '../utils/request'

export function getArticle(id) {
  return request({
    url: '/article/' + id,
    method: 'get'
  })
}
