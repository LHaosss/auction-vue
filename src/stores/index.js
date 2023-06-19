// src/stores/index.ts
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      username: "",
      userXid: "",
      headerImgUrl: "",
    }
  }
})