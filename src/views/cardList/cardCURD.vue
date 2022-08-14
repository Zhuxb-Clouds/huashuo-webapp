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
  padding-top: 3%;
  background-color: #faf9f8;
}
</style>