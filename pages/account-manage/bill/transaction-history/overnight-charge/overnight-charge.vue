<template>
	<view>
		<!-- 顶部盒子 -->
		<view class="top-box1" v-for='item in this.data' :key='item.id'>
			<view class="iconstyle1">
				<image class="first-box1" :src='item.icon' />
			</view>
			<view class="top-box-first1">
				<view>
					<text style="color: #616161;padding-right: 0.3rem;font-size: 1rem;">{{item.name}}</text>
					<text style="color: #FFC20C;font-size: 0.8rem;">{{item.status}}</text>
				</view>
				<view>
					<text class="addressstyle1">{{item.time}}</text>
				</view>
			</view>
		</view>

		<!-- 中间单元格以不同名称显示不同内容 -->
		<u-cell-group class="cellgroup" :border='false'>
			<!-- 隔夜费 -->
			<view v-for="item in dataArr" :key='item.id' class="box"
				v-if="data[0].name == $t('transaction-history.transaction-history.5qzyn81kbpo0')">
				<u-cell-item :title="res.title" :value="res.value" :arrow='false' v-for="res in item.cell" :key='res.id'
					:border-bottom='false' :border-top='false' :title-style="{'color':'#616161'}"
					:value-style="{'color':'#212121','font-weight':'800'}" :label='res.label'>
					<u-icon slot="right-icon" size="40" :name="res.name" color='#12D18E'></u-icon>
				</u-cell-item>
			</view>
			<!-- 订单执行成功 -->
			<view v-for="item in dataArr1" :key='item.id' class="box"
				v-if="data[0].name == $t('historical-order.historical-order.5qzymqtl0ag0')">
				<u-cell-item :title="res.title" :value="res.value" :arrow='false' v-for="res in item.cell" :key='res.id'
					:border-bottom='false' :border-top='false' :title-style="{'color':'#616161'}"
					:value-style="{'color':'#212121','font-weight':'800'}" :label='res.label'>
					<u-icon slot="right-icon" size="40" :name="res.name" color='#12D18E'></u-icon>
				</u-cell-item>
			</view>
			<!-- 订单创建成功 -->
			<view v-for="item in dataArr2" :key='item.id' class="box"
				v-if="data[0].name == $t('historical-order.historical-order.5qzymqtl0ms0')">
				<u-cell-item :title="res.title" :value="res.value" :arrow='false' v-for="res in item.cell" :key='res.id'
					:border-bottom='false' :border-top='false' :title-style="{'color':'#616161'}"
					:value-style="{'color':'#212121','font-weight':'800'}" :label='res.label'>
					<u-icon slot="right-icon" size="40" :name="res.name" color='#12D18E'></u-icon>
				</u-cell-item>
			</view>

		</u-cell-group>

		<!-- 下载按钮弹窗 -->
		<u-popup v-model="alertBox" mode="bottom" width="500rpx" height="140px" :mask-close-able='false'
			border-radius='24'>
			<text class="delete-text">{{$t('overnight-charge.overnight-charge.5qzynre77uo0')}}</text>
			<view class="delete-user-btn">
				<u-button @click="alertBox = false;" :hair-line="false"
					class="quit-btn">{{$t('overnight-charge.overnight-charge.5qzynre78040')}}</u-button>
				<u-button @click="alertBox = false;" :hair-line="false"
					class="delete-btn">{{$t('overnight-charge.overnight-charge.5qzynre786c0')}}</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: [], //存放顶部盒子内容,由其他页面传来的数据不同展示不同
				alertBox: false,
				icon: '../../static/fonts/Upload.png',
				//中间单元格数组
				dataArr: [{
						id: 1,
						cell: [{
								title: this.$t('overnight-charge.overnight-charge.5qzynre78b40'),
								value: '0000-000080742c6a',
								name: 'file-text',
								id: 1
							},
							{
								title: this.$t('overnight-charge.overnight-charge.5qzynre78g40'),
								value: this.$t('overnight-charge.overnight-charge.5qzynre78l00'),
								name: '',
								id: 2
							},
							{
								title: this.$t('overnight-charge.overnight-charge.5qzynre78ps0'),
								value: 'USD',
								name: '',
								id: 3
							},
						]
					},
					{
						id: 2,
						cell: [{
								title: this.$t('overnight-charge.overnight-charge.5qzynre78uo0'),
								value: '$202.27',
								name: '',
								id: 1
							},
							{
								title: 'ID：0000-4bfa006e0b4',
								value: '2023-04-03 16:26',
								name: '',
								id: 2
							},
						]
					},
					{
						id: 3,
						cell: [{
								title: this.$t('overnight-charge.overnight-charge.5qzynre76a00'),
								value: '+$0.01',
								name: '',
								label: "0203-04-04 05:00",
								id: 1
							},
							{
								title: this.$t('overnight-charge.overnight-charge.5qzynre76a00'),
								value: '+$0.01',
								name: '',
								label: "0203-04-04 05:00",
								id: 2
							},
							{
								title: this.$t('overnight-charge.overnight-charge.5qzynre76a00'),
								value: '+$0.01',
								name: '',
								label: "0203-04-04 05:00",
								id: 3
							},
						]
					},
				],
				//中间单元格数组
				dataArr1: [{
						id: 1,
						cell: [{
								title: this.$t('overnight-charge.overnight-charge.5qzynre78b40'),
								value: '0000-000080742c6a',
								name: 'file-text',
								id: 1
							},
							{
								title: this.$t('overnight-charge.overnight-charge.5qzynre78g40'),
								value: this.$t('overnight-charge.overnight-charge.5qzynre78l00'),
								name: '',
								id: 2
							},
							{
								title: this.$t('overnight-charge.overnight-charge.5qzynre78ps0'),
								value: 'USD',
								name: '',
								id: 3
							},
						]
					},
					{
						id: 2,
						cell: [{
								title: this.$t('overnight-charge.overnight-charge.5qzynre78uo0'),
								value: '',
								name: '',
								id: 1
							},
							{
								title: this.$t('overnight-charge.overnight-charge.5qzynre792w0'),
								value: '2023-05-17 17:30',
								name: '',
								id: 2
							},
							{
								title: this.$t('overnight-charge.overnight-charge.5qzynre7cac0'),
								value: '$0.90',
								name: '',
								id: 3
							},
						]
					},
				],
				//中间单元格数组
				dataArr2: [{
						id: 1,
						cell: [{
								title: this.$t('overnight-charge.overnight-charge.5qzynre78b40'),
								value: '0000-000080742c6a',
								name: 'file-text',
								id: 1
							},
							{
								title: this.$t('overnight-charge.overnight-charge.5qzynre78g40'),
								value: this.$t('overnight-charge.overnight-charge.5qzynre78l00'),
								name: '',
								id: 2
							},
							{
								title: this.$t('overnight-charge.overnight-charge.5qzynre78ps0'),
								value: 'USD',
								name: '',
								id: 3
							},
						]
					},
					{
						id: 2,
						cell: [{
								title: this.$t('overnight-charge.overnight-charge.5qzynre792w0'),
								value: '2023-05-17 17:30',
								name: '',
								id: 2
							},
							{
								title: this.$t('overnight-charge.overnight-charge.5qzynre7cac0'),
								value: '$0.90',
								name: '',
								id: 3
							},
						]
					},
				],
			}
		},
		//接收路由传递的参数
		onLoad(data) {
			let obj = JSON.parse(data.object)
			let year = new Date().getFullYear()
			let month = new Date().getMonth() + 1
			let day = new Date().getDate() + 1
			let hours = new Date().getHours()
			let minutes = new Date().getMinutes()
			// let seconds = new Date().getSeconds()
			if (hours < 10) {
				hours = '0' + hours
			} else if (minutes < 10) {
				minutes = '0' + minutes
			} else if (month < 10) {
				month = '0' + month
			} else if (day < 10) {
				day = "0" + day
			}
			let time = year + "-" + month + "-" + day + ' ' + hours + ":" + minutes
			obj.time = time
			this.data.push(obj)

			// 动态更改标题
			uni.setNavigationBarTitle({
				title: obj.name
			})

		},
		methods: {
			//uniapp导航栏原生点击事件
			onNavigationBarButtonTap: function(e) {
				// console.log(JSON.stringify(e))
				this.alertBox = true
			},
		}
	}
