<template>
  <div class="good-photo-container">
    <div class="good-photo-box d-flex">
      <div>
        <img
          src="../../assets/workSpace.png"
          width="160"
          height="160"
          class="good-photo-img"
        />
        <!-- <img src="../../assets/goodPhoto/photo (1).JPG" -->
        <p class="good-photo-content">歡迎新舊玩家一同參與</p>
        <div id="q-app">
      <q-carousel
        swipeable
        animated
        arrows
        dark
        class="good-photo-carousel"
        control-type="regular"
        :autoplay="autoplay"
        v-model="slide"
        infinite
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide
          v-for="(photo, index) in photoArray"
          :name="index"
          :key="index"
          :img-src="photo.url"
        />
        <!-- <q-carousel-slide
              :name="2"
              img-src="../../assets/information2.png"
            />
            <q-carousel-slide
              :name="3"
              img-src="../../assets/information3.png"
            /> -->
      </q-carousel>
    </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
const slide = ref(1);
const autoplay = ref(3000);
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
</script>

<style></style>
