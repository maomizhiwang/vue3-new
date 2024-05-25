<template>
    <h1>ID:{{ query.id }}</h1>
    <h1>标题:{{ query.title }}</h1>
    <h1>内容:{{ query.news }}</h1>
</template>
<script lang="ts" setup name="Detail">
import { toRefs } from 'vue';
import { useRoute } from 'vue-router';
//接收参数
let route = useRoute()
const { query } = toRefs(route)


</script>