<template>
	<view>
		<!-- 最上层注册和语言切换，抽离成公共组件 -->
		<view class="top df aic jcsb">
			<view class="df aic">
				<u-icon @click="goBack" name="arrow-leftward"></u-icon>
				<text class="fz18 fwb ml8">{{$t('common.pagination.5qzxas4nxn40')}}</text>
			</view>
			<text class="changeLanguage df aic jcc fz14 gray">{{$t('common.pagination.5qzxas4nz480')}}</text>
		</view>
		<!-- 分页 -->
		<view class="pages df jcsb aic">
			<text v-for="(item,index) in number" :key="item" class='active df aic jcc'
				:class="item > number1 ? 'num': item < number1 ? 'actived' : 'active'">{{item}}
			</text>
		</view>
		<!-- 动效图 -->
		<view class="df fdc jcc aic mt40">
			<view class="danamic df aic jcc">{{$t('common.pagination.5qzxas4nzg40')}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				number: [1, 2, 3, 4, 5, 6, 7, 8, 9], //页码数组
			};
		},
		//接收父亲组件传过来的值
		props: {
			number1: '',
		},
		// 子传父，本来想把数组传给父组件 看看能不能做这个分页切换效果
		created() {
			this.$emit('test', this.number)
		},
		methods: {
			// 点击返回上一页
			goBack() {
				uni.navigateBack(-1)
			},
		}
	}
</script>

<style scoped lang="scss">
	.pages {
		width: 100%;
		height: 120rpx;
	}

	.num {
		color: #757575 !important;
		border: 1px solid #EFEFEF;
		background-color: #fff !important;
	}

	// 后期可以根据页面变化修改active的样式
	.active {
		background: #12d18e;
		color: #fff;
		width: 64rpx;
		height: 64rpx;
		border-radius: 50%;
		text-align: center;
		font-size: 24rpx;
		font-weight: bold;
	}

	.actived {
		background-color: rgba(18, 209, 142, 0.1) !important;
		color: #12d18e !important;
	}

	.img {
		width: 48rpx;
		height: 48rpx;
	}

	.danamic {
		width: 240rpx;
		height: 240rpx;
		background: #ccc;
	}

	.next {
		font-size: 24rpx;
		color: #9d9e9e;
		margin-top: 16rpx;
	}
</style>