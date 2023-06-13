<template>
	<view class="all page-selfie df fdc  jcc">
		<!-- 关闭图标 -->
		<view class="close df aic jce">
			<image class="wh24" src="../../static/fonts/Close.svg" mode=""></image>
		</view>

		<!-- 拍一段自拍视频文本 -->
		<view class="welcome fz20 md16 fwb">
			{{$t('selfie.selfie.5qzxszbnauo0')}}
		</view>
		<view class="fz12 nineD mb50">{{$t('selfie.selfie.5qzxszbnchc0')}}</view>

		<!-- 下方拍身份证和自拍 -->
		<view class="idCard df  mb41">
			<view class="idCard-img df aic jcc">
				<image class="card" src="../../static/fonts/idcard2.svg" mode=""></image>
			</view>
			<view class="desc">
				<p class="fz16 twoOne fwb mb10">{{$t('selfie.selfie.5qzxszbncx80')}}</p>
				<p class="fz12 nineD">{{$t('selfie.selfie.5qzxszbnd7s0')}}</p>
			</view>
		</view>

		<view class="idCard df">
			<view class="idCard-img df aic jcc">
				<image class="card" src="../../static/fonts/Frame.svg" mode=""></image>
			</view>
			<view class="desc">
				<p class="fz16 twoOne fwb mb10">{{$t('selfie.selfie.5qzxszbndhs0')}}</p>
				<p class="fz12 nineD">{{$t('selfie.selfie.5qzxszbndpc0')}}</p>
			</view>
		</view>

		<!-- 描述信息和继续按钮 -->
		<view class="desc2 fz12 gary">
			<p class="contant">{{$t('selfie.selfie.5qzxszbndw00')}}<text
					class="sign">{{$t('selfie.selfie.5qzxszbne0w0')}}</text>{{$t('selfie.selfie.5qzxszbnfkc0')}}<text
					class="sign">{{$t('selfie.selfie.5qzxszbnfw00')}}</text></p>
		</view>

		<!-- 继续按钮 -->
		<view class="box df aic jcc">
			<view class="btn df jcc aic mt20" @click="goNext">{{$t('selfie.selfie.5qzxszbng1o0')}}</view>
		</view>
		<p class="fz12 nineD df aic jcc mt16">{{$t('selfie.selfie.5qzxszbng7k0')}} Sumsub
			{{$t('selfie.selfie.5qzxszbngd80')}}
		</p>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			goNext() {
				uni.navigateTo({
					url: '/pages/select/select'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-selfie {
		width: 100%;
	}

	.close {
		width: 100%;
		height: 88rpx;
	}

	.contant {
		text-align: center;
	}

	.desc {
		width: 100%;
		border-bottom: 1px solid #EEEEEE;
		padding-bottom: 1rem;
	}

	.desc2 {
		margin-top: 300rpx;
	}

	.idCard-img {
		width: 96rpx;
		height: 96rpx;
		border-radius: 50%;
		margin-right: 32rpx;
		background: url('../../static/fonts/idCard-bg.svg') repeat fixed center;
	}

	.card {
		width: 56rpx;
		height: 56rpx;
	}

	.btn {
		width: 343px;
		height: 58px;
		border-radius: 100px;
		background: #12d18e;
		font-size: 16px;
		color: white;
		font-weight: bold;
	}

	.box {
		width: 100%;
	}
</style>