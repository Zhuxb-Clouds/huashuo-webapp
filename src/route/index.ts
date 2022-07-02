import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/',
            name: 'cardtable',
            component: () => import('../page/CardCURD.vue')
        }
    ]
})


export default router