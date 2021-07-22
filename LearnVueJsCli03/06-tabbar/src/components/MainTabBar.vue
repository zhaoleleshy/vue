<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="deeppink">
      <img slot="item-icon" src="../assets/img/tabbar/home.svg">
      <img slot="item-icon-active" src="../assets/img/tabbar/home_active.svg">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" active-color="deeppink">
      <img slot="item-icon" src="../assets/img/tabbar/category.svg">
      <img slot="item-icon-active" src="../assets/img/tabbar/category_active.svg">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" active-color="deeppink">
      <img slot="item-icon" src="../assets/img/tabbar/shopcart.svg">
      <img slot="item-icon-active" src="../assets/img/tabbar/shopcart_active.svg">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" active-color="deeppink">
      <img slot="item-icon" src="../assets/img/tabbar/profile.svg">
      <img slot="item-icon-active" src="../assets/img/tabbar/profile_active.svg">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBarItem from "./tabbar/TabBarItem";
import TabBar from "./tabbar/TabBar";

export default {
  name: "MainTabBar",
  components: {
    TabBarItem,
    TabBar
  }
}
</script>

<style scoped>

</style>
