<template>
  <q-btn-dropdown
    auto-close
    size="14px"
    flat
    dense
    :padding=setPadding
    :label="label"
    v-model="menu"
    @click="btnClick()"
    class="btn-dropdown"
    @mouseover.enter="menuOver = true"
    @mouseout.enter="menuOver = false"
  >
    <q-list
      @mouseover.enter="listOver = true"
      @mouseout.enter="listOver = false"
    >
      <q-item clickable v-for="(item,index) in itemsArray" :key="index">
        <q-item-section>
          <q-item-label @click="clickDropDown()">{{ item.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script setup>
import { ref, watch } from "vue";
import { debounce } from "quasar";
import { useRouter } from 'vue-router';

const btnClick = ()=>{
  emit('btnClick')
}
const clickDropDown = ()=>{
  emit('clickDropDown')
}
const menu = ref(false);
const menuOver = ref(false);
const listOver = ref(false);
const emit = defineEmits([
  'btnClick',
  'clickDropDown'
])
const props = defineProps({
  itemsArray: String,
  label: String,
  setPadding: String
});
const router = useRouter();

// 创建一个防抖函数
const debounceFunc = debounce(() => {
  checkMenu();
}, 100);

const onItemClick = () => {
  console.log("Clicked on an Item");
};

const checkMenu = () => {
  menu.value = menuOver.value || listOver.value;
};

// 监视 menuOver 和 listOver 变量的变化
watch([menuOver, listOver], () => {
  debounceFunc();
});

// // 模拟 Vue 2 created 钩子，以确保 watch 生效
// onMounted(() => {
//   watch(
//     () => menuOver.value,
//     () => {
//       debounceFunc();
//     }
//   );
//   watch(
//     () => listOver.value,
//     () => {
//       debounceFunc();
//     }
//   );
// });
</script>

<style></style>
