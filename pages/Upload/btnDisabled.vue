<template>
	<view class="page-Upload">
		<view class="head df aic jcsb">
			<image @click="goBack" class="wh24" src="../../static/fonts/refresh.svg" mode=""></image>
			<image @click="goSelect" class="wh24" src="../../static/fonts/Close.svg" mode=""></image>
		</view>

		<!-- 用户拍摄照片 -->
		<view class="pic fdc df aic jcc">
			<image class="pic-img" src="../../static/fonts/picture-bg.svg" mode=""></image>
			<p class="fz18 passport">{{$t('Upload.btnDisabled.5qzxv368nak0')}}</p>
			<u-loading></u-loading>
			<!-- <a-loading-icon></a-loading-icon> -->
		</view>

		<!-- 虚拟跳转 -->
		<u-button @click="openError" size="small">{{$t('Upload.btnDisabled.5qzxv368oz80')}}</u-button>

		<!-- 两个按钮 -->
		<view class="btn df jcsb">
			<u-button disabled class="btn-left fwb df aic jcc">{{$t('Upload.btnDisabled.5qzxv368pa00')}}</u-button>
			<u-button disabled class="btn-right fwb df aic jcc">{{$t('Upload.btnDisabled.5qzxv368pf00')}}</u-button>
		</view>
		<p class="fz12 nineD df aic jcc mt16">{{$t('Upload.btnDisabled.5qzxv368pl40')}} Sumsub
			{{$t('Upload.btnDisabled.5qzxv368ppk0')}}</p>

		<!-- 弹窗 -->
		<u-popup v-model="show" :round="10" mode="bottom" @close="close" @open="open">
			<view class="error-popup df fdc aic jcsb">
				<view class="df aic fdc jcc">
					<p class="fz18 twoOne md16">{{$t('Upload.btnDisabled.5qzxv368pu80')}}</p>
					<p class="fz14 nineD desc">{{$t('Upload.btnDisabled.5qzxv368pyo0')}}</p>
				</view>
				<button class="btn-once df aic jcc fwb"
					@click="onceMore">{{$t('Upload.btnDisabled.5qzxv368q400')}}</button>
				<p class="fz12 nineD df aic jcc">{{$t('Upload.btnDisabled.5qzxv368pl40')}} Sumsub
					{{$t('Upload.btnDisabled.5qzxv368ppk0')}}</p>
			</view>
		</u-popup>
	</view>
</template>

<script>
	// import aLoadingIcon from '../../node_modules/uview-ui/components/u-loading-icon/u-loading-icon.vue'
	export default {
		// components: {
		// 	aLoadingIcon
		// },
		data() {
			return {
				show: false,
			};
		},
		methods: {
			// 错误提示弹窗
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			},
			// 点击打开弹窗
			openError() {
				this.show = true
				this.open()
			},
			goBack() {
				uni.navigateTo({
					url: '/pages/Upload/Upload'
				})
			},
			goSelect() {
				uni.navigateTo({
					url: '/pages/select/select'
				})
			},
			// 点击再试一次，隐藏弹窗并且跳转到上传页面
			onceMore() {
				this.show = false,
					this.goBack()
			}

		}
	}
</script>

<style lang="scss" scoped>
	.head {
		width: 100%;
		height: 88rpx;
		padding: 0 20rpx 0 32rpx;
		margin-bottom: 32rpx;
	}

	.pic {
		width: 100%;
	}

	.pic-img {
		width: 400rpx;
		height: 600rpx;
	}

	.passport {
		margin: 48rpx 0 32rpx 0;
	}

	.btn {
		width: 100%;
		margin-top: 80rpx;
		padding: 0 32rpx;
	}

	.btn-left {
		width: 327rpx;
		height: 116rpx;
		border-radius: 200rpx;
		background: rgba(18, 209, 142, 0.1);
		color: #12d18e;

		&::after {
			border: none;
		}
	}

	.btn-right {
		width: 327rpx;
		height: 116rpx;
		border-radius: 200rpx;
		background: #12d18e;
		color: #fff;

		&::after {
			border: none;
		}
	}

	// 错误提示弹窗样式
	.error-popup {
		width: 100%;
		height: 520rpx;
		padding: 56rpx 0 40rpx 0;
	}

	.desc {
		padding: 0 32rpx;
	}

	.btn-once {
		width: 686rpx;
		height: 116rpx;
		border-radius: 200rpx;
		color: #fff;
		background-color: #12d18e;
		border: none;
		font-size: 16px;

		&::after {
			border: none;
		}
	}
</style>