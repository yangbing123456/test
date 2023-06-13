<template>
	<view>
		<!-- 图片 -->
		<view class="topbox1">
			<image src="../../../../static/fonts/chahua.png" class="img"></image>
			<text class="text">{{$t('cash-success.cash-success.5qzygwefrkw0')}}</text>
		</view>
		<!-- 按钮 -->
		<view class="bottom-btn">
			<u-button class="btn" :hair-line='false'>{{$t('cash-success.cash-success.5qzygweftrg0')}}</u-button>
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
	.topbox1 {
		height: 14rem;
		margin: 8rem 1rem 2rem 1rem;
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