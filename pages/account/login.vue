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
    export default {
        data() {
            return {
                line: null,
                verify: null,
                loginInfo: {}
            }
        },
        computed: {
            count() {
                return this.$store.state.count
            }
        },
        async onLoad(e) {
            this.line = e.line;
            this.verify = e.verify;
            if (this.line && this.verify) {
                console.log(`用户己经登陆line,获取用户数据`);
                const res = await uni.request({
                    url: `${this.$env.BASE_API}/user`,
                    data: {
                        line: this.line,
                        verify: this.verify
                    }
                })

                const user = res.data.data;
                console.log(res)
                if (user) {
                    this.$store.commit('updateUser', user);
                    uni.reLaunch({
                        url: `/pages/account/account?line=${this.line}&verify=${this.verify}`
                    })
                }
            }
        },
        methods: {
            addCount() {
                console.log(this.$env.BASE_API);
                this.$store.commit('add', 5)
                this.$env.LINE_CLIENT_ID;
            },
            async handleLineLogin() {
                console.log(`用户开始line登陆`);
                let response_type = 'code';
                let client_id = this.$env.LINE_CLIENT_ID;
                let redirect_uri = `${this.$env.BASE_API}/user/line/callback`;
                let state = '12345abcde';
                let scope = 'profile%20openid';
                let nonce = '09876xyz';

                window.location.href = 'https://access.line.me/oauth2/v2.1/authorize?response_type=' +
                    response_type +
                    '&client_id=' + client_id +
                    '&redirect_uri=' + redirect_uri +
                    '&state=' + state +
                    '&scope=' + scope +
                    '&nonce=' + nonce;
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