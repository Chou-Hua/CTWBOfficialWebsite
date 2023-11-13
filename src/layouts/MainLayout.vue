<template>
  <q-layout view="lHh Lpr lFf">
    <Header/>
    <q-page-container style="padding-bottom: 0px;">
      <router-view />
    </q-page-container>
    <GoodPhoto/>
    <FooterVue/>
  </q-layout>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import Header from 'src/pages/Header.vue';
import FooterVue from 'src/pages/Footer.vue';
import GoodPhoto from 'src/pages/Main/GoodPhoto.vue';




defineComponent
({
  name: 'MainLayout',
  components: {
    Header
  },
})
</script>
