import axios from 'axios'
import { nanoid } from 'nanoid'
import { defineStore } from 'pinia'
import { reactive } from 'vue'
//选项式
// export const useLoveTalkstore = defineStore('LoveTalk', {
//   // 动作
//   actions: {
//     async getTalkMsg() {
//       let { data: { content: msg } } = await axios('https://api.uomg.com/api/rand.qinghua?format=json')
//       let obj = { id: nanoid(), msg }
//       this.msgList.push(obj)
//     }
//   },
//   // 状态
//   state() {
//     return {
//       msgList: JSON.parse(localStorage.getItem('MsgList') as string) || []
//     }
//   },
//   // 计算
//   getters: {

//   }
// })
//组合式
export const useLoveTalkstore = defineStore('LoveTalk', () => {
  async function getTalkMsg() {
    let { data: { content: msg } } = await axios('https://api.uomg.com/api/rand.qinghua?format=json')
    let obj = { id: nanoid(), msg }
    msgList.push(obj)
  }

  const msgList = reactive(JSON.parse(localStorage.getItem('MsgList') as string) || [])
  return { getTalkMsg, msgList }
})