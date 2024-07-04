import { get, post } from '../utils/http'
/* api管理 */
function bannerList(data) {
  return get('/zgkj/ccgj/api/pic/api/list', data)
}
function proCategoryList(data) {
  return get('/zgkj/ccgj/api/category/list', data)
}
function proListByCate(data) {
  let query = ''
  if (data.cId) {
    query = query + '/' + data.cId
  }
  if (data.proType) {
    query = query + '/' + data.proType
  }
  console.log(query)
  return get('/zgkj/ccgj/product/api/listByCate' + query)
}
export { bannerList, proCategoryList, proListByCate }
