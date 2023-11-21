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
        <div class="swiper-photo">
          <swiper
            :loop="false"
            :slides-per-view="4"
            :navigation="true"
            :modules="modules"
            class="mySwiper3"
          >
            <swiper-slide v-for="(photo, index) in photoArray" :key="index">
              <img :src="getImgUrl(photo.url)" @click="openModal(index)" />
            </swiper-slide>
          </swiper>
        </div>
        <q-btn
          class="btn-font-size"
          color="orange"
          label="更多精彩相片"
          size="20px"
          rounded
          dense
          @click="clickManyPhoto()"
        />
        <!-- Image Modal -->
        <q-dialog v-model="icon" full-width full-height>
          <div style="background-color: white">
            <q-btn
              icon="close"
              flat
              round
              dense
              v-close-popup
              @click="closeModal"
              style="float: right"
            />
            <swiper
              :initialSlide="currentImageIndex"
              :modules="modules"
              :navigation="true"
              class="mySwiper4"
            >
              <swiper-slide v-for="(photo, index) in photoArray" :key="index">
                <div style="display: flex; align-items: center">
                  <q-img  :src="getImgUrl(photo.url)" width="1200" height="800" />
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </q-dialog>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useRouter } from "vue-router";
import { FreeMode, Navigation } from "swiper/modules";

const router = useRouter();
const icon = ref(false);
let currentImageIndex = ref(0);

const closeModal = () => {
  icon.value = false;
};
const clickManyPhoto = () => {
  router.push("/" + "photo");
};
const getImgUrl = (url) =>{
  return new URL(`../../assets/${url}`,import.meta.url).href
}
const photoArray1 = ref([
  { url: "/src/assets/IMG_9500.png" },
  { url: "/src/assets/IMG_9486.png" },
  { url: "/src/assets/IMG_9406.png" },
  { url: "/src/assets/IMG_9286.png" },
  { url: "/src/assets/photo1.png" },
  { url: "/src/assets/photo2.png" },
  { url: "/src/assets/photo3.png" },
  { url: "/src/assets/photo4.png" },
  { url: "/src/assets//photo5.png" },
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
const photoArray = ref([
  { url: "IMG_9500.png" },
  { url: "IMG_9486.png" },
  { url: "IMG_9406.png" },
  { url: "IMG_9286.png" },
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
const modules = [FreeMode, Navigation];
const openModal = (index) => {
  console.log(index);
  icon.value = !icon.value;
  currentImageIndex = index;
};
</script>

<style></style>
