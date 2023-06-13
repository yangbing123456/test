<template>
	<view>
		<div class="banner">
			<div class="account">
				<div class="left">
					<img src="@/static/fonts/user.png" alt="">
					<p class="text" @click='setting'>当前账户:模拟账户</p>
				</div>
				<div class="right">
					<img class="Headphone" src="@/static/fonts/Headphone 1.png" alt="">
					<img src="@/static/fonts/SMS 1.png" alt="">
				</div>
			</div>
			<div class="number">$229,375.25</div>
			<div class="canuseraccount">{{$t('home.index.5qz2h02ump40')}}</div>
		</div>
		<div class="certificate">
			<img src="../../static/fonts/Group7.png" alt="">
		</div>
		<div class="invest">
			<p>{{$t('home.index.5qz2h02unw00')}}</p>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			setting(){
				uni.navigateTo({
					url:'/pages/cash-account/index'
				})
			}
		}
	}
</script>

<!-- <style lang="scss">
	.banner {
		position: absolute;
		width: 375px;
		height: 220px;
		left: 0px;
		top: 0px;
		background: url('../../static/background/Group 5.png') repeat fixed center;
	}

	.account {
		width: 343px;
		height: 32px;
		display: flex;
		justify-content: space-between;
		margin-top: 50px;
		margin-left: 16px;
		align-items: center;

	}

	.left {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.text {
		font-size: 20px;
		font-weight: bold;
		color: white;
		margin-left: 10px;
	}

	.Headphone {
		margin-right: 10px;
	}

	.number {
		font-weight: bold;
		font-size: 40px;
		color: white;
		display: flex;
		justify-content: center;
		margin-top: 30px;
	}

	.canuseraccount {
		color: white;
		display: flex;
		justify-content: center;
		margin-top: 10px;
	}

	// banner下面的图片模块占位
	.certificate {
		position: absolute;
		top: 240px;
		width: 100%;
		height: 124px;
		// border: 1px solid #000;
	}
</style> -->