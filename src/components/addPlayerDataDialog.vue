<template>
  <div style="padding-bottom: 50px; padding-left: 0px">
    <q-btn label="新增球員及數據" color="primary" @click="alert = true" />
  </div>
  <form @submit.prevent.stop="onSubmit()" class="q-gutter-md">
    <q-dialog v-model="alert" persistent>
      <q-card style="width: 700px; max-width: 80vw">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">新增球員數據</div>
          <q-space />
          <q-btn
            icon="close"
            flat
            round
            dense
            v-close-popup
            @click="clearData()"
          />
        </q-card-section>
        <!-- <div>Model: "{{ playerStore.addPlayerData.team }}"</div> -->
        <div style="padding: 25px 25px">
          <q-select
            filled
            v-model="teamModel"
            :options="playerStore.chooseTeam"
            label="隸屬隊伍"
            style="padding-bottom: 20px; width: 100%"
            @update:model-value="selectTeam('team')"
          />
        </div>
        <q-card-section class="q-pt-none">
          <div class="d-flex">
            <q-input
              ref="nameModelRef"
              style="width: 100%; padding: 10px"
              outlined
              dense
              v-model="nameModel"
              label="球員名稱"
              autofocus
              :rules="[(val) => !!val || 'Field is required']"
              @update:model-value="selectTeam('name')"
            />
            <q-input
              style="width: 100%; padding: 10px"
              outlined
              dense
              type="number"
              v-model="numberModel"
              label="背號"
              autofocus
              @update:model-value="selectTeam('number')"
            />
          </div>

          <div class="d-flex">
            <q-input
              ref="hitModelRef"
              :rules="[(val) => !!val || 'Field is required']"
              style="width: 100%; padding: 10px"
              outlined
              type="number"
              dense
              v-model="hitModel"
              label="安打數"
              autofocus
              @update:model-value="selectTeam('hit')"
            />

            <q-input
              ref="hitPModelRef"
              :rules="[(val) => !!val || 'Field is required']"
              style="width: 100%; padding: 10px"
              dense
              outlined
              type="number"
              v-model="hitPModel"
              label="打點"
              autofocus
              @update:model-value="selectTeam('hitP')"
            />
          </div>

          <div class="d-flex">
            <q-input
              ref="beConveyedModelRef"
              :rules="[(val) => !!val || 'Field is required']"
              style="width: 100%; padding: 10px"
              dense
              outlined
              type="number"
              v-model="beConveyedModel"
              label="被保送數"
              autofocus
              @update:model-value="selectTeam('beConveyed')"
            />
            <q-input
              ref="homeRunModelRef"
              :rules="[(val) => !!val || 'Field is required']"
              style="width: 100%; padding: 10px"
              dense
              v-model="homeRunModel"
              outlined
              label="全壘打"
              autofocus
              @update:model-value="selectTeam('homeRun')"
            />
          </div>
          <div class="d-flex">
            <q-input
              ref="strikeOutModelRef"
              :rules="[(val) => !!val || 'Field is required']"
              dense
              style="width: 100%; padding: 10px"
              v-model="strikeOutModel"
              type="number"
              outlined
              label="三振數"
              autofocus
              @update:model-value="selectTeam('strikeOut')"
            />
            <q-input
              ref="conveyedModelRef"
              :rules="[(val) => !!val || 'Field is required']"
              dense
              style="width: 100%; padding: 10px"
              outlined
              v-model="conveyedModel"
              label="保送數(投)"
              autofocus
              @update:model-value="selectTeam('conveyed')"
            />
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="提交" color="primary" @click="onSubmit()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { usePlayerStore } from "src/stores/playerData";
import { useQuasar } from "quasar";

const playerStore = usePlayerStore();

const teamModel = ref("自由球員");
const nameModel = ref("");
const numberModel = ref("0");
const hitModel = ref("0");
const hitPModel = ref("0");
const beConveyedModel = ref("0");
const homeRunModel = ref("0");
const strikeOutModel = ref("0");
const conveyedModel = ref("0");

const nameModelRef = ref(null);
const hitModelRef = ref(null);
const hitPModelRef = ref(null);
const beConveyedModelRef = ref(null);
const homeRunModelRef = ref(null);
const strikeOutModelRef = ref(null);
const conveyedModelRef = ref(null);

const alert = ref(false);

const initInputField = () => {
  teamModel.value = "自由球員";
  nameModel.value = "";
  numberModel.value = "0";
  hitModel.value = "0";
  hitPModel.value = "0";
  beConveyedModel.value = "0";
  homeRunModel.value = "0";
  strikeOutModel.value = "0";
  conveyedModel.value = "0";
};

const processNumberHaveZero = (num) => {
  return num.replace(/^0+/, "");
};

const clearData = () => {
  initInputField();
  playerStore.resetAddPlayerData();
};

const $q = useQuasar();

const onSubmit = async () => {
  nameModelRef.value.validate();
  hitModelRef.value.validate();
  hitPModelRef.value.validate();
  beConveyedModelRef.value.validate();
  homeRunModelRef.value.validate();
  strikeOutModelRef.value.validate();
  conveyedModelRef.value.validate();
  const failedSubmit =
    nameModelRef.value.hasError ||
    hitModelRef.value.hasError ||
    hitPModelRef.value.hasError ||
    beConveyedModelRef.value.hasError ||
    homeRunModelRef.value.hasError ||
    strikeOutModelRef.value.hasError ||
    conveyedModelRef.value.hasError;
  if (failedSubmit) {
  } else {
    try {
      $q.loading.show({
        delay: 0, // ms
      });
      playerStore.setPlayerData({ name: "team", team: teamModel.value });
      await playerStore.postAddOnePlayerData(playerStore.addPlayerData);
      playerStore.updateRefrshPageFlag();
    } catch (error) {
      console.error("Error fetching player data:", error);
    } finally {
      $q.loading.hide();
      alert.value = false;
      clearData();
    }
  }
};

const selectTeam = (value) => {
  switch (value) {
    case "team":
      playerStore.setPlayerData({ name: "team", team: teamModel.value });
      break;
    case "name":
      playerStore.setPlayerData({ name: "name", team: nameModel.value });
      break;
    case "number":
      numberModel.value = processNumberHaveZero(numberModel.value);
      playerStore.setPlayerData({ name: "number", team: numberModel.value });
      break;
    case "hit":
      hitModel.value = processNumberHaveZero(hitModel.value);
      playerStore.setPlayerData({ name: "hit", team: hitModel.value });
      break;
    case "hitP":
      hitPModel.value = processNumberHaveZero(hitPModel.value);
      playerStore.setPlayerData({ name: "hitP", team: hitPModel.value });
      break;
    case "beConveyed":
      beConveyedModel.value = processNumberHaveZero(beConveyedModel.value);
      playerStore.setPlayerData({
        name: "beConveyed",
        team: beConveyedModel.value,
      });
      break;
    case "homeRun":
      homeRunModel.value = processNumberHaveZero(homeRunModel.value);
      playerStore.setPlayerData({ name: "homeRun", team: homeRunModel.value });
      break;
    case "strikeOut":
      strikeOutModel.value = processNumberHaveZero(strikeOutModel.value);
      playerStore.setPlayerData({
        name: "strikeOut",
        team: strikeOutModel.value,
      });
      break;
    case "conveyed":
      conveyedModel.value = processNumberHaveZero(conveyedModel.value);
      playerStore.setPlayerData({
        name: "conveyed",
        team: conveyedModel.value,
      });
      break;
  }
};
</script>

<style></style>
