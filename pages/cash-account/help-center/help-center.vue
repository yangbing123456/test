<template>
	<view>
		<u-cell-group :border='false'>
			<u-cell-item :icon="item.icon" :title="item.name" :value="item.value" v-for='item in dataArr' :key='item.id'
				:border-bottom='false' :border-top='false' @click='changeEventHandler(item)'
				:title-style="{'color':'#212121'}"></u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataArr: [{
						name: '学习如何交易',
						value: '',
						id: 1,
						icon: '../../../static/fonts/Education.png'
					},
					{
						name: '在线客服',
						value: '',
						id: 2,
						icon: '../../../static/fonts/Headphon2.png'
					},
					{
						name: '联系我们',
						value: '',
						id: 3,
						icon: '../../../static/fonts/Calling1.png'
					},
					{
						name: '留下反馈',
						value: '',
						id: 4,
						icon: '../../../static/fonts/Happy2.png'
					},
					{
						name: '常见问题',
						value: '',
						id: 5,
						icon: '../../../static/fonts/EditSquare.png'
					},
				]
			}
		},
		methods: {
			changeEventHandler(item) {
				if (item.name == '学习如何交易') {
					uni.navigateTo({
						url: '/pages/cash-account/help-center/learn-how-to-trade/learn-how-to-trade'
					})
				} else if (item.name == '在线客服') {
					uni.navigateTo({
						url: '/pages/cash-account/help-center/online-customer/online-customer'
					})
				} else if (item.name == '联系我们') {
					uni.navigateTo({
						url: '/pages/cash-account/help-center/contact-us/contact-us'
					})
				} else if (item.name == '留下反馈') {
					uni.navigateTo({
						url: '/pages/cash-account/help-center/leave-feedback/leave-feedback'
					})
				}
			}
		}
	}
</script>

<style>

</style>