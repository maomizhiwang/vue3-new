<template>
  <div class="grand-child">
    <h3>我是孙组件</h3>
    <h4>银子：{{ money }}</h4>
    <h4>车子：一辆{{ car.brand }}车，价值{{ car.price }}万元</h4>
    <h4>爷爷的书:{{ books }}</h4>
    <button @click="updateMoney(6)">花爷爷的钱</button>
    <button @click="destroyBooks(1)">撕书</button>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
import { inject } from "vue";

let { books, destroyBooks } = inject('booksContext', { books: 0, destroyBooks: (param: number) => { } })
let { money, updateMoney } = inject('moneyContext', { money: 0, updateMoney: (param: number) => { } })
console.log(money)
let car = inject('car', { brand: '未知', price: 0 })

</script>

<style scoped>
.grand-child {
  background-color: orange;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
}
</style>