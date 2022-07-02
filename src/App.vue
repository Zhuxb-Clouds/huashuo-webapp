<template>
  <router-view></router-view>
  <!-- <FooterFav/> -->
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
// import FooterFav from "./components/FooterView.vue";

const router = useRouter()

</script>

<style>
#app {
  font-family: "Noto Serif SC", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
