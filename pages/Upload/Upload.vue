<template>
	<view class="page-Upload">
		<view class="head df aic jcsb">
			<image class="wh24" src="../../static/fonts/refresh.svg" mode=""></image>
			<image @click="goSelect" class="wh24" src="../../static/fonts/Close.svg" mode=""></image>
		</view>
		<!-- 用户拍摄照片 -->
		<view class="pic fdc df aic jcc">
			<image class="pic-img" src="../../static/fonts/picture-bg.svg" mode=""></image>
			<p class="fz18 passport">{{$t('Upload.Upload.5qzxumbbths0')}}</p>
			<p class="fz14 nineD decoration">{{$t('Upload.Upload.5qzxumbbuzo0')}}</p>
		</view>
		<!-- 两个按钮 -->
		<view class="btn df jcsb">
			<view @click="photograph" class="btn-left fwb df aic jcc">{{$t('Upload.Upload.5qzxumbbvb40')}}</view>
			<view @click="goNext" class="btn-right fwb df aic jcc">{{$t('Upload.Upload.5qzxumbbvgs0')}}</view>
		</view>
		<p class="fz12 nineD df aic jcc mt16">{{$t('Upload.Upload.5qzxumbbvlo0')}} Sumsub
			{{$t('Upload.Upload.5qzxumbbvqo0')}}
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
					url: '/pages/Upload/btnDisabled'
				})
			},
			goSelect() {
				uni.navigateTo({
					url: '/pages/select/select'
				})
			},
			photograph() {
				// 点击打开摄像头拍照，或者从相册中选取
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //album 从相册选图，camera 使用相机
					success: function(res) {
						console.log(JSON.stringify(res.tempFilePaths)); //拍照图片的路径
					}
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.decoration {
		margin: 0 2rem;
	}

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
		margin-top: 140rpx;
		padding: 0 32rpx;
	}

	.btn-left {
		width: 327rpx;
		height: 116rpx;
		border-radius: 200rpx;
		background: rgba(18, 209, 142, 0.1);
		color: #12d18e;
	}

	.btn-right {
		width: 327rpx;
		height: 116rpx;
		border-radius: 200rpx;
		background: #12d18e;
		color: #fff;
	}
</style>