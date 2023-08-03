<template>
    <view class="root">
        <view class="tabs">
            <u-tabs :list="tabs" @click="click" lineWidth="70" lineHeight="3" lineColor="#000" :activeStyle="{
                        color: '#303133',
                        fontWeight: 'bold',
                        transform: 'scale(1.05)'
                    }" :inactiveStyle="{
                        color: '#606266',
                        transform: 'scale(1)'
                    }" itemStyle="
                     padding: 12px 20px;
                     height: 34px;
                     "></u-tabs>
        </view>

        <view class="loading" v-if="!etcData">
            <u-skeleton rows="30" :loading="!etcData" title animate>
            </u-skeleton>
        </view>

        <view v-else-if="noData" class="items" style="height: 100vh;">
            データがありません
        </view>

        <view v-else class="items" :key="index" v-for="(etc,index) in etcData">
            <view class="date">
                {{etc[0].entryMonth}}月{{etc[0].entryDay}}日
            </view>
            <view class="item-container">
                <view class="item-content" :key="index" v-for="(item,index) in etc">
                    <view class="item-in">
                        <view class="left">
                            <image class="icon" src="../../static/images/in.png">
                            </image>
                            Entry
                            <text class="date">
                                {{item.entryTime}}
                            </text>
                            <text class="title">
                                {{item.entry}}
                            </text>
                        </view>

                    </view>

                    <view class="item-out">
                        <view class="left">
                            <image class="icon" src="../../static/images/out.png">
                            </image>
                            Exit
                            <text class="date">
                                {{item.exitTime}}
                            </text>
                            <text class="title">
                                {{item.exit}}
                            </text>
                        </view>
                    </view>

                    <view class="item-amount">
                        <text class="amount">
                            金額：¥ {{item.totalPrice}}
                        </text>
                    </view>
                </view>

                <!--   <view class="item-footer">
                    <view class="left">
                        <text>合计 </text>
                        <text class="title">Total price</text>
                    </view>
                    <text>¥ 640</text>
                </view> -->
            </view>

        </view>



    </view>
</template>

<script>
    export default {
        data() {
            return {
                tabs: [{
                    name: '2023年',
                }, {
                    name: '2022年',
                }, {
                    name: '2021年'
                }],
                pageSize: 20,
                currentPage: 1,
                currentYear: '2023',
                etcData: null
            }
        },
        onLoad() {
            this.getData();
        },
        onReachBottom() {
            this.currentPage += 1
            this.getData()
        },
        computed: {
            user() {
                return this.$store.state.user
            },
            token() {
                return this.$store.state.user.token ?? ''
            },
            noData() {
                return this.etcData && this.etcData.length === 0
            }
        },
        methods: {
            click(item) {
                // 点击后重置所有内容并获取数据
                this.etcData = null;
                this.currentPage = 1;
                const year = item.name.replace('年', '');
                this.currentYear = year
                this.getData(year)
            },
            async getData() {
                const res = await uni.request({
                    url: `${this.$env.BASE_URL}/myetc/etc`,
                    data: {
                        year: this.currentYear,
                        pageNo: this.currentPage,
                        pageSize: this.pageSize
                    },
                    header: {
                        'x-auth-token': this.token
                    }
                })

                // 没有登陆自动跳转到登陆页面
                if (res.data.code === 401) {
                    uni.navigateTo({
                        url: '/pages/account/login'
                    })
                    return;
                }

                const dataList = res.data.data.data;
                if (dataList && dataList.length > 0) {
                    const etcData = Object.values(dataList.reduce((acc, curr) => {
                        const date = curr.entryDate;
                        if (!acc[date]) {
                            acc[date] = [];
                        }
                        acc[date].push(curr);
                        return acc;
                    }, {}));

                    if (this.currentPage > 1 && this.etcData) {
                        this.etcData = this.etcData.concat(etcData);
                    } else {
                        this.etcData = etcData
                    }
                } else {
                    if (this.currentPage > 1) {
                        uni.showToast({
                            icon: 'none',
                            title: 'これ以上のデータはありません'
                        })
                    } else {
                        this.etcData = [];
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .root {
        background-color: #f9f9f9;

        .tabs {
            background-color: white;
            padding: 20rpx;
        }

        .items {
            border-radius: 15rpx;
            background-color: #ffffff;
            margin: 30rpx;
            padding: 30rpx;

            .date {
                font-size: 36rpx;
                margin: 20rpx 0;
            }

            .item-content {
                display: flex;
                flex-direction: column;

                .item-in {
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    justify-content: space-between;
                    border-bottom: 1rpx solid #f6f6f6f;

                    .left {
                        display: flex;
                        align-items: center;
                        min-width: 300rpx;

                        text {
                            margin-right: 30rpx;
                        }

                        image {
                            padding-right: 20rpx;
                            width: 32rpx;
                            height: 32rpx;
                        }

                        .title {
                            margin-left: 20rpx;
                            font-size: 28rpx;
                            font-weight: 500;
                        }

                        .date {
                            padding-left: 20rpx;
                            color: #999;
                            font-size: 24rpx;
                        }
                    }
                }

                .item-out {
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    justify-content: space-between;
                    border-bottom: 1rpx solid #f6f6f6f;
                    height: 60rpx;
                    line-height: 60rpx;

                    .left {
                        min-width: 300rpx;
                        display: flex;
                        align-items: center;

                        text {
                            margin-right: 30rpx;
                        }

                        image {
                            padding-right: 20rpx;
                            width: 32rpx;
                            height: 32rpx;
                        }

                        .title {
                            margin-left: 20rpx;
                            font-size: 28rpx;
                            font-weight: 500;
                        }

                        .date {
                            color: #999;
                            font-size: 24rpx;
                            padding-left: 40rpx;
                        }
                    }

                    .right {
                        text {
                            font-size: 28rpx;
                            font-weight: bold;
                        }
                    }
                }

                .item-amount {
                    text-align: right;
                    padding-bottom: 20rpx;
                    border-bottom: 1rpx dotted #999;
                    margin-bottom: 50rpx;

                    text {
                        font-weight: 500;
                        font-size: 28rpx;
                    }
                }
            }

            .item-footer {
                margin: 20rpx 0 20rpx 10rpx;
                display: flex;
                justify-content: space-between;

                text {
                    font-size: 28rpx;
                    font-weight: bold;
                }

                .left {
                    margin-left: 50rpx;

                    .title {
                        margin-left: 50rpx;
                        color: #999;
                        font-size: 24rpx;
                        font-weight: normal;
                    }
                }
            }
        }
    }
</style>