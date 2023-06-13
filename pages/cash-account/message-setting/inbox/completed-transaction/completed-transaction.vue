<template>
	<view>
		<!-- 顶部盒子 -->
		<view class="topbox-one" v-for="item in data" :key="item.id">
			<view class="leftbox-one">
				<view class="leftbox-one-left"></view>
				<view class="leftbox-one-right">
					<view class="leftbox-one-right-top">
						<view class="nametop">{{item.name}}</view>
						<view class="texttop">{{item.account}}</view>
					</view>
					<view class="leftbox-one-right-bottom">{{item.time}}</view>
				</view>
			</view>
			<view class="rightbox-one">
				<view class="right-one-top">{{$t('completed-transaction.completed-transaction.5qzzbe5rimw0')}}</view>
				<view class="right-one-bottom" :style="{'color':item.color}">{{item.statusvalue}}</view>
			</view>
		</view>

		<!-- 订单id盒子 -->
		<u-cell-group class="cellgroup" :border='false'>
			<view v-for="item in dataArr" :key='item.id' class="box">
				<u-cell-item :title="res.title" :value="res.value" :arrow='false' v-for="res in item.cell" :key='res.id'
					:border-bottom='false' :border-top='false' :title-style="{'color':'#616161'}"
					:value-style="{'color':'#212121','font-weight':'800'}" :label='res.label'>
					<u-icon slot="right-icon" size="40" :name="res.name" color='#12D18E'></u-icon>
				</u-cell-item>
			</view>
		</u-cell-group>
		<!-- 已开仓盒子 -->
		<view class="bottom-one">
			<view v-for="res in dataArr2" :key='res.id'>
				<view class="bottom-one-top">
					<view class="bottom-one-top-left">{{res.title}}</view>
					<view class="bottom-one-top-right">
						<view class="bottom-one-top-right-left" :style="{'background-color':res.statusColor}">
							{{res.value}}
						</view>
						<view class="bottom-one-top-right-right">{{res.name}}</view>
					</view>
				</view>
				<view class="bottom-one-bottom">
					<view class="bottom-one-bottom-left">{{res.label}}</view>
					<view class="bottom-one-bottom-right">{{res.time}}</view>
				</view>
			</view>

		</view>

		<!-- 隔夜费盒子 -->
		<u-cell-group class="cellgroup" :border='false'>
			<view v-for="item in dataArr1" :key='item.id' class="box">
				<u-cell-item :title="res.title" :value="res.value" :arrow='false' v-for="res in item.cell" :key='res.id'
					:border-bottom='false' :border-top='false' :title-style="{'color':'#616161'}"
					:value-style="{'color':'#212121','font-weight':'800'}" :label='res.label'>
					<u-icon slot="right-icon" size="40" :name="res.name" color='#12D18E'></u-icon>
				</u-cell-item>
			</view>
		</u-cell-group>
		<!-- 右上角下载按钮弹窗 -->
		<u-popup v-model="alertBox" mode="bottom" width="500rpx" height="140px" :mask-close-able='false'
			border-radius='24'>
			<text class="delete-text">{{$t('completed-transaction.completed-transaction.5qzzbe5rjow0')}}</text>
			<view class="delete-user-btn">
				<u-button @click="alertBox = false;" :hair-line="false"
					class="quit-btn">{{$t('completed-transaction.completed-transaction.5qzzbe5rk0g0')}}</u-button>
				<u-button @click="alertBox = false;" :hair-line="false"
					class="delete-btn">{{$t('completed-transaction.completed-transaction.5qzzbe5rk780')}}</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: [], //顶部盒子数组
				alertBox: false, //下载按钮弹窗状态
				//订单id数组
				dataArr: [{
						id: 1,
						cell: [{
								title: this.$t('completed-transaction.completed-transaction.5qzzbe5rkdo0'),
								value: '0000-000080742c6a',
								name: 'file-text',
								id: 1
							},
							{
								title: this.$t('completed-transaction.completed-transaction.5qzzbe5rkjs0'),
								value: 'Take profit order level 184.67',
								name: '',
								id: 2
							},
							{
								title: this.$t('completed-transaction.completed-transaction.5qzzbe5rkow0'),
								value: 'USD',
								name: '',
								id: 3
							},
						]
					},
					// {
					// 	id: 2,
					// 	cell: [{
					// 			title: '已开仓',
					// 			value: '$202.27',
					// 			name: '',
					// 			id: 1
					// 		},
					// 		{
					// 			title: 'ID：0000-4bfa006e0b4',
					// 			value: '2023-04-03 16:26',
					// 			name: '',
					// 			id: 2
					// 		},
					// 	]
					// },

				],
				//隔夜费数组
				dataArr1: [{
					id: 1,
					cell: [{
							title: this.$t('completed-transaction.completed-transaction.5qzzbe5rkv00'),
							value: '+$0.01',
							name: '',
							label: "0203-04-04 05:00",
							id: 1
						},
						{
							title: this.$t('completed-transaction.completed-transaction.5qzzbe5rkv00'),
							value: '+$0.01',
							name: '',
							label: "0203-04-04 05:00",
							id: 2
						},
						{
							title: this.$t('completed-transaction.completed-transaction.5qzzbe5rkv00'),
							value: '+$0.01',
							name: '',
							label: "0203-04-04 05:00",
							id: 3
						},
						{
							title: this.$t('completed-transaction.completed-transaction.5qzzbe5rl0o0'),
							value: '',
							name: '',
							label: "0203-04-04 05:00",
							id: 4
						},
					]
				}],
				//已开仓数组
				dataArr2: [{
						title: this.$t('completed-transaction.completed-transaction.5qzzbe5rl5w0'),
						value: '3.4',
						name: '$202.27',
						label: "ID：0000-4bfa006e0b4",
						time: '2023-04-03 16:26',
						statusColor: '#F75555',
						id: 1
					},
					{
						title: this.$t('completed-transaction.completed-transaction.5qzzbe5rlak0'),
						value: '3.4',
						name: '$202.27',
						label: "ID：0000-4bfa006e0b4",
						time: '2023-04-03 16:26',
						statusColor: '#12D18E',
						id: 2
					},

				]
			};
		},
		//接收路由参数
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
		},
		methods: {
			onNavigationBarButtonTap: function(e) {
				// console.log(JSON.stringify(e))
				this.alertBox = true
			},
		}
	}
