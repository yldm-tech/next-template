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
        <view class="" v-if="!summary.amount">
            <u-skeleton rows="30" :loading="!summary.amount" title animate>
            </u-skeleton>
        </view>
        <view class="summary-container" v-else>
            <view class="title">支出概况
                <text v-if="!this.user.id">(サンプルデータ)</text>
                <text v-if="this.user">{{this.user.username ==='demo'?'(サンプルデータ)':''}}</text>
            </view>
            <view class="summary-devider">
            </view>

            <view class="summary">
                <view class="money-container">
                    <text class="summary-title">総支出</text>
                    <text class="summary-amount">{{summary.amount || 0}} JPY</text>
                </view>
                <view class="total-container">
                    <text class="summary-title">累計件数</text>
                    <text class="summary-amount">{{summary.count || 0}}件</text>
                </view>
            </view>
        </view>

        <line-chart :chartData="summary.lineChartData" :opts="summary.lineOpts"></line-chart>
        <ring-chart :chartData="summary.ringChartData" :barData="summary.barData" :opts="summary.ringOpts"></ring-chart>

    </view>
</template>

<script>
    import {
        mapState
    } from 'vuex';
    import {
        mapMutations
    } from 'vuex';
    import {
        mapActions
    } from 'vuex';
    import tabbar from '../../uni_modules/uview-ui/libs/config/props/tabbar';
    export default {
        data() {
            return {
                tabs: [{
                    name: '今年',
                    type: 'current',
                }, {
                    name: '去年',
                    type: 'lastYear',
                }, {
                    name: 'すべて',
                    type: 'all',
                }],
                item: {},
                summary: {
                    lineChartData: {},
                    ringChartData: {},
                    barData: []
                },

            }
        },
        onLoad() {
            this.item = this.tabs[0];
            this.getData();
        },
        computed: mapState(['user']),
        methods: {
            ...mapActions(['getSummary']),
            click(item) {
                this.item = item;
                this.getData();
            },
            async getData() {
                console.log(this.item.type);
                const res = await this.getSummary({
                    baseUrl: this.$env.BASE_URL,
                    token: this.user.token,
                    type: this.item.type || 'month'
                })
                if (!res.data.data) {
                    uni.showToast({
                        title: 'get summary fail...'
                    })
                    return;
                }

                this.summary = res.data.data;
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
            margin: 10rpx;
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