<template>
	<view class="page">
		注册
		<!-- {{ captchaData }} -->
		<u-input v-model="form.imgCode"></u-input>
		<view v-html="captchaData" />
		<u-button @click="validateCode">验证</u-button>
	</view>
</template>

<script setup>
import { getCaptcha } from '@/request/captcha.js'
import { reactive, ref, onMounted } from "vue";
// import * as captchaApi from '../../api/captcha.js'
const captchaData = ref(null)
async function getCaptchaData() {
	try{
		const res = await getCaptcha()
		captchaData.value = res
	}catch(e){
		console.log(e, 111111)
		//TODO handle the exception
	}
}
const form = reactive({
	imgCode: ''
})

const validateCode = _ => {
	uni.request({
		url: '/api/captcha/validate',
		method: 'post',
		data: {
			imgCode: form.imgCode
		}
	})
}
onMounted(_ => {
	getCaptchaData()
})
</script>

<style>
</style>