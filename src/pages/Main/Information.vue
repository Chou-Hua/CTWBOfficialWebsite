<template>
  <div v-scroll-fire="handleScroll" class="outer-container">
    <div class="left">
      <div>
        <p class="left-content">風靡美國、日本</p>
        <p class="left-content">新型微棒球</p>
        <p class="left-mark">Wiffle Ball</p>
        <hr size="2" color="#32cd32" />
      </div>
    </div>
    <div class="center">
      <div class="center-content">
        <p>
          威浮球，本名Wiffle Ball，為一種改良過的安全類棒球。
          威浮球有特製的塑膠球棒，一隊三到五人即可。
          因變化幅度大，所以沒有捕手，取而代之的是一個大布幕上面畫上好球帶，減少場地限制。
        </p>
        <p>
          近年因新聞媒體報導以及大聯盟職棒選手遊玩，而逐漸傳到台灣，
          甚至在美國已經舉辦過威浮球正規比賽與聯盟了。
        </p>
        <p>
          且因其為塑膠製品，球打不遠，打到人也不會痛，
          可以室內室外遊玩，因此風靡全球。
        </p>
      </div>
    </div>
    <div class="right">
      <div id="q-app">
        <q-carousel
          swipeable
          animated
          arrows
          dark
          control-type="regular"
          :autoplay="autoplay"
          v-model="slide"
          infinite
          padding
          class="carousel-div"
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide :name="1" img-src="../../assets/information1.png" />
          <q-carousel-slide :name="2" img-src="../../assets/information2.png" />
          <q-carousel-slide :name="3" img-src="../../assets/information3.png" />
        </q-carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const slide = ref(1);
const autoplay = ref(3000);
const handleScroll = (event) => {
  event.classList.add("outer-container-animation"); // 假設你有一個 CSS 動畫類
};
</script>

<style lang="scss" scoped></style>
