<template>
    <view class="root">
        <view class="tabs">
            <u-tabs :list="tabs" @click="click" lineWidth="100" lineHeight="3" lineColor="#7C37EF" :activeStyle="{
                        color: '#303133', fontWeight: 'bold' , transform: 'scale(1.05)' }" :inactiveStyle="{
                        color: '#606266',
                        transform: 'scale(1)'
                    }" itemStyle="
                     padding:8px 40px;
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

        <column-chart :chartData="chartData"></column-chart>
        <ring-chart :chartData="ringChartData"></ring-chart>

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
                ringChartData: {},
            }
        },
        onReady() {
            this.getServerData();
            this.getRingServerData();
        },

        methods: {
            click(item) {
                console.log('item', item);
            },
            getRingServerData() {
                setTimeout(() => {
                    let res = {
                        series: [{
                            data: [{
                                "name": "1月",
                                "value": 50
                            }, {
                                "name": "2月",
                                "value": 30
                            }, {
                                "name": "3月",
                                "value": 20
                            }, {
                                "name": "4月",
                                "value": 18
                            }, {
                                "name": "5月",
                                "value": 8
                            }, {
                                "name": "6月",
                                "value": 12
                            }, {
                                "name": "7月",
                                "value": 50
                            }, {
                                "name": "8月",
                                "value": 30
                            }, {
                                "name": "9月",
                                "value": 20
                            }, {
                                "name": "10月",
                                "value": 18
                            }, {
                                "name": "11月",
                                "value": 8
                            }, {
                                "name": "12月",
                                "value": 12
                            }, ]
                        }]
                    };
                    this.ringChartData = JSON.parse(JSON.stringify(res));
                }, 500);
            },
            getServerData() {
                //模拟从服务器获取数据时的延时
                setTimeout(() => {
                    //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
                    let res = {
                        categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13",
                            "14",
                            "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26",
                            "27", "28", "29", "30"
                        ],
                        series: [{
                            name: "成交量A",
                            data: [20, 30, 25, 55, 30, 130, 20, 30, 25, 55, 30, 130, 20, 30, 25, 55,
                                30, 130, 20, 30, 25, 55, 30, 130, 25, 55, 30, 130, 55, 30
                            ]
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



    }
</style>