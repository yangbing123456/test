<template>
	<view>
		<!-- 填写可用资金输入框 -->
		<view class="top-box">
			<text>{{$t('regulator.regulator.5qzyj7gx6k40')}}</text>
			<u-field v-model="mobile" label="" :placeholder="$t('regulator.regulator.5qzyj7gx8bg0')" :border-bottom='false'
				:field-style="{'font-size':'1.5rem','font-weight':'800'}" label-width='0' input-align='center'
				@input='input'>
			</u-field>
		</view>
		<!-- 确定按钮 -->
		<view class="bottom-btn">
			<u-button class="go-btn" v-bind:class="{'class1':bool}" :hair-line='false'>{{$t('regulator.regulator.5qzyj7gx8s80')}}</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// value: '',
				mobile: '', //输入框值
				bool: false //判断按钮样式状态值
			}
		},
		methods: {
			input() {
				if (this.mobile) {
					this.bool = true
				} else {
					this.bool = false
				}
			}
		},
		// onLoad(data){
		// 	this.value = JSON.parse(data.name)
		// 	console.log(this.value,'222')
		// }
	}
</script>

<style lang="scss">
	.class1 {
		color: white !important;
		background-color: #12D18E !important;
	}

	.top-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 1px solid #12D18E;
		width: 90%;
		height: 9rem;
		border-radius: 1.5rem;
		margin: 1rem auto;
	}

	.bottom-btn {
		width: 100%;
		height: 8rem;
		padding: 1rem 1rem;
		position: absolute;
		bottom: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.go-btn {
			width: 100%;
			height: 3rem;
			background-color: #EFEFEF;
			border-radius: 6.25rem;
			color: #999999;
			border-width: 0 !important;
		}
	}
</style>