<template>
	<u-input
		v-model="password"
		placeholder="请输入密码"
		type="password"
		:border="borderStyle"
		@input="$emit('update:modelValue', event)"
	>
		<u-icon v-slot="suffix" :class="!isShow ? 'eye' : 'eye-off'"></u-icon>
	</u-input>
</template>

<script setup>
import { computed, ref } from "vue";
const isShow = ref(false)
const props = defineProps({
	value: String,
	borderStyle: {
		type: String,
		validator(value) {
		  // The value must match one of these strings
		  return ['surround', 'bottom', 'none'].includes(value)
		},
		default: _ => 'bottom'
	}
})
// const borderStyle = computed(_ => props.borderStyle)
console.log(props, 'props')
const password = ref('')
</script>

<style>
</style>