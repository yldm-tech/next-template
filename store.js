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
        add({
            commit
        }, count) {
            commit('add', count)
        },
        lineLogin({
            commit
        }, params) {
            const {
                clientId,
                baseUrl
            } = params;
            let response_type = 'code';
            let redirectUri = `${baseUrl}/user/line/callback`;
            let state = '12345abcde';
            let scope = 'profile%20openid';
            let nonce = '09876xyz';

            window.location.href = 'https://access.line.me/oauth2/v2.1/authorize?response_type=' +
                response_type +
                '&client_id=' + clientId +
                '&redirect_uri=' + redirectUri +
                '&state=' + state +
                '&scope=' + scope +
                '&nonce=' + nonce;
        },
        async bindEtc({
            commit
        }, params) {
            const {
                baseUrl,
                token,
                model
            } = params
            return await uni.request({
                method: 'POST',
                url: `${baseUrl}/myetc/bind/etc`,
                data: model,
                header: {
                    "x-auth-token": token
                }
            })
        },
        async bindPoint({
            commit
        }, params) {
            const {
                baseUrl,
                token,
                model
            } = params
            return await uni.request({
                method: 'POST',
                url: `${baseUrl}/myetc/bind/point`,
                data: model,
                header: {
                    "x-auth-token": token
                }
            })
        },
        async getUserInfo({
            commit
        }, params) {
            const {
                baseUrl,
                token
            } = params;
            console.log(`用户己经登陆line,获取用户数据`);
            const res = await uni.request({
                url: `${baseUrl}/user/info`,
                header: {
                    "x-auth-token": token
                }
            })
            const user = res.data.data;
            user.token = token;
            if (user) {
                commit('updateUser', user);
            }
            return user;
        },
        async getPoints({
            commit
        }, params) {
            const {
                baseUrl,
                token
            } = params
            return await uni.request({
                method: 'GET',
                url: `${baseUrl}/myetc/point`,
                header: {
                    "x-auth-token": token
                }
            })
        },
    }
})

export default store