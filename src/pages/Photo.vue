<template>
  <div class="photo-main-title">
    <img src="../assets/workSpace2.webp" />
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
        <img :src="photo.url" />
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
        <img :src="(photo.url)" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { ref } from "vue";
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

    const photoArray = ref([
      { url: "/src/assets/photo2.png" },
      { url: "/src/assets/photo3.png" },
      { url: "/src/assets/photo4.png" },
      { url: "/src/assets/photo5.png" },
      { url: "/src/assets/photo6.png" },
      { url: "/src/assets/photo7.png" },
      { url: "/src/assets/photo8.png" },
      { url: "/src/assets/photo9.png" },
      { url: "/src/assets/photo10.png" },
      { url: "/src/assets/photo11.png" },
      { url: "/src/assets/photo12.png" },
      { url: "/src/assets/photo13.png" },
      { url: "/src/assets/photo14.png" },
      { url: "/src/assets/photo15.png" },
      { url: "/src/assets/photo16.png" },
    ]);
    const modules = [FreeMode, Navigation, Thumbs];

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules,
      photoArray,
    };
  },
};
</script>

<style scoped lang="scss">
/* your styles */
</style>
