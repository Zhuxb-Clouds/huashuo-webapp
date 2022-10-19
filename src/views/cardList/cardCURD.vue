<template>
  <div class="CURD">
    <cardFilter />
    <cardTable />
  </div>
</template>

<script setup lang="ts">
import cardTable from "./components/cardTable.vue";
import cardFilter from "./components/cardFilter.vue";
</script>

<style scoped>
.CURD {
  padding: 80px 0 40px 0;
  background-color: #faf9f8;
}
</style>
