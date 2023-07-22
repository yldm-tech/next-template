import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import uView from '@/uni_modules/uview-ui'
import store from './store'
Vue.use(uView)
Vue.config.productionTip = false
App.mpType = 'app'
const env = process.env.NODE_ENV === 'production' ? require('prod.env') : require('dev.env');
Vue.prototype.$env = env;


const app = new Vue({
    ...App,
    store
})
app.$mount()
// #endif

// #ifdef VUE3
import {
    createSSRApp
} from 'vue'
export function createApp() {
    const app = createSSRApp(App)
    return {
        app
    }
}
// #endif

// #ifdef H5
// 提交前需要注释  本地调试使用
const vconsole = require('vconsole')
Vue.prototype.$vconsole = new vconsole() // 使用vconsole
// #endif