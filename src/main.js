import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import router from './router'
import store from './store'
// https://element.eleme.cn/#/zh-CN/component/custom-theme
import './styles/index.css'

Vue.config.productionTip = false

Vue.use(Element)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
