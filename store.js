import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState({
        storage: {
            getItem: key => uni.getStorageSync(key),
            setItem: (key, value) => uni.setStorageSync(key, value),
            removeItem: key => uni.removeStorageSync(key)
        }
    })],
    state: {
        count: 0,
        user: {}
    },
    mutations: {
        add(state, n = 1) {
            state.count += n
        },
        updateUser(state, payload) {
            console.log(payload);
            state.user = payload;
        }
    },
    actions: {
        // 这里放触发 mutations 的方法
    }
})

export default store