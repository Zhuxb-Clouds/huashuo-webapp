<template>
    <div>
        <CardFilte />
        <CardPopup :IsShow="dialogVisible" :cardId="cardId" @closePopup="closePopup" />
        <div id="tableBox">
            <el-main>
                <el-scrollbar max-height="62vh">

                    <el-table :data="cardTableData" stripe style="width: 100% ;height: 100%" table-layout="fixed"
                        max-height="900">
                        <el-table-column prop="id" label="卡牌编号" min-width="50" align="center" />
                        <el-table-column prop="front" label="卡牌名称" min-width="200"
                            :align="showBack ? 'left' : 'center'" />
                        <el-table-column prop="back" label="卡牌描述" width="700" :show-overflow-tooltip="1" v-if="showBack"
                            align="center" />
                        <el-table-column prop="type" label="卡牌类型" min-width="150" align="center" />
                        <el-table-column prop="pack" label="从属包" min-width="150" align="center" />
                        <el-table-column prop="author" label="作者" min-width="150" align="center" v-if="showAuthor" />
                        <el-table-column label="操作" align="center" min-width="50">
                            <template #default="{ row }">
                                <el-button size="small" @click="handleEdit(row.id)">查看</el-button>
                            </template>
                        </el-table-column>

                    </el-table>
                </el-scrollbar>

                <el-pagination :page-size="pageSize" :pager-count="11" layout="prev, pager, next" :current-page="page"
                    :total="cardTableDataTotal" @current-change="handleCurrentChange" :hide-on-single-page="true"
                    style="margin-top: 1%;" />
            </el-main>

        </div>

    </div>
</template>

<script setup lang="ts">
// import CardFilte from "./CardFilte.vue";
import { ref, h, onBeforeMount, reactive, watch } from 'vue'
import { ElTable, ElMessage, ElMessageBox } from 'element-plus'
import { storeToRefs } from 'pinia';
import CardPopup from "./CardPopup.vue";
import { mainStore } from "../store/index";
import { cardType } from "../type/index.js";



const cardId = ref(0)

const store = mainStore();
const { cardTableData, cardTableDataTotal, page, pageSize } = storeToRefs(store);
const dialogVisible = ref(false);

const openPopup = () => dialogVisible.value = true;
const closePopup = () => {
    dialogVisible.value = false;
    cardId.value = 0;
}


const handleCurrentChange = (val: number) => {
    store.pageChange(val);
    page.value = val;
    store.getCard({ page: page.value, pageSize: pageSize.value });
}



//在挂载前调用一次getCard
onBeforeMount(
    store.getCard({ page: page.value, pageSize: pageSize.value }) as any
)
// 新增handel函数
const handleAdd = function () {
    cardId.value = 0
    openPopup()
}
// 编辑handel函数
const handleEdit = function (rowId: number) {
    // console.log('rowId', rowId)
    // 传入id ,获取id对应的卡牌信息,再prop入弹窗子组件。
    cardId.value = rowId
    // console.log('cardId.value', cardId.value)
    openPopup()
}
const showBack = ref(true)
const showAuthor = ref(true)
watch(cardTableData, (val: cardType[]) => {
    showBack.value = val.filter(i => {
        // console.log('i', i.back)
        if (i.back !== null && i.back !== "") { return true }
    }).length > 0;
    showAuthor.value = val.filter(i => {
        if (i.author !== null && i.author !== "") { return true }
    }).length > 0;

})
</script>

<style scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
}

#tableBox {
    background-color: white;
    margin: 1%;
    margin-right: 1%;
    padding: 2%;
    /* padding-left: 3%; */
    border-radius: 10px;
    box-shadow: 5px 5px 10px 1px rgba(32, 32, 32, 0.11);
}
</style>