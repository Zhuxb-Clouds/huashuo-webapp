<template>
    <el-dialog v-model="IsShow" title="新增卡牌" width="25%" :before-close="handleClose">
        <el-form label-position="right" label-width="25%" :model="form" ref="ruleFormRef" disabled="true">
            <el-form-item label="卡牌类型" prop="type">
                <el-select v-model="form.type" placeholder="请选择卡牌类型">
                    <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="从属包" prop="pack">
                <el-select v-model="form.pack" placeholder="请选择卡牌从属包">
                    <el-option v-for="item in packOptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="卡牌名" prop="front">
                <el-input v-model="form.front" type="textarea" autosize />
            </el-form-item>
            <el-form-item label="卡牌描述" prop="back">
                <el-input v-model="form.back" type="textarea" autosize />
            </el-form-item>
        </el-form>

        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="handleConfirm">确认</el-button>
                <el-button @click="handleClose">取消</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref, defineProps, defineEmits, watch } from 'vue'
import { mainStore } from "../store/index";
import { cardType } from "../type/index.js";
import { storeToRefs } from 'pinia';
import type { FormInstance, FormRules } from 'element-plus';

const store = mainStore();
const { typeOptions, packOptions, page } = storeToRefs(store);
// 接受prop并赋值
const props = defineProps(['IsShow', "cardId"]);
const IsShow = ref(props.IsShow)
const cardId = ref(props.cardId)


watch(() => props.IsShow, (val) => {
    IsShow.value = val
})


// 此处干脆改成pinia集中管理得了
const form: cardType = reactive({
    type: "",
    pack: "",
    front: "",
    back: "",
})
watch(() => props.cardId, async (val) => {
    // console.log("检测到cardId变化",val)
    if (val !== 0) {
        const data = await store.getCardById(val)
        console.log('data', data)
        form.type = data.type;
        form.pack = data.pack;
        form.front = data.front;
        form.back = data.back;
    } else {
        ruleFormRef.value?.resetFields();
    }
    cardId.value = val;

})


//表单验证弹窗输入
const ruleFormRef = ref<FormInstance>()
const formRules = reactive<FormRules>({
    type: [{ required: true }],
    pack: [{ required: true }],
    front: [{ required: true, min: 1, max: 30, }],
})


// 对弹窗开启的控制
const emit = defineEmits(['closePopup'])
const handleClose = () => {//新增弹窗内点击取消
    emit("closePopup", false);
    IsShow.value = false;
}
const handleConfirm = () => {//新增弹窗内点击确定

    emit("closePopup", false)
    page.value = 1;
    ruleFormRef.value?.resetFields();
    IsShow.value = false;
}

</script>

<style scoped>
</style>