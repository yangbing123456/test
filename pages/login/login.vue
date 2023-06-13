<template>
	<view class="df fdc aic jcc">
		<!-- 切换语言 -->
		<view class="changeLang df aic jce">
			<text class="changeLanguage df aic jcc">
				{{$t('login.login.5qzx4k4llao0')}}
			</text>
		</view>
		<!-- 背景图 -->
		<view class="banner">
			<image class="img" src="../../static/background/Group.png" alt="" />
		</view>
		<!-- Apple注册 -->
		<view class="btn">
			<image class="img1" src="../../static/fonts/fonts-login/apple.svg" mode=""></image>
			<p class="black">{{$t('login.login.5qzx4k4lmrk0')}}</p>
		</view>
		<!-- Google注册 -->
		<view class="btn google">
			<image class="img1" src="../../static/fonts/fonts-login/google.svg" mode=""></image>
			<text class="text">{{$t('login.login.5qzx4k4ln7s0')}}</text>
		</view>
		<!-- Facebook注册 -->
		<view class="btn facebook">
			<image class="img1" src="../../static/fonts/fonts-login/facebook.svg" mode=""></image>
			<text class="text">{{$t('login.login.5qzx4k4lnew0')}}</text>
		</view>
		<!-- email注册 -->
		<view class="btn email" @click="goRegister">
			<image class="img1" src="../../static/fonts/fonts-login/email.svg" mode=""></image>
			<text class="text">{{$t('login.login.5qzx4k4lnk80')}}</text>
		</view>
		<!-- 有账户登录 -->
		<view class="black df jcc">
			{{$t('login.login.5qzx4k4lnq40')}}
			<text class="sign" @click="login">{{$t('login.login.5qzx4k4lnvo0')}}</text>
		</view>
		<!-- 解释文本 -->
		<view class="desc mt20">
			<text class="df jcc">{{$t('login.login.5qzx4k4lo5o0')}}<text
					class="privacy">{{$t('login.login.5qzx4k4lock0')}}</text></text>
			<text class="df jcc">{{$t('login.login.5qzx4k4lohw0')}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			goRegister() {
				uni.navigateTo({
					url: "/pages/register/register"
				})
			},
			login() {
				uni.navigateTo({
					url: '/pages/login/RealLogin/RealLogin'
				})
			}
		}

	}
</script>

<style scoped lang="scss">
	.changeLang {
		width: 100%;
		height: 88rpx;
		font-size: 28rpx;
		color: #757575;
	}

	.changeLanguage {
		min-width: 176rpx;
		height: 64rpx;
		border-radius: 64rpx;
		border: 1px solid #EFEFEF;
		margin-right: 1rem;
	}

	.banner {
		width: 686rpx;
		height: 610rpx;
	}

	.img {
		width: 100%;
		height: 100%;
	}

	.btn {
		border: 1px solid #EFEFEF;
		width: 686rpx;
		height: 112rpx;
		border-radius: 32rpx;
		margin-bottom: 16rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.text {
		color: #fff;
	}

	.google {
		background-color: #f75555;
	}

	.facebook {
		background-color: #537BBC;
	}

	.email {
		background-color: #12d18e;
	}


	.desc {
		font-size: 24rpx;
		color: #9d9e9e;
	}

	.img1 {
		width: 40rpx;
		height: 40rpx;
		position: absolute;
		top: 32rpx;
		left: 48rpx;
		mask-repeat: no-repeat;
	}
</style>