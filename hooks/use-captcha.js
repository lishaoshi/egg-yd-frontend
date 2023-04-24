import { ref } from 'vue'
import captchaApi from '../api/captcha.js'
export function useCaptcha() {
	const captchaData = ref(null)
	
	async function getCaptchaData() {
		const res = await captchaApi.getCaptcha()
		console.log(res)
	}
	
	return {
		captchaData,
		getCaptchaData
	}
}