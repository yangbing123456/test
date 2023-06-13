<template>
	<view>
		<!-- 显示可用资金输入框 -->
		<view class="top-box1">
			<text>{{$t('withdraw-cash.withdraw-cash.5qzygfbgm400')}}</text>
			<u-field v-model="mobile" label="" :placeholder="$t('withdraw-cash.withdraw-cash.5qzygfbgnh00')" :border-bottom='false'
				:field-style="{'font-size':'1.2rem','font-weight':'700'}" label-width='0' input-align='center'
				:disabled="true">
			</u-field>
		</view>

		<!-- 填写提现金额 -->
		<view class="top-box">
			<text>{{$t('withdraw-cash.withdraw-cash.5qzygfbgnw80')}}</text>
			<u-field v-model="money" label="" :placeholder="$t('withdraw-cash.withdraw-cash.5qzygfbgo4o0')" :border-bottom='false'
				:field-style="{'font-size':'1.5rem','font-weight':'900'}" label-width='0' input-align='center'>
			</u-field>
		</view>
		<!-- 注意文本 -->
		<view class="tips">{{$t('withdraw-cash.withdraw-cash.5qzygfbgoa80')}}</view>

		<!-- 银行卡 -->
		<view class="bank-card">
			<u-cell-group :border='false'>
				<u-cell-item :icon="icon" title="**** 4307" :border-bottom='false' :border-top='false'
					arrow-direction='dowm'></u-cell-item>
			</u-cell-group>
		</view>

		<!-- 确定按钮 -->
		<view class="bottom-btn">
			<u-button class="btn" :hair-line='false' @click='takeCash'>{{$t('withdraw-cash.withdraw-cash.5qzygfbgofk0')}}</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '', //可用资金
				money: '', //提现金额
				icon: '../../../static/fonts/Group 175.png'
			};
		},
		methods: {
			//提现按钮事件
			takeCash() {
				uni.navigateTo({
					url: '/pages/my-account/withdraw-cash/cash-success/cash-success'
				})
			}
		}
	}
</script>

<style lang="scss">
	.top-box1 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid #EEEEEE;
		width: 90%;
		height: 7rem;
		margin: 1rem auto;
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

	.tips {
		width: 100%;
		text-align: center;
		margin: 0.5rem 0 2rem 0;
		color: #757575;
		font-size: 0.8rem;
	}

	.bank-card {
		height: 4.4rem;
		margin: 1rem;
		border-radius: 1rem;
		border: 1px solid #efefef;
		display: flex;
		align-items: center;
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