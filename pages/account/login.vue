<template>
    <view class="root">
        <view text='スキップ' @click="skipLogin" class="skip-button">
            スキップ
        </view>
        <view class="logo">
            <view class="vector">
                <image src="../../static/images/vector.png" mode="aspectFit"></image>
            </view>
        </view>

        <view class="header">
            <view class="title">
                <text>MY ETC</text>
            </view>
            <view class="sub-title">
                <text>ETC請求書情報を迅速に把握する</text>
            </view>
        </view>

        <view class="login">
            <u-button class="btn-login" type="primary" @click="handleLineLogin"> Lineでログイン</u-button>
        </view>

        <view class="footer">
            <text class="content">当アプリにログインすることで、以下の
                <a class="terms">
                    利用規約
                </a>と<a class="policy">
                    プライバシーポリシー
                </a>に同意するものとします。

            </text>
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
            async skipLogin() {
                uni.reLaunch({
                    url: '/pages/account/account'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .root {
        .skip-button {
            width: 150rpx;
            position: fixed;
            top: 20rpx;
            right: 10rpx;
            color: #999;

            &:hover {
                cursor: pointer;
            }
        }

        .logo {
            padding: 8% 0;
            color: #666;
            display: flex;
            justify-content: center;
            align-items: center;

            image {
                width: 400rpx;
            }

            .text {
                font-size: 38rpx;
                padding-top: 20rpx;
            }
        }

        .header {
            text-align: center;

            .title {
                font-size: 64rpx;
                font-weight: 500;
            }

            .sub-title {
                margin: 20rpx 0;
                font-size: 32rpx;
                color: #666;
            }
        }

        .login {
            margin: 50rpx 80rpx;

            .btn-login {
                border-radius: 50rpx;
                background: linear-gradient(#0fc160, #07c160);
                border: none;
            }
        }

        .footer {
            position: fixed;
            bottom: 20%;
            margin: 0rpx 30rpx;
            text-align: center;
            align-items: center;

            text {
                font-size: 28rpx;
            }

            .content {
                color: #666;
                margin: 0 50rpx;
            }

            .terms,
            .policy {
                color: #7930F6;
                margin: 5rpx;

                &:hover {
                    text-decoration: underline;
                }
            }

        }
    }
</style>