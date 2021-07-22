import Vue from 'vue'
import App from './App'
import router from './router'  //导入路由对象可以省略文件下的文件名vue会自动找

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  //ES6对象字面量增强写法,挂载路由
  render: h => h(App)
})

