<template>
    <view>
        <u--form labelPosition="left" :model="model1" :rules="rules" ref="uForm">
            <u-form-item label="姓名" prop="userInfo.name" borderBottom ref="item1">
                <u--input v-model="model1.userInfo.name" border="none"></u--input>
            </u-form-item>
            <u-form-item label="性别" prop="userInfo.sex" borderBottom @click="showSex = true; hideKeyboard()"
                ref="item1">
                <u--input v-model="model1.userInfo.sex" disabled disabledColor="#ffffff" placeholder="请选择性别"
                    border="none"></u--input>
                <u-icon slot="right" name="arrow-right"></u-icon>
            </u-form-item>
        </u--form>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                showSex: false,
                model1: {
                    userInfo: {
                        name: 'uView UI',
                        sex: '',
                    },
                },
                rules: {
                    'userInfo.name': {
                        type: 'string',
                        required: true,
                        message: '请填写姓名',
                        trigger: ['blur', 'change']
                    },
                    'userInfo.sex': {
                        type: 'string',
                        max: 1,
                        required: true,
                        message: '请选择男或女',
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

<style>

</style>