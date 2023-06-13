<template>
	<view>
		<!-- 顶部两个按钮盒子 -->
		<view class="top-box">
			<u-cell-group class="cell-first-box" v-for='item in boxArr' :key='item.id'>
				<u-cell-item :title="item.name" arrow-direction='down' :border-bottom='false' :border-top='false'
					:border='false' @click='boxEventHandler(item)'>
				</u-cell-item>
			</u-cell-group>
		</view>

		<!-- 中间初始资金到当前余额单元格 -->
		<view>
			<u-cell-group :border='false' style="margin-bottom: 1rem;">
				<u-cell-item :title="result.name" :value="result.money" v-for='result in moneyArr' :key='result.id'
					:border-bottom='false' :border-top='false' :arrow='false'
					:value-style="{'color':result.color,'font-weight':'700'}" :title-style="{'color':'#757575'}">
				</u-cell-item>
			</u-cell-group>
		</view>

		<!-- 今日昨日单元格 -->
		<view v-for='res in todayArr' :key='res.id'>
			<text style="padding: 0 1rem;color: #9D9E9E;">{{res.time}}</text>
			<u-cell-group :border='false'>
				<u-cell-item :title="resitem.name" :value="resitem.money" :label='resitem.label'
					v-for='resitem in res.cell' :key='resitem.id' :border-bottom='false' :border-top='false'
					:arrow='false' :title-style="{'color':'#212121'}" :label-style="{'color':'#9D9E9E'}"
					:value-style="{'color':resitem.color,'font-weight':'700'}">
				</u-cell-item>
			</u-cell-group>
		</view>


		<!-- 全部按钮弹窗 -->
		<u-popup v-model="showModel" mode='bottom' height="300px" :mask-close-able='false' border-radius='24'>
			<view class="rate">{{$t('details-funds.details-funds.5qzym36ug400')}}</view>

			<scroll-view scroll-y="true" @scrolltolower="onreachBottom">
				<view class="cellratebox">
					<view class="small-box1" v-for="item in dataListValue" :key='item.name'>
						<view class="left-box">
							<view class="top-small-box">
								<text style="color: #212121;">{{item.value}}</text>
							</view>
						</view>

						<view>
							<u-radio-group v-model="value" @change="radioGroupChange" active-color='#12D18E'>
								<u-radio :name="item.value" @change="radioChange">
								</u-radio>
							</u-radio-group>
						</view>
					</view>
				</view>
			</scroll-view>

			<view class="bottom-box">
				<u-button @click="changeText" :hair-line="false"
					class="yes-btn">{{$t('details-funds.details-funds.5qzym36uhqo0')}}</u-button>
			</view>
		</u-popup>

		<!-- 1天按钮弹窗 -->
		<u-popup v-model="timerModel" mode='bottom' height="400px" :mask-close-able='false' border-radius='24'>
			<view class="rate">{{$t('details-funds.details-funds.5qzym36ui200')}}</view>

			<view class="time-top-box">
				<text
					style="font-size: 1rem; font-weight: 600;">{{$t('details-funds.details-funds.5qzym36ui8o0')}}</text>
				<text style="font-size: 10px;color: #9D9E9E;">{{$t('details-funds.details-funds.5qzym36uieg0')}}</text>
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
					style="font-size: 1rem; font-weight: 600;">{{$t('details-funds.details-funds.5qzym36uil00')}}</text>
			</view>
			<view class="selftime-bottom-box">
				<u-button @click="timeFirstHandler" class="timebtn" :hair-line='false'>{{startTime}}</u-button>———
				<u-button @click="timeOverHandler" class="timebtn" :hair-line='false'>{{endTime}}</u-button>
			</view>
			<view class="bottom-box">
				<u-button @click="timerModel = false;" :hair-line="false"
					class="yes-btn">{{$t('details-funds.details-funds.5qzym36uhqo0')}}</u-button>
			</view>
		</u-popup>

		<!-- 时间组件弹窗 -->
		<u-calendar v-model="timeshow" :mode="mode" @change='changeTimeHandler' toolTip='' :closeable='false'
			active-bg-color='#12D18E' range-color='#12D18E' month-arrow-color='#12D18E' year-arrow-color='#12D18E'
			range-bg-color='#e8fbf4' btn-type='success'></u-calendar>

		<!-- 右上角下载弹窗 -->
		<u-popup v-model="alertBox" mode="bottom" width="500rpx" height="140px" :mask-close-able='false'
			border-radius='24'>
			<text class="delete-text">{{$t('details-funds.details-funds.5qzym36uiqg0')}}</text>
			<view class="delete-user-btn">
				<u-button @click="alertBox = false;" :hair-line="false"
					class="quit-btn">{{$t('details-funds.details-funds.5qzym36uivk0')}}</u-button>
				<u-button @click="alertBox = false;" :hair-line="false"
					class="delete-btn">{{$t('details-funds.details-funds.5qzym36uj140')}}</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '', //全部按钮弹窗里的单选按钮存放值
				alertBox: false, //下载按钮弹窗
				startTime: '', //开始时间
				endTime: '', //结束事件
				timeshow: false, //时间组件弹窗
				mode: 'range', //时间组件弹窗模式
				timerModel: false, //1天按钮弹窗
				showModel: false, //全部按钮弹窗
				//全部弹窗数组
				dataListValue: [{
						name: 1,
						value: this.$t('details-funds.details-funds.5qzym36uj680')
					},
					{
						name: 2,
						value: this.$t('details-funds.details-funds.5qzym36ujb80')
					},
					{
						name: 3,
						value: this.$t('details-funds.details-funds.5qzym36ujh00')
					},
					{
						name: 4,
						value: this.$t('details-funds.details-funds.5qzym36ujp80')
					},
					{
						name: 5,
						value: this.$t('details-funds.details-funds.5qzym36ujuk0')
					},
					{
						name: 6,
						value: this.$t('details-funds.details-funds.5qzym36ujzs0')
					},
					{
						name: 7,
						value: this.$t('details-funds.details-funds.5qzym36uk4w0')
					},
					{
						name: 8,
						value: this.$t('details-funds.details-funds.5qzym36ukb00')
					},
					{
						name: 9,
						value: this.$t('details-funds.details-funds.5qzym36ukgw0')
					},
					{
						name: 10,
						value: this.$t('details-funds.details-funds.5qzym36ukmg0')
					},
					{
						name: 11,
						value: this.$t('details-funds.details-funds.5qzym36ukro0')
					},
				],
				//1天弹窗按钮数组
				btnArr: [{
						time: '6' + this.$t('details-funds.details-funds.5r04cekgc980'),
						id: 1,
						backgroundColor: '',
						color: ''
					},
					{
						time: '12' + this.$t('details-funds.details-funds.5r04cekgc980'),
						id: 2,
						backgroundColor: '',
						color: ''
					},
					{
						time: '1' + this.$t('details-funds.details-funds.5r048henc4w0'),
						id: 3,
						backgroundColor: '',
						color: ''
					},
					{
						time: '3' + this.$t('details-funds.details-funds.5r048henc4w0'),
						id: 4,
						backgroundColor: '',
						color: ''
					},
					{
						time: '1' + this.$t('details-funds.details-funds.5r04cekgdt40'),
						id: 5,
						backgroundColor: '',
						color: ''
					},
					{
						time: '1' + this.$t('details-funds.details-funds.5r04cekge7c0'),
						id: 6,
						backgroundColor: '',
						color: ''
					},
					{
						time: '2' + this.$t('details-funds.details-funds.5r04cekge7c0'),
						id: 7,
						backgroundColor: '',
						color: ''
					},
					{
						time: '3' + this.$t('details-funds.details-funds.5r04cekge7c0'),
						id: 8,
						backgroundColor: '',
						color: ''
					},
					{
						time: this.$t('details-funds.details-funds.5qzym36uj680'),
						id: 9,
						backgroundColor: '',
						color: ''
					},
				],
				boxArr: [{
						name: this.$t('details-funds.details-funds.5qzym36uj680'),
						id: 1,
					},
					{
						name: '1' + this.$t('details-funds.details-funds.5r048henc4w0'),
						id: 2,
					},
				],
				//初始资金到当前余额数组
				moneyArr: [{
						name: this.$t('details-funds.details-funds.5qzym36ul2g0'),
						money: '$950.60',
						id: 1,
						color: '#212121'
					},
					{
						name: this.$t('details-funds.details-funds.5qzym36ulao0'),
						money: '$950.60',
						id: 2,
						color: '#F75555'
					},
					{
						name: this.$t('details-funds.details-funds.5qzym36uljo0'),
						money: '$0',
						id: 3,
						color: '#9D9E9E'
					},
					{
						name: this.$t('details-funds.details-funds.5qzym36uloo0'),
						money: '+$392.83',
						id: 4,
						color: '#212121'
					},
				],

				//今日昨日数组
				todayArr: [{
						time: this.$t('details-funds.details-funds.5qzym36ulso0'),
						cell: [{
							name: this.$t('details-funds.details-funds.5qzym36ulww0'),
							label: '01:15',
							money: '+$392.83',
							id: 1,
							status: this.$t('details-funds.details-funds.5qzym36um0w0'),
							color: '#F75555'
						}],
						id: 1
					},
					{
						time: this.$t('details-funds.details-funds.5qzym36um4s0'),
						cell: [{
								name: this.$t('details-funds.details-funds.5qzym36ulww0'),
								label: '01:15',
								money: '+$392.83',
								id: 1,
								status: this.$t('details-funds.details-funds.5qzym36um0w0'),
								color: '#F75555'
							},
							{
								name: this.$t('details-funds.details-funds.5qzym36ulww0'),
								label: '01:15',
								money: '+$392.83',
								id: 2,
								status: this.$t('details-funds.details-funds.5qzym36um0w0'),
								color: '#F75555'
							},
							{
								name: this.$t('details-funds.details-funds.5qzym36ulww0'),
								label: '01:15',
								money: '+$392.83',
								id: 3,
								status: this.$t('details-funds.details-funds.5qzym36um0w0'),
								color: '#12D18E'
							},

						],
						id: 2
					},
				],
				radioText: '', //全部弹窗单选框值
			}
		},
		methods: {
			//全部弹窗完成按钮事件
			changeText() {
				this.boxArr[0].name = this.radioText
				this.showModel = false
			},
			// 选中某个单选框时，由radio时触发
			radioChange(e) {
				console.log(e, '')
				this.radioText = e
			},
			// 选中任一radio时，由radio-group触发
			//这里点击单选按钮以后 存放该单元格的名称
			radioGroupChange(e) {

			},

			//点击顶部按钮事件
			boxEventHandler(item) {
				if (item.id == 1) {
					this.showModel = true
				} else if (item.id == 2) {
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
			//uniapp导航栏原生点击事件
			onNavigationBarButtonTap: function(e) {
				// console.log(JSON.stringify(e))
				this.alertBox = true
			},
			//1天按钮里的时间点击事件
			timeFirstHandler() {
				this.timeshow = true
			},
			timeOverHandler() {
				this.timeshow = true
			},
			//时间组件change事件
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
</style>