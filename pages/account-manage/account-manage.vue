<template>
	<view class="container">
		<view class="cell">
			<u-cell-group :border='false'>
				<u-cell-item :title="item.title" :value='item.value' :arrow="item.bool" @click='myAccount(item)'
					v-for="item in dataArr" :key='item.title' :border-top='false' :border-bottom='false'
					:title-style="{'color':'#212121'}">
					<u-icon slot="icon" size="32" :name="item.name" :color='item.color'></u-icon>
				</u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//dataArr是用来遍历cell单元格的数组
				dataArr: [{
						title: this.$t('account-manage.account-manage.5qzy3octe4w0'),
						name: 'account-fill',
						color: '#12D18E',
						bool: true,
						value: ''
					},
					{
						title: this.$t('account-manage.account-manage.5qzy3octhhg0'),
						name: '../../static/fonts/Card1.png',
						color: '#12D18E',
						bool: true,
						value: ""
					},
					{
						title: this.$t('account-manage.account-manage.5qzy3octi4o0'),
						name: 'lock-fill',
						color: '#12D18E',
						bool: true,
						value: ""
					},
					{
						title: this.$t('account-manage.account-manage.5qzy3octibg0'),
						name: '../../static/fonts/Card1.png',
						color: '#12D18E',
						bool: true,
						value: ""
					},
				],
				status: '' //存放随机数，用来模拟账户激活与否的状态
			}
		},
		//接收路由传递过来的数据
		onLoad(data) {
			this.status = data.status
			data.status >= 2 ? this.dataArr[0].value = '' : this.dataArr[0].value = this.$t('account-manage.account-manage.5qzy3octigw0')

			// this.status = data.status
			// if (data.status >= 2) {
			// 	this.dataArr[0].value = ''
			// } else {
			// 	this.dataArr[0].value = '账户未激活'
			// }
		},
		methods: {
			/**
			 * @description:点击单元格事件
			 */
			myAccount(item) {
				if (item.title == this.$t('account-manage.account-manage.5qzy3octe4w0')) {//我的账户
					// uni.navigateTo({
					// 	url: "/pages/my-account/my-account"
					// })

					//这里判断值大小来决定跳转路由
					if (this.status >= 2) {
						uni.navigateTo({
							url: "/pages/my-account/my-account"
						})
					} else {
						uni.navigateTo({//账户未激活页面
							url: '/pages/my-account/account-verification/account-verification'
						})
					}
				} else if (item.title == this.$t('account-manage.account-manage.5qzy3octhhg0')) {//账单
					uni.navigateTo({
						url: '/pages/account-manage/bill/bill'
					})
				} else if (item.title == this.$t('account-manage.account-manage.5qzy3octi4o0')) {//修改密码
					uni.navigateTo({
						url: '/pages/account-manage/update-password/update-password'
					})
				} else if (item.title == this.$t('account-manage.account-manage.5qzy3octibg0')) {//设备活动
					uni.navigateTo({
						url: '/pages/account-manage/equipment-activities/equipment-activities'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	html,
	body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}

	.container {
		width: 100%;
		height: 100%;
		padding: 0 1rem;
	}

	.cell {
		/* width: 343px; */
		height: 4rem;
		margin-bottom: 0.5rem;
	}

	.u-cell_title {
		display: block;
		width: 12.5rem;
		padding-left: 1rem;
	}
</style>