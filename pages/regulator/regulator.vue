<template>
	<view>
		<view class="top-box">
			<text>可用资金</text>
			<u-field v-model="mobile" label="" placeholder="请填写可用资金" :border-bottom='false'
				:field-style="{'font-size':'1.5rem'}" label-width='0' input-align='center' @input='input'>
			</u-field>
		</view>

		<view class="bottom-btn">
			<u-button class="go-btn" v-bind:class="{'class1':bool}" :hair-line='false'>确定</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				mobile: '',
				bool: false
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
			background-color: #e9e9e9;
			border-radius: 6.25rem;
			color: #999999;
			border-width: 0 !important;
		}
	}
</style>