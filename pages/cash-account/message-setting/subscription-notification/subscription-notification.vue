<template>
	<view>
		<view v-for='res in todayArr' :key='res.id'>
			<text class="text">{{res.time}}</text>
			<u-cell-group :border='false' v-for='resitem in res.cell' :key='resitem.id'>

				<u-cell-item :icon="resitem.icon" :title="resitem.name" :label='resitem.label' :border-bottom='false'
					:border-top='false' :arrow='false' :title-style="{'color':'#212121'}"
					:label-style="{'color':'#9D9E9E','font-size':'10px'}" @click='changeHandler(resitem)'>
				</u-cell-item>

				<view class="check-box">
					<u-checkbox-group @change="checkboxGroupChange">
						<u-checkbox @change="checkboxChange" v-model="item.checked" v-if='item.bool'
							v-for="(item, index) in resitem.list" :key="index" :name="item.name" active-color='#12D18E'
							:disabled="item.disabled">{{item.name}}</u-checkbox>
					</u-checkbox-group>
				</view>
			</u-cell-group>
		</view>

		<view class="bottomboxbtn">
			<text>如果您希望停止接受我们的所有电子邮件，请点击下面“取消订阅所有”按钮。取消订阅可能需要一段时间才能生效，谢谢您的耐心等待。</text>
			<u-button @click="checkedAll" class="btn">{{value}}</u-button>
		</view>

		<u-popup v-model="show" mode="bottom" border-radius='24' width="500rpx" height="160px" :mask-close-able='false'>
			<text class="notice">关键更新</text>
			<view style="width: 100%;height: 6rem;">
				<view class="middle-box">
					<text class="noticeText">我们将始终向您发送关于您的资金转账和关键账户更新的通知和电子邮件</text>
				</view>
			</view>
			<view class="btn1">
				<u-button @click="yesHandler" class="yes-btn" :hair-line="false">好的</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				value: '订阅所有',
				todayArr: [{
						time: '交易结果',
						cell: [{
							name: '分享已关闭的交易结果',
							label: '交易关闭后分享交易结果',
							// money: '+$392.83',
							icon: '../../../static/fonts/Group192.png',
							id: 1,
							status: '处理完成',
							list: [{
									name: '推送通知',
									checked: false,
									disabled: false,
									bool: true
								},
								{
									name: '邮箱',
									checked: false,
									disabled: false,
									bool: true
								},
							],

						}],
						id: 1
					},
					{
						time: '交易结果',
						cell: [{
								name: '培训及交易策略',
								label: '成为更出色的交易者，并使用使我们教材、指南和视频创建您的交易策略',
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 1,
								status: '处理完成',
								list: [{
										name: '推送通知',
										checked: false,
										disabled: false,
										bool: true
									},
									{
										name: '邮箱',
										checked: false,
										disabled: false,
										bool: true
									},
								],
							},
							{
								name: '网络研讨会公告',
								label: '关注我们的网络研讨会，获取行业专家和经验丰富交易者的独特见解',
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 2,
								status: '处理完成',
								list: [{
										name: '推送通知',
										checked: false,
										disabled: false,
										bool: true
									},
									{
										name: '邮箱',
										checked: false,
										disabled: false,
										bool: true
									},
								],
							},
							{
								name: '网络研讨会公告',
								label: '关注我们的网络研讨会，获取行业专家和经验丰富交易者的独特见解',
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 3,
								status: '处理完成',
								list: [{
										name: '推送通知',
										checked: false,
										disabled: false,
										bool: true
									},
									{
										name: '邮箱',
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
						time: '报告',
						cell: [{
								name: '培训及交易策略',
								label: '成为更出色的交易者，并使用使我们教材、指南和视频创建您的交易策略',
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 1,
								status: '处理完成',
								list: [{
										name: '推送通知',
										checked: false,
										disabled: false,
										bool: true
									},
									{
										name: '邮箱',
										checked: false,
										disabled: false,
										bool: true
									},
								],
							},
							{
								name: '网络研讨会公告',
								label: '关注我们的网络研讨会，获取行业专家和经验丰富交易者的独特见解',
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 2,
								status: '处理完成',
								list: [{
										name: '推送通知',
										checked: false,
										disabled: false,
										bool: true
									},
									{
										name: '邮箱',
										checked: false,
										disabled: false,
										bool: true
									},
								],
							},
							{
								name: '追加保证金通知提醒',
								label: '当交易导致您的账户资金不足时，您将收到追加保证金通知',
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 3,
								status: '处理完成',
								list: [{
										name: '推送通知',
										checked: true,
										disabled: true,
										bool: true
									},
									{
										name: '邮箱',
										checked: true,
										disabled: true,
										bool: true
									},
								],
							},
							{
								name: '平仓提醒',
								label: '当您的所有交易被关闭以防止进一步损失时，将发省强行平仓',
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 4,
								status: '处理完成',
								list: [{
										name: '推送通知',
										checked: true,
										disabled: true,
										bool: true
									},
									{
										name: '邮箱',
										checked: true,
										disabled: true,
										bool: true
									},
								],
							},
							{
								name: '资金转账',
								label: '资金转账将在成功存款和提款时向您发送即时通知',
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 5,
								status: '处理完成',
								list: [{
										name: '推送通知',
										checked: true,
										disabled: true,
										bool: true
									},
									{
										name: '邮箱',
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
						time: '通知',
						cell: [{
								name: '培训及交易策略',
								label: '成为更出色的交易者，并使用使我们教材、指南和视频创建您的交易策略',
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 1,
								status: '处理完成',
								list: [{
										name: '推送通知',
										checked: false,
										disabled: false,
										bool: true
									},
									{
										name: '邮箱',
										checked: false,
										disabled: false,
										bool: true
									},
								],
							},
							{
								name: '网络研讨会公告',
								label: '关注我们的网络研讨会，获取行业专家和经验丰富交易者的独特见解',
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 2,
								status: '处理完成',
								list: [{
										name: '推送通知',
										checked: false,
										disabled: false,
										bool: true
									},
									{
										name: '邮箱',
										checked: false,
										disabled: false,
										bool: true
									},
								],
							},
							{
								name: '网络研讨会公告',
								label: '关注我们的网络研讨会，获取行业专家和经验丰富交易者的独特见解',
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 3,
								status: '处理完成',
								list: [{
										name: '推送通知',
										checked: false,
										disabled: false,
										bool: true
									},
									{
										name: '邮箱',
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
						time: '通讯',
						cell: [{
								name: '培训及交易策略',
								label: '成为更出色的交易者，并使用使我们教材、指南和视频创建您的交易策略',
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 1,
								status: '处理完成',
								list: [{
										name: '推送通知',
										checked: false,
										disabled: false,
										bool: true
									},
									{
										name: '邮箱',
										checked: false,
										disabled: false,
										bool: true
									},
								],
							},
							{
								name: '网络研讨会公告',
								label: '关注我们的网络研讨会，获取行业专家和经验丰富交易者的独特见解',
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 2,
								status: '处理完成',
								list: [{
										name: '推送通知',
										checked: false,
										disabled: false,
										bool: true
									},
									{
										name: '邮箱',
										checked: false,
										disabled: false,
										bool: true
									},
								],
							},
							{
								name: '网络研讨会公告',
								label: '关注我们的网络研讨会，获取行业专家和经验丰富交易者的独特见解',
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 3,
								status: '处理完成',
								list: [{
										name: '推送通知',
										checked: false,
										disabled: false,
										bool: false
									},
									{
										name: '邮箱',
										checked: false,
										disabled: false,
										bool: false
									},
									{
										name: '电话',
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
			yesHandler() {
				this.show = false
			},
			changeHandler(item) {
				if (item.name == '追加保证金通知提醒' || item.name == '平仓提醒' || item.name == '资金转账') {
					this.show = true
				}
			},
			// changeHandler(item) {
			// 	uni.navigateTo({
			// 		url: '/pages/account-manage/equipment-activities/equipment-activities-children/equipment-activities-children'
			// 	})
			// },
			checkedAll() {
				this.todayArr.forEach(res => {
					res.cell.forEach(result => {
						result.list.map(val => {
							if (val.checked) {
								val.checked = false
								this.value = '订阅所有'
							} else {
								val.checked = true
								this.value = '取消订阅所有'
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
		margin: 0 2rem;
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