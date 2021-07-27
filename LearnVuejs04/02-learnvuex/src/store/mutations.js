import {INCREMENT} from "./mutations-types";

export default {
  [INCREMENT](state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  incrementCounter(state, payload) {
    state.counter += payload.counter
  },
  addStudent(state, stu) {
    return state.students.push(stu)
  },
  updateInfo(state, /*payload*/) {
    state.info.name = 'gpj'
    // state.info.name = 'gpj'
    //state.info['address'] = '赵家村'  //做不到响应式
    // Vue.set(state.info, 'address', '赵家村') //可以做到响应式
    // delete state.info.age  //做不到响应式
    // Vue.delete(state.info, 'age') //可以做到响应式

  }
}
