<template>
  <main class="news-container">
    <div class="news-main">
      <div class="center">
        <h3 class="news-title">
          <span>最新消息</span>
        </h3>
      </div>

      <div class="d-flex news-flex-main">
        <div class="box">
          <img src="../../assets/news-shirt.png" class="responsive-image" alt="CTWB-台灣威浮球俱樂部衣服宣傳照片"/>
        </div>
        <div class="news-detail-main">
          <div class="news-detail-content-size">
            <p class="news-detail-title">​2023最新球衣與周邊</p>
            <p class="news-detail-content">
              CTWB最新球衣已經到貨！採用熱昇華印刷與排汗的面料，能夠有效地排出汗水，讓你在比賽或訓練中保持乾爽舒適，使它們既舒適又時尚。還在等什麼？不要錯過這次機會，立即選購CTWB的最新球衣吧！
            </p>
            <q-btn class="btn-font-size" color="orange" label="了解更多" size="20px" rounded dense @click="clickMany()"/>
          </div>
        </div>
      </div>

      <div class="d-flex news-flex-main">
        <div class="news-detail-main">
          <div class="news-detail-content-size">
            <p class="news-detail-title">​威浮球規則</p>
            <p class="news-detail-content">
              威浮球，本名Wiffle
              Ball，為一種改良過的安全類棒球。可以3v3到6v6皆可，類似棒球的規則，但卻沒有正式棒球複雜，且隨處可打，不怕打傷人或打壞東西，是一項適合老少一童同樂的運動，現在就來認識看看吧!。
            </p>
            <q-btn class="btn-font-size" color="orange" label="了解更多" size="20px" rounded dense @click="clickMany()"/>

          </div>
        </div>
        <div class="box">
          <img src="../../assets/news-land.png" class="land-image" alt="CTWB-台灣威浮球俱樂部球場規格宣傳照片"/>
        </div>
      </div>

      <div class="d-flex news-flex-main">
        <div class="box">
          <img src="../../assets/newsplayer.png" class="land-image" alt="CTWB-台灣威浮球俱樂部選手宣傳照片"/>
        </div>
        <div class="news-detail-main">
          <div class="news-detail-content-size">
            <p class="news-detail-title">聯盟近期比賽</p>
            <p class="news-detail-content">
              CTWB致力於辦各項威浮球比賽與體驗活動，只要你對威浮球有興趣，十分歡迎超級萌新來體驗這項不會受傷又能享受球速的運動。也歡迎各路好手與我們接洽，來進行威浮球友誼賽。
            </p>
            <q-btn class="btn-font-size" color="orange" label="了解更多" size="20px" rounded dense @click="clickMany()"/>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const clickMany = ()=>{
  router.push("/" + 'about');
}
</script>

<style></style>
