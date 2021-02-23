import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouters = [
    {
        path: '/',
        name: 'App',
        component: () => import('@/App')
    },
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    },
    {
        path: '/404.html',
        component: () => import('@/views/404/index'),
        hidden: true
    },
    // 404 must be placed at the end
    {
        path: '*',
        redirect: '/404.html',
        hidden: true
    }
]

const createRouter = () => new Router({
    routes: constantRouters,
    mode: 'history'
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router
