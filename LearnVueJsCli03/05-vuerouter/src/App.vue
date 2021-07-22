<template>
  <div id="app">
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
        <!--<button @click="homeClick">首页</button>
        <button @click="aboutClick">关于</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
<!--    <router-link :to="'/user/'+userId">用户</router-link>-->
<!--    <router-link :to="{ path: '/profile', query: {name: 'zll', age: 18, height: 1.88}}">档案</router-link>-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <!--正则表达式里面也不能随便加空格\d{2,9}-->
    <keep-alive exclude="Profile,User"><!--排除在外每次会被重新创建2个以上之间不要随便加空格-->
      <router-view />
    </keep-alive>


  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'zhangsan'
    }
  },
  methods: {
    homeClick() {
      //通过代码的方式修改路由 vue-router
      //push -> pushState
      // this.$router.push('/home')
      this.$router.replace('/home' )
      console.log("homeClick");
    },
    aboutClick() {
      // this.$router.push('/home')
      this.$router.replace('/about')
      console.log("aboutClick");
    },
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'zll',
          age: 18,
          height: 1.88
        }
      })
    }
  }
}
</script>

<style>
  .active {
    color: red;
  }
</style>
