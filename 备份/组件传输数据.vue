<template>
    <h1 v-for="i in $props.list" :key="i.id">
    {{i.id}}--{{i.name}}--{{ i.age }}--{{ i.sex }}
    </h1>
</template>
<script lang="ts" setup name="Person">
import type { Persons } from '@/type';

const props=withDefaults(defineProps<{list:Persons}>(),{
    list:()=>[{id:1,name:"陈毅",age:59,sex:'男'}]
})

</script>