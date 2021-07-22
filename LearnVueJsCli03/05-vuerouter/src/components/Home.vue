<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      message: '你好啊',
      path: '/home/news'
    }
  },
  created() {
    console.log('home create');
  },
  destroyed() {
    console.log('home destroyed');
  },
  //路由处于活跃的时候给一个默认路径
  //使用执行前提是使用了keep-alive
  activated() {
    this.$router.push(this.path)
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path
    next()
  }
}
</script>

<style scoped>

</style>