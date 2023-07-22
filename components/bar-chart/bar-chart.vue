<template>
    <view class="charts-box">
        <qiun-data-charts type="bar" :opts="opts" :chartData="chartData" />
    </view>
</template>

<script>
    export default {
        name: "bar-chart",
        props: {
            chartData: {},
        },
        data() {
            return {
                //您可以通过修改 config-ucharts.js 文件中下标为 ['bar'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
                opts: {
                    color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
                        "#ea7ccc"
                    ],
                    padding: [15, 30, 0, 5],
                    enableScroll: false,
                    legend: {},
                    xAxis: {
                        boundaryGap: "justify",
                        disableGrid: false,
                        min: 0,
                        axisLine: false,
                        max: 40
                    },
                    yAxis: {},
                    extra: {
                        bar: {
                            type: "group",
                            width: 3,
                            meterBorde: 1,
                            meterFillColor: "#FFFFFF",
                            activeBgColor: "#000000",
                            activeBgOpacity: 0.08,
                            linearType: "custom",
                            barBorderCircle: true,
                            seriesGap: 1,
                            categoryGap: 1
                        }
                    }
                }
            };
        },
        methods: {

        }
    };
</script>

<style scoped>
    /* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
    .charts-box {
        background-color: white;
        width: 100%;
        height: 300px;
    }
</style>