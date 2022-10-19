<template>
  <el-scrollbar height="100vh" @scroll="handleScroll">
    <HomeHeader :shadowShow="shadowShow"></HomeHeader>
    <router-view></router-view>
    <FooterFav />
  </el-scrollbar>
</template>

<script setup lang="ts">
import HomeHeader from "./components/homeHeader.vue";
import FooterFav from "./components/homeFooter.vue";
import { ref } from "vue";

const shadowShow = ref(false);
const handleScroll = function (e: { scrollTop: number }) {
  shadowShow.value = e.scrollTop == 0 ? false : true;
  console.log("ShadowShow.value", shadowShow.value);
};
</script>

<style>
#app {
  font-family: "Noto Serif SC";
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
