<template>
	<view>
		<!-- 现金账户&&模拟账户选项卡 -->
		<u-tabs-swiper ref="tabs" :list="list" :is-scroll="false" :current="current" active-color="#12D18E"
			inactive-color="#9D9E9E" @change="changeTabHandler" bar-width='300'></u-tabs-swiper>

		<!-- 现金账户 -->
		<u-collapse :arrow="false" class="dropdowm-first" v-if='current === 0'>
			<view class="forbox" v-for="(item, index) in itemList" :key='item.id'>
				<!-- 活跃账户 -->
				<view class="leftbox">
					<text class="txt"
						v-if="item.head == 'CFD US Dollar1'">{{$t('my-account.my-account.5qzy4f5vw1c0')}}</text>
				</view>

				<u-collapse-item :title="item.head">
					<!-- 可用&&收益&&损益&&保证金 -->
					<view class="box">
						<view class="small-box" v-for='every in dataArr' :key='every.name'>
							<text>{{every.name}}</text>:<text :style="{'color':every.color}"
								class="namestyle">{{every.money}}</text>
						</view>
					</view>
					<!-- 充值等按钮 -->
					<scroll-view scroll-x="true">
						<view class="bottom-box">
							<view class="bottom-small-box" @click='topUp({res:res,item:item})' v-for='res in item.body'
								:key='item.name'>
								<u-icon :name="res.icon" color="#12D18E" size="64"></u-icon>
								<scroll-view scroll-x="true">
									<span class="text">{{res.name}}</span>
								</scroll-view>
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
				<!-- 活跃账户 -->
				<view class="leftbox">
					<text class="txt"
						v-if="item.head == 'CFD US Dollar1'">{{$t('my-account.my-account.5qzy4f5vw1c0')}}</text>
				</view>

				<u-collapse-item :title="item.head">
					<!-- 可用&&收益&&损益&&保证金 -->
					<view class="box">
						<view class="small-box" v-for='every in dataArr' :key='every.name'>
							<text>{{every.name}}</text>:<text :style="{'color':every.color}"
								class="namestyle">{{every.money}}</text>
						</view>
					</view>
					<scroll-view scroll-x="true">
						<view class="bottom-box">
							<view class="bottom-small-box" @click='topUpTest({res:res,item:item})'
								v-for='res in item.body' :key='item.name'>
								<u-icon :name="res.icon" color="#12D18E" size="64"></u-icon>
								<scroll-view scroll-x="true">
									<span class="text">{{res.name}}</span>
								</scroll-view>
							</view>
						</view>
					</scroll-view>
				</u-collapse-item>
				<view class="rightbox">{{item.money}}</view>
			</view>
		</u-collapse>

		<!-- 现金账户&&模拟账户删除账户 -->
		<u-popup v-model="alertBox" border-radius='24' mode="bottom" width="500rpx" height="140px"
			:mask-close-able='false'>
			<text class="delete-text">{{$t('my-account.my-account.5qzy4f5vxbo0')}}</text>
			<view class="delete-user-btn1">
				<u-button @click="alertBox = false;" :hair-line="false"
					class="quit-btn">{{$t('my-account.my-account.5qzy4f5vxm00')}}</u-button>
				<u-button @click="deleteUserHandler" :hair-line="false"
					class="delete-btn">{{$t('my-account.my-account.5qzy4f5vxr00')}}</u-button>
			</view>
		</u-popup>


		<!-- 现金账户&&模拟账户重命名 -->
		<u-popup v-model="show" mode="bottom" width="500rpx" height="180px" border-radius='24' :mask-close-able='false'>
			<text class="rename">{{$t('my-account.my-account.5qzy4f5vxvo0')}}</text>
			<u-field v-model="mobile" :label="$t('my-account.my-account.5qzy4f5vy180')"
				:placeholder="$t('my-account.my-account.5qzy4f5vy5w0')" @input='renameHandler' :border-top='false'
				:border-bottom='false'>
			</u-field>
			<view class="delete-user-btn">
				<u-button @click="updateName" class="update-btn" :hair-line="false"
					v-bind:class="{'class1':Boolean(mobile)}"
					ref='updateRename'>{{$t('my-account.my-account.5qzy4f5vycs0')}}</u-button>
			</view>
		</u-popup>

		<!-- 现金账户登录信息 -->
		<u-popup v-model="showLogin" mode="bottom" width="500rpx" height="18.75rem" border-radius='24'
			:mask-close-able='false'>
			<text class="userinfo">{{$t('my-account.my-account.5qzy4f5vykc0')}}</text>
			<u-cell-group :border='false'>
				<u-cell-item :title="resItem.name" :value="resItem.value" v-for='resItem in dataList'
					:key='resItem.name' :arrow='false' :value-style="{'color':'#212121','font-weight':'800'}"
					:border-top='false' :border-bottom='false'>
					<u-icon :name='resItem.icon' slot='right-icon' color='#12D18E' size="32"></u-icon>
				</u-cell-item>

				<u-cell-item :title="$t('my-account.my-account.5qzy4f5vyos0')" :arrow='false' :border-top='false'
					:border-bottom='false'></u-cell-item>

				<u-cell-item :title="rateValue" arrow-direction='down' :border-bottom='false' :border-top='false'
					@click="changeModelHandler">
					<u-popup v-model="showModel" mode='bottom' height="18.75rem" :mask-close-able='false'>
						<view class="rate">{{$t('my-account.my-account.5qzy4f5vyso0')}}</view>

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
								v-bind:class="{'class1':Boolean(value)}">{{$t('my-account.my-account.5qzy4f5vyz80')}}</u-button>
						</view>

						<!-- <view v-for="result in dataListValue" :key='result.name' class="cellBox">{{result.value}}</view> -->
						<!-- <u-button @click="showModel = false;" :hair-line="false" class="yes-btn">完成</u-button> -->
						<!-- <view class="delete-user-btn">
							<u-button @click="showModel = false;" class="userinfoquit-btn"
								:hair-line="false">{{$t('my-account.my-account.5qzy4f5vyz80')}}</u-button>
						</view> -->
					</u-popup>
				</u-cell-item>
			</u-cell-group>

			<view class="delete-user-btn2">
				<u-button @click="showLogin = false;" class="userinfoquit-btn"
					:hair-line="false">{{$t('my-account.my-account.5qzy4f5vxm00')}}</u-button>
			</view>
		</u-popup>

		<!-- 添加账户按钮 -->
		<view class="cash-btn">
			<u-button class="btn" v-if="current===0"
				@click='addCashUser'>{{$t('my-account.my-account.5qzy4f5vz380')}}</u-button>
			<u-button class="btn" v-if="current===1"
				@click='addSimulationUser'>{{$t('my-account.my-account.5qzy4f5vz8k0')}}</u-button>
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
					name: this.$t('my-account.my-account.5qzy4f5vzd40')
				}, {
					name: this.$t('my-account.my-account.5qzy4f5vzgo0')
				}],

				//账户名_登录信息 遍历登录和服务器两个单元格的数组
				dataList: [{
						name: this.$t('my-account.my-account.5qzy4f5vzl80'),
						value: '125804',
						icon: 'file-text'
					},
					{
						name: this.$t('my-account.my-account.5qzy4f5vzps0'),
						value: 'Capital.com-Real',
						icon: 'file-text'
					}
				],
				//账户名_登录信息 便利杠杆率的数组
				dataListValue: [{
						name: this.$t('my-account.my-account.5qzy4f5vzl80'),
						value: '30:1'
					},
					{
						name: this.$t('my-account.my-account.5qzy4f5vzps0'),
						value: '50:1'
					},
					{
						name: this.$t('my-account.my-account.5qzy4f5vzu40'),
						value: '100:1'
					},
					{
						name: this.$t('my-account.my-account.5qzy4f5vzzk0'),
						value: '200:1'
					},
					{
						name: this.$t('my-account.my-account.5qzy4f5w0600'),
						value: '300:1'
					},
					{
						name: this.$t('my-account.my-account.5qzy4f5w09s0'),
						value: '400:1'
					},
				],

				//遍历现金账户数组
				itemList: [{
					head: "CFD US Dollar1",
					body: [{
							name: this.$t('my-account.my-account.5qzy4f5w0dw0'),
							icon: '../../static/fonts/Group168.png'
						},
						{
							name: this.$t('my-account.my-account.5qzy4f5w0i00'),
							icon: '../../static/fonts/Group169.png'
						},
						{
							name: this.$t('my-account.my-account.5qzy4f5w0lk0'),
							icon: '../../static/fonts/Group170.png'
						},
						{
							name: this.$t('my-account.my-account.5qzy4f5w0p40'),
							icon: '../../static/fonts/Group172.png'
						},
						{
							name: this.$t('my-account.my-account.5qzy4f5vxvo0'),
							icon: '../../static/fonts/Group173.png'
						},
						{
							name: this.$t('my-account.my-account.5qzy4f5w0ss0'),
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
							name: this.$t('my-account.my-account.5qzy4f5w0zg0'),
							icon: '../../static/fonts/Group171.png'
						},
						{
							name: this.$t('my-account.my-account.5qzy4f5w0dw0'),
							icon: '../../static/fonts/Group168.png'
						},
						{
							name: this.$t('my-account.my-account.5qzy4f5vxvo0'),
							icon: '../../static/fonts/Group173.png'
						},
						{
							name: this.$t('my-account.my-account.5qzy4f5w0i00'),
							icon: '../../static/fonts/Group169.png'
						}

					],
					open: false,
					money: '$225',
					id: 2
				}, {
					head: "CFD US Dollar3",
					body: [{
							name: this.$t('my-account.my-account.5qzy4f5w0dw0'),
							icon: '../../static/fonts/Group168.png'
						},
						{
							name: this.$t('my-account.my-account.5qzy4f5w0i00'),
							icon: '../../static/fonts/Group169.png'
						},
						{
							name: this.$t('my-account.my-account.5qzy4f5w0lk0'),
							icon: '../../static/fonts/Group170.png'
						}

					],
					open: false,
					money: '$225',
					id: 3
				}],

				//遍历模拟账户数组
				itemListTest: [{
					head: "CFD US Dollar1",
					body: [{
							name: this.$t('my-account.my-account.5qzy4f5w13k0'),
							icon: '../../static/fonts/Group171(1).png'
						},
						{
							name: this.$t('my-account.my-account.5qzy4f5w0p40'),
							icon: '../../static/fonts/Group172.png'
						},
						{
							name: this.$t('my-account.my-account.5qzy4f5vxvo0'),
							icon: '../../static/fonts/Group173.png'
						},
						{
							name: this.$t('my-account.my-account.5qzy4f5w0ss0'),
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
							name: this.$t('my-account.my-account.5qzy4f5w0zg0'),
							icon: '../../static/fonts/Group171.png'
						},
						{
							name: this.$t('my-account.my-account.5qzy4f5w0dw0'),
							icon: '../../static/fonts/Group168.png'
						},
						{
							name: this.$t('my-account.my-account.5qzy4f5w0i00'),
							icon: '../../static/fonts/Group169.png'
						}

					],
					open: false,
					money: '$225',
					id: 2
				}],

				//遍历现金账户&&模拟账户每个单元格里面内容的数组
				dataArr: [{
						name: this.$t('my-account.my-account.5qzy4f5w18c0'),
						money: '$225',
						color: "#212121"
					},
					{
						name: this.$t('my-account.my-account.5qzy4f5w1bo0'),
						money: '$22',
						color: "#212121"
					},
					{
						name: this.$t('my-account.my-account.5qzy4f5w1eg0'),
						money: '$2223',
						color: "#FFC20C"
					},
					{
						name: this.$t('my-account.my-account.5qzy4f5w1hk0'),
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
			//删除账户
			deleteUserHandler() {
				this.alertBox = false
			},
			//重命名  待完成
			updateName() {
				this.show = false
			},
			//杠杆率弹窗完成按钮事件
			changeEventHandler() {
				this.showModel = false
				this.rateValue = this.value
			},
			//重命名输入框事件
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
				if (res.res.name == this.$t('my-account.my-account.5qzy4f5w0dw0')) {
					uni.navigateTo({
						url: "/pages/top-up/top-up"
					})
				} else if (res.res.name == this.$t('my-account.my-account.5qzy4f5w0p40')) {
					uni.navigateTo({
						url: '/pages/trading-options/trading-options'
					})
				} else if (res.res.name == this.$t('my-account.my-account.5qzy4f5vxvo0')) {
					this.show = true
					this.mobile = res.item.head
				} else if (res.res.name == this.$t('my-account.my-account.5qzy4f5w0ss0')) {
					this.alertBox = true
				} else if (res.res.name == this.$t('my-account.my-account.5qzy4f5w0zg0')) {
					this.showLogin = true
				} else if (res.res.name == this.$t('my-account.my-account.5qzy4f5w0i00')) {
					uni.navigateTo({
						url: './transfer-money/transfer-money'
					})
				} else if (res.res.name == this.$t('my-account.my-account.5qzy4f5w0lk0')) {
					uni.navigateTo({
						url: '/pages/my-account/withdraw-cash/withdraw-cash'
					})
				}

			},
			//模拟账户点击事件
			topUpTest(res) {
				if (res.res.name == this.$t('my-account.my-account.5qzy4f5w13k0')) {
					uni.navigateTo({
						url: '/pages/regulator/regulator'
					})
				} else if (res.res.name == this.$t('my-account.my-account.5qzy4f5w0ss0')) {
					this.alertBox = true
				} else if (res.res.name == this.$t('my-account.my-account.5qzy4f5w0p40')) {
					uni.navigateTo({
						url: '/pages/trading-options/trading-options'
					})
				} else if (res.res.name == this.$t('my-account.my-account.5qzy4f5vxvo0')) {
					this.show = true
					this.mobile = res.item.head
				} else if (res.res.name == this.$t('my-account.my-account.5qzy4f5w0zg0')) {
					this.showLogin = true
				} else if (res.res.name == this.$t('my-account.my-account.5qzy4f5w0i00')) {
					uni.navigateTo({
						url: './transfer-money/transfer-money'
					})
				} else if (res.res.name == this.$t('my-account.my-account.5qzy4f5w0lk0')) {
					uni.navigateTo({
						url: '/pages/my-account/withdraw-cash/withdraw-cash'
					})
				} else if (res.res.name == this.$t('my-account.my-account.5qzy4f5w0dw0')) {
					uni.navigateTo({
						url: "/pages/top-up/top-up"
					})
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
		border: 1px solid #EFEFEF;
		border-radius: 1rem;
		display: flex;
		// width: 100%;
		// border: 1px solid;
		padding: 1rem;
		// align-items: center;
		margin: 0.5rem 1rem;

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
		// border-bottom: 1px solid #E5E5E5;
		height: 3rem;
		margin: 0 1rem;
		// background-color: #12D18E;
		// border-radius: 1rem;
		padding: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.top-small-box {
			display: flex;
			flex-direction: column;
		}
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
			margin-bottom: 0.5rem;

			.namestyle {
				padding-left: 0.4rem;
			}
		}
	}

	.bottom-box {
		width: 100%;
		padding: 0.5rem 0.5rem;
		display: flex;
		margin-top: 0.5rem;

		.bottom-small-box {
			// display: flex;
			margin-right: 1rem;
			width: 20%;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			// overflow-x: auto;

			.text {
				font-size: 0.7rem;
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
		background-color: #eeeeee;
		// color: white !important;
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