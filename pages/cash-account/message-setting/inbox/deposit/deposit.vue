<template>
	<view>
		<view class="topbox">
			<image src='../../../../../static/fonts/success.png' style="width: 120px;height: 120px;"></image>
			<text style="color: #12D18E;">处理完成</text>
		</view>

		<u-cell-group class="cellgroup">
			<u-cell-item :title="item.title" :value="item.value" :arrow='false' v-for="item in dataArr"
				:key='item.title' :border-bottom='false' :border-top='false'
				:value-style="{'color':item.color,'font-weight':'800'}" :title-style="{'color':'#616161'}">
				<u-icon slot="right-icon" size="32" :name="item.name" color='#12D18E'></u-icon>
			</u-cell-item>
		</u-cell-group>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataArr: [{
						title: '货币',
						value: 'USD',
						name: '',
						color: '#212121'
					},
					{
						title: '数量',
						value: '+$1,000.00',
						name: '',
						color: '#212121'
					},
					{
						title: '付款详情',
						value: '**** 4307',
						name: '',
						color: '#12D18E'
					},
					{
						title: '订单ID',
						value: '26479453819591',
						name: 'file-text',
						color: '#212121'
					},
					{
						title: '订单时间',
						value: '2023/4/23 00:53',
						name: '',
						color: '#212121'
					},
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.topbox {
		min-height: 9.375rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 1rem;
	}

	.cellgroup {
		padding: 0 1rem;
	}
</style>