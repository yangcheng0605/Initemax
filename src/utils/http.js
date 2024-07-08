import axios from 'axios'
import store from '@/store'
import Storage from '@/utils/storage'
import { resetRouter } from '@/router'
// axios.defaults.baseURL = `${location.protocol}//www.ehonosvape.com`
axios.defaults.baseURL = `${location.protocol}//120.25.211.73`
axios.defaults.timeout = 10000
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.transformRequest = [function(data) {
//   var ret = ''
//   for (const it in data) {
//     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//   }
//   return ret
// }]

axios.interceptors.request.use(
  config => {
    if (config.type == 'form') {
      config.headers['Content-Type'] = 'multipart/form-data'
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    // console.log(response.status)
    if (response.status == 200 || response.status == 201) {
      const res = response.data
      if (res.status_code != '200') {
        return Promise.resolve(response)
      } else {
        return Promise.resolve(response)
      }
    } else if (response.status == 204) {
      console.log(response.status)
      return Promise.resolve({ status: 'success', status_code: 200 })
    } else {
      // MessageBox.confirm('您已经登出，您可以取消以继续停留在此页面，或重新登录', '注销', {
      //   confirmButtonText: '去登录',
      //   cancelButtonText: '取消',
      //   type: 'warning'
      // }).then(() => {
      //   window.location.href = '/'
      // })
    }
  },
  error => {
    if (error.response) {
      return Promise.reject(error.response)
    } else {
      return Promise.reject({ code: 500 })
    }
  }
)

export async function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params })
      .then(res => {
        // ...
        resolve(res.data)
      })
      .catch(err => {
        if (err.status == 403) {
          reject(err)
        } else {
          reject(err.data)
        }
      })
  })
}

export function post(url, params, config) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, config)
      .then(res => {
        // ...
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
export function patch(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .patch(url, params)
      .then(res => {
        // ...
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
export function DELETE(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, { params: params })
      .then(res => {
        // ...
        resolve(res)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
