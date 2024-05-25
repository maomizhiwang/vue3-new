
import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'
const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/news',
        component: News,
        children: [
            {
                name: 'detail',
                path: 'detail',
                component: Detail,
                props(route: { query: any; }) {
                    // console.log(route)
                    return route.query
                }
            }
        ]
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/',
        component: Home
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
