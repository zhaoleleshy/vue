<template>
  <div id="app">
    <h1>----------modules--------------</h1>
    <h2>{{$store.state.moduleA.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>


    <h1>-----------info-------------</h1>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h1>--------------app---------------</h1>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.more20Age}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="additionCounter(5)">+5</button>
    <button @click="additionCounter(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h1>-----------HelloVue-------------</h1>
    <HelloVue/>
  </div>
</template>

<script>
import HelloVue from "./components/HelloVue";
import {
  INCREMENT
} from "./store/mutations-types"
export default {
  name: 'App',
  components: {
    HelloVue
  },
  data() {
    return {
      message: '我是app组件',
    }
  },
  methods: {
    addition() {
      this.$store.commit(INCREMENT)
    },
    subtraction() {
      this.$store.commit('decrement')
    },
    additionCounter(counter) {
      // this.$store.commit('incrementCounter', counter)
      //特殊的提交风格
      this.$store.commit({
        type: 'incrementCounter',
        counter
      })
    },
    addStudent() {
      const stu = {id: 115, name: 'zgg', age: 35}
      this.$store.commit('addStudent', stu)
    },
    updateInfo() {
      /*this.$store.commit({
        type: 'updateInfo',
        name: 'gpj'
      })*/
      /*this.$store.dispatch('aUpdateInfo', {
        message: '我是携带信息',
        success: () => {
          console.log('里面已经完成了');
        }
      })*/
      this.$store
        .dispatch('aUpdateInfo', '我是携带信息')
        .then(res => {
          console.log('里面已经完成了');
          console.log(res);
        })
    },
    updateName() {
      this.$store.commit('updateName', 'lisi')
    },
    asyncUpdateName() {
      this.$store.dispatch('aUpdateName');
    }
  }
}
</script>

<style>

</style>
