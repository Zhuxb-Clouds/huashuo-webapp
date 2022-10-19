<template>
  <div class="home-container">
    <div class="slogan">
      <div class="magictime vanishIn">
        <img src="@/assets/images/slogan.svg" id="slogan" alt="" />
      </div>
      <div class="magictime slideRightReturn people-box">
        <img src="@/assets/images/people-1.webp" id="people" alt="" />
      </div>
    </div>
    <div class="functionArea">
      <div class="cardList hvr-grow" @click="$router.push({ name: 'card' })">
        <p>卡牌对照</p>
      </div>
      <div
        class="book hvr-grow"
        @click="
          download('https://pan.baidu.com/s/1FoKTphJkRtfb-qoBRWMNpg?pwd=y888')
        "
      >
        <p>规则书</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const download = (params: string | URL) => {
  window.open(params as URL);
};
</script>

<style scoped lang="less">
.home-container {
  height: 100%;
  width: 100%;
  background-color: #fff;
  padding-top: 5%;

  .slogan {
    position: relative;
    background: linear-gradient(to right, #fff, #ffffff80),
      url(../../assets/images/background.webp) center/70%;
    width: 80%;
    height: 50vh;
    padding: 3%;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 50px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-content: center;

    box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
      12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
      100px 100px 80px rgba(0, 0, 0, 0.07);

    #slogan {
      position: relative;
      width: auto;
      height: 80%;
      transform: translateY(10%);
    }
    .people-box {
      position: absolute;
      right: 10%;
      top: 5%;
      #people {
        width: auto;
        height: 100vh;
        transform: scale(1);
      }
    }
  }

  .functionArea {
    width: 86%;
    height: 50vh;
    padding: 3% 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .cardList,
    .book {
      cursor: pointer;
      width: 48%;
      height: 100%;
      overflow: hidden;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
        6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
        12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
        22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
        41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
        100px 100px 80px rgba(0, 0, 0, 0.07);

      p {
        font-size: 200px;
        color: #fff;
        font-weight: 900;
        line-height: 200px;
        width: 400px;
      }
    }

    .cardList::before,
    .book::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      height: 100%;
      width: 100%;
      background-image: url(../../assets/images/background2.webp);
      background-size: 150%;
      transition: all 1s;
    }
  }
}

.magictime .slideRightReturn {
  -webkit-animation-duration: 0.8s;
  animation-duration: 0.8s;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}

@media screen and (max-width: 768px) {
  //手机
}
</style>
