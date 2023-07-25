<template>
    <view class="root">
        <view class="login">
            <u-button type="primary" @click="handleLineLogin"> line登陆</u-button>

            <view>
                <view>数量：{{count }}</view>
                <button @click="addCount">增加</button>
            </view>
        </view>
    </view>
</template>

<script>
    import {
        mapActions
    } from 'vuex';
    export default {
        data() {
            return {
                token: null,
                loginInfo: {}
            }
        },
        computed: {
            count() {
                return this.$store.state.count
            }
        },
        async onLoad(e) {
            if (e.token) {
                const baseUrl = this.$env.BASE_URL;
                const userInfo = await this.getUserInfo({
                    baseUrl: baseUrl,
                    token: e.token
                })
                uni.reLaunch({
                    url: `/pages/account/account?token=${e.token}`
                })
            }
        },
        methods: {
            ...mapActions(['getUserInfo', 'add', 'lineLogin']),
            addCount() {
                this.add(5);

            },
            async handleLineLogin() {
                console.log(`用户开始line登陆`);
                const clientId = this.$env.LINE_CLIENT_ID;
                const baseUrl = this.$env.BASE_URL;
                this.lineLogin({
                    clientId,
                    baseUrl
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
    .root {
        .login {
            margin-top: 50rpx;
        }
    }
</style>