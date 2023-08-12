<template>
    <view class="root">
        <view class="loading" v-if="!list">
            <u-skeleton rows="30" :loading="!list" title animate>
            </u-skeleton>
        </view>
        <view v-else class="item" :key="index" v-for="(item,index) in list">
            <view class="left">
                <view class="logo">
                    <image :src="item.image" mode="aspectFit"></image>
                </view>

            </view>
            <view class="right">
                <view class="name">
                    ポイント
                </view>
                <view class="point">
                    {{item.point}}
                </view>


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
                list: null,
                fake: false,
            }
        },
        computed: {
            userInfo() {
                return this.$store.state.user;
            },
            token() {
                return this.userInfo.token;
            }
        },
        onLoad() {
            this.getData();
        },
        methods: {
            ...mapActions(['getPoints']),
            async getData() {
                const res = await this.getPoints({
                    baseUrl: this.$env.BASE_URL,
                    token: this.token
                })

                if (!res.data.data) {
                    uni.showToast({
                        title: 'get point fail'
                    })
                    return;
                }
                this.list = res.data.data.data;
                this.fake = res.data.data.fake;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .root {
        background-color: #f9f9f9;
        overflow-y: hidden;

        .item {
            margin: 20rpx 20rpx;
            padding: 15rpx 50rpx;
            background-color: white;
            display: flex;
            justify-content: space-between;
            height: 115rpx;
            align-items: center;

            .left {
                display: flex;
                justify-content: space-between;
                align-items: center;

                image {
                    margin-right: 30rpx;
                    width: 300rpx;
                    height: 80rpx;
                }

                .title {
                    font-size: 28rpx;
                    font-weight: bold;
                }
            }

            .right {
                display: flex;
                flex-direction: column;

                .name {
                    font-size: 24rpx;
                    color: #999;
                }

                .point {
                    margin: 10rpx 0;
                    font-size: 28rpx;
                    font-weight: bold;
                }
            }
        }
    }
</style>