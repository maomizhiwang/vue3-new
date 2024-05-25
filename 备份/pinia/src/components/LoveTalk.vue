<template>
    <div class="lovetalk">
        <button @click="getMsg">获取一句土味情话</button>
        <ul>
            <li v-for="i in msgList" :key="i.id">{{ i.msg }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="LoveTalk">
import { useLoveTalkstore } from '@/store/LoveTalk';
import { storeToRefs } from 'pinia';
const msgStore = useLoveTalkstore()
let { msgList } = storeToRefs(msgStore)
msgStore.$subscribe((mutate, state) => {
    localStorage.setItem('MsgList', JSON.stringify(state.msgList))
})
function getMsg() {
    msgStore.getTalkMsg()
}
</script>

<style scoped>
.lovetalk {
    margin: 10px;
    height: 200px;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
    background-color: orange;
}
</style>