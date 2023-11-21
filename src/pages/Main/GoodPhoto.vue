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
              <img :src="photo.url" @click="openModal(index)" />
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
                  <img :src="photo.url" width="1200" height="800" />
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
import { ref,onMounted } from "vue";
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
const photoArray = ref([
  { url: "/assets/IMG_9500.png" },
  { url: "/assets/IMG_9486.png" },
  { url: "/assets/IMG_9406.png" },
  { url: "/assets/IMG_9286.png" },
  { url: "/assets/photo1.png" },
  { url: "/assets/photo2.png" },
  { url: "/assets/photo3.png" },
  { url: "/assets/photo4.png" },
  { url: "/assets//photo5.png" },
  { url: "/assets/photo6.png" },
  { url: "/assets/photo7.png" },
  { url: "/assets/photo8.png" },
  { url: "/assets/photo9.png" },
  { url: "/assets/photo10.png" },
  { url: "/assets/photo11.png" },
  { url: "/assets/photo12.png" },
  { url: "/assets/photo13.png" },
  { url: "/assets/photo14.png" },
  { url: "/assets/photo15.png" },
  { url: "/assets/photo16.png" },
]);
const modules = [FreeMode, Navigation];
const openModal = (index) => {
  console.log(index);
  icon.value = !icon.value;
  currentImageIndex = index;
};
</script>

<style></style>
