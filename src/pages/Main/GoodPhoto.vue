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
        <q-btn class="btn-font-size" color="orange" label="更多精彩相片" size="20px" rounded dense @click="clickManyPhoto()"/>
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
import { ref } from "vue";
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
const clickManyPhoto = ()=>{
  router.push("/" + 'photo');
}
const photoArray = ref([
  { url: "src/assets/IMG_9500.JPG" },
  { url: "src/assets/IMG_9486.JPG" },
  { url: "src/assets/IMG_9406.JPG" },
  { url: "src/assets/IMG_9286.JPG" },
  { url: "src/assets/photo1.JPG" },
  { url: "src/assets/photo2.JPG" },
  { url: "src/assets/photo3.JPG" },
  { url: "src/assets/photo4.JPG" },
  { url: "src/assets//photo5.JPG" },
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
const modules = [FreeMode, Navigation];
const openModal = (index) => {
  console.log(index);
  icon.value = !icon.value;
  currentImageIndex = index;
};
</script>

<style></style>
