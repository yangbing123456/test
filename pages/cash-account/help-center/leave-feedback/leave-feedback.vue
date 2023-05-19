<template>
	<view>
		<view class="toptext">
			<text style="color: #9D9E9E; font-size: 12px;">您的使用反馈是我们不断进步的强大助力</text>
		</view>
		<view class="middlebox">
			<textarea name="" cols="30" rows="10" v-model="text" placeholder="反馈" @input='changeHandler'
				class="textarea"></textarea>
		</view>
		<view class="bottombox">
			<u-button class="btn" :hair-line='false' v-bind:class="{'class1':Boolean(text)}">提交</u-button>
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