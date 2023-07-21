<template>
    <view class="root">
        <view class="tabs">
            <u-tabs :list="tabs" @click="click" lineWidth="70" lineHeight="3" lineColor="#000" :activeStyle="{
                        color: '#303133',
                        fontWeight: 'bold',
                        transform: 'scale(1.05)'
                    }" :inactiveStyle="{
                        color: '#606266',
                        transform: 'scale(1)'
                    }" itemStyle="
                     padding: 12px 20px;
                     height: 34px;
                     "></u-tabs>
        </view>

        <view class="items" v-for="item in 10">
            <view class="date">
                10月30日
            </view>
            <view class="item-container">
                <view class="item-content" v-for="item in 3">
                    <view class="left">
                        <image class="icon" src="../../static/images/in.png">
                        </image>
                        <text class="title">
                            王子北
                        </text>
                        <text class="date">
                            Enter・12:35
                        </text>
                    </view>

                    <view class="right">
                        <text class="amount">
                            ¥ 1000
                        </text>
                    </view>
                </view>
                <view class="item-footer">
                    <view class="left">
                        <text>合计 </text>
                        <text class="title">Total price</text>
                    </view>
                    <text>¥ 640</text>
                </view>
            </view>

        </view>



    </view>
</template>

<script>
    export default {
        data() {
            return {
                tabs: [{
                    name: '2022年',
                }, {
                    name: '2021年',
                }, {
                    name: '2020年'
                }],
            }
        },
        methods: {
            click(item) {
                console.log('item', item);
            },
        }
    }
</script>

<style lang="scss" scoped>
    .root {
        background-color: #f9f9f9;

        .tabs {
            background-color: white;
            padding: 20rpx;
        }

        .items {
            border-radius: 15rpx;
            background-color: #ffffff;
            margin: 30rpx;
            padding: 30rpx;

            .date {
                font-size: 36rpx;
                margin: 20rpx 0;
            }

            .item-content {
                display: flex;
                align-items: center;
                flex-direction: row;
                justify-content: space-between;
                border-bottom: 1rpx solid #f6f6f6f;
                height: 60rpx;
                line-height: 60rpx;

                .left {
                    text {
                        margin-right: 30rpx;
                    }

                    image {
                        width: 32rpx;
                        height: 32rpx;
                    }

                    .title {
                        margin-left: 20rpx;
                        font-size: 28rpx;
                        font-weight: bold;
                    }

                    .date {
                        color: #999;
                        font-size: 24rpx;
                    }
                }

                .right {
                    text {
                        font-size: 28rpx;
                        font-weight: bold;
                    }
                }
            }

            .item-footer {
                margin: 20rpx 0 20rpx 10rpx;
                display: flex;
                justify-content: space-between;

                text {
                    font-size: 28rpx;
                    font-weight: bold;
                }

                .left {
                    margin-left: 50rpx;

                    .title {
                        margin-left: 50rpx;
                        color: #999;
                        font-size: 24rpx;
                        font-weight: normal;
                    }
                }
            }
        }
    }
</style>