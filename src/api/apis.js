import { get, post } from '../utils/http'
/* api管理 */
function bannerList(data) {
  return get('/zgkj/ccgj/api/pic/list', data)
}
function proCategoryList(data) {
  return get('/zgkj/ccgj/api/category/list', data)
}
function proListByCate(data, page) {
  return get('/zgkj/ccgj/product/api/listByCate/' + data.cId + '/' + data.proType, page)
}
// 新闻列表
function newsList(data) {
  return get('/zgkj/ccgj/api/news/list', data)
}
// 公司详情
function companyDeteil(data) {
  return get('/zgkj/ccgj/api/us/deteil', data)
}
// 公司历程
function companyDevelops(data) {
  return get('/zgkj/ccgj/api/us/develops', data)
}
// 搜索 word
function searchList(data) {
  return get('/zgkj/ccgj/api/base/list', data)
}
// 搜索 word
function addGuestNeed(data) {
  return post('/zgkj/ccgj/api/guestneed/addGuestNeed', data, { type: 'form' })
}

export { bannerList, proCategoryList, proListByCate, newsList, companyDeteil, companyDevelops, searchList, addGuestNeed }
