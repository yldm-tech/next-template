<template>
    <view class="charts-box">
        <view class="loading">
            <u-skeleton rows="6" :loading="!chartData.series" title animate>
                <qiun-data-charts :ontouch="true" type="column" :opts="opts" :chartData="chartData" />
            </u-skeleton>
        </view>
    </view>
</template>

<script>
    export default {
        name: "column-chart",
        props: {
            chartData: {}
        },
        data() {
            return {
                opts: {
                    color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
                        "#ea7ccc"
                    ],
                    padding: [15, 15, 0, 5],
                    enableScroll: true,
                    legend: {
                        show: false
                    },
                    xAxis: {
                        disableGrid: true,
                        itemCount: 6,
                        enableScroll: true,
                    },
                    yAxis: {
                        data: [{
                            min: 0,
                            max: 150
                        }],
                        splitNumber: 4
                    },
                    extra: {
                        column: {
                            type: "group",
                            width: 6,
                            activeBgColor: "#000000",
                            activeBgOpacity: 0.08,
                            barBorderCircle: true,
                            linearType: "custom"
                        }
                    }
                },
            };
        },
        onLoad() {
            connsole.log('开始加载column组件数据');
            this.getServerData();
        },
        methods: {
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

<style lang="scss" scoped>
    .charts-box {
        margin: 15rpx;
        padding: 30rpx;
        background-color: white;
    }
</style>