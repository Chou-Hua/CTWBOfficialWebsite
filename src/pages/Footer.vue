<template>
  <div id="q-app">
    <q-footer reveal elevated>
      <div class="footer">
        <img src="../assets/footer.png" width="123" height="45" alt="CTWB-台灣威浮球俱樂部頁腳的ICON"/>
        <div class="logo-text">台灣威浮球俱樂部</div>
        <q-space></q-space>
        <div>
          <i class="lab la-facebook icon-size" @click="openFB()"></i>
          <i class="lab la-line icon-size" @click="openLine()"></i>
          <i class="lab la-youtube icon-size" @click="openYT()"></i>
          <i class="lab la-instagram icon-size" @click="openIG()"></i>
        </div>
        <q-space></q-space>
        <div class="footer-right">
          <div class="footer-text">信箱:ctwbwiffleball@gmail.com</div>
          <div class="footer-text">電話:0928-735-731</div>
        </div>
      </div>
    </q-footer>
  </div>
</template>

<script setup>
const openFB = ()=>{
  window.open('https://www.facebook.com/CTWB.wiffleball?locale=zh_CN', "_blank")
}
const openYT = ()=>{
  window.open('https://www.youtube.com/@CTWB_tw_wiffleball', "_blank")
}
const openLine = ()=>{
  window.open('https://shopee.tw/kaien57699?entryPoint=OrderDetail', "_blank")
}
const openIG = ()=>{
  window.open('https://www.instagram.com/ctwb_tw.wiffleball_club/', "_blank")
}
</script>

<style></style>
