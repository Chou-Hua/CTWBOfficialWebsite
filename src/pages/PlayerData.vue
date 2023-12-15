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
  <div style="padding: 20px">
    <addPlayerDataDialog />
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
import addPlayerDataDialog from "src/components/addPlayerDataDialog.vue";
import { fakePlayerData } from "src/stores/fakeData";

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
// const fakeData = ref(fakePlayerData);

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
const refreshTable = async () => {
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
};
watch(
  () => playerStore.playerAllData,
  (newPlayerData) => {
    playerData.value = newPlayerData;
  }
);
watch(
  () => playerStore.updatePlayerData,
  () => {
    refreshTable();
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
