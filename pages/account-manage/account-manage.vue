<template>
	<view class="container">
		<view class="cell">
			<u-cell-group :border='false'>
				<u-cell-item :title="item.title" :arrow="item.bool" @click='myAccount(item)' v-for="item in dataArr"
					:key='item.title' :border-top='false' :border-bottom='false' :title-style="{'color':'#212121'}">
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
				dataArr: [{
						title: '我的账户',
						name: 'account-fill',
						color: '#12D18E',
						bool: true,
						// value: this.zt
					},
					{
						title: '账单',
						name: '../../static/fonts/Card1.png',
						color: '#12D18E',
						bool: true,
						value: ""
					},
					{
						title: '修改密码',
						name: 'lock-fill',
						color: '#12D18E',
						bool: true,
						value: ""
					},
					{
						title: '设备活动',
						name: '../../static/fonts/Card1.png',
						color: '#12D18E',
						bool: true,
						value: ""
					},
				],
				// status: '',
				// zt: '',
			}
		},
		// onLoad(data) {
		// 	this.status = data.status
		// 	if (this.status >= 2) {
		// 		this.zt = ''
		// 	} else {
		// 		this.zt = '账户未激活'
		// 	}
		// },
		methods: {
			myAccount(item) {
				if (item.title == '我的账户') {
					uni.navigateTo({
						url: "/pages/my-account/my-account"
					})

					// if (this.status >= 2) {
					// 	uni.navigateTo({
					// 		url: "/pages/my-account/my-account"
					// 	})
					// } else {
					// 	uni.navigateTo({
					// 		url: '/pages/my-account/account-verification/account-verification'
					// 	})
					// }

				} else if (item.title == '账单') {
					uni.navigateTo({
						url: '/pages/account-manage/bill/bill'
					})
				} else if (item.title == '修改密码') {
					uni.navigateTo({
						url: '/pages/account-manage/update-password/update-password'
					})
				} else if (item.title == '设备活动') {
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