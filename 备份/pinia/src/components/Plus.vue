<template>
    <div class="plus">
        <h1>当前求和为：{{ sum }},放大十倍后:{{ Bigsum }}</h1>
        <select v-model.number="n">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script lang="ts" setup name="Plus">
import { ref } from 'vue'
import { usePlusStore } from '@/store/Plus'
import { storeToRefs } from 'pinia';
let n = ref(1);

const getsum = usePlusStore()
const { sum, Bigsum } = storeToRefs(getsum)
function add() {
    getsum.addnum(n.value)
}
function minus() {
    getsum.minusnum(n.value)
}
</script>

<style>
.plus {
    height: 100px;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
    background-color: skyblue;
}
</style>