<template>
    <el-dialog v-model="IsShow" title="卡牌信息" width="25vw" :before-close="handleClose" size="large">
        <el-descriptions :column="2" direction="vertical">
            <el-descriptions-item label="卡牌类型" align="left">{{ curCard.type || "--" }}
            </el-descriptions-item>
            <el-descriptions-item label="从属包" align="left">{{ curCard.pack || "--" }}
            </el-descriptions-item>
            <el-descriptions-item label="作者" align="left">{{ curCard.author || "--" }}
            </el-descriptions-item>

        </el-descriptions>
        <el-descriptions :column="curCard.back ? 1 : 2" direction="vertical">

            <el-descriptions-item label="卡牌名称" align="left">{{ curCard.front || "--" }}
            </el-descriptions-item>

            <el-descriptions-item label="卡牌描述" align="left">{{ curCard.back || "--" }}
            </el-descriptions-item>
        </el-descriptions>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="handleClose">已阅</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue'
import { cardType } from "@/type/index";


// 接受prop并赋值
const props = defineProps(['IsShow', "card"]);
const IsShow = ref<boolean>(props.IsShow)
const curCard = ref<cardType>(props.card)


watch(() => props.IsShow, (val) => {
    IsShow.value = val
})
watch(() => props.card, (val) => {
    curCard.value = val
})


// 对弹窗开启的控制
const emit = defineEmits(['closePopup'])
const handleClose = () => {//新增弹窗内点击取消
    emit("closePopup", false);
    IsShow.value = false;
}

</script>

<style scoped>
:deep(.el-descriptions__label.is-left) {
    color: rgb(92, 92, 92);
    font-weight: 600;
    letter-spacing: 1px;
}
</style>