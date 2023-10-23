<template>
  <q-layout view="lHh Lpr lFf">
    <Header/>    
    <q-page-container>      
      <router-view />
    </q-page-container>
    <FooterVue/>
  </q-layout>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import Header from 'src/pages/Header.vue';
import FooterVue from 'src/pages/Footer.vue';




defineComponent 
({
  name: 'MainLayout',
  components: {
    Header
  },
})
</script>
