<template>
	<view>
		<!-- 顶部文本 -->
		<view class="toptext">
			<text style="color: #9D9E9E; font-size: 12px;">{{$t('leave-feedback.leave-feedback.5qzz8bsvc0k0')}}</text>
		</view>
		<!-- 反馈信息输入框 -->
		<view class="middlebox">
			<textarea name="" cols="30" rows="10" v-model="text" :placeholder="$t('leave-feedback.leave-feedback.5qzz8bsvdbc0')" @input='changeHandler'
				class="textarea"></textarea>
		</view>
		<!-- 提交按钮 -->
		<view class="bottombox">
			<u-button class="btn" :hair-line='false' v-bind:class="{'class1':Boolean(text)}">{{$t('leave-feedback.leave-feedback.5qzz8bsvdms0')}}</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: ''
			}
		},
		methods: {
			changeHandler() {

			}
		}
	}
</script>

<style lang="scss">
	.class1 {
		color: white !important;
		background-color: #12D18E !important;
	}

	.textarea {
		font-size: 12px;
	}

	.toptext {
		width: 100%;
		padding: 1rem;
	}

	.middlebox {
		// width: 100%;
		padding: 1rem;
		border: 1px solid #EFEFEF;
		border-radius: 0.5rem;
		margin: 0 1rem;
	}

	.bottombox {
		position: absolute;
		bottom: 10px;
		padding: 1rem;
		width: 100%;

		.btn {
			border-radius: 6.25rem;
			width: 100%;
			border-color: #F5F5F5;
		}
	}
</style>