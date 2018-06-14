import request from '../utils/request'

//  获取文章
export function getArticle(id) {
  return request({
    url: '/article/' + id,
    method: 'get'
  })
}
//  保存文章
export function saveArticle(article) {
  return request({
    url: '/article/',
    method: 'post'
  })
}
