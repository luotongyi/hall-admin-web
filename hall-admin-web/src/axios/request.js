import axios from 'axios'
import {
  Message
} from 'element-ui'

//是否支持跨域带cookie
axios.defaults.withCredentials = false

const service = axios.create({
  baseURL: '', // api的base_url
  timeout: 10000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  if (localStorage.getItem('token') && !config.headers['Authorization']) {
    config.headers['Authorization'] = store.getters.token
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    if (error.response) {
      if (error.response.status === 500) {
        let data = error.response.data
        Message.error({
          showClose: true,
          message: data.message
        })
      } else if (error.response.status === 400) {
        let data = error.response.data
        Message.error({
          showClose: true,
          message: data.message
        })
      } else if (error.response.status === 401) {
        let data = error.response.data
        Message.error({
          showClose: true,
          message: data.message
        })
      } else {
        let data = error.response.data
        Message.error({
          showClose: true,
          message: data.message
        })
      }
    }
    return Promise.reject(error)
  })

export default service
