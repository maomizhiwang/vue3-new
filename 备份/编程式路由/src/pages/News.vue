<template>
    <div class="news">
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <RouterLink :to="{
                    name: 'detail',
                    query: {
                        id: news.id,
                        title: news.title,
                        news: news.news
                    }
                }">

                    {{ news.title }}
                </RouterLink>
            </li>
        </ul>
        <div class="news-content">
            <RouterView></RouterView>
        </div>
    </div>

</template>
<script lang="ts" setup name="News">
import { reactive } from 'vue';
import Detail from './Detail.vue';

const newsList = reactive([
    {
        id: 'id1',
        title: '我是标题1',
        news: '我是新闻内容1'
    },
    {
        id: 'id2',
        title: '我是标题2',
        news: '我是新闻内容2'
    },
    {
        id: 'id3',
        title: '我是标题3',
        news: '我是新闻内容3'
    },
    {
        id: 'id4',
        title: '我是标题4',
        news: '我是新闻内容4'
    },
])


</script>

<style scoped>
/* 新闻 */
.news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
}

.news ul {
    margin-top: 30px;
    list-style: none;
    padding-left: 10px;
}

.news li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
}
</style>