<template>
    <view class="root">
        <view class="login">
            <u-button type="primary" @click="googleLogin"> google登陆</u-button>

            <view v-if="loginInfo">
                <image :src="loginInfo.headimgurl" mode="aspectFill"></image>
                <text>{{loginInfo.nickname}}</text>
                <text>{{loginInfo.unionid}}</text>
                <text>{{loginInfo.openid}}</text>
                <text>{{loginInfo.email}}</text>
                <text>{{loginInfo.openId}}</text>
                <image :src="loginInfo.avatarUrl" mode="aspectFill"></image>
            </view>
            <view v-else>
                暂无数据
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                loginInfo: {}
            }
        },
        methods: {
            googleLogin() {
                uni.login({
                    provider: 'google',
                    success: function(loginRes) {
                        // 登录成功
                        uni.getUserInfo({
                            provider: 'google',
                            success: function(info) {
                                console.log(info.userInfo);
                                this.loginInfo = info.userInfo;
                            }
                        })
                    },
                    fail: function(err) {
                        // 登录授权失败  
                        // err.code是错误码
                        this.loginInfo = JSON.stringify(err)
                    }
                });
            }
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