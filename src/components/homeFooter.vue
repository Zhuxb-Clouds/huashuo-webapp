<template>
    <div class="footerView">
        <!-- <div class="author">朱仙变</div> -->
        <div class="info">飞雪工作室-2022</div>
        <div id="icp">
            <a href="https://beian.miit.gov.cn" target="_blank">
                鄂ICP备2022011304号-1</a>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.footerView {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(177, 177, 177);
    height: 100px;
    width: 100%;

    .info {
        font-weight: normal;
        margin-bottom: 2px;
    }

    a:active,
    a:hover,
    a {
        outline: 0;
        color: rgb(177, 177, 177);
        text-decoration: none;
    }

    .author {
        /* font-weight: bold; */
        font-size: 20px;
    }
}
</style>