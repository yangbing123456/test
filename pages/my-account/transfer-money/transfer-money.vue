<template>
	<view>
		<!-- 账户A -->
		<view class="box">
			<u-field v-model="mobile" label="" :placeholder="$t('transfer-money.transfer-money.5qzyf33vh2g0')"
				:border-bottom='false' label-width='0' :field-style="{'font-size':'1.4rem'}" @input='input'>
			</u-field>
			<text class="text">{{userA}}</text>
		</view>
		<!-- 转换按钮 -->
		<view class="borderbox">
			<image src='../../../static/fonts/Group298.png' class="img" @click="changeUser"></image>
		</view>
		<!-- 账户B -->
		<view class="box1">
			<u-field v-model="mobile1" label="" placeholder="" :border-bottom='false' label-width='0'
				:field-style="{'font-size':'1.5rem'}" :disabled="true">
			</u-field>
			<text class="text">{{userB}}</text>
		</view>

		<!-- 转账描述 -->
		<view class="textbox">
			{{$t('transfer-money.transfer-money.5qzyf33vi1o0')}}
		</view>
		<!-- 转账按钮 -->
		<view class="bottom-btn">
			<u-button class="btn" :hair-line='false'
				@click='TransferMoney'>{{$t('transfer-money.transfer-money.5qzyf33vi6o0')}}</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '', //账户A输入框
				mobile1: '$1000', //账户B输入框的值
				userA: this.$t('transfer-money.transfer-money.5qzyf33vi9o0'),
				userB: this.$t('transfer-money.transfer-money.5qzyf33vics0')
			};
		},
		methods: {
			input() {

			},
			//转换按钮事件
			changeUser() {
				// if(this.mobile1>0){

				// }
				let temp
				temp = this.userA
				this.userA = this.userB
				this.userB = temp
				let val
				val = this.mobile
				this.mobile = this.mobile1
				this.mobile1 = val
			},
			//转账按钮事件
			TransferMoney() {
				uni.navigateTo({
					url: '/pages/my-account/transfer-money/transfer-initiated/transfer-initiated'
				})
			}
		}
	}
</script>

<style lang="scss">
	.borderbox {
		height: 1px;
		margin: 4rem 1rem;
		border-bottom: 1px solid #EEEEEE;
		display: flex;
		justify-content: center;
		align-items: center;

		.img {
			width: 3rem;
			height: 3rem;

		}
	}

	.box {
		border: 1px solid #12D18E;
		background-color: #fafafa;
		height: 4.5rem;
		margin: 1rem;
		padding: 1rem;
		border-radius: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;


		.text {
			display: flex;
			min-width: 8rem;
			justify-content: flex-end;
			font-size: 1rem;
			color: #212121;
		}

		.u-field {
			padding: 0;
		}
	}

	.box1 {
		border: 1px solid #f6f6f6;
		background-color: #fafafa;
		height: 4.5rem;
		margin: 1rem;
		padding: 1rem;
		border-radius: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;


		.text {
			display: flex;
			min-width: 8rem;
			justify-content: flex-end;
			font-size: 1rem;
			color: #212121;
		}

		.u-field {
			padding: 0;
		}
	}

	.textbox {
		position: absolute;
		bottom: 5rem;
		color: #9D9E9E;
		font-size: 0.8rem;
		margin: 0 1rem;
		text-align: center;
	}

	.bottom-btn {
		position: absolute;
		bottom: 0.6rem;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		.btn {
			width: 96%;
			height: 3.6rem;
			border-radius: 6.25rem;
			background-color: #12D18E;
			color: #fff;
		}
	}
</style>