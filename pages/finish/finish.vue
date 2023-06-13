<template>
	<view class="page-finish all df fdc aic jcc">
		<view class="finish df fdc aic jcc">
			<image class="img" src="../../static/fonts/idcard.svg" mode=""></image>
			<p class="fz16 md16">{{$t('finish.finish.5qzxn6d8nm80')}}</p>
			<p class="fz14 gray">{{$t('finish.finish.5qzxn6d8os40')}}</p>
		</view>
		<!-- 继续按钮 -->
		<view class="btn df jcc aic mt16" @click="goUserInfo">{{$t('finish.finish.5qzxn6d8p2g0')}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			goUserInfo() {
				uni.navigateTo({
					url: '/pages/userInfo/userInfo'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.img {
		width: 176rpx;
		height: 176rpx;
		margin-bottom: 96rpx;
	}

	.page-finish {
		width: 100%;
		height: 100%;
	}

	.finish {
		margin-top: 300rpx;
	}

	.btn {
		width: 686rpx;
		height: 116rpx;
		border-radius: 200rpx;
		background: #12d18e;
		font-size: 32rpx;
		color: white;
		font-weight: bold;
		margin-top: 300rpx;
	}
</style>