<template>
    <header>
        <div class="header-container">
            <div class="header-logo">
                <img src="../assets/images/话说横向.webp" alt="logo"
                    style="width: auto; height: auto; max-width: 100%; max-height: 100%"
                    @click="$router.push({ name: 'home' })" />

                <div class="header-nav">
                    <p class="link" @click="download('https://zhongchou.modian.com/item/109871.html')"> 最新动态 </p>
                    <p class="link" @click="download('https://weibo.com/u/7574099736')"> 关于我们 </p>
                    <p class="link" @click="download('https://jq.qq.com/?_wv=1027&k=Z89j4zlq')"> 联系交流 </p>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const download = (params: string | URL) => {
    window.open(params as URL)
};
</script>

<style scoped lang="less">
.header-container {
    position: fixed;
    background-color: #fff;
    width: 100vw;
    height: 70px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
}


/* 将子元素横向靠左排列 */
.header-logo {
    width: 100%;
    margin-right: 3%;
    margin-left: 1%;
    min-height: 30px;
    max-height: 50px;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1vw;

    img {
        position: relative;
        top: 6px;
        cursor: pointer;
    }
}

.header-nav {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.link {
    color: black;
    margin-left: 100px;
    font-weight: 600;
    font-size: 26px;
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

.link {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden
}

.link:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000000;
    height: 2px;
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out
}

.link:active:before,
.link:focus:before,
.link:hover:before {
    -webkit-transform: translateY(0);
    transform: translateY(0)
}
</style>