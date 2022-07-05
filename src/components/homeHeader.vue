<template>
    <header>
        <div class="header-container">
            <div class="header-logo">
                <img src="../assets/飞雪logo.webp" alt="logo"
                    style="width: auto; height: auto; max-width: 100%; max-height: 100%; filter:invert(100%);">.
                <div class="header-nav">
                    <div class="link"> 联系 </div>
                    <div class="link"> 关于 </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
header {
    background-color: rgba(0, 0, 0, 0.082);
    overflow: hidden;
    /* filter: blur(2px); */
}

.header-container {
    background-color: rgb(0, 0, 0);
}

/* 将子元素横向靠左排列 */
.header-logo {
    margin-right: 3%;
    min-height: 30px;
    max-height: 50px;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1vw;
}

.header-nav {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.link {
    display: block;
    font-family: SerifCN;
    color: white;
    margin-left: 55px;
    font-weight: 600;
    font-size: 14px;
}

.link:hover {
    cursor: pointer;

}

.link:after {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 0;
    height: 3px;
    background-color: #ffffff;
    content: '';
    transition: all 0.3s ease-in-out;
}
</style>