<template>
    <view class="charts-box">
        <u-skeleton rows="6" :loading="!chartData.series" title animate>
            <view class="header">
                通行統計
            </view>
            <qiun-data-charts type="ring" :opts="opts" :chartData="chartData" />
            <view class="chart-item" :key="index" v-for="(item,index) in barData">
                <view class="left">
                    <view class="title">
                        {{item.name}}
                    </view>
                    <view class="process">
                        <!-- <u-line-progress :percentage="(item.value/max*100).toFixed(0)" :showText="false" height="8"
                            :activeColor="colors[index]"></u-line-progress> -->
                        <u-line-progress :percentage="(item.value/max*100).toFixed(0)" :showText="false" height="8"
                            activeColor="#1890FF"></u-line-progress>
                    </view>
                </view>

                <view class="right">
                    <view class="left">
                        <view class="title">
                            ¥ {{item.value}}
                        </view>
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
            barData: {
                type: Array,
                default: []
            },
            opts: {}
        },
        computed: {
            colors() {
                return this.opts.color;
            },
            max() {
                return this.barData.length > 1 ? this.barData[0].value : 0
            }
        }
    }
</script>

<style lang="scss" scoped>
    .charts-box {
        margin: 10rpx;
        padding: 30rpx;
        background-color: white;
        border-radius: 10rpx;

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

                .process {
                    margin-top: 15rpx;
                }
            }

            .right {
                width: 150rpx;
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