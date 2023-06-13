<template>
	<view>
		<!-- 单元格 -->
		<u-cell-group :border='false'>
			<u-cell-item :title="item.name" v-for="item in dataArr" :key='item.id' :border-bottom='false'
				:border-top='false' @click='eventChangeHandler(item)' class="cell"></u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//单元格数组
				dataArr: [{
						name: this.$t('bill.bill.5qzylk6fv0s0'),
						id: 1
					},
					{
						name: this.$t('bill.bill.5qzylk6fwcc0'),
						id: 2
					},
					{
						name: this.$t('bill.bill.5qzylk6fwko0'),
						id: 3
					},
				]
			}
		},
		methods: {
			//单元格点击事件
			eventChangeHandler(item) {
				if (item.name == this.$t('bill.bill.5qzylk6fv0s0')) {
					uni.navigateTo({
						url: '/pages/account-manage/bill/details-funds/details-funds'
					})
				} else if (item.name == this.$t('bill.bill.5qzylk6fwcc0')) {
					uni.navigateTo({
						url: '/pages/account-manage/bill/transaction-history/transaction-history'
					})
				} else if (item.name == this.$t('bill.bill.5qzylk6fwko0')) {
					uni.navigateTo({
						url: '/pages/account-manage/bill/historical-order/historical-order'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.cell {
		margin: 0.5rem 0;
	}
</style>