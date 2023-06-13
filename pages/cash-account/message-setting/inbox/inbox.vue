<template>
	<view class="bigbox">
		<!-- 分析&&通知选项卡 -->
		<u-tabs-swiper ref="tabs" :list="list" :is-scroll="false" :current="current" active-color="#12D18E"
			inactive-color="#9D9E9E" @change="changeTabHandler" bar-width='300'></u-tabs-swiper>

		<!-- 分析 -->
		<view v-if='current == 0'>
			<!-- 空 -->
			<u-empty :text="$t('inbox.inbox.5qzzaud71dw0')" mode="list" v-if='bool == false'></u-empty>
			<!-- 分析有内容 -->
			<view class="small-box" v-for="item in todayData" :key='item.id' v-if='bool == true'>
				<text class="text">{{item.time}}</text>
				<view v-for='resitem in item.cell' :key='resitem.id' class="cellboxopen"
					@click="changeeventHandler1(resitem)">
					<view class="left-box">
						<image class="first-box" :src='resitem.icon' />
						<view class="top-small-box">
							<view>
								<text class="titlename1">{{resitem.name}}</text>
								<text class="accountname1">{{resitem.account}}</text>
							</view>
							<text style="color: #9D9E9E;font-size: 0.7rem;">{{resitem.label}}</text>
						</view>
					</view>

					<view>
						<view class="boxbottom">
							<view class="bottombox-bottom">
							</view>
							<view v-if='resitem.bool' class="nextbottombox">>
							</view>
						</view>
					</view>
				</view>
			</view>

		</view>
		<!-- 通知 -->
		<view v-if='current == 1'>
			<view class="small-box" v-for="item in todayArr" :key='item.id'>
				<text class="text">{{item.time}}</text>
				<view v-for='resitem in item.cell' :key='resitem.id' class="cellboxopen"
					@click="changeeventHandler(resitem)">
					<view class="left-box">
						<image class="first-box" :src='resitem.icon' />
						<view class="top-small-box">
							<view>
								<text class="titlename">{{resitem.name}}</text>
								<text class="accountname">{{resitem.account}}</text>
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
					name: this.$t('inbox.inbox.5qzzaud73hg0')
				}, {
					name: this.$t('inbox.inbox.5qzzaud73ug0')
				}],
				// 分析数组
				todayData: [{
					time: this.$t('inbox.inbox.5qzzaud746k0'),
					cell: [{
							name: this.$t('inbox.inbox.5r05509do5s0') + ':',
							label: '09:24',
							account: this.$t('inbox.inbox.5qzzaud74fw0'),
							icon: '../../../../static/fonts/Group220.png',
							bool: true,
							id: 1,
							// status: '16:19',
							// statusvalue: '+$60.38',
							// bool: true,
							// color: '#12D18E',
						},
						{
							name: this.$t('inbox.inbox.5r05509do5s0') + ':',
							label: '15:24',
							account: this.$t('inbox.inbox.5qzzaud74rk0'),
							icon: '../../../../static/fonts/Group222.png',
							bool: true,
							id: 2,
						},
					],
					id: 1
				}, ],

				// 通知数组
				todayArr: [{
						time: '2023/4/10',
						cell: [{
								name: this.$t('inbox.inbox.5r052lwjw3s0') + '3.4 TSLA',
								label: this.$t('inbox.inbox.5qzzaud752s0'),
								account: this.$t('inbox.inbox.5qzzaud758w0'),
								icon: '../../../../static/fonts/Group220.png',
								id: 1,
								status: '16:19',
								statusvalue: '+$60.38',
								bool: true,
								color: '#12D18E',
							},
							{
								name: this.$t('inbox.inbox.5r052lwjxg00') + '3,648 Copper',
								label: this.$t('inbox.inbox.5qzzaud75e80'),
								account: this.$t('inbox.inbox.5qzzaud758w0'),
								icon: '../../../../static/fonts/Group222.png',
								id: 2,
								status: '16:19',
								statusvalue: '+$60.38',
								bool: true,
								color: '#F75555',
							},
						],
						id: 1
					},
					{
						time: '2023/4/3',
						cell: [{
								name: this.$t('inbox.inbox.5r052lwjw3s0') + '3.4 TSLA',
								label: this.$t('inbox.inbox.5qzzaud752s0'),
								account: this.$t('inbox.inbox.5qzzaud758w0'),
								icon: '../../../../static/fonts/Group218.png',
								id: 1,
								status: '16:19',
								statusvalue: '+$60.38',
								bool: true,
								color: '#F75555'
							},
							{
								name: this.$t('inbox.inbox.5r052lwjxg00') + '3,648 Copper',
								label: this.$t('inbox.inbox.5qzzaud75e80'),
								account: this.$t('inbox.inbox.5qzzaud758w0'),
								icon: '../../../../static/fonts/Group220.png',
								id: 2,
								status: '16:19',
								statusvalue: '+$60.38',
								bool: true,
								color: '#F75555'
							},
							{
								name: this.$t('inbox.inbox.5qzzaud75ko0'),
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
								name: this.$t('inbox.inbox.5r052lwjw3s0') + '3.4 TSLA',
								label: this.$t('inbox.inbox.5qzzaud752s0'),
								account: this.$t('inbox.inbox.5qzzaud758w0'),
								icon: '../../../../static/fonts/Group222.png',
								id: 1,
								status: '16:19',
								statusvalue: '+$60.38',
								bool: true,
								color: '#F75555'
							},
							{
								name: this.$t('inbox.inbox.5r052lwjxg00') + '3,648 Copper',
								label: this.$t('inbox.inbox.5qzzaud75e80'),
								account: this.$t('inbox.inbox.5qzzaud758w0'),
								icon: '../../../../static/fonts/Group220.png',
								id: 2,
								status: '16:19',
								statusvalue: '+$60.38',
								bool: true,
								color: '#F75555'
							},
							{
								name: this.$t('inbox.inbox.5r051jhx1d80'),
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
				value: '', //随机数，用来模拟分析有无数据
				bool: false,
			}
		},
		//接收路由参数
		onLoad(data) {
			this.value = data.status
			console.log(this.value)
			if (this.value > 2) {
				this.bool = true
			} else {
				this.bool = false
			}
		},
		methods: {
			//tab激活状态
			changeTabHandler(index) {
				this.current = index
			},
			// 通知里的点击单元格事件
			changeeventHandler(item) {
				console.log(item)
				if (item.name.includes(this.$t('inbox.inbox.5qzzaud75ug0'))) {
					uni.navigateTo({
						url: '/pages/cash-account/message-setting/inbox/deposit/deposit'
					})
				} else if (item.account == this.$t('inbox.inbox.5qzzaud758w0')) {
					uni.navigateTo({
						url: '/pages/cash-account/message-setting/inbox/completed-transaction/completed-transaction?object=' +
							JSON.stringify(item)
					})
				}
			},
			//分析里的点击单元格事件
			changeeventHandler1(item) {
				if (item.account == this.$t('inbox.inbox.5qzzaud74fw0') || item.account == this.$t(
						'inbox.inbox.5qzzaud74rk0')) {
					uni.navigateTo({
						url: '/pages/cash-account/message-setting/inbox/performance-report/performance-report'
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

	.titlename {
		color: #212121;
		font-weight: 700
	}

	.accountname {
		color: #757575;
		font-size: 11px;
		padding-left: 0.2rem;
	}

	.titlename1 {
		color: #212121;
	}

	.accountname1 {
		color: #212121;
		padding-left: 0.2rem;
	}

	.boxbottom {
		display: flex;
		justify-content: space-between;
		min-width: 3.75rem;

		.bottombox-bottom {
			display: flex;
			flex-direction: column;
			text-align: right;
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
		justify-content: space-between;
		margin: 0 1rem 1rem 1rem;
		min-height: 3rem;
		align-items: center;
	}

	.bigbox {
		height: 100%;
		width: 100%;
	}

	// .fenxi-box {
	// 	height: 100%;
	// 	width: 100%;
	// 	display: flex;
	// 	justify-content: center;
	// 	align-items: center;
	// }

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
		width: 2.8rem;
		height: 2.5rem;
		margin-right: 0.5rem;
	}

	uni-image {
		width: 0.5rem;
		height: 2.5rem;
	}

	.left-box {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 80%;
	}
</style>