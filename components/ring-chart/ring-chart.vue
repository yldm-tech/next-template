<template>
    <view class="charts-box">
        <view class="loading">
            <u-skeleton rows="6" :loading="!chartData.series" title animate>
                <qiun-data-charts type="ring" :opts="ringOpts" :chartData="chartData" />
            </u-skeleton>
        </view>

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
    }
</style>