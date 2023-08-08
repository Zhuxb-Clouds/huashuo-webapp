<template>
  <div>
    <cardFilter ref="Filter" />
    <div id="table-box">
      <el-main>
        <el-table
          :data="cardTableData"
          stripe
          style="width: 100%; height: 100%"
          table-layout="fixed"
          size="large"
        >
          <el-table-column type="index" label="序号" min-width="50" align="center" />
          <el-table-column prop="front" label="卡牌正面" min-width="200" />
          <el-table-column
            prop="back"
            label="卡牌背面"
            width="400"
            :show-overflow-tooltip="1"
            align="center"
          />
          <el-table-column prop="type" label="卡牌类型" min-width="150" align="center" />
          <el-table-column prop="pack" label="从属包" min-width="150" align="center" />
          <el-table-column prop="author" label="作者" min-width="150" align="center" />
          <el-table-column label="操作" align="center" min-width="100">
            <template #default="{ row }">
              <el-button size="small" @click="handleCheck(row)">查看</el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-pagination
          :page-size="pageSize"
          :pager-count="11"
          layout="prev, pager, next"
          :current-page="page"
          :total="cardTableDataTotal"
          @current-change="handleCurrentChange"
          :hide-on-single-page="true"
          style="margin-top: 1%"
        />
      </el-main>
      <cardPopup :IsShow="dialogVisible" :card="curCard" @closePopup="closePopup" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, nextTick } from "vue";
import { ElTable } from "element-plus";
import { storeToRefs } from "pinia";
import cardPopup from "./cardPopup.vue";
import { mainStore } from "@/store/index";
import { cardType } from "@/type/index";
import cardFilter from "./cardFilter.vue";
const Filter = ref(null);
const store = mainStore();
const { cardTableData, cardTableDataTotal, page, pageSize } = storeToRefs(store);
const curCard = ref<cardType>({
  front: "",
  back: "",
  type: "",
  pack: "",
});
// 弹窗显示与关闭
const dialogVisible = ref(false);
const openPopup = () => (dialogVisible.value = true);
const closePopup = () => {
  dialogVisible.value = false;
};
// 分页
const handleCurrentChange = (val: number) => {
  nextTick(() => {
    page.value = val;
    const query = Filter.value!.getQuery();
    store.getCard({ ...query, page: page.value, pageSize: pageSize.value });
  });
};
//在挂载前调用一次getCard
onBeforeMount(store.getCard({ page: page.value, pageSize: pageSize.value }) as any);
// 编辑handel函数
const handleCheck = function (row: cardType) {
  // 传入id ,获取id对应的卡牌信息,再prop入弹窗子组件。
  curCard.value = row;
  openPopup();
};
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}

#table-box {
  background-color: white;
  margin: 1%;
  margin-right: 1%;
  padding: 2%;
  /* padding-left: 3%; */
  border-radius: 10px;
  box-shadow: 5px 5px 10px 1px rgba(32, 32, 32, 0.11);
}
/* 当单元格内为空则内容置为 --  */
.el-table__body .cell {
  white-space: pre-wrap;
  word-break: break-all;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  padding: 0 5px;
}
</style>
