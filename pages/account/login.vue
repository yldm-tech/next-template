<template>
    <view>
        <u-button type="primary" @click="googleLogin"> google登陆</u-button>
    </view>
</template>

<script>
    export default {
        data() {
            return {

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
                                // 获取用户信息成功, info.authResult保存用户信息
                                console.log(info);
                            }
                        })
                    },
                    fail: function(err) {
                        // 登录授权失败  
                        // err.code是错误码
                    }
                });
            }
        }
    }
</script>

<style>

</style>