import { defineStore } from "pinia";
import { api } from "boot/axios";

export const usePlayerStore = defineStore("playerData", {
  state: () => ({
    playerAllData: [],
  }),
  getters: {
    gettersPlayerData(state) {
      return state.playerAllData;
    },
  },
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
  },
});
