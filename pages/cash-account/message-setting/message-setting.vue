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
				//单元格数组
				dataArr: [{
						name: this.$t('message-setting.message-setting.5qzz90njz780'),
						value: '',
						id: 1,
						icon: '../../../static/fonts/Bookmark3.png'
					},
					{
						name: this.$t('message-setting.message-setting.5qzz90nk0m00'),
						value: '',
						id: 2,
						icon: '../../../static/fonts/Message37.png'
					},
					{
						name: this.$t('message-setting.message-setting.5qzz90nk4n00'),
						value: '',
						id: 3,
						icon: '../../../static/fonts/DocumentUpload2.png'
					},
					{
						name: this.$t('message-setting.message-setting.5qzz90nk4zw0'),
						value: '',
						id: 4,
						icon: '../../../static/fonts/Sun2.png'
					},
				],
				value: '' //随机数，用来判断收件箱是否有数据
			}
		},
		methods: {
			changeEventHandler(item) {
				if (item.name == this.$t('message-setting.message-setting.5qzz90njz780')) {
					uni.navigateTo({
						url: '/pages/cash-account/message-setting/subscription-notification/subscription-notification'
					})
				} else if (item.name == this.$t('message-setting.message-setting.5qzz90nk0m00')) {
					this.value = Math.floor(Math.random() * 10)
					uni.navigateTo({
						url: '/pages/cash-account/message-setting/inbox/inbox?status=' + this.value
					})
				} else if (item.name == this.$t('message-setting.message-setting.5qzz90nk4n00')) {
					uni.navigateTo({
						url: '/pages/cash-account/message-setting/my-request/my-request'
					})
				} else if (item.name == this.$t('message-setting.message-setting.5qzz90nk4zw0')) {
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