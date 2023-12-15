import { defineStore } from "pinia";
import { api } from "boot/axios";
const initPlayerData = {
  team: "自由球員",
  name: "",
  number: "0",
  hit: "0",
  hitP: "0",
  beConveyed: "0",
  homeRun: "0",
  strikeOut: "0",
  conveyed: "0",
};

export const usePlayerStore = defineStore("playerData", {
  state: () => ({
    playerAllData: [],
    chooseTeam: ["狂熱者", "火柴隊", "海龜隊", "自由球員"],
    addPlayerData: null,
    initPlayerData: null,
    addPlayerData: JSON.parse(JSON.stringify(initPlayerData))
  }),
  actions: {
    async getPlayerData() {
      try {
        const response = await api.get("/player");
        if (response.status === 200) {
          this.playerAllData = response.data;
        }
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    },
    setPlayerData(data) {
      this.addPlayerData[data.name] = data.team;
    },
    resetAddPlayerData() {
      // 這裡使用 Object.assign 或 Object.fromEntries
      this.addPlayerData = JSON.parse(JSON.stringify(initPlayerData));
      // 或者
      // this.addPlayerData = Object.fromEntries(Object.entries(this.state.addPlayerData).map(([key, value]) => [key, '']));
    },
  },
});
