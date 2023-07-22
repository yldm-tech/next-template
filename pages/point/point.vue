<template>
    <view class="root">
        <view class="item" :key="index" v-for="(item,index) in list">
            <view class="left">
                <view class="logo">
                    <image :src="item.image" mode="aspectFit"></image>
                </view>

            </view>
            <view class="right">
                <view class="name">
                    当前积分
                </view>
                <view class="point">
                    {{item.point}}
                </view>


            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                list: [{
                        image: '../../static/images/nexco.png',
                        name: "東日本高速",
                        point: 33
                    }, {
                        image: '../../static/images/nagoya.png',
                        name: "名古屋高速",
                        point: 3333
                    }, {
                        image: '../../static/images/aichi.png',
                        name: "愛知高速",
                        point: 0
                    }, {
                        image: '../../static/images/koube.png',
                        name: "神戸高速",
                        point: 50
                    }, {
                        image: '../../static/images/honyon.png',
                        name: "本四高速",
                        point: 24
                    },
                    {
                        image: '../../static/images/hirojima.png',
                        name: "広島高速",
                        point: 220
                    }, {
                        image: '../../static/images/fokukita.png',
                        name: "福岡北九州高速",
                        point: 220
                    },
                ]
            }
        },
        methods: {

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