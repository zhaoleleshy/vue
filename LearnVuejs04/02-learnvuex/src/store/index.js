//引入
import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";

//1.安装插件
Vue.use(Vuex)

const state = {
  counter: 1000,
  students: [
    {id: 110, name: 'zll', age: 18},
    {id: 111, name: 'zoo', age: 21},
    {id: 112, name: 'zuu', age: 24},
    {id: 113, name: 'zdd', age: 17}
  ],
  info: {
    name: 'zll',
    age: 18,
    height: 1.80
  }
}

const modules = {
   moduleA
}

//2.创建对象
const store = new Vuex.Store({
  state,
  mutations,
  modules,
  actions,
  getters
})
export default store
