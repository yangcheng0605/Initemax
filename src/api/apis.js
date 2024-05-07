import { get, post } from '../utils/http'
/* api管理 */
function picList(data) {
  return get('/dzy/ccgj/pic/api/list', data)
}
function categoryList(data) {
  return get('/dzy/ccgj/category/api/list', data)
}
function productList(data) {
  return get('/dzy/ccgj/product/api/detail/' + data )
}
function productListByCate(data) {
  return get('/dzy/ccgj/product/api/listByCate/' + data)
}
export {
  picList,
  categoryList,
  productList,
  productListByCate,
}
