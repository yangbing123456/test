<template>
	<view class="all">
		<!-- 最上层注册和语言切换，后续可以抽历程公共组件 -->
		<view class="top df aic jcsb">
			<view class="df aic">
				<u-icon @click="goBack" name="arrow-leftward"></u-icon>
				<text class="fz18 fwb ml8">{{$t('term.term.5qzxs1cwpko0')}}</text>
			</view>
			<text class="fz14 gray changeLanguage df aic jcc">{{$t('term.term.5qzxs1cws7g0')}}</text>
		</view>
		<!-- 条款政策文本 -->
		<view class="welcome fz20 mt35 md16">
			{{$t('term.term.5qzxs1cwzh80')}}
		</view>
		<view class="fz12 nineD mb30">{{$t('term.term.5qzxs1cwzwc0')}}</view>

		<!-- 表单 -->
		<view>
			<u-form labelPosition="left" :model="model1" ref="uForm">
				<u-form-item v-for="item in data" :key="item" prop="userInfo.sex" borderBottom @click="showSex = true"
					ref="item1">
					{{item}}
					<u-icon slot="right" color='#000' name="arrow-right"></u-icon>
				</u-form-item>
			</u-form>
		</view>
		<!-- 继续按钮 -->
		<view class="box df aic jcc">
			<view class="btn df jcc aic mt40" @click="goNext">{{$t('term.term.5qzxs1cx0440')}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				model1: {
					showSex: false,
					userInfo: {
						sex: '',
					},
				},
				// 政策数据
				data: ['Terms and Conditions', 'Risk Disclosure Statement', 'Order Execution Policy', 'Privacy policy',
					'Client Categorisation Policy', 'Conflicts of Interest policy'
				]
			};
		},
		methods: {
			goNext() {
				uni.navigateTo({
					url: '/pages/check/check'
				})
			},
			goBack() {
				uni.navigateBack(-1)
			},
		}
	}
</script>

<style lang="scss" lang='scss'>
	.u-border-bottom {
		border-bottom: 1px solid #ddd;
	}

	.btn {
		width: 686rpx;
		height: 116rpx;
		border-radius: 200rpx;
		background: #12d18e;
		font-size: 32rpx;
		color: white;
		font-weight: bold;
	}

	.box {
		width: 100%;
	}

	.u-form-item {
		padding: 20rpx 32rpx 20rpx 0;
	}
</style>