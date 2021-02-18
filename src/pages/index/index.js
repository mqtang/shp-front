import Vue from 'vue'
import App from './App'
// import router from '@/router/index'

import '@/styles/index.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
})
