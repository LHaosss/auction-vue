// src/stores/index.ts
import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    username: "",
    userXid: "",
    display: "display: none"
  }),
})