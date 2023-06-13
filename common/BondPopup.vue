<template>
	<!-- 保证金弹窗组件 -->
	<u-popup :show="show1" :round="10" mode="bottom" @close="close1" @open="open1">
		<view class="bond-popup df fdc aic jcsb">
			<view class="df aic fdc jcc">
				<p class="fz18 twoOne md16">保证金</p>
				<p class="fz14 nineD">开始交易所需金额</p>
			</view>

		</view>
		<button class="btn-ok df aic jcc">好的</button>
	</u-popup>
</template>

<script>
	export default {
		data() {
			return {
				// 保证金弹窗
				show1: false,
			}
		},
		methods: {
			// 保证金弹窗
			open1() {
				// console.log('open');
			},
			close1() {
				this.show1 = false
				// console.log('close');
			},
			// 点击打开弹窗
			openBond() {
				this.show1 = true
				this.open1()
			},
		}
	}
</script>

<style scoped lang="scss">
	.bond-popup {
		height: 20rem;
		padding: 56rpx 0 40rpx 0;
	}

	.btn-ok {
		width: 686rpx;
		height: 116rpx;
		border-radius: 200rpx;
		color: #fff;
		background-color: #12d18e;
		border: none;
		font-size: 16px;
		position: absolute;
		bottom: 1rem;
	}
</style>