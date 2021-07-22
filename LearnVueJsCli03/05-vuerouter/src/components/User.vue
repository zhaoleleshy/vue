<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户内容,黑黑黑</p>
    <h2>{{$route.params.id}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "User",
  methods: {
    btnClick() {
      console.log(this.$router);
      console.log(this.$route);
    }
  },
  computed: {
    userId() {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped>

</style>