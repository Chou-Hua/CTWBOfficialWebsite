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
        <img :src="photo.url" />
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
      { url: "src/assets/photo2.JPG" },
      { url: "src/assets/photo3.JPG" },
      { url: "src/assets/photo4.JPG" },
      { url: "src/assets/photo5.JPG" },
      { url: "src/assets/photo6.JPG" },
      { url: "src/assets/photo7.JPG" },
      { url: "src/assets/photo8.JPG" },
      { url: "src/assets/photo9.JPG" },
      { url: "src/assets/photo10.JPG" },
      { url: "src/assets/photo11.JPG" },
      { url: "src/assets/photo12.JPG" },
      { url: "src/assets/photo13.JPG" },
      { url: "src/assets/photo14.JPG" },
      { url: "src/assets/photo15.JPG" },
      { url: "src/assets/photo16.JPG" },
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
