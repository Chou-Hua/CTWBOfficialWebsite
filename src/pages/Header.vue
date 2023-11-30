<template>
  <div>
    <q-header elevated>
      <q-toolbar class="bar-color">
        <div class="logo">
          <div class="container">
          <img
            src="../assets/logo.png"
            width="150"
            height="75"
            @click="goToHome()"
          />
        </div>
        </div>
        <!-- <q-toolbar-title>Quasar Framework</q-toolbar-title> -->
        <div class="nav-center">
          <q-tabs v-model="tab">
            <q-tab class="btn-menu" name="teams" label="關於我們" @click="goToPage('about')"></q-tab>
            <q-tab class="btn-menu" name="teams" label="球隊" @click="goToPage('team')"></q-tab>
            <menuDropDown
              label="賽程活動"
              :itemsArray="activeItem"
              :setPadding="'15px'"
              @btnClick="goToPage('active')"
              @clickDropDown="goToPage('photo')"
            />
            <!-- <q-tab name="active" label=""></q-tab> -->
            <menuDropDown
              label="規則"
              :itemsArray="rulesItem"
              :setPadding="'20px'"
              @btnClick="goToPage('rules')"
              @clickDropDown="goToPage('teach')"
            />
            <!-- <q-tab name="rules" label="規則"></q-tab> -->
            <q-tab class="btn-menu" name="tools" label="球具" @click="goToPage('notyet')"></q-tab>
            <q-tab class="btn-menu" name="blog" label="部落格" @click="goToPage('notyet')"></q-tab>
            <q-tab class="btn-menu" name="playerData" label="球員數據" @click="goToPage('playerData')"></q-tab>
          </q-tabs>
        </div>

        <i class="lab la-facebook icon-size text-dark" @click="openFB()"></i>
        <i class="lab la-line icon-size text-dark" @click="openLine()"></i>
        <i class="las la-shopping-bag icon-size text-dark" @click="openShopee()"></i>
        <i class="lab la-instagram icon-size text-dark" @click="openIG()"></i>
      </q-toolbar>
    </q-header>
  </div>
  <!-- <q-header elevated>
        <q-toolbar>
          <q-toolbar-title>
            Quasar App
          </q-toolbar-title>
        </q-toolbar>
      </q-header> -->
</template>
<!-- <q-layout view="lHh lpr lFf">

      </q-layout> -->
<script setup>
import { defineComponent } from "vue";
import menuDropDown from "src/components/menuDropDown.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const goToHome = (item) => {
  router.push("/");
};
const goToPage = (name) => {
  router.push("/" + name);
};
const openFB = ()=>{
  window.open('https://www.facebook.com/CTWB.wiffleball?locale=zh_CN', "_blank")
}
const openShopee = ()=>{
  window.open('https://shopee.tw/kaien57699?entryPoint=OrderDetail', "_blank")
}
const openLine = ()=>{
  window.open('https://shopee.tw/kaien57699?entryPoint=OrderDetail', "_blank")
}
const openIG = ()=>{
  window.open('https://www.instagram.com/ctwb_tw.wiffleball_club/', "_blank")
}
const activeItem = [{ name: "精彩相片" }];
const rulesItem = [{ name: "投球打法" }];
defineComponent({});
</script>
