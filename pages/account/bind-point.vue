<template>
    <view>
        <u--form labelPosition="left" :model="userModel" :rules="rules" ref="uForm">
            <u-form-item label="用户名" prop="userInfo.username" borderBottom ref="item1">
                <u--input v-model="userModel.userInfo.username" placeholder='请输入用户名' border="none"></u--input>
            </u-form-item>
            <u-form-item label="密 码" prop="userInfo.password" borderBottom ref="item1">
                <u--input password v-model="userModel.userInfo.password" placeholder='请输入密码' border="none"></u--input>
            </u-form-item>

            <u-button @click="submit">提交</u-button>
        </u--form>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                showSex: false,
                userModel: {
                    userInfo: {
                        usernmae: '',
                        password: '',
                    },
                },
                rules: {
                    'userModel.usernmae': {
                        type: 'string',
                        required: true,
                        message: '请输入用户名',
                        trigger: ['blur', 'change']
                    },
                    'userModel.password': {
                        type: 'string',
                        max: 20,
                        required: true,
                        message: '请输入密码',
                        trigger: ['blur', 'change']
                    },
                },
            }
        },
        onReady() {
            this.$refs.uForm.setRules(this.rules)
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>

</style>