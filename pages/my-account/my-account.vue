<template>
	<view>
		<u-tabs-swiper ref="tabs" :list="list" :is-scroll="false" :current="current" active-color="#12D18E"
			inactive-color="#9D9E9E" @change="changeTabHandler" bar-width='300'></u-tabs-swiper>

		<!-- 现金账户 -->
		<u-collapse :arrow="false" class="dropdowm-first" v-if='current === 0'>
			<view class="forbox" v-for="(item, index) in itemList" :key='item.id'>
				<view class="leftbox">
					<text class="txt">活跃</text>
				</view>
				<u-collapse-item :title="item.head">
					<view class="box">
						<view class="small-box" v-for='every in dataArr' :key='every.name'>
							<text>{{every.name}}</text>:<text :style="{'color':every.color}"
								class="namestyle">{{every.money}}</text>
						</view>
					</view>

					<scroll-view scroll-x="true">
						<view class="bottom-box">
							<view class="bottom-small-box" @click='topUp({res:res,item:item})' v-for='res in item.body'
								:key='item.name'>
								<u-icon :name="res.icon" color="#12D18E" size="48"></u-icon>
								<span class="text">{{res.name}}</span>
							</view>
						</view>

					</scroll-view>
				</u-collapse-item>

				<view class="rightbox">{{item.money}}</view>
			</view>
		</u-collapse>

		<!-- 模拟账户 -->
		<u-collapse :arrow="false" class="dropdowm-second" v-if='current === 1'>
			<view class="forbox" v-for="(item, index) in itemListTest" :key='item.id'>
				<view class="leftbox">
					<text class="txt">活跃</text>
				</view>
				<u-collapse-item :title="item.head">
					<view class="box">
						<view class="small-box" v-for='every in dataArr' :key='every.name'>
							<text>{{every.name}}</text>:<text :style="{'color':every.color}"
								class="namestyle">{{every.money}}</text>
						</view>
					</view>
					<scroll-view scroll-x="true">
						<view class="bottom-box">
							<view class="bottom-small-box" @click='topUpTest(res)' v-for='res in item.body'
								:key='item.name'>
								<u-icon :name="res.icon" color="#12D18E" size="48"></u-icon>
								<span class="text">{{res.name}}</span>
							</view>
						</view>
					</scroll-view>
				</u-collapse-item>
				<view class="rightbox">{{item.money}}</view>
			</view>
		</u-collapse>

		<!-- 模拟账户删除账户 -->
		<u-popup v-model="alertBox" border-radius='24' mode="bottom" width="500rpx" height="120px"
			:mask-close-able='false'>
			<text class="delete-text">你确定删除xx账户?</text>
			<view class="delete-user-btn1">
				<u-button @click="alertBox = false;" :hair-line="false" class="quit-btn">取消</u-button>
				<u-button @click="deleteUserHandler" :hair-line="false" class="delete-btn">删除</u-button>
			</view>
		</u-popup>


		<!-- 现金账户重命名 -->
		<u-popup v-model="show" mode="bottom" width="500rpx" height="180px" border-radius='24' :mask-close-able='false'>
			<text class="rename">重命名</text>
			<u-field v-model="mobile" label="户名" placeholder="请填写户名" @input='renameHandler' :border-top='false'
				:border-bottom='false'>
			</u-field>
			<view class="delete-user-btn">
				<u-button @click="updateName" class="update-btn" :hair-line="false"
					v-bind:class="{'class1':Boolean(mobile)}" ref='updateRename'>确认修改</u-button>
			</view>
		</u-popup>

		<!-- 现金账户登录信息 -->
		<u-popup v-model="showLogin" mode="bottom" width="500rpx" height="18.75rem" border-radius='24'
			:mask-close-able='false'>
			<text class="userinfo">账户名_登录信息</text>
			<u-cell-group :border='false'>
				<u-cell-item :title="resItem.name" :value="resItem.value" v-for='resItem in dataList'
					:key='resItem.name' :arrow='false' :value-style="{'color':'#212121'}" :border-top='false'
					:border-bottom='false'>
					<u-icon :name='resItem.icon' slot='right-icon' color='#12D18E'></u-icon>
				</u-cell-item>

				<u-cell-item title="外汇杠杆" :arrow='false' :border-top='false' :border-bottom='false'></u-cell-item>

				<u-cell-item :title="rateValue" arrow-direction='down' :border-bottom='false' :border-top='false'
					@click="changeModelHandler">
					<u-popup v-model="showModel" mode='bottom' height="18.75rem" :mask-close-able='false'>
						<view class="rate">杠杆率</view>

						<scroll-view scroll-y="true">
							<view style="width: 100%;height: 200px;">
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

						<view class="delete-user-btn2">
							<u-button :hair-line="false" class="yes-btn" @click='changeEventHandler'
								v-bind:class="{'class1':Boolean(value)}">完成</u-button>
						</view>

						<!-- <view v-for="result in dataListValue" :key='result.name' class="cellBox">{{result.value}}</view> -->
						<!-- <u-button @click="showModel = false;" :hair-line="false" class="yes-btn">完成</u-button> -->
						<!-- <view class="delete-user-btn">
							<u-button @click="showModel = false;" class="userinfoquit-btn"
								:hair-line="false">完成</u-button>
						</view> -->
					</u-popup>
				</u-cell-item>
			</u-cell-group>

			<view class="delete-user-btn2">
				<u-button @click="showLogin = false;" class="userinfoquit-btn" :hair-line="false">取消</u-button>
			</view>
		</u-popup>

		<!-- 按钮 -->
		<view class="cash-btn">
			<u-button class="btn" v-if="current===0" @click='addCashUser'>添加现金账户</u-button>
			<u-button class="btn" v-if="current===1" @click='addSimulationUser'>添加模拟账户</u-button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				rateValue: '50:1', //账户名登录信息里的杠杆率值
				value: '', //账户名登录信息里的杠杆率弹窗里选择的值
				showModel: false, //账户名登录信息里的杠杆率弹窗
				alertBox: false, //模拟账户删除账户弹窗
				show: false, //现金账户重命名弹窗
				showLogin: false, //现金账户登录信息弹窗
				mobile: '', //现金账户重命名输入框
				current: 0, //正确的下标
				list: [{
					name: '现金账户'
				}, {
					name: '模拟账户'
				}],

				dataList: [{
						name: '登录',
						value: '125804',
						icon: 'file-text'
					},
					{
						name: '服务器',
						value: 'Capital.com-Real',
						icon: 'file-text'
					}
				],

				dataListValue: [{
						name: '登录',
						value: '30:1'
					},
					{
						name: '服务器',
						value: '50:1'
					},
					{
						name: '服务器1',
						value: '100:1'
					},
					{
						name: '服务器2',
						value: '200:1'
					},
					{
						name: '服务器3',
						value: '300:1'
					},
					{
						name: '服务器4',
						value: '400:1'
					},
				],

				//现金账户
				itemList: [{
					head: "CFD US Dollar1",
					body: [{
							name: '充值',
							icon: '../../static/fonts/Group168.png'
						},
						{
							name: '转账',
							icon: '../../static/fonts/Group169.png'
						},
						{
							name: '提现',
							icon: '../../static/fonts/Group170.png'
						},
						{
							name: "交易选项",
							icon: '../../static/fonts/Group172.png'
						},
						{
							name: '重命名',
							icon: '../../static/fonts/Group173.png'
						},
						{
							name: '删除账户',
							icon: '../../static/fonts/Group174.png'
						}

					],
					open: true,
					disabled: true,
					money: '$225',
					id: 1
				}, {
					head: "CFD US Dollar2",
					body: [{
							name: '登录信息',
							icon: '../../static/fonts/Group171.png'
						},
						{
							name: '充值',
							icon: '../../static/fonts/Group168.png'
						},
						{
							name: '重命名',
							icon: '../../static/fonts/Group173.png'
						},
						{
							name: '转账',
							icon: '../../static/fonts/Group169.png'
						}

					],
					open: false,
					money: '$225',
					id: 2
				}, {
					head: "CFD US Dollar3",
					body: [{
							name: '充值',
							icon: '../../static/fonts/Group168.png'
						},
						{
							name: '转账',
							icon: '../../static/fonts/Group169.png'
						},
						{
							name: '提现',
							icon: '../../static/fonts/Group170.png'
						}

					],
					open: false,
					money: '$225',
					id: 3
				}],

				//模拟账户
				itemListTest: [{
					head: "CFD US Dollar1",
					body: [{
							name: '调节器',
							icon: '../../static/fonts/Group171(1).png'
						},
						{
							name: '交易选项',
							icon: '../../static/fonts/Group172.png'
						},
						{
							name: '重命名',
							icon: '../../static/fonts/Group173.png'
						},
						{
							name: '删除账户',
							icon: '../../static/fonts/Group174.png'
						}
					],
					open: true,
					disabled: true,
					money: '$225',
					id: 1
				}, {
					head: "CFD US Dollar2",
					body: [{
							name: '登录信息',
							icon: '../../static/fonts/Group171.png'
						},
						{
							name: '充值',
							icon: '../../static/fonts/Group168.png'
						},
						{
							name: '转账',
							icon: '../../static/fonts/Group169.png'
						}

					],
					open: false,
					money: '$225',
					id: 2
				}],

				dataArr: [{
						name: '可用',
						money: '$225',
						color: "#212121"
					},
					{
						name: '收益',
						money: '$22',
						color: "#212121"
					},
					{
						name: '损益',
						money: '$2223',
						color: "#FFC20C"
					},
					{
						name: '保证金',
						money: '$2123',
						color: "#212121"
					}
				]
			}
		},
		// onLoad:function test(data){
		// 	this.current = data.current
		// },
		methods: {
			//模拟账户删除账户
			deleteUserHandler() {
				this.alertBox = false
			},
			//现金账户重命名  待完成
			updateName() {
				this.show = false
			},
			//杠杆率弹窗完成按钮事件
			changeEventHandler() {
				this.showModel = false
				this.rateValue = this.value
			},
			//现金账户重命名
			renameHandler() {
				if (this.mobile != '') {
					// this.$refs.updateRename.className = 'renamestyle'
				} else {
					console.log('llll')
				}
			},
			//tab激活状态
			changeTabHandler(index) {
				this.current = index
			},
			//显示汇率比弹窗
			changeModelHandler() {
				this.showModel = true
			},
			//现金账户点击事件
			topUp(res) {
				if (res.res.name == '充值') {
					uni.navigateTo({
						url: "/pages/top-up/top-up"
					})
				} else if (res.res.name == '交易选项') {
					uni.navigateTo({
						url: '/pages/trading-options/trading-options'
					})
				} else if (res.res.name == '重命名') {
					this.show = true
					this.mobile = res.item.head
				} else if (res.res.name == '登录信息') {
					this.showLogin = true
				}

			},
			//模拟账户点击事件
			topUpTest(res) {
				if (res.name == '调节器') {
					uni.navigateTo({
						url: '/pages/regulator/regulator'
					})
				} else if (res.name == '删除账户') {
					this.alertBox = true
				}
			},
			//添加现金账户按钮
			addCashUser() {
				uni.navigateTo({
					url: '/pages/add-cash-user/add-cash-user'
				})
			},
			//添加模拟账户
			addSimulationUser() {
				uni.navigateTo({
					url: '/pages/add-simulation-user/add-simulation-user?current=' + this.current
				})
			}
		}
	}
