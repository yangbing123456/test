<template>
	<view class="all">
		<Pagination :number1='this.num'></Pagination>
		<view class="df aic jcc fdc">
			<text class="fwb mt16 fz16">{{$t('investigate.investigate7.5qzxeu86u3s0')}}</text>
			<text class="next">{{$t('investigate.investigate7.5qzxeu86vdg0')}}</text>
		</view>
		<!-- 选项 -->
		<view class="box df fdc aic jcc fz14 mt50">
			<view v-for="item in data" :key="item" @click="goNext" class="df aic jcs option">{{item}}
				<image class="img" src="../../static/fonts/right.svg" mode="">
				</image>
			</view>
		</view>
	</view>
</template>

<script>
	// 引入公共组件
	import Pagination from '@/common/pagination.vue'
	export default {
		data() {
			return {
				num: '',
				number: 8, //父传子的值
				data: [this.$t('investigate.investigate7.5qzxeu86vno0'), '$100,000-$199,999', '$50,000-$99,999',
					'$20,000-$49,999'
				]
			}
		},
		components: {
			Pagination
		},
		//接收父传来的值
		onLoad(data) {
			this.num = data.data
		},
		methods: {
			goNext() {
				uni.navigateTo({
					url: '/pages/investigate/investigate8?data=' + this.number
				})
			}
		}
	}
</script>

<style scoped>
	.next {
		text-align: center;
	}
</style>