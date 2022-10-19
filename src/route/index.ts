import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/home/homeIndex.vue')
        },
        {
            path: '/card',
            name: 'card',
            component: () => import('../views/cardList/cardCURD.vue')
        },
        {
            path: '/book',
            name: 'ruleBook',
            component: () => import('../views/ruleBook/ruleBookIndex.vue')
        }
    ]
})


export default router