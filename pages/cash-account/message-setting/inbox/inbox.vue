<template>
	<view class="bigbox">
		<u-tabs-swiper ref="tabs" :list="list" :is-scroll="false" :current="current" active-color="#12D18E"
			inactive-color="#9D9E9E" @change="changeTabHandler" bar-width='300'></u-tabs-swiper>

		<view class="fenxi-box" v-if='current == 0'>
			<u-empty text="暂无消息" mode="list"></u-empty>
		</view>

		<view v-if='current == 1'>
			<view class="small-box" v-for="item in todayArr" :key='item.id'>
				<text class="text">{{item.time}}</text>
				<view v-for='resitem in item.cell' :key='resitem.id' class="cellboxopen"
					@click="changeeventHandler(resitem)">
					<view class="left-box">
						<image class="first-box" :src='resitem.icon' />
						<view class="top-small-box">
							<view>
								<text style="color: #212121;">{{resitem.name}}</text>
								<text style="color: #757575;font-size: 10px;">{{resitem.account}}</text>
							</view>
							<text :style="{'color':resitem.color,'font-size':'10px'}">{{resitem.label}}</text>
						</view>
					</view>

					<view>
						<view class="boxbottom">
							<view class="bottombox-bottom">
								<text style="font-size: 10px;color: #9D9E9E;">{{resitem.status}}</text>
								<text :style="{'color':resitem.color}">{{resitem.statusvalue}}</text>
							</view>
							<view v-if='resitem.bool' class="nextbottombox">>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0, //正确的下标
				list: [{
					name: '分析'
				}, {
					name: '通知'
				}],

				todayArr: [{
						time: '2023/4/10',
						cell: [{
								name: '已买入3.4 TSLA',
								label: '已达到止盈位',
								account: '现金账户',
								icon: '../../../../static/fonts/Group220.png',
								id: 1,
								status: '16:19',
								statusvalue: '+$60.38',
								bool: true,
								color: '#12D18E'
							},
							{
								name: '已卖出3,648 Copper',
								label: '已达到止损位',
								account: '现金账户',
								icon: '../../../../static/fonts/Group222.png',
								id: 2,
								status: '16:19',
								statusvalue: '+$60.38',
								bool: true,
								color: '#F75555'
							},
						],
						id: 1
					},
					{
						time: '2023/4/3',
						cell: [{
								name: '已买入3.4 TSLA',
								label: '已达到止盈位',
								account: '现金账户',
								icon: '../../../../static/fonts/Group218.png',
								id: 1,
								status: '16:19',
								statusvalue: '+$60.38',
								bool: true,
								color: '#F75555'
							},
							{
								name: '已卖出3,648 Copper',
								label: '已达到止损位',
								account: '现金账户',
								icon: '../../../../static/fonts/Group220.png',
								id: 2,
								status: '16:19',
								statusvalue: '+$60.38',
								bool: true,
								color: '#F75555'
							},
							{
								name: '您的保证金金额较低。请为账户存款、取消部分订单或平仓部分头寸',
								label: '',
								account: '',
								icon: '../../../../static/fonts/Group220.png',
								id: 3,
								status: '16:19',
								statusvalue: '',
								bool: false,
								color: '#F75555'
							},
						],
						id: 2
					},
					{
						time: '2023/4/1',
						cell: [{
								name: '已买入3.4 TSLA',
								label: '已达到止盈位',
								account: '现金账户',
								icon: '../../../../static/fonts/Group222.png',
								id: 1,
								status: '16:19',
								statusvalue: '+$60.38',
								bool: true,
								color: '#F75555'
							},
							{
								name: '已卖出3,648 Copper',
								label: '已达到止损位',
								account: '现金账户',
								icon: '../../../../static/fonts/Group220.png',
								id: 2,
								status: '16:19',
								statusvalue: '+$60.38',
								bool: true,
								color: '#F75555'
							},
							{
								name: '您在 软件名称 的存款已成功处理',
								label: '',
								account: '',
								icon: '../../../../static/fonts/Group222.png',
								id: 3,
								status: '16:19',
								statusvalue: '',
								bool: true,
								color: '#F75555'
							},
						],
						id: 3
					},

				],
			}
		},
		methods: {
			//tab激活状态
			changeTabHandler(index) {
				this.current = index
			},
			changeeventHandler(item) {
				if (item.name.includes('存款')) {
					uni.navigateTo({
						url: '/pages/cash-account/message-setting/inbox/deposit/deposit'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	uni-page-body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}

	.boxbottom {
		display: flex;
		justify-content: space-between;
		min-width: 3.75rem;

		.bottombox-bottom {
			display: flex;
			flex-direction: column;
			margin-right: 0.5rem;
		}

		.nextbottombox {
			display: flex;
			align-items: center;
			justify-content: center;
			color: #12D18E;
		}
	}

	.cellboxopen {
		display: flex;
		justify-content: space-around;
		margin-bottom: 1rem;
		height: 3rem;
		align-items: center;
	}

	.bigbox {
		height: 100%;
		width: 100%;
	}

	.fenxi-box {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.text {
		display: block;
		width: 100%;
		margin: 0.5rem 0 0.5rem 1rem;
		color: #9D9E9E;
	}


	.small-box {
		padding: 0;
		margin-bottom: 0.5rem;

		.top-small-box {
			display: flex;
			flex-direction: column;
			width: 100%;
		}
	}

	.first-box {
		width: 2rem;
		height: 2rem;
		margin-right: 0.5rem;
	}

	uni-image {
		width: 0.5rem;
		height: 2.4rem;
	}

	.left-box {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 70%;
	}
</style>