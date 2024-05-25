<template>
    <h1>sum:{{ sum }} sum放大十倍 :{{ bigSum }}</h1>
    <button @click="add()">sum++</button><br>
    <button @click="getDog()">来只修狗</button><br>
    <img v-for="(dog, index) in dogList" :key="index" :src="dog" />
</template>
<script lang="ts" setup name="Person">
import useDog from '@/hooks/useDog';
import useSum from '@/hooks/useSum';

const { dogList, getDog } = useDog()
const { sum, add, bigSum } = useSum()
</script>

<style scoped>
img {
    width: 100px;
    margin: 10px
}
</style>