<template>
  <div  class="comp-main">
    <div class="comp-center row" v-scroll-fire="handleScroll">
      <div  class="col-3">
        <h5 class="comp-font">
          <p>2人1板</p>
          <p>即可開打</p>
          <div class="comp-img-bat"><img src="../../assets/icon03.png"/></div>
        </h5>
      </div>
      <div  class="col-3">
        <h5 class="comp-font">
          <p>快速上手</p>
          <p>多種變化球</p>
          <div class="comp-img-ball"><img src="../../assets/icon02.png" /></div>
        </h5>
      </div>
      <div  class="col-3">
        <h5 class="comp-font">
          <p>安全方便</p>
          <p>場地不受限</p>
          <div class="comp-img-land"><img src="../../assets/icon01.png" /></div>
        </h5>
      </div>
    </div>
  </div>
</template>

<script setup>
import { event } from "quasar";
import { ref } from "vue";
const handleScroll = (event) => {
  event.classList.add("comp-main-animation"); // 假設你有一個 CSS 動畫類
};
</script>

<style></style>
