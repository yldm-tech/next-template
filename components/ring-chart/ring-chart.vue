<template>
    <view class="charts-box">
        <u-skeleton rows="6" :loading="!chartData.series" title animate>
            <view class="header">
                高速口统计
            </view>
            <qiun-data-charts type="ring" :opts="ringOpts" :chartData="chartData" />
            <view class="chart-item" :key="index" v-for="(item,index) in 5">
                <view class="left">
                    <view class="title">
                        王子北
                    </view>
                    <view class="process">
                        <u-line-progress :percentage="30" activeColor="#1890FF"></u-line-progress>
                    </view>
                </view>

                <view class="right">
                    <view class="left">
                        <view class="title">
                            ¥ 1000
                        </view>
                        <view class="amount">
                            共有10条记录
                        </view>
                    </view>
                    <view class="right">
                        <text class="iconfont icon-a-10-you"></text>
                    </view>
                </view>
            </view>
        </u-skeleton>

    </view>
</template>

<script>
    export default {
        name: "ring-chart",
        props: {
            chartData: {}
        },
        data() {
            return {
                ringOpts: {
                    rotate: false,
                    rotateLock: false,
                    color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
                        "#ea7ccc"
                    ],
                    padding: [5, 5, 5, 5],
                    dataLabel: false,
                    enableScroll: false,
                    legend: {
                        show: false,
                        position: "right",
                        lineHeight: 25
                    },
                    title: {
                        name: "消费总额",
                        fontSize: 15,
                        color: "#666666"
                    },
                    subtitle: {
                        name: "21K",
                        fontSize: 25,
                        color: "#7cb5ec"
                    },
                    extra: {
                        ring: {
                            ringWidth: 60,
                            activeOpacity: 0.5,
                            activeRadius: 10,
                            offsetAngle: 0,
                            labelWidth: 15,
                            border: true,
                            borderWidth: 3,
                            borderColor: "#FFFFFF",
                            linearType: "custom"
                        }
                    }
                }
            };
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    .charts-box {
        margin: 15rpx;
        padding: 30rpx;
        background-color: white;

        .header {
            font-size: 35rpx;
            font-weight: bold;
        }

        .chart-item {
            display: flex;
            justify-content: space-between;
            margin: 20rpx 0;

            .left {
                flex: 1;
                margin: 0 10rpx;
            }

            .right {
                width: 210rpx;
                margin: 0 10rpx;
                display: flex;
                justify-content: space-between;

                .left {
                    flex: 1;

                    .title {
                        font-size: 28rpx;
                        font-weight: bold;
                        margin: 4rpx 0rpx;
                    }

                    .amount {
                        font-size: 24rpx;
                    }
                }

                .right {
                    width: 20rpx;
                    color: #999;
                    align-items: center;
                }
            }
        }
    }
</style>