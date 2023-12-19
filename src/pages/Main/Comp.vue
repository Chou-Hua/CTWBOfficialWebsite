<template>
  <div class="comp-main">
    <div class="comp-center row" v-scroll="handleScroll">
      <div class="col-3 comp-font animated" ref="compFont">
        <h5>
          <p>2人1板</p>
          <p>即可開打</p>
          <div class="comp-img-bat">
            <img
              src="../../assets/icon03.png"
              class="animated1"
              ref="compImgBat"
              alt="CTWB-台灣威浮球俱樂部宣傳用的ICON"
            />
          </div>
        </h5>
      </div>
      <div class="col-3 comp-font animated" ref="compFont2">
        <h5>
          <p>快速上手</p>
          <p>多種變化球</p>
          <div class="comp-img-ball">
            <img
              src="../../assets/icon02.png"
              class="animated1"
              ref="compImgBall"
              alt="CTWB-台灣威浮球俱樂部宣傳用的ICON"
            />
          </div>
        </h5>
      </div>
      <div class="col-3 comp-font animated" ref="compFont3">
        <h5>
          <p>安全方便</p>
          <p>場地不受限</p>
          <div class="comp-img-land">
            <img
              src="../../assets/icon01.png"
              class="animated1"
              ref="compImgLand"
              alt="CTWB-台灣威浮球俱樂部宣傳用的ICON"
            />
          </div>
        </h5>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const compFont = ref(null);
const compFont2 = ref(null);
const compFont3 = ref(null);
const compImgBat = ref(null);
const compImgBall = ref(null);
const compImgLand = ref(null);

const handleScroll = () => {
  const triggerPosition = window.innerHeight / 2; // You can adjust this position as needed

  checkAndAnimate(compFont, "fadeInRight", triggerPosition);
  checkAndAnimate(compFont2, "fadeInRight", triggerPosition);
  checkAndAnimate(compFont3, "fadeInRight", triggerPosition);
  checkAndAnimate(compImgBat, "fadeInRight", triggerPosition);
  checkAndAnimate(compImgBall, "fadeInRight", triggerPosition);
  checkAndAnimate(compImgLand, "fadeInRight", triggerPosition);
};

const checkAndAnimate = (elementRef, animationClass, triggerPosition) => {
  const element = elementRef.value;
  const elementTop = element.getBoundingClientRect().top;

  if (elementTop < triggerPosition) {
    element.classList.add(animationClass);
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style></style>
