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
import Header from 'src/components/Header.vue';
import FooterVue from 'src/components/Footer.vue';




defineComponent 
({
  name: 'MainLayout',
  components: {
    Header
  },
})
</script>
