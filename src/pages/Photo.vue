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
      { url: "src/assets/goodPhoto/photo1.JPG" },
      { url: "src/assets/goodPhoto/photo2.JPG" },
      { url: "src/assets/goodPhoto/photo3.JPG" },
      { url: "src/assets/goodPhoto/photo4.JPG" },
      { url: "src/assets/goodPhoto/photo5.JPG" },
      { url: "src/assets/goodPhoto/photo6.JPG" },
      { url: "src/assets/goodPhoto/photo7.JPG" },
      { url: "src/assets/goodPhoto/photo8.JPG" },
      { url: "src/assets/goodPhoto/photo9.JPG" },
      { url: "src/assets/goodPhoto/photo10.JPG" },
      { url: "src/assets/goodPhoto/photo11.JPG" },
      { url: "src/assets/goodPhoto/photo12.JPG" },
      { url: "src/assets/goodPhoto/photo13.JPG" },
      { url: "src/assets/goodPhoto/photo14.JPG" },
      { url: "src/assets/goodPhoto/photo15.JPG" },
      { url: "src/assets/goodPhoto/photo16.JPG" },
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
