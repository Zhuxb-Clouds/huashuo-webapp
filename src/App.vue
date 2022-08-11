<template>
  <el-scrollbar height="100vh">
    <HomeHeader></HomeHeader>
    <router-view></router-view>
    <FooterFav />
  </el-scrollbar>
</template>

<script setup lang="ts">
import HomeHeader from './components/homeHeader.vue';
import FooterFav from "./components/homeFooter.vue";


</script>

<style>
#app {
  font-family: 'Noto Serif SC';
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
