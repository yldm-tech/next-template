<template>
    <view class="root">
        <view class="tabs">
            <u-tabs :list="tabs" @click="click" lineWidth="40" lineHeight="3" lineColor="#7C37EF" :activeStyle="{
                        color: '#303133',
                        fontWeight: 'bold',
                        transform: 'scale(1.05)'
                    }" :inactiveStyle="{
                        color: '#606266',
                        transform: 'scale(1)'
                    }" itemStyle="
                     padding:8px;
                     height: 34px;
                     "></u-tabs>
        </view>
        <view class="summary-container">
            <view class="title">支出概况</view>
            <view class="summary-devider">
            </view>

            <view class="summary">
                <view class="money-container">
                    <text class="summary-title">本年总支出</text>
                    <text class="summary-amount">1235025JPY</text>
                </view>
                <view class="total-container">
                    <text class="summary-title">本年累计笔数</text>
                    <text class="summary-amount">743笔</text>
                </view>
            </view>

        </view>

        <view class="charts-box">
            <qiun-data-charts type="line" :opts="opts" :chartData="chartData" />
        </view>

        <view class="charts-box">
            <qiun-data-charts type="line" :opts="opts" :chartData="chartData" />
        </view>

    </view>
</template>

<script>
    export default {
        data() {
            return {
                tabs: [{
                    name: '本月',
                }, {
                    name: '本年',
                }, {
                    name: '全部'
                }],
                chartData: {},
                opts: {
                    padding: [15, 10, 0, 15],
                    dataLabel: false,
                    dataPointShape: true,
                    enableScroll: false,
                    legend: {},
                    xAxis: {
                        disableGrid: true
                    },
                    yAxis: {
                        gridType: "dash",
                        dashLength: 2,
                        data: [{
                            min: 0,
                            max: 30
                        }]
                    },
                    extra: {
                        line: {
                            type: "curve",
                            width: 2,
                            activeType: "hollow",
                            linearType: "custom"
                        }
                    }
                }
            }
        },
        onReady() {
            this.getServerData();
        },
        methods: {
            click(item) {
                console.log('item', item);
            },
            getServerData() {
                //模拟从服务器获取数据时的延时
                setTimeout(() => {
                    //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
                    let res = {
                        categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                        series: [{
                            name: "支出",
                            linearColor: [
                                [
                                    0,
                                    "#FAC858"
                                ],
                                [
                                    0.33,
                                    "#FFC371"
                                ],
                                [
                                    0.66,
                                    "#FFC2B2"
                                ],
                                [
                                    1,
                                    "#FA7D8D"
                                ]
                            ],
                            data: [9, 30, 6, 10, 8, 10, 20, 30, 6, 10, 8, 10]
                        }]
                    };
                    this.chartData = JSON.parse(JSON.stringify(res));
                }, 500);
            },
        }
    }
</script>

<style scoped lang="scss">
    .root {
        background-color: #f4f4f4;

        .tabs {
            line-height: 120rpx;
            height: 120rpx;
            padding: 10rpx 20rpx;
            background-color: white;
        }

        .summary-container {
            margin: 15rpx;
            padding: 30rpx;
            background-color: white;
            border-radius: 12rpx;
            height: 250rpx;
            margin-bottom: 15rpx;

            .title {
                padding: 20rpx 0;
                font-size: 48rpx;
                font-weight: bold;
                border-bottom: 3rpx dotted #CCCCCC;
            }

            .summary {
                margin: 30rpx 0;
                display: flex;
                justify-content: space-between;

                .summary-title {
                    display: block;
                    font-size: 24rpx;
                    color: #999999;
                    line-height: 2em;
                }

                .summary-amount {
                    font-size: 32rpx;
                    color: #000;
                    line-height: 2em;
                    padding: 30rpx 0;
                }
            }


        }



        .charts-box {
            margin: 15rpx;
            padding: 30rpx;
            background-color: white;
        }
    }
</style>