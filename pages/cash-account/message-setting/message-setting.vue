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
						name: '订阅通知',
						value: '',
						id: 1,
						icon: '../../../static/fonts/Bookmark3.png'
					},
					{
						name: '收件箱',
						value: '',
						id: 2,
						icon: '../../../static/fonts/Message37.png'
					},
					{
						name: '我的请求',
						value: '',
						id: 3,
						icon: '../../../static/fonts/DocumentUpload2.png'
					},
					{
						name: '所有新闻',
						value: '',
						id: 4,
						icon: '../../../static/fonts/Sun2.png'
					},
				]
			}
		},
		methods: {
			changeEventHandler(item) {
				if (item.name == '订阅通知') {
					uni.navigateTo({
						url: '/pages/cash-account/message-setting/subscription-notification/subscription-notification'
					})
				} else if (item.name == '收件箱') {
					uni.navigateTo({
						url: '/pages/cash-account/message-setting/inbox/inbox'
					})
				} else if (item.name == '我的请求') {
					uni.navigateTo({
						url: '/pages/cash-account/message-setting/my-request/my-request'
					})
				} else if (item.name == '所有新闻') {
					uni.navigateTo({
						url: '/pages/cash-account/message-setting/all-news/all-news'
					})
				}
			}
		}
	}
</script>

<style lang="scss">

</style>