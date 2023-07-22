<template>
    <view class="root">
        <view class="item" :key="index" v-for="(item,index) in 6">
            <view class="left">
                <view class="logo">
                    <image src="../../static/logo.png" mode="aspectFill"></image>
                </view>
                <view class="title">
                    NEXCO东日本
                </view>
            </view>
            <view class="right">
                <view class="name">
                    当前积分
                </view>
                <view class="point">
                    30
                </view>


            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    .root {
        background-color: #f9f9f9;
        height: 92vh;
        overflow-y: hidden;

        .item {
            margin: 20rpx 20rpx;
            padding: 15rpx 50rpx;
            background-color: white;
            display: flex;
            justify-content: space-between;
            height: 120rpx;
            align-items: center;

            .left {
                display: flex;
                justify-content: space-between;
                align-items: center;

                image {
                    margin-right: 30rpx;
                    width: 80rpx;
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