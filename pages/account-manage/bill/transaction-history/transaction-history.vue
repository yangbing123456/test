<template>
	<view>
		<!-- 顶部按钮 -->
		<view class="top-box">
			<u-cell-group class="cell-first-box" v-for='item in boxArr' :key='item.id'>
				<u-cell-item :title="item.name" arrow-direction='down' :border-bottom='false' :border-top='false'
					:border='false' @click='boxEventHandler(item)'>
				</u-cell-item>
			</u-cell-group>
		</view>
		<!-- 今日昨日 -->
		<view class="small-box" v-for="item in todayArr" :key='item.id'>
			<text class="text">{{item.time}}</text>
			<view v-for='resitem in item.cell' :key='resitem.id' class="cellboxopen"
				@click="changeeventHandler(resitem)">
				<view class="left-box">
					<view class="top-small-box">
						<view style="display: flex;align-items: center;">
							<text class="titlename">{{resitem.name}}</text>
							<text class="accountname"
								:style="{'background-color':resitem.accountColor}">{{resitem.account}}</text>
						</view>
						<text style="color: #9D9E9E; font-size: 0.7rem;">{{resitem.label}}</text>
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

		<!-- 全部按钮弹窗 -->
		<u-popup v-model="showModel" mode='bottom' height="300px" :mask-close-able='false' border-radius='24'>
			<view class="rate">{{$t('transaction-history.transaction-history.5qzyn81k7ww0')}}</view>

			<scroll-view scroll-y="true" @scrolltolower="onreachBottom">
				<view class="cellratebox">
					<view class="small-box1" v-for="item in dataListValue" :key='item.name'>
						<view class="left-box">
							<view class="top-small-box">
								<text style="color: #212121;">{{item.value}}</text>
							</view>
						</view>

						<view>
							<u-radio-group v-model="value" active-color='#12D18E'>
								<u-radio :name="item.value">
								</u-radio>
							</u-radio-group>
						</view>
					</view>
				</view>
			</scroll-view>

			<view class="bottom-box">
				<u-button @click="showModel = false;" :hair-line="false"
					class="yes-btn">{{$t('transaction-history.transaction-history.5qzyn81k9jw0')}}</u-button>
			</view>
		</u-popup>

		<!-- 时间分类弹窗 -->
		<u-popup v-model="timerModel" mode='bottom' height="400px" :mask-close-able='false' border-radius='24'>
			<view class="rate">{{$t('transaction-history.transaction-history.5qzyn81k9w40')}}</view>

			<view class="time-top-box">
				<text
					style="font-size: 1rem; font-weight: 600;">{{$t('transaction-history.transaction-history.5qzyn81ka280')}}</text>
				<text
					style="font-size: 10px;color: #9D9E9E;">{{$t('transaction-history.transaction-history.5qzyn81ka880')}}</text>
			</view>
			<scroll-view scroll-x="true">
				<view class="time-bottom-box">
					<u-button v-for='res in btnArr' :key="res.id" class="btn" :hair-line='false'
						:style="{'background-color':res.backgroundColor,'color':res.color}"
						@click='btnChangeHandler(res)'>{{res.time}}</u-button>
				</view>
			</scroll-view>

			<view class="time-top-box">
				<text
					style="font-size: 1rem; font-weight: 600;">{{$t('transaction-history.transaction-history.5qzyn81kags0')}}</text>
			</view>
			<view class="selftime-bottom-box">
				<u-button @click="timeFirstHandler" class="timebtn" :hair-line='false'>{{startTime}}</u-button>———
				<u-button @click="timeOverHandler" class="timebtn" :hair-line='false'>{{endTime}}</u-button>
			</view>
			<view class="bottom-box">
				<u-button @click="timerModel = false;" :hair-line="false"
					class="yes-btn">{{$t('transaction-history.transaction-history.5qzyn81k9jw0')}}</u-button>
			</view>
		</u-popup>

		<!-- 时间组件弹窗 -->
		<u-calendar v-model="timeshow" :mode="mode" @change='changeTimeHandler' toolTip='' :closeable='false'
			active-bg-color='#12D18E' range-color='#12D18E' month-arrow-color='#12D18E' year-arrow-color='#12D18E'
			range-bg-color='#e8fbf4' btn-type='success'></u-calendar>

		<!-- 右上角下载按钮弹窗 -->
		<u-popup v-model="alertBox" mode="bottom" width="500rpx" height="140px" :mask-close-able='false'
			border-radius='24'>
			<text class="delete-text">{{$t('transaction-history.transaction-history.5qzyn81kan00')}}</text>
			<view class="delete-user-btn">
				<u-button @click="alertBox = false;" :hair-line="false"
					class="quit-btn">{{$t('transaction-history.transaction-history.5qzyn81kask0')}}</u-button>
				<u-button @click="alertBox = false;" :hair-line="false"
					class="delete-btn">{{$t('transaction-history.transaction-history.5qzyn81kayg0')}}</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//与资金明细类似
				value: '',
				alertBox: false,
				startTime: '',
				endTime: '',
				timeshow: false,
				mode: 'range',
				timerModel: false,
				showModel: false,
				dataListValue: [{
						name: 1,
						value: this.$t('transaction-history.transaction-history.5qzyn81kb6c0')
					},
					{
						name: 2,
						value: this.$t('transaction-history.transaction-history.5qzyn81kbbo0')
					},
					{
						name: 3,
						value: this.$t('transaction-history.transaction-history.5qzyn81kbgw0')
					},
					{
						name: 4,
						value: this.$t('transaction-history.transaction-history.5qzyn81kbl40')
					},
					{
						name: 5,
						value: this.$t('transaction-history.transaction-history.5qzyn81kbpo0')
					},
					{
						name: 6,
						value: this.$t('transaction-history.transaction-history.5qzyn81kbu80')
					}
				],
				btnArr: [{
						time: '6' + this.$t('transaction-history.transaction-history.5r0sn0b8n3c0'),
						id: 1,
						backgroundColor: '',
						color: ''
					},
					{
						time: '12' + this.$t('transaction-history.transaction-history.5r0sn0b8n3c0'),
						id: 2,
						backgroundColor: '',
						color: ''
					},
					{
						time: '1' + this.$t('transaction-history.transaction-history.5r0skcc64ts0'),
						id: 3,
						backgroundColor: '',
						color: ''
					},
					{
						time: '3' + this.$t('transaction-history.transaction-history.5r0skcc64ts0'),
						id: 4,
						backgroundColor: '',
						color: ''
					},
					{
						time: '1' + this.$t('transaction-history.transaction-history.5r0sohtdtb00'),
						id: 5,
						backgroundColor: '',
						color: ''
					},
					{
						time: '1' + this.$t('transaction-history.transaction-history.5r0sohtdv9w0'),
						id: 6,
						backgroundColor: '',
						color: ''
					},
					{
						time: '2' + this.$t('transaction-history.transaction-history.5r0sohtdv9w0'),
						id: 7,
						backgroundColor: '',
						color: ''
					},
					{
						time: '3' + this.$t('transaction-history.transaction-history.5r0sohtdv9w0'),
						id: 8,
						backgroundColor: '',
						color: ''
					},
					{
						time: this.$t('transaction-history.transaction-history.5qzyn81kb6c0'),
						id: 9,
						backgroundColor: '',
						color: ''
					},
				],
				boxArr: [{
						name: this.$t('transaction-history.transaction-history.5qzyn81kb6c0'),
						id: 1,
					},
					{
						name: '1' + this.$t('transaction-history.transaction-history.5r0skcc64ts0'),
						id: 2,
					},
				],
				moneyArr: [{
						name: this.$t('transaction-history.transaction-history.5qzyn81kby80'),
						money: '$950.60',
						id: 1,
						color: '#212121'
					},
					{
						name: this.$t('transaction-history.transaction-history.5qzyn81kc4o0'),
						money: '$950.60',
						id: 2,
						color: '#F75555'
					},
					{
						name: this.$t('transaction-history.transaction-history.5qzyn81kc9o0'),
						money: '$0',
						id: 3,
						color: '#9D9E9E'
					},
					{
						name: this.$t('transaction-history.transaction-history.5qzyn81kce00'),
						money: '+$392.83',
						id: 4,
						color: '#212121'
					},
				],

				todayArr: [{
						time: this.$t('transaction-history.transaction-history.5qzyn81kcj40'),
						cell: [{
							name: this.$t('transaction-history.transaction-history.5qzyn81kbpo0'),
							label: this.$t('transaction-history.transaction-history.5qzyn81kcqc0'),
							account: '1',
							id: 1,
							bool: true,
							statusvalue: '+$0.01',
							color: '#F75555',
							accountColor: '#12D18E'
						}, ],
						id: 1
					},
					{
						time: this.$t('transaction-history.transaction-history.5qzyn81kcu80'),
						cell: [{
							name: this.$t('transaction-history.transaction-history.5qzyn81kbpo0'),
							label: this.$t('transaction-history.transaction-history.5qzyn81kcqc0'),
							account: '1',
							id: 1,
							bool: true,
							statusvalue: '+$0.01',
							color: '#F75555',
							accountColor: '#12D18E'
						}],
						id: 2
					},
					{
						time: '2023-05-15',
						cell: [{
								name: this.$t('transaction-history.transaction-history.5qzyn81kcys0'),
								label: this.$t('transaction-history.transaction-history.5qzyn81kcqc0'),
								account: '1',
								id: 1,
								bool: true,
								statusvalue: '+$0.01',
								color: '#12D18E',
								accountColor: '#12D18E'
							},
							{
								name: this.$t('transaction-history.transaction-history.5qzyn81kd2c0'),
								label: this.$t('transaction-history.transaction-history.5qzyn81kcqc0'),
								account: '1',
								id: 2,
								bool: true,
								statusvalue: '+$0.01',
								color: '#12D18E',
								accountColor: '#F75555'
							},
							{
								name: this.$t('transaction-history.transaction-history.5qzyn81kcys0'),
								label: this.$t('transaction-history.transaction-history.5qzyn81kcqc0'),
								account: '1',
								id: 3,
								bool: true,
								statusvalue: '+$0.01',
								color: '#12D18E',
								accountColor: '#12D18E'
							},
						],
						id: 3
					},
				],
			}
		},
		methods: {
			boxEventHandler(item) {
				if (item.name == this.$t('transaction-history.transaction-history.5qzyn81kb6c0')) {
					this.showModel = true
				} else if (item.name == '1' + this.$t('transaction-history.transaction-history.5r0skcc64ts0')) {
					this.timerModel = true
				}
			},
			//时间分类最后时间按钮样式改变事件
			btnChangeHandler(res) {
				this.btnArr.map(item => {
					if (item.id == res.id) {
						item.backgroundColor = '#12D18E'
						item.color = 'white'
					} else {
						item.backgroundColor = '#EEEEEE'
						item.color = '#757575'
					}
				})
			},
			onreachBottom() {

			},
			onNavigationBarButtonTap: function(e) {
				// console.log(JSON.stringify(e))
				this.alertBox = true
			},
			timeFirstHandler() {
				this.timeshow = true
			},
			timeOverHandler() {
				this.timeshow = true
			},
			changeTimeHandler(e) {
				this.startTime = e.startDate
				this.endTime = e.endDate
			},
			//点击单元格事件
			changeeventHandler(item) {
				if (item.name == this.$t('transaction-history.transaction-history.5qzyn81kbpo0')) {
					uni.navigateTo({
						url: '/pages/account-manage/bill/transaction-history/overnight-charge/overnight-charge?object=' +
							JSON.stringify(item)
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.cell-first-box {
		border: 1px solid #EEEEEE;
		border-radius: 0.5rem;
		overflow: hidden;
		width: 45% !important;
	}

	.time-top-box {
		/* width: 100%; */
		padding: 1rem 0;
		margin: 0 1rem;
	}

	.time-bottom-box {
		width: 100%;
		padding: 0 1rem;
		height: 2.5rem;
		display: flex;

		.btn {
			min-width: 5rem !important;
			margin-right: 1rem;
			border-radius: 2rem;
			height: 2.5rem;
			color: #757575;
			background-color: #EEEEEE;
			border: 0;
		}
	}

	.selftime-bottom-box {
		width: 100%;
		padding: 0 1rem;
		height: 2.5rem;
		display: flex;
		justify-content: space-around;

		.timebtn {
			min-width: 40% !important;
			border-radius: 2rem;
			height: 2.5rem;
			color: #757575;
			background-color: #EEEEEE;
			border: 0;
		}
	}

	.top-box {
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding: 1rem;
	}

	.rate {
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 0.5rem 0;
	}

	.cellratebox {
		width: 100%;
		padding: 0 1rem;
		height: 12.5rem;

		/* overflow-y: auto; */
		/* justify-content: flex-start; */
		.small-box1 {
			// width: 343px;
			height: 3rem;
			margin: 0 0.5rem;
			// background-color: #12D18E;
			border-radius: 1rem;
			padding: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.left-box {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				width: 70%;
			}

			.top-small-box {
				display: flex;
				flex-direction: column;
			}
		}
	}

	.bottom-box {
		width: 100%;
		position: absolute;
		align-items: center;
		margin: 0.5rem 0;
		bottom: 10px;
	}

	.yes-btn {
		width: 95%;
		margin: auto;
		background-color: #12D18E !important;
		border-radius: 6.25rem;
		color: white !important;
		border-width: 0 !important;
	}

	.delete-text {
		display: flex;
		justify-content: center;
		margin: 1rem 0;
	}

	.delete-user-btn {
		display: flex;
		justify-content: space-around;
		position: absolute;
		bottom: 10px;
		width: 100%;
	}

	.delete-btn {
		width: 40%;
		border-radius: 6.25rem;
		background-color: #12D18E !important;
		color: white !important;
		border-width: 0 !important;
	}

	.quit-btn {
		width: 40%;
		border-radius: 6.25rem;
		color: #12D18E !important;
		border-width: 0 !important;
	}



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
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 0.5rem;
		height: 0.8rem;
		color: white;
		// background-color: #12D18E;
		margin-left: 0.5rem;
		font-size: 0.6rem;
		border-radius: 0.2rem;
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
		height: 3rem;
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
		width: 2.5rem;
		height: 2.5rem;
		margin-right: 0.5rem;
	}

	.left-box {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 70%;
	}

	.delete-text {
		display: flex;
		justify-content: center;
		margin: 1rem 0;
	}

	.delete-user-btn {
		display: flex;
		justify-content: space-around;
		position: absolute;
		bottom: 10px;
		width: 100%;
	}

	.delete-btn {
		width: 40%;
		border-radius: 6.25rem;
		background-color: #12D18E !important;
		color: white !important;
		border-width: 0 !important;
	}

	.quit-btn {
		width: 40%;
		border-radius: 6.25rem;
		color: #12D18E !important;
		border-width: 0 !important;
	}
</style>