<template>
	<view class="page">
		<view class="logo-box">
			<text>登 录</text>
		</view>
		<view class="form-box">
			<u-form
				:model="form"
				:rules="rules"
				label-width="auto"
				ref="formDom"
			>
				<u-form-item
					prop="phone"
				>
					<u-input
						v-model="form.phone"
						border="bottom"
						placeholder="请输入手机号"
					></u-input>
				</u-form-item>
				<u-form-item
					prop="password"
				>
					<y-password borderStyle="bottom" v-model="form.password"></y-password>
				</u-form-item>
				<u-form-item
				>
					<u-button type="primary" shape="circle" text="登录" :disabled="!canLogin" @click="handleLogin"></u-button>
				</u-form-item>
			</u-form>
		</view>
		<view class="toolbar-bottom">
			<text @click="goto.forgot">找回密码</text>
			<text @click="goto.register">新用户注册</text>
			<text @click="goto.createCompony">创建企业</text>
		</view>
	</view>
</template>

<script setup>
import { ref, unref } from "vue";

import YPassword from '@/components/y-password.vue' 
import { computed, reactive } from "vue";
const goto = {
	forgot: _ => uni.navigateTo({
		url: '/pages/login/forgot'
	}),
	register: _ => uni.navigateTo({
		url: '/pages/login/register'
	}),
	createCompony: _ => uni.navigateTo({
		url: '/pages/login/create-compony'
	})
} 
const rules = {
	'phone': {
		type: 'string',
		required: true,
		trigger: ['blur', 'change'],
		message: '请输入正确的手机号',
		validator: (rule, value, cb) => {
			return uni.$u.test.mobile(value)
		}
	},
	'password': {
		type: 'string',
		required: true,
		message: '请输入密码',
		trigger: ['blur', 'change']
	},
}
const form = reactive({
	phone: '',
	password: ''
})
const formDom =  ref(null)
const canLogin = computed(_ => form.phone && form.password)

const handleLogin = async _ => {
	try{
		await unref(formDom).validate()
		// TODO LOGIN
	}catch(e){
		console.log(e)
	}
}

</script>

<style lang="scss" scoped>
.logo-box {
	font-size: 100rpx;
	padding: 100rpx 0;
	text-align: center;
}

.login-btn {
	margin-top: 100px;
	width: 100%;
}
.toolbar-bottom {
	position: fixed;
	bottom: 60rpx;
	width: 100vw;
	display: flex;
	left: 0;
	& > * {
		flex: 1;
		display: block;
		position: relative;
		text-align: center;
	}
	& > *:not(:last-child) {
		&::after {
			content: '|';
			position: absolute;
			right: 0;
		}
	}
}
</style>
