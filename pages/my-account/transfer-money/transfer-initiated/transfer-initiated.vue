<template>
	<view>
		<!-- 顶部图片 -->
		<view class="topbox">
			<image src="../../../../static/fonts/Frame1.png" class="img"></image>
			<text class="text">{{$t('transfer-initiated.transfer-initiated.5qzyfrqjc8g0')}}</text>
		</view>

		<!-- 中间图片 -->
		<view class="topbox1">
			<image src="../../../../static/fonts/chahua.png" class="img"></image>
			<text class="text">$10,000 {{$t('transfer-initiated.transfer-initiated.5qzyfrqjdmw0')}} {{$t('transfer-initiated.transfer-initiated.5qzyfrqjdx00')}} {{$t('transfer-initiated.transfer-initiated.5qzyfrqje380')}} {{$t('transfer-initiated.transfer-initiated.5qzyfrqje7s0')}}</text>
		</view>
		<!-- 底部按钮 -->
		<view class="bottom-btn">
			<u-button class="btn" :hair-line='false'>{{$t('transfer-initiated.transfer-initiated.5qzyfrqjed80')}}</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
	}
</script>

<style lang="scss">
	.topbox {
		height: 9rem;
		margin: 1rem;
		border-bottom: 1px solid #EEEEEE;
		padding: 1rem 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.img {
			width: 5.5rem;
			height: 5.5rem;
		}

		.text {
			display: block;
			margin-top: 1rem;
			color: #212121;
			font-size: 1.1rem;
			text-align: center;
		}
	}

	.topbox1 {
		height: 14rem;
		margin: 2rem 1rem 1rem 1rem;
		padding: 1rem 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.img {
			width: 18.9rem;
			height: 10.375rem;
		}

		.text {
			display: block;
			margin-top: 1rem;
			color: #212121;
			font-size: 1.1rem;
			text-align: center;
		}
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