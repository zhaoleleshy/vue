import axios from 'axios'

//最终方案
export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //2.axios拦截器
  instance.interceptors.request.use(config => {
    console.log(config);
    return config
  }, err => {
    console.log(err);
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  //3.发送真正的网络请求
  return instance(config)
}



// export function request(config, success, failure) {
//   //1.创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   //2.发送真正的网络请求
//   instance(config)
//     .then(res => {
//       success(res)
//     })
//     .catch(err => {
//       failure(err)
//     })
// }

// export function request(config) {
//   //1.创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   //2.发送真正的网络请求
//   instance(config.baseConfig)
//     .then(res => {
//       config.success(res)
//     })
//     .catch(err => {
//       config.failure(err)
//     })
// }
