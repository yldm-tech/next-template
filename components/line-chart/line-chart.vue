<template>
    <view class="charts-box">
        <u-skeleton rows="6" :loading="!chartData.series" title animate>
            <qiun-data-charts type="line" :opts="opts" :chartData="chartData" />
        </u-skeleton>
    </view>
</template>

<script>
    export default {
        name: "line-chart",
        props: {
            chartData: {},
            opts: {}
        }
    };
</script>

<style scoped>
    /* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
    .charts-box {
        width: 100%;
        height: 300px;
        background-color: white;
    }
</style>