</script>

<style lang="scss">
	.box {
		border: 1px solid #FAFAFA;
		border-radius: 1.5rem;
		margin-top: 1rem;
		background-color: #EEEEEE;
	}

	.top-box {
		width: 100%;
		padding: 1rem 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.notice,
		.text {
			display: flex;
			justify-content: center;
			width: 100%;

		}

		.notice {
			margin-bottom: 0.5rem;
			font-weight: 900;
		}

		.text {
			color: #757575;
		}

	}

	.bottom-btn {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 3rem;
		position: absolute;
		bottom: 10px;
	}

	.yes-btn {
		background-color: #12D18E !important;
		border-radius: 6.25rem;
		margin: 0.5rem 1rem;
		width: 100%;
		color: white !important;
		border-width: 0 !important;
	}

	.cellgroup {
		padding: 0 1rem;
	}

	.top-box1 {
		display: flex;
		width: 100%;
		padding: 1rem;
		border-bottom: 1px solid #EEEEEE;

		.iconstyle1 {
			width: 3rem;
			height: 3rem;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 0.5rem;

		}

		.first-box1 {
			width: 3rem;
			height: 3rem;
			background-color: #e5e5e5;
			border-radius: 50%;
		}

		uni-image {
			width: 0.1rem;
			height: 0.1rem;
		}

		.top-box-first1 {
			display: flex;
			flex-direction: column;
			justify-content: center;

			.addressstyle1 {
				display: flex;
				flex-wrap: wrap;
				width: 12.5rem;
				font-size: 0.7rem;
				color: #616161;
			}
		}
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