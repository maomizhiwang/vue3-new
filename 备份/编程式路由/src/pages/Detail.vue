<template>
    <h1>ID:{{ id }}</h1>
    <h1>标题:{{ title }}</h1>
    <h1>内容:{{ news }}</h1>
</template>
<script lang="ts" setup name="Detail">

defineProps(['id', 'title', 'news'])

</script>