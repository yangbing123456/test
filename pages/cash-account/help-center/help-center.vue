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
						name: this.$t('help-center.help-center.5qzz72f8weo0'),
						value: '',
						id: 1,
						icon: '../../../static/fonts/Education.png'
					},
					{
						name: this.$t('help-center.help-center.5qzz72f8y100'),
						value: '',
						id: 2,
						icon: '../../../static/fonts/Headphon2.png'
					},
					{
						name: this.$t('help-center.help-center.5qzz72f8yh00'),
						value: '',
						id: 3,
						icon: '../../../static/fonts/Calling1.png'
					},
					{
						name: this.$t('help-center.help-center.5qzz72f8yoo0'),
						value: '',
						id: 4,
						icon: '../../../static/fonts/Happy2.png'
					},
					{
						name: this.$t('help-center.help-center.5qzz72f8yuc0'),
						value: '',
						id: 5,
						icon: '../../../static/fonts/EditSquare.png'
					},
				]
			}
		},
		methods: {
			changeEventHandler(item) {
				if (item.name == this.$t('help-center.help-center.5qzz72f8weo0')) {
					uni.navigateTo({
						url: '/pages/cash-account/help-center/learn-how-to-trade/learn-how-to-trade'
					})
				} else if (item.name == this.$t('help-center.help-center.5qzz72f8y100')) {
					uni.navigateTo({
						url: '/pages/cash-account/help-center/online-customer/online-customer?id=1'
					})
				} else if (item.name == this.$t('help-center.help-center.5qzz72f8yh00')) {
					uni.navigateTo({
						url: '/pages/cash-account/help-center/contact-us/contact-us'
					})
				} else if (item.name == this.$t('help-center.help-center.5qzz72f8yoo0')) {
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