</script>

<style lang="scss">
	.u-collapse-item {
		width: 85% !important;
		// border: 1px solid;
	}

	.forbox {
		display: flex;
		width: 100%;
		// border: 1px solid;
		padding: 0.5rem 2rem;
		// align-items: center;
		margin-bottom: 0.5rem;

		.leftbox {
			min-width: 1rem;
			min-height: 1rem;
			margin-top: 0.6rem;
			margin-right: 0.5rem;
			font-size: 1rem;
			margin-bottom: 0.2rem;
			background-image: url('../../static/fonts/Down3.png');
			background-repeat: no-repeat;
			position: relative;
			// background-position: center center;
			// background-size: 100% 100%;
		}

		.txt {
			color: #FFC20C;
			font-size: 0.6rem;
			width: 2rem;
			height: 2rem;
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: -1.5rem;
			left: -0.5rem;
		}

		.rightbox {
			margin-top: 0.5rem;
			color: #9D9E9E;
		}
	}

	.class1 {
		background-color: #12D18E !important;
		color: white !important;
	}


	.small-box1 {
		// width: 343px;
		height: 3rem;
		margin: 0 1rem;
		// background-color: #12D18E;
		border-radius: 1rem;
		padding: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.top-small-box {
			display: flex;
			flex-direction: column;
		}
	}

	.first-box {

		// background-image: url('../../static/fonts/Group 187.png');
		// background-repeat: no-repeat;
		// background-position: center center;
		// background-size: 100% 100%;
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


	.dropdowm-first,
	.dropdowm-second {
		width: 100%;
		height: 8rem;
		// margin: 0.5rem 2rem;
	}



	.cash-btn {
		margin: 0 1rem;
		position: absolute;
		bottom: 0.5rem;
		left: 0;
		right: 0;
		// width: 343px;
		height: 3.5rem;

		.btn {
			border-radius: 6.25rem;
			background-color: #12D18E;
			color: white;
		}
	}

	.box {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;

		.small-box {
			width: 45%;

			.namestyle {
				padding-left: 0.4rem;
			}
		}
	}

	.bottom-box {
		width: 100%;
		padding: 0.5rem 0.5rem;
		display: flex;

		.bottom-small-box {
			display: flex;
			margin-right: 1rem;
			width: 20%;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			// overflow-x: auto;

			.text {
				font-size: 0.6rem;
				display: block;
				width: 6.25rem;
				color: #12D18E;
				text-align: left;
				// text-align: center;
			}
		}
	}

	.delete-user-btn {
		position: absolute;
		bottom: 1rem;
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.delete-user-btn1 {
		position: absolute;
		bottom: 1rem;
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.delete-user-btn2 {
		// position: absolute;
		// bottom: 1rem;
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.userinfoquit-btn {
		background-color: #12D18E !important;
		border-radius: 6.25rem;
		margin: 0.5rem 1rem;
		color: white !important;
		width: 100%;
		height: 3.5rem;
		border-width: 0 !important;
	}

	.update-btn {
		// background-color: white;
		border-radius: 6.25rem;
		margin: 0.5rem 1rem;
		// color: gray;
		width: 100%;
		height: 3.5rem;
		border-width: 0 !important;
	}

	.rename {
		display: block;
		width: 100%;
		text-align: center;
		margin: 0.5rem 0;
	}

	.userinfo {
		padding: 0.5rem 0;
		display: flex;
		justify-content: center;
	}

	.cellBox {
		display: flex;
		height: 2rem;
		margin: 0.5rem;
		justify-content: flex-start;
	}

	.yes-btn {
		border-radius: 6.25rem;
		margin: 0.5rem 1rem;
		width: 100%;
		border-width: 0 !important;
		background-color: #12D18E !important;
		color: white !important;
	}


	.delete-btn {
		width: 45%;
		border-radius: 6.25rem;
		height: 3.5rem;
		background-color: #F75555 !important;
		color: white !important;
	}

	.quit-btn {
		width: 45%;
		border-radius: 6.25rem;
		height: 3.5rem;
		color: #F75555 !important;
	}

	.rate {
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 0.5rem 0;
		color: #212121;
	}

	.delete-text {
		display: flex;
		justify-content: center;
		margin: 1rem 0;
	}
</style>