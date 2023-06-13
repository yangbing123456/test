<template>
	<view class="df all fdc">
		<!-- 最上层注册和语言切换，后续可以抽历程公共组件 -->
		<view class="top df aic jcsb">
			<view class="df aic">
				<u-icon @click="goBack" name="arrow-leftward"></u-icon>
				<text class="fz18 fwb ml8">{{$t('personInfo.personInfo.5qzx7hnlw2k0')}}</text>
			</view>
			<text class="changeLanguage fz14 gray df aic  jcc">{{$t('personInfo.personInfo.5qzx7hnlx0o0')}}</text>
		</view>

		<!-- 欢迎注册 -->
		<view class="welcome fz20 mt35">
			{{$t('personInfo.personInfo.5qzx7hnlx7g0')}}
		</view>
		<text class="desc mt16 fz12">
			{{$t('personInfo.personInfo.5qzx7hnlxao0')}}
			<text class="red">{{$t('personInfo.personInfo.5qzx7hnlxds0')}}</text>。
			{{$t('personInfo.personInfo.5qzx7hnlxo00')}}
			<text class="green">{{$t('personInfo.personInfo.5qzx7hnlxr40')}}</text>，
			{{$t('personInfo.personInfo.5qzx913h37s0')}}
		</text>

		<!-- 国籍和出生地选择，下拉框 -->
		<view class="country df fdc aic jcc">
			<view class="liveConutry df aic jcsb" v-for="item in dataArr" :key="item.id">
				<view class="df aic">
					<image class="img" :src="item.countryIcon"></image>
					<view class="title df fdc">
						<text class="fz12 color9d9e lh20">{{item.title}}</text>
						<text>{{item.label}}</text>
					</view>
				</view>
				<view class="box">
					<image class="img-down" :src="item.rightIcon" mode=""></image>
				</view>
			</view>

			<!-- <view class="liveConutry df aic jcsb">
				<view class="df aic">
					<image class="img" src="../../static/fonts/hk.svg"></image>
					<view class="title df fdc">
						<text class="fz12 color9d9e lh20">{{$t('personInfo.personInfo.5qzx7hnlxts0')}}</text>
						<text>{{$t('personInfo.personInfo.5qzx7hnlxwg0')}}</text>
					</view>
				</view>
				<view class="box">
					<image class="img-down" src="../../static/fonts/down.svg" mode=""></image>
				</view>
			</view> -->

			<!-- <view class="liveConutry df jcsb">
				<view class="df aic">
					<image class="img" src="../../static/fonts/hk.svg"></image>
					<view class="title df fdc">
						<text class="fz12 color9d9e lh20">{{$t('personInfo.personInfo.5qzx7hnlxts0')}}</text>
						<text>{{$t('personInfo.personInfo.5qzx7hnlxwg0')}}</text>
					</view>
				</view>
				<view class="box">
					<image class="img-down" src="../../static/fonts/down.svg" mode=""></image>
				</view>
			</view> -->
		</view>

		<!-- 单选框，我不是美国纳税居民 -->
		<view class="radio df aic jcs">
			<image @click="disabled= !disabled" class="radio-icon" :src="disabled==true ? src1 : src2" mode=""></image>
			<text @click="disabled= !disabled">{{$t('personInfo.personInfo.5qzx7hnlxz00')}}</text>
		</view>

		<!-- 继续按钮 -->
		<view class="box1 df aic jcc ">
			<button :disabled="disabled" class="btn df jcc aic mt64"
				@click="goInvestigate">{{$t('personInfo.personInfo.5qzx7hnly280')}}</button>
		</view>

		<view class="text black df jcc">
			{{$t('personInfo.personInfo.5qzx7hnly4w0')}}
			<text class="sign" @click="login">{{$t('login.login.5qzx4k4lnvo0')}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				disabled: true, //复选框的值
				src1: require('@/static/fonts/radio.svg'), //这两个图标是复选款的
				src2: require('@/static/fonts/dagou.svg'),
				number: 1, //传入一个值 给子页面   子页面通过这个值来判断进度条的样式
				//中间国家数组
				dataArr: [{
						id: 1,
						countryIcon: '../../static/fonts/hk.svg',
						title: this.$t('personInfo.personInfo.5qzx7hnlxts0'),
						label: this.$t('personInfo.personInfo.5qzx7hnlxwg0'),
						rightIcon: '../../static/fonts/down.svg',
					},
					{
						id: 2,
						countryIcon: '../../static/fonts/hk.svg',
						title: this.$t('personInfo.personInfo.5qzx7hnlxts0'),
						label: this.$t('personInfo.personInfo.5qzx7hnlxwg0'),
						rightIcon: '../../static/fonts/down.svg',
					},
					{
						id: 3,
						countryIcon: '../../static/fonts/hk.svg',
						title: this.$t('personInfo.personInfo.5qzx7hnlxts0'),
						label: this.$t('personInfo.personInfo.5qzx7hnlxwg0'),
						rightIcon: '../../static/fonts/down.svg',
					}
				]
			};
		},
		methods: {
			// 点击返回上一页
			goBack() {
				uni.navigateBack(-1)
			},
			login() {
				uni.navigateTo({
					url: '/pages/login/RealLogin/RealLogin'
				})
			},

			goInvestigate() {
				uni.navigateTo({
					url: '/pages/investigate/investigate?data=' + this.number
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.changeLanguage {
		min-width: 176rpx;
		height: 64rpx;
		border-radius: 64rpx;
		border: 1px solid #EFEFEF;
		// margin-right: 1rem;
	}

	.desc {
		color: #9d9e9e;
		line-height: 40rpx;
		margin-bottom: 60rpx;
	}

	.red {
		color: #f75555;
	}

	.green {
		color: #12d18e;
	}

	// 图标的样式
	.img {
		width: 64rpx;
		height: 64rpx;
		border-radius: 50%;
		margin-right: 30rpx;
	}

	.img-down {
		width: 30rpx;
		height: 30rpx;
		mask-repeat: no-repeat;
	}

	.liveConutry {
		border: 1px solid #EFEFEF;
		width: 100%;
		height: 140rpx;
		border-radius: 32rpx;
		margin: 0 1rem;
		padding: 0 48rpx;
		margin-bottom: 32rpx;
	}

	.color9d9e {
		color: #9d9e9e;
	}

	.lh20 {
		line-height: 40rpx;
	}

	.radio {
		margin-left: 40rpx;
	}

	.radio-icon {
		width: 48rpx;
		height: 48rpx;
		margin-right: 20rpx;
	}

	.btn {
		width: 686rpx;
		height: 116rpx;
		border-radius: 200rpx;
		background: #12d18e;
		font-size: 32rpx;
		color: white;
		font-weight: bold;

		&::after {
			border: none;
		}
	}

	.box1 {
		width: 100%;
	}

	.text {
		margin-top: 40rpx;
	}
</style>