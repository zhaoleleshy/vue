import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// //使用全局的配置在进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
//
// //1.基本使用
// axios({
//   url: '/home/multidata'
// }).then(data => {
//   console.log(data);
// })
//
// axios({
//   url: '/home/data',
//   //专门针对get请求封装
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })
//
// //2.发送并发请求
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(results => {
//   console.log(results);
// })
//
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))


//4.创建对应的axios的实例
// const instance = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout :5000
// })
// instance({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })
//
// instance({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// import {request} from "./network/request";

// request({
//   url: 'home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })

// request({
//   baseConfig: 'home/multidata',
//   success: function (res) {
//     console.log(res);
//   },
//   failure: function (err) {
//     console.log(err);
//   }
// })

//最终方案
import {request} from "./network/request";
request({
  url: 'home/multidata',
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
