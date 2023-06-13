<template>
	<view class="all">
		<Pagination :number1='this.num'></Pagination>
		<view class="df aic jcc fdc">
			<text class="question fwb mt16 fz16">{{$t('investigate.investigate9.5qzxezl8nmw0')}}</text>
			<text class="next">{{$t('investigate.investigate9.5qzxezl8omo0')}}</text>
		</view>
		<!-- 选项 -->
		<view class="box df fdc aic jcc fz14 mt50">
			<view v-for="item in data" :key="item" @click="confirm" class="df aic jcs option">{{item}}
				<image class="img" src="#" mode="">
				</image>
			</view>
		</view>
		<!-- 确定按钮 -->
		<view class="box df aic jcc">
			<view class="btn df jcc aic" @click="goFinish">{{$t('investigate.investigate9.5qzxezl8ow00')}}</view>
		</view>
	</view>
</template>

<script>
	// 引入公共组件
	import Pagination from '@/common/pagination.vue'
	export default {
		components: {
			Pagination
		},
		data() {
			return {
				num: '',
				data: [this.$t('investigate.investigate9.5qzxezl8p440'), this.$t('investigate.investigate9.5qzxezl8pbs0')]
			}
		},
		//接收父传来的值
		onLoad(data) {
			this.num = data.data
		},
		methods: {
			confirm() {

			},
			goFinish() {
				uni.navigateTo({
					url: '/pages/finish/finish'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.question {
		text-align: center;
	}

	.btn {
		width: 590rpx;
		height: 116rpx;
		border-radius: 200rpx;
		background: #12d18e;
		font-size: 32rpx;
		color: white;
		font-weight: bold;
		margin-top: 200rpx;
	}

	.box {
		width: 100%;
	}

	.fwb,
	.next {
		text-align: center;
	}
</style>