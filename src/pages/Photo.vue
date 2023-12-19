<template>
  <div class="photo-main-title">
    <img src="../assets/workSpace2.webp" alt="CTWB-台灣威浮球俱樂部介紹團隊照片中的ICON"/>
    精彩照片
  </div>
  <div class="photo-main">
    <div class="photo-title">
      <span>2023年假盃 Highlight</span>
    </div>
  </div>
  <div class="photo-body">
    <swiper
      :loop="true"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2"
    >
      <swiper-slide v-for="(photo, index) in photoArray" :key="index">
        <img :src="getImgUrl(photo.url)" alt="CTWB-台灣威浮球俱樂部的精采照片"/>
      </swiper-slide>
    </swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      :slidesPerView="6"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(photo, index) in photoArray" :key="index">
        <img :src="getImgUrl(photo.url)" alt="CTWB-台灣威浮球俱樂部的精采照片的輪播圖"/>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    const getImgUrl = (url) => {
      return new URL(`../assets/${url}`, import.meta.url).href;
    };
    const photoArray = ref([
      { url: "photo1.png" },
      { url: "photo2.png" },
      { url: "photo3.png" },
      { url: "photo4.png" },
      { url: "photo5.png" },
      { url: "photo6.png" },
      { url: "photo7.png" },
      { url: "photo8.png" },
      { url: "photo9.png" },
      { url: "photo10.png" },
      { url: "photo11.png" },
      { url: "photo12.png" },
      { url: "photo13.png" },
      { url: "photo14.png" },
      { url: "photo15.png" },
      { url: "photo16.png" },
    ]);
    const modules = [FreeMode, Navigation, Thumbs];
    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules,
      getImgUrl,
      photoArray,
    };
  },
};
</script>

<style scoped lang="scss">
/* your styles */
</style>