</script>

<style lang="scss">
	.topbox-one {
		// width: 100%;
		min-height: 4rem;
		margin: 0 1rem;
		padding: 1rem 0;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #EEEEEE;

		.leftbox-one {
			width: 80%;
			height: 100%;
			display: flex;
			align-items: center;

			.leftbox-one-left {
				width: 3rem;
				height: 3rem;
				background-color: #f5f5f5;
				border-radius: 50%;
				margin-right: 0.5rem;
			}


			.leftbox-one-right {
				display: flex;
				flex-direction: column;
				width: 100%;

				.leftbox-one-right-top {
					display: flex;
					align-items: center;
					margin-bottom: 0.3rem;

					.nametop {
						color: #212121;
						font-size: 1rem;
						font-weight: 700;
						margin-right: 0.4rem;
					}

					.texttop {
						color: #616161;
						font-size: 0.7rem;
					}
				}

				.leftbox-one-right-bottom {
					color: #616161;
					font-size: 0.7rem;
				}
			}
		}

		.rightbox-one {
			width: 20%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-end;

			.right-one-top {
				color: #616161;
				font-size: 0.7rem;
				margin-bottom: 0.3rem;
			}

			.right-one-bottom {
				font-size: 1rem;
				font-weight: 700;
			}
		}
	}

	.cellgroup {
		padding: 0 1rem;

		.box {
			border: 1px solid #FAFAFA;
			border-radius: 1.5rem;
			margin-top: 1rem;
			background-color: #EEEEEE;
		}
	}

	.bottom-one {
		padding: 1rem;
		// border: 1px solid #FAFAFA;
		// border-radius: 1.5rem;
		margin: 0 1rem;
		border: 1px solid #FAFAFA;
		margin-top: 1rem;
		border-radius: 1.5rem;
		background-color: #EEEEEE;

		.bottom-one-top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 0.5rem;

			.bottom-one-top-left {
				width: 30%;
				color: #616161;
			}

			.bottom-one-top-right {
				width: 60%;
				display: flex;
				justify-content: flex-end;
				align-items: center;

				.bottom-one-top-right-left {
					color: white;
					font-size: 0.7rem;
					padding: 0 0.3rem;
					border-radius: 0.25rem;
					margin-right: 0.5rem;
				}

				.bottom-one-top-right-right {
					font-size: 1rem;
					font-weight: 700;
					color: #212121;
				}
			}
		}



		.bottom-one-bottom {
			display: flex;
			justify-content: space-between;
			margin-bottom: 1rem;

			.bottom-one-bottom-left {
				width: 55%;
				color: #616161;
				font-size: 0.7rem;
			}

			.bottom-one-bottom-right {
				width: 45%;
				display: flex;
				justify-content: flex-end;
				color: #616161;
				font-size: 0.7rem;
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