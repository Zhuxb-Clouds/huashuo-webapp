<template>
  <div>
    <cardPopup :IsShow="dialogVisible" :card="curCard" @closePopup="closePopup" />
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
          <el-table-column
            prop="front"
            label="卡牌名称"
            min-width="200"
            :align="showBack ? 'left' : 'center'"
          />
          <el-table-column
            prop="back"
            label="卡牌描述"
            width="700"
            :show-overflow-tooltip="1"
            v-if="showBack"
            align="center"
          />
          <el-table-column prop="type" label="卡牌类型" min-width="150" align="center" />
          <el-table-column prop="pack" label="从属包" min-width="150" align="center" />
          <el-table-column
            prop="author"
            label="作者"
            min-width="150"
            align="center"
            v-if="showAuthor"
          />
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, watch } from "vue";
import { ElTable } from "element-plus";
import { storeToRefs } from "pinia";
import cardPopup from "./cardPopup.vue";
import { mainStore } from "@/store/index";
import { cardType } from "@/type/index";

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
  store.pageChange(val);
  page.value = val;
  store.getCard({ page: page.value, pageSize: pageSize.value });
};
//在挂载前调用一次getCard
onBeforeMount(store.getCard({ page: page.value, pageSize: pageSize.value }) as any);
// 编辑handel函数
const handleCheck = function (row: cardType) {
  // 传入id ,获取id对应的卡牌信息,再prop入弹窗子组件。
  curCard.value = row;
  openPopup();
};

// 卡背/作者 如果当前页数都没有此词条就直接隐藏
const showBack = ref(true);
const showAuthor = ref(true);

watch(cardTableData, (val: cardType[]) => {
  if (val) {
    showBack.value =
      val.filter((i) => {
        if (i.back !== null && i.back !== "") {
          return true;
        }
      }).length > 0;
    showAuthor.value =
      val.filter((i) => {
        if (i.author !== null && i.author !== "") {
          return true;
        }
      }).length > 0;
  }
});
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
</style>
