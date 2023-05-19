<template>
	<view>
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
				dataArr: [{
						name: '资金明细',
						id: 1
					},
					{
						name: '交易历史',
						id: 2
					},
					{
						name: '历史订单',
						id: 3
					},
				]
			}
		},
		methods: {
			eventChangeHandler(item) {
				if (item.name == '资金明细') {
					uni.navigateTo({
						url: '/pages/account-manage/bill/details-funds/details-funds'
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