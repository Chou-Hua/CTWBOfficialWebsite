<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-checkbox
        v-model="selection"
        val="海龜隊"
        label="海龜隊"
        color="cyan"
      />
      <q-checkbox v-model="selection" val="狂熱者" label="狂熱者" color="red" />
      <q-checkbox
        v-model="selection"
        val="火柴隊"
        label="火柴隊"
        color="orange"
      />
      <q-checkbox
        v-model="selection"
        val="自由球員"
        label="自由球員"
        color="teal"
      />
    </div>
  </div>
  <div>
    <q-table
      title="球員數據"
      :rows="filteredRows"
      separator="cell"
      :table-class="'my-table'"
      :columns="columns"
      :rows-per-page-options="[0]"
      v-model:pagination="pagination"
      row-key="team"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
            :class="getCellClasses(col.name, props.row)"
          >
            {{ props.row[col.name] }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from "vue";
import { useQuasar } from "quasar";
import { usePlayerStore } from "src/stores/playerData";

const selection = ref(["海龜隊", "火柴隊", "狂熱者", "自由球員"]);
const pagination = ref({
  rowsPerPage: 0,
});
const playerStore = usePlayerStore();
const columns = ref([
  {
    name: "team",
    required: true,
    label: "隸屬隊伍",
    align: "left",
    field: (row) => row.team,
    format: (val) => `${val}`,
    sortable: true,
    sort: (a, b) => a - b,
  },
  {
    name: "name",
    align: "left",
    label: "球員",
    field: "name",
    sortable: true,
    sort: (a, b) => a - b,
  },
  {
    name: "number",
    align: "left",
    label: "背號",
    field: "number",
    sortable: true,
    sort: (a, b) => a - b,
  },
  {
    name: "hit",
    align: "left",
    label: "安打數",
    field: "hit",
    sortable: true,
    sort: (a, b) => a - b,
  },
  {
    name: "hitP",
    align: "left",
    label: "打點",
    field: "hitP",
    sortable: true,
    sort: (a, b) => a - b,
  },
  {
    name: "beConveyed",
    align: "left",
    label: "被保送數",
    field: "beConveyed",
    sortable: true,
    sort: (a, b) => a - b,
  },
  {
    name: "homeRun",
    align: "left",
    label: "全壘打",
    field: "homeRun",
    sortable: true,
    sort: (a, b) => a - b,
  },
  {
    name: "strikeOut",
    align: "left",
    label: "三振數",
    field: "strikeOut",
    sortable: true,
    sort: (a, b) => a - b,
  },
  {
    name: "conveyed",
    align: "left",
    label: "保送數(投)",
    field: "conveyed",
    sortable: true,
    sort: (a, b) => a - b,
  },
]);
// const rows = ref([
//   {
//     team: "海龜隊",
//     name: "莊信宏",
//     number: "18",
//     hit: "1",
//     hitP: "0",
//     beConveyed: "10",
//     homeRun: "0",
//     strikeOut: "9",
//     conveyed: "9",
//   },
//   {
//     team: "海龜隊",
//     name: "張愷恩",
//     number: "10",
//     hit: "0",
//     hitP: "0",
//     beConveyed: "0",
//     homeRun: "0",
//     strikeOut: "0",
//     conveyed: "0",
//   },
//   {
//     team: "海龜隊",
//     name: "簡振宇",
//     number: "14",
//     hit: "0",
//     hitP: "0",
//     beConveyed: "0",
//     homeRun: "0",
//     strikeOut: "0",
//     conveyed: "0",
//   },
//   {
//     team: "海龜隊",
//     name: "吳家宇",
//     number: "2",
//     hit: "0",
//     hitP: "0",
//     beConveyed: "0",
//     homeRun: "0",
//     strikeOut: "0",
//     conveyed: "0",
//   },
//   {
//     team: "海龜隊",
//     name: "曾譯寬",
//     number: "1",
//     hit: "0",
//     hitP: "0",
//     beConveyed: "0",
//     homeRun: "0",
//     strikeOut: "0",
//     conveyed: "0",
//   },
//   {
//     team: "狂熱者",
//     name: "川哥",
//     number: "111",
//     hit: "9",
//     hitP: "16",
//     beConveyed: "28",
//     homeRun: "6",
//     strikeOut: "48",
//     conveyed: "10",
//   },
//   {
//     team: "狂熱者",
//     name: "聖和",
//     number: "69",
//     hit: "6",
//     hitP: "13",
//     beConveyed: "18",
//     homeRun: "5",
//     strikeOut: "38",
//     conveyed: "18",
//   },
//   {
//     team: "狂熱者",
//     name: "致臻",
//     number: "26",
//     hit: "0",
//     hitP: "0",
//     beConveyed: "3",
//     homeRun: "0",
//     strikeOut: "5",
//     conveyed: "7",
//   },
//   {
//     team: "狂熱者",
//     name: "禹竹",
//     number: "19",
//     hit: "0",
//     hitP: "0",
//     beConveyed: "0",
//     homeRun: "0",
//     strikeOut: "0",
//     conveyed: "0",
//   },
//   {
//     team: "狂熱者",
//     name: "簡偉家",
//     number: "24",
//     hit: "0",
//     hitP: "3",
//     beConveyed: "21",
//     homeRun: "1",
//     strikeOut: "0",
//     conveyed: "2",
//   },
//   {
//     team: "火柴隊",
//     name: "廖敏佑",
//     number: "23",
//     hit: "4",
//     hitP: "9",
//     beConveyed: "2",
//     homeRun: "2",
//     strikeOut: "15",
//     conveyed: "20",
//   },
//   {
//     team: "火柴隊",
//     name: "吳肇華",
//     number: "11",
//     hit: "4",
//     hitP: "5",
//     beConveyed: "24",
//     homeRun: "1",
//     strikeOut: "12",
//     conveyed: "37",
//   },
//   {
//     team: "火柴隊",
//     name: "許友哲",
//     number: "51",
//     hit: "4",
//     hitP: "0",
//     beConveyed: "8",
//     homeRun: "0",
//     strikeOut: "2",
//     conveyed: "6",
//   },
//   {
//     team: "火柴隊",
//     name: "陳禹勛",
//     number: "56",
//     hit: "9",
//     hitP: "9",
//     beConveyed: "10",
//     homeRun: "3",
//     strikeOut: "21",
//     conveyed: "20",
//   },
//   {
//     team: "火柴隊",
//     name: "周晏廷",
//     number: "7",
//     hit: "0",
//     hitP: "2",
//     beConveyed: "2",
//     homeRun: "1",
//     strikeOut: "2",
//     conveyed: "5",
//   },
//   {
//     team: "火柴隊",
//     name: "廖建宏",
//     number: "66",
//     hit: "0",
//     hitP: "0",
//     beConveyed: "0",
//     homeRun: "0",
//     strikeOut: "0",
//     conveyed: "0",
//   },
//   {
//     team: "火柴隊",
//     name: "陳宥任",
//     number: "16",
//     hit: "1",
//     hitP: "2",
//     beConveyed: "3",
//     homeRun: "1",
//     strikeOut: "3",
//     conveyed: "0",
//   },
//   {
//     team: "自由球員",
//     name: "湯幃丞",
//     number: "0",
//     hit: "0",
//     hitP: "0",
//     beConveyed: "0",
//     homeRun: "0",
//     strikeOut: "0",
//     conveyed: "0",
//   },
//   {
//     team: "自由球員",
//     name: "方振旭",
//     number: "30",
//     hit: "0",
//     hitP: "0",
//     beConveyed: "0",
//     homeRun: "0",
//     strikeOut: "0",
//     conveyed: "0",
//   },
//   {
//     team: "自由球員",
//     name: "余嘉興",
//     number: "99",
//     hit: "0",
//     hitP: "0",
//     beConveyed: "5",
//     homeRun: "0",
//     strikeOut: "0",
//     conveyed: "0",
//   },
// ]);

const $q = useQuasar();

onMounted(async () => {
  try {
    $q.loading.show({
      delay: 0, // ms
    });
    await nextTick();
    await playerStore.getPlayerData();
  } catch (error) {
    console.error("Error fetching player data:", error);
  } finally {
    $q.loading.hide();
  }
});

const playerData = ref([]);

const getCellClasses = (columnName, row) => {
  switch (columnName) {
    case "team":
      return getTeamColorClasses(row.team);
    // 添加其他列的条件判断...
    default:
      return "";
  }
};
const getTeamColorClasses = (row) => {
  switch (row) {
    case "海龜隊":
      return "turtle";
      break;
    case "火柴隊":
      return "shib";
      break;
    case "狂熱者":
      return "fire";
      break;
    default:
      return "free";
      break;
  }
};
watch(
  () => playerStore.playerAllData,
  (newPlayerData) => {
    playerData.value = newPlayerData;
  }
);
// 計算屬性，根據 checkbox 的選擇來篩選資料
const filteredRows = computed(() => {
  const selectedTeams = Array.isArray(selection.value)
    ? selection.value
    : [selection.value];
  if (selectedTeams.length === 0) {
    return playerData.value;
  } else {
    return playerData.value.filter((row) => selectedTeams.includes(row.team));
  }
});
</script>

<style lang="scss">
.turtle {
  background-color: #0a53a8 !important;
  color: white;
}
.shib {
  background-color: #ff7e0f !important;
}
.free {
  background-color: #c5d0e0 !important;
}
.fire {
  background-color: #b10202 !important;
  color: white;
}
.my-table {
  font-weight: bold;
  height: 500px;
  td {
    font-size: 20px !important;
  }
  thead {
    color: white;
  }
  th {
    position: sticky;
    top: 0;
    font-size: 20px;
    background-color: #003264; /* 修改為你想要的背景顏色 */
    z-index: 1;
  }
}
</style>
