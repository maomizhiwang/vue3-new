import { defineStore } from 'pinia'
export const usePlusStore = defineStore('Plus', {
  // 动作
  actions: {
    addnum(value: number) {
      this.sum += value
    },
    minusnum(value: number) {
      this.sum -= value
    }
  },
  // 状态
  state() {
    return {
      sum: 1
    }
  },
  // 计算
  getters: {
    Bigsum: state => state.sum * 10
  }
})