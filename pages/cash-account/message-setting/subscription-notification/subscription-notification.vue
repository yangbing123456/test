<template>
	<view>
		<!-- 主要内容盒子 -->
		<view v-for='res in todayArr' :key='res.id'>
			<text class="text">{{res.time}}</text>
			<u-cell-group :border='false' v-for='resitem in res.cell' :key='resitem.id'>
				<!-- 单元格cell -->
				<u-cell-item :icon="resitem.icon" :title="resitem.name" :label='resitem.label' :border-bottom='false'
					:border-top='false' :arrow='false' :title-style="{'color':'#212121'}"
					:label-style="{'color':'#9D9E9E','font-size':'0.7rem'}" @click='changeHandler(resitem)'>
				</u-cell-item>
				<!-- 复选款 -->
				<view class="check-box">
					<u-checkbox-group @change="checkboxGroupChange">
						<u-checkbox @change="checkboxChange" v-model="item.checked" v-if='item.bool'
							v-for="(item, index) in resitem.list" :key="index" :name="item.name" active-color='#12D18E'
							:disabled="item.disabled">{{item.name}}</u-checkbox>
					</u-checkbox-group>
				</view>
			</u-cell-group>
		</view>
		<!-- 底部提示文本 -->
		<view class="bottomboxbtn">
			<text>{{$t('subscription-notification.subscription-notification.5qzza6qlfsc0')}}</text>
			<u-button @click="checkedAll" class="btn">{{value}}</u-button>
		</view>

		<!-- 点击部分单元格弹窗 -->
		<u-popup v-model="show" mode="bottom" border-radius='24' width="500rpx" height="180px" :mask-close-able='false'>
			<text class="notice">{{$t('subscription-notification.subscription-notification.5qzza6qlh2g0')}}</text>
			<view style="width: 100%;height: 6rem;">
				<view class="middle-box">
					<text class="noticeText">{{$t('subscription-notification.subscription-notification.5qzza6qlh8w0')}}</text>
				</view>
			</view>
			<view class="btn1">
				<u-button @click="yesHandler" class="yes-btn" :hair-line="false">{{$t('subscription-notification.subscription-notification.5qzza6qlhdc0')}}</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false, //弹窗状态
				value: this.$t('subscription-notification.subscription-notification.5qzza6qljwk0'), //按钮文本
				//主要内容数组
				todayArr: [{
						time: this.$t('subscription-notification.subscription-notification.5qzza6qlhho0'),
						cell: [{
							name: this.$t('subscription-notification.subscription-notification.5qzza6qlhmg0'),
							label: this.$t('subscription-notification.subscription-notification.5qzza6qlht40'),
							// money: '+$392.83',
							icon: '../../../static/fonts/Group192.png',
							id: 1,
							status: this.$t(
								'subscription-notification.subscription-notification.5qzza6qlhxg0'),
							list: [{
									name: this.$t(
										'subscription-notification.subscription-notification.5qzza6qli1o0'
									),
									checked: false,
									disabled: false,
									bool: true
								},
								{
									name: this.$t(
										'subscription-notification.subscription-notification.5qzza6qli8g0'
									),
									checked: false,
									disabled: false,
									bool: true
								},
							],

						}],
						id: 1
					},
					{
						time: this.$t('subscription-notification.subscription-notification.5qzza6qlhho0'),
						cell: [{
								name: this.$t('subscription-notification.subscription-notification.5qzza6qlic80'),
								label: this.$t('subscription-notification.subscription-notification.5qzza6qligg0'),
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 1,
								status: this.$t(
									'subscription-notification.subscription-notification.5qzza6qlhxg0'),
								list: [{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli1o0'
										),
										checked: false,
										disabled: false,
										bool: true
									},
									{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli8g0'
										),
										checked: false,
										disabled: false,
										bool: true
									},
								],
							},
							{
								name: this.$t('subscription-notification.subscription-notification.5qzza6qlik40'),
								label: this.$t('subscription-notification.subscription-notification.5qzza6qlio40'),
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 2,
								status: this.$t(
									'subscription-notification.subscription-notification.5qzza6qlhxg0'),
								list: [{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli1o0'
										),
										checked: false,
										disabled: false,
										bool: true
									},
									{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli8g0'
										),
										checked: false,
										disabled: false,
										bool: true
									},
								],
							},
							{
								name: this.$t('subscription-notification.subscription-notification.5qzza6qlik40'),
								label: this.$t('subscription-notification.subscription-notification.5qzza6qlio40'),
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 3,
								status: this.$t(
									'subscription-notification.subscription-notification.5qzza6qlhxg0'),
								list: [{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli1o0'
										),
										checked: false,
										disabled: false,
										bool: true
									},
									{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli8g0'
										),
										checked: false,
										disabled: false,
										bool: true
									},
								],
							},

						],
						id: 2
					},
					{
						time: this.$t('subscription-notification.subscription-notification.5qzza6qlis00'),
						cell: [{
								name: this.$t('subscription-notification.subscription-notification.5qzza6qlic80'),
								label: this.$t('subscription-notification.subscription-notification.5qzza6qligg0'),
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 1,
								status: this.$t(
									'subscription-notification.subscription-notification.5qzza6qlhxg0'),
								list: [{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli1o0'
										),
										checked: false,
										disabled: false,
										bool: true
									},
									{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli8g0'
										),
										checked: false,
										disabled: false,
										bool: true
									},
								],
							},
							{
								name: this.$t('subscription-notification.subscription-notification.5qzza6qlik40'),
								label: this.$t('subscription-notification.subscription-notification.5qzza6qlio40'),
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 2,
								status: this.$t(
									'subscription-notification.subscription-notification.5qzza6qlhxg0'),
								list: [{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli1o0'
										),
										checked: false,
										disabled: false,
										bool: true
									},
									{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli8g0'
										),
										checked: false,
										disabled: false,
										bool: true
									},
								],
							},
							{
								name: this.$t('subscription-notification.subscription-notification.5qzza6qlivk0'),
								label: this.$t('subscription-notification.subscription-notification.5qzza6qlizk0'),
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 3,
								status: this.$t(
									'subscription-notification.subscription-notification.5qzza6qlhxg0'),
								list: [{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli1o0'
										),
										checked: true,
										disabled: true,
										bool: true
									},
									{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli8g0'
										),
										checked: true,
										disabled: true,
										bool: true
									},
								],
							},
							{
								name: this.$t('subscription-notification.subscription-notification.5qzza6qlj3g0'),
								label: this.$t('subscription-notification.subscription-notification.5qzza6qlj740'),
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 4,
								status: this.$t(
									'subscription-notification.subscription-notification.5qzza6qlhxg0'),
								list: [{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli1o0'
										),
										checked: true,
										disabled: true,
										bool: true
									},
									{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli8g0'
										),
										checked: true,
										disabled: true,
										bool: true
									},
								],
							},
							{
								name: this.$t('subscription-notification.subscription-notification.5qzza6qljb80'),
								label: this.$t('subscription-notification.subscription-notification.5qzza6qljik0'),
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 5,
								status: this.$t(
									'subscription-notification.subscription-notification.5qzza6qlhxg0'),
								list: [{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli1o0'
										),
										checked: true,
										disabled: true,
										bool: true
									},
									{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli8g0'
										),
										checked: true,
										disabled: true,
										bool: true
									},
								],
							},

						],
						id: 3
					},
					{
						time: this.$t('subscription-notification.subscription-notification.5qzza6qljm80'),
						cell: [{
								name: this.$t('subscription-notification.subscription-notification.5qzza6qlic80'),
								label: this.$t('subscription-notification.subscription-notification.5qzza6qligg0'),
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 1,
								status: this.$t(
									'subscription-notification.subscription-notification.5qzza6qlhxg0'),
								list: [{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli1o0'
										),
										checked: false,
										disabled: false,
										bool: true
									},
									{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli8g0'
										),
										checked: false,
										disabled: false,
										bool: true
									},
								],
							},
							{
								name: this.$t('subscription-notification.subscription-notification.5qzza6qlik40'),
								label: this.$t('subscription-notification.subscription-notification.5qzza6qlio40'),
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 2,
								status: this.$t(
									'subscription-notification.subscription-notification.5qzza6qlhxg0'),
								list: [{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli1o0'
										),
										checked: false,
										disabled: false,
										bool: true
									},
									{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli8g0'
										),
										checked: false,
										disabled: false,
										bool: true
									},
								],
							},
							{
								name: this.$t('subscription-notification.subscription-notification.5qzza6qlik40'),
								label: this.$t('subscription-notification.subscription-notification.5qzza6qlio40'),
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 3,
								status: this.$t(
									'subscription-notification.subscription-notification.5qzza6qlhxg0'),
								list: [{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli1o0'
										),
										checked: false,
										disabled: false,
										bool: true
									},
									{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli8g0'
										),
										checked: false,
										disabled: false,
										bool: true
									},
								],
							},

						],
						id: 4
					},
					{
						time: this.$t('subscription-notification.subscription-notification.5qzza6qljq00'),
						cell: [{
								name: this.$t('subscription-notification.subscription-notification.5qzza6qlic80'),
								label: this.$t('subscription-notification.subscription-notification.5qzza6qligg0'),
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 1,
								status: this.$t(
									'subscription-notification.subscription-notification.5qzza6qlhxg0'),
								list: [{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli1o0'
										),
										checked: false,
										disabled: false,
										bool: true
									},
									{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli8g0'
										),
										checked: false,
										disabled: false,
										bool: true
									},
								],
							},
							{
								name: this.$t('subscription-notification.subscription-notification.5qzza6qlik40'),
								label: this.$t('subscription-notification.subscription-notification.5qzza6qlio40'),
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 2,
								status: this.$t(
									'subscription-notification.subscription-notification.5qzza6qlhxg0'),
								list: [{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli1o0'
										),
										checked: false,
										disabled: false,
										bool: true
									},
									{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli8g0'
										),
										checked: false,
										disabled: false,
										bool: true
									},
								],
							},
							{
								name: this.$t('subscription-notification.subscription-notification.5qzza6qlik40'),
								label: this.$t('subscription-notification.subscription-notification.5qzza6qlio40'),
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 3,
								status: this.$t(
									'subscription-notification.subscription-notification.5qzza6qlhxg0'),
								list: [{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli1o0'
										),
										checked: false,
										disabled: false,
										bool: false
									},
									{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qli8g0'
										),
										checked: false,
										disabled: false,
										bool: false
									},
									{
										name: this.$t(
											'subscription-notification.subscription-notification.5qzza6qljt40'
										),
										checked: false,
										disabled: false,
										bool: true
									}
								],
							},

						],
						id: 5
					},
				],
			}
		},
		methods: {
			// 选中某个复选框时，由checkbox时触发
			checkboxChange(e) {
				// console.log(e)
			},
			// 选中任一checkbox时，由checkbox-group触发
			checkboxGroupChange(e) {
				// console.log(e);
			},
			//弹窗确定按钮事件
			yesHandler() {
				this.show = false
			},
			//点击单元格事件
			changeHandler(item) {
				if (item.name == this.$t('subscription-notification.subscription-notification.5qzza6qlivk0') || item
					.name == this.$t('subscription-notification.subscription-notification.5qzza6qlj3g0') || item.name ==
					this.$t('subscription-notification.subscription-notification.5qzza6qljb80')) {
					this.show = true
				}
			},
			// changeHandler(item) {
			// 	uni.navigateTo({
			// 		url: '/pages/account-manage/equipment-activities/equipment-activities-children/equipment-activities-children'
			// 	})
			// },

			//按钮事件
			checkedAll() {
				this.todayArr.forEach(res => {
					res.cell.forEach(result => {
						result.list.map(val => {
							if (val.checked) {
								val.checked = false
								this.value = this.$t(
									'subscription-notification.subscription-notification.5qzza6qljwk0'
								)
							} else {
								val.checked = true
								this.value = this.$t(
									'subscription-notification.subscription-notification.5qzza6qljzw0'
								)
							}

						})
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.text {
		display: block;
		width: 100%;
		padding: 1rem 1rem 0 1rem;
		color: #9D9E9E;
	}

	.check-box {
		margin: 0 2.3rem;
	}

	.bottomboxbtn {
		/* width: 100%; */
		margin: 1rem;
		display: flex;
		flex-direction: column;

		.btn {
			width: 100%;
			border-radius: 6.25rem;
			background-color: #12D18E;
			color: white;
			margin: 1rem 0;
		}
	}

	.notice {
		display: flex;
		justify-content: center;
		margin: 0.5rem 0;
	}

	.noticeText {
		padding: 0.5rem 1rem 0 1rem;
		color: #9D9E9E;
	}

	.middle-box {
		display: flex;
	}

	.btn1 {
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: absolute;
		bottom: 10px;
		width: 100%;

		.yes-btn {
			width: 90%;
			border-radius: 6.25rem;
			color: white;
			background-color: #12D18E;
		}
	}
</style>