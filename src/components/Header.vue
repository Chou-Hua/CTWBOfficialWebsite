<template>
  <div>
    <q-header reveal elevated>
      <q-toolbar class="bar-color">
        <img src="../assets/logo.png" class="logo" width="200" height="100">
        <!-- <q-toolbar-title>Quasar Framework</q-toolbar-title> -->
        <div class="nav-center">
          <q-tabs v-model="tab">
            <q-tab name="images" label="Images"></q-tab>
            <q-tab name="videos" label="Videos"></q-tab>
            <q-tab name="articles" label="Articles"></q-tab>
            <q-tab name="images" label="Images"></q-tab>
            <q-tab name="videos" label="Videos"></q-tab>
            <q-tab name="articles" label="Articles"></q-tab>
          </q-tabs>
        </div>
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

defineComponent({
  
});
</script>
