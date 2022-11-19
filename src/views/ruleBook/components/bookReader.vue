<template>
  <div class="book-box">
    <div class="main-view">
      <div class="left-view" @click="curPage > 1 ? (curPage -= 1) : null">
        <div class="img-box img-box-left">
          <img :src="pageImageList[curPage - 1].src" alt="" />
        </div>
        <div class="arrow-left arrow" v-if="curPage != 1">
          <el-icon><ArrowLeft /></el-icon>
        </div>
      </div>
      <div class="right-view" @click="curPage < 15 ? (curPage += 1) : null">
        <div class="img-box img-box-right">
          <img :src="pageImageList[curPage].src" alt="" />
        </div>
        <div class="arrow-right arrow" v-if="curPage != 15">
          <el-icon><ArrowRight /></el-icon>
        </div>
      </div>
    </div>
    <div class="pagination">
      <el-pagination
        small
        layout="->,prev, pager, next"
        :total="150"
        :current-page="curPage"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const curPage = ref(1);
const handleCurrentChange = (val: number) => {
  curPage.value = val;
};
const pageImageList: Array<HTMLImageElement> = [];
for (let i = 1; i < 17; i++) {
  let img = new Image();
  img.src = require(`@/assets/images/ruleBook/rule-book-${i}.webp`);
  pageImageList.push(img);
}
</script>

<style scoped lang="less">
.book-box {
  background-color: white;
  margin: 1%;
  padding: 2%;
  padding-left: 3%;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 1px rgba(32, 32, 32, 0.11);
}
.main-view {
  width: 100%;
  height: 75vh;
  margin-bottom: 30px;
  // border: 1px #000 dashed;
  display: flex;
  justify-content: space-between;
  .right-view,
  .left-view {
    cursor: pointer;
  }
  & > div {
    width: 48%;
    height: 100%;
    position: relative;

    .img-box {
      height: 100%;
      display: flex;
      img {
        height: 100%;
        width: auto;
        border-radius: 30px;
        box-shadow: 0.7px 0.8px 3.5px rgba(0, 0, 0, 0.04), 2px 2.3px 9px rgba(0, 0, 0, 0.028),
          4.2px 4.9px 17.5px rgba(0, 0, 0, 0.022), 7.9px 9.2px 30.8px rgba(0, 0, 0, 0.018),
          14.3px 16.7px 52.8px rgba(0, 0, 0, 0.014), 30px 35px 80px rgba(0, 0, 0, 0.01);
        user-select: none;
      }
    }
    .img-box-left {
      justify-content: flex-end;
    }
    .img-box-right {
      justify-content: flex-start;
    }
  }
}
.arrow {
  position: absolute;
  top: 50%;
}
.arrow-left {
  left: 10%;
}
.arrow-right {
  right: 10%;
}
</style>
