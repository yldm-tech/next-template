<template>
    <view class="charts-box">
        <u-skeleton rows="6" :loading="!chartData.series" title animate>
            <view class="header">
                高速口统计
            </view>
            <qiun-data-charts type="ring" :opts="opts" :chartData="chartData" />
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
            chartData: {},
            opts: {}
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