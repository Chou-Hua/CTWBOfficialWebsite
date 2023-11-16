<template>
  <div class="image-swiper-div container">
    <div>
      <img class="image-style-prev" :src="require('../../../../assets/img/group.png')" :height="80">
    </div>
    <div class="w-100">
      <div class="thumb-example swiper-class">

        <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
          <swiper-slide v-for="(slide, key) in imageSrc" :key="key">
            <div class="text-center">
              <img class="image-slide-show" :src="slide.value.fileUrl" width="900" height="654" alt="">
            </div>
          </swiper-slide>
        </swiper>

        <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
          <swiper-slide v-for="(slide, key) in imageSrc" :key="key">
            <div class="text-left">
              <img
                class="img-show" :src="slide.value.fileUrl" :width="182" :height="127" alt=""
                @click="goToImage(key)"
              >
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div>
      <img class="image-style-next" :src="require('../../../../assets/img/group-copy.png')" :height="80">
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: 'ImageSwiper',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    imageSrc: { type: Array, default: () => [] },
    imageShowIndex: { type: Number, default: 0 },
    isOnlyShow: { type: Boolean, default: false }
  },
  methods: {
    goToImage(index) {
      this.$refs.swiperTop.$swiper.slideTo(index);
    },
    getIsVideoType(name) {
      if (this.isOnlyShow) {
        let fileName = name.split('.');
        return fileName[1] === 'mp4';
      }
    }
  },
  data() {
    return {
      swiperOptionTop: {
        loop: false,
        loopedSlides: 10, // looped slides should be the same
        spaceBetween: 2,
        centeredSlides: false, //大圖對應的縮略圖位置顯示在中間
        navigation: {
          nextEl: '.image-style-next',
          prevEl: '.image-style-prev'
        }
      },
      swiperOptionThumbs: {
        loop: false,
        loopedSlides: 10,
        spaceBetween: 2, // 縮略圖之間的間隙大小
        centeredSlides: false, //大圖對應的縮略圖位置顯示在中間
        slidesPerView: 'auto', // 每一頁顯示下方縮略圖的數量，auto ：自動顯示所有數量；輸入number（如1、2、3等）則是手動定義顯示的數量
        touchRatio: 1, // 触控比例，可理解为拖动缩略图的距离，默认值为1
        slideToClickedSlide: true //點擊其他縮略圖可跳轉
      }
    };
  },
  mounted() {
    if (this.imageShowIndex) {
      this.$refs.swiperTop.$swiper.slideTo(this.imageShowIndex);
      this.$refs.swiperThumbs.$swiper.slideTo(this.imageShowIndex);
    }
    if (this.$refs.swiperTop.$swiper !== undefined) {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.$swiper;
        const swiperThumbs = this.$refs.swiperThumbs.$swiper;
        swiperTop.controller.control = swiperThumbs;
        swiperThumbs.controller.control = swiperTop;
      });
    }
  }
};
</script>
