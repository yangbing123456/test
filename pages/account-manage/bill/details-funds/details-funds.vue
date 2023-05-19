<template>
	<view>
		<view class="top-box">
			<u-cell-group class="cell-first-box" v-for='item in boxArr' :key='item.id'>
				<u-cell-item :title="item.name" arrow-direction='down' :border-bottom='false' :border-top='false'
					:border='false' @click='boxEventHandler(item)'>
				</u-cell-item>
			</u-cell-group>
		</view>

		<view>
			<u-cell-group :border='false' style="margin-bottom: 1rem;">
				<u-cell-item :title="result.name" :value="result.money" v-for='result in moneyArr' :key='result.id'
					:border-bottom='false' :border-top='false' :arrow='false' :value-style="{'color':result.color}"
					:title-style="{'color':'#757575'}">
				</u-cell-item>
			</u-cell-group>
		</view>


		<view v-for='res in todayArr' :key='res.id'>
			<text style="padding: 0 1rem;color: #9D9E9E;">{{res.time}}</text>
			<u-cell-group :border='false'>
				<u-cell-item :title="resitem.name" :value="resitem.money" :label='resitem.label'
					v-for='resitem in res.cell' :key='resitem.id' :border-bottom='false' :border-top='false'
					:arrow='false' :title-style="{'color':'#212121'}" :label-style="{'color':'#9D9E9E'}"
					:value-style="{'color':resitem.color}">
				</u-cell-item>
			</u-cell-group>
		</view>



		<u-popup v-model="showModel" mode='bottom' height="300px" :mask-close-able='false' border-radius='24'>
			<view class="rate">资金分类</view>

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
				<u-button @click="showModel = false;" :hair-line="false" class="yes-btn">完成</u-button>
			</view>
		</u-popup>


		<u-popup v-model="timerModel" mode='bottom' height="400px" :mask-close-able='false' border-radius='24'>
			<view class="rate">时间分类</view>

			<view class="time-top-box">
				<text style="font-size: 1rem; font-weight: 600;">最后时间</text>
				<text style="font-size: 10px;color: #9D9E9E;">手势左右滑动查看更多</text>
			</view>
			<scroll-view scroll-x="true">
				<view class="time-bottom-box">
					<u-button v-for='res in btnArr' :key="res.id" class="btn" :hair-line='false'>{{res.time}}</u-button>
				</view>
			</scroll-view>

			<view class="time-top-box">
				<text style="font-size: 1rem; font-weight: 600;">自定义</text>
			</view>
			<view class="selftime-bottom-box">
				<u-button @click="timeFirstHandler" class="timebtn" :hair-line='false'>{{startTime}}</u-button>———
				<u-button @click="timeOverHandler" class="timebtn" :hair-line='false'>{{endTime}}</u-button>
			</view>
			<view class="bottom-box">
				<u-button @click="timerModel = false;" :hair-line="false" class="yes-btn">完成</u-button>
			</view>
		</u-popup>

		<u-calendar v-model="timeshow" :mode="mode" @change='changeTimeHandler' toolTip='' :closeable='false'
			active-bg-color='#12D18E' range-bg-color='#e8fbf4' btn-type='success'></u-calendar>

		<u-popup v-model="alertBox" mode="bottom" width="500rpx" height="120px" :mask-close-able='false'
			border-radius='24'>
			<text class="delete-text">报告将发送至您的邮箱</text>
			<view class="delete-user-btn">
				<u-button @click="alertBox = false;" :hair-line="false" class="quit-btn">取消</u-button>
				<u-button @click="alertBox = false;" :hair-line="false" class="delete-btn">发送</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
						value: '全部'
					},
					{
						name: 2,
						value: '存款'
					},
					{
						name: 3,
						value: '提现'
					},
					{
						name: 4,
						value: '转账'
					},
					{
						name: 5,
						value: '已退还提款'
					},
					{
						name: 6,
						value: '已完成交易隔夜费'
					},
					{
						name: 7,
						value: '更正'
					},
					{
						name: 8,
						value: '奖金'
					},
					{
						name: 9,
						value: '回扣'
					},
					{
						name: 10,
						value: '佣金'
					},
					{
						name: 11,
						value: '交易滑点保护'
					},
				],
				btnArr: [{
						time: '6小时',
						id: 1
					},
					{
						time: '12小时',
						id: 2
					},
					{
						time: '1天',
						id: 3
					},
					{
						time: '3天',
						id: 4
					},
					{
						time: '1周',
						id: 5
					},
					{
						time: '1个月',
						id: 6
					},
					{
						time: '2个月',
						id: 7
					},
					{
						time: '3个月',
						id: 8
					},
					{
						time: '全部',
						id: 9
					},
				],
				boxArr: [{
						name: '全部',
						id: 1,
					},
					{
						name: '1天',
						id: 2,
					},
				],
				moneyArr: [{
						name: '初始资金',
						money: '$950.60',
						id: 1,
						color: '#212121'
					},
					{
						name: '修改总额',
						money: '$950.60',
						id: 2,
						color: '#F75555'
					},
					{
						name: '待审核',
						money: '$0',
						id: 3,
						color: '#9D9E9E'
					},
					{
						name: '当前余额',
						money: '+$392.83',
						id: 4,
						color: '#212121'
					},
				],


				todayArr: [{
						time: '今日',
						cell: [{
							name: '隔夜费',
							label: '01:15',
							money: '+$392.83',
							id: 1,
							status: '处理完成',
							color: '#F75555'
						}],
						id: 1
					},
					{
						time: '昨日',
						cell: [{
								name: '隔夜费',
								label: '01:15',
								money: '+$392.83',
								id: 1,
								status: '处理完成',
								color: '#F75555'
							},
							{
								name: '隔夜费',
								label: '01:15',
								money: '+$392.83',
								id: 2,
								status: '处理完成',
								color: '#F75555'
							},
							{
								name: '隔夜费',
								label: '01:15',
								money: '+$392.83',
								id: 3,
								status: '处理完成',
								color: '#12D18E'
							},

						],
						id: 2
					},
				],
			}
		},
		methods: {
			boxEventHandler(item) {
				if (item.name == '全部') {
					this.showModel = true
				} else if (item.name == '1天') {
					this.timerModel = true
				}
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
</style>