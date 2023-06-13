<template>
	<view class="all">
		<Pagination :number1='this.num'></Pagination>
		<view class="df aic jcc fdc">
			<text class="fwb mt16 fz16">{{$t('investigate.investigate5.5qzxeptzeuo0')}}</text>
			<text class="next">{{$t('investigate.investigate5.5qzxeptzge00')}}</text>
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
				number: 6, //父传子的值
				data: [this.$t('investigate.investigate5.5qzxeptzgsc0'), this.$t('investigate.investigate5.5qzxeptzgys0'),
					this.$t('investigate.investigate5.5qzxeptzh3s0'), this.$t('investigate.investigate5.5qzxeptzh9g0'),
					this.$t('investigate.investigate5.5qzxeptzhfc0'), this.$t('investigate.investigate5.5qzxeptzhkw0'),
					this.$t('investigate.investigate5.5qzxeptzhqg0'), this.$t('investigate.investigate5.5qzxeptzhyk0'),
					this.$t('investigate.investigate5.5qzxeptzi3s0')
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
					url: '/pages/investigate/investigate6?data=' + this.number
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