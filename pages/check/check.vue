<template>
	<view>
		<view class="container df fdc aic jcc">
			<image class="img" src="../../static/fonts/check.svg" mode=""></image>
			<p class="fwb fz16">{{$t('check.check.5qzxsk7izhk0')}}</p>
			<p class="fwb fz16">{{$t('check.check.5qzxsk7j0yc0')}}</p>
		</view>
		<!-- 5秒倒计时 -->
		<view class="df aic jcc mt64">
			<!-- <u-loading-icon></u-loading-icon> -->
			<u-count-to :start-val="3" :end-val="0" :duration="1000" @end="goNext" :useEasing="false"></u-count-to>
		</view>
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
					url: '/pages/selfie/selfie'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.img {
		width: 176rpx;
		height: 176rpx;
		margin-top: 400rpx;
		margin-bottom: 96rpx;
	}
</style>