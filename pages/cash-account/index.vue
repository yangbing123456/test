<template>
	<view class="container">
		<view class="quick-change">
			<text class="text">快速切换到模拟模式</text>
		</view>
		<view class="cell">
			<u-cell-group :border='false'>
				<u-cell-item :title="item.title" :arrow="item.bool" @click='accountManage(item)' v-for="item in dataArr"
					:key='item.title' :border-top='false' :border-bottom='false' :title-style="{'color':'#212121'}">
					<u-icon slot="icon" size="32" :name="item.name" :color='item.color'></u-icon>
				</u-cell-item>
			</u-cell-group>
		</view>
		<view class="quit-btn">
			<u-button class="btn" :hair-line="false">退出登录</u-button>
		</view>
	</view>
</template>

<script>
	// import { wxLogin } from '@/api/test.js'
	export default {
		data() {
			return {
				dataArr: [{
						title: '账户管理',
						name: 'account-fill',
						color: '#FFA82F',
						bool: true
					},
					{
						title: '通用设置',
						name: 'setting-fill',
						color: '#FE8893',
						bool: true
					},
					{
						title: '消息设置',
						name: 'email',
						color: '#59DFB0',
						bool: true
					},
					{
						title: '帮助中心',
						name: '../../static/fonts/Report.png',
						color: '#8165FF',
						bool: true
					},
				],
				value: ''
			}
		},
		mounted() {
			this.value = Math.floor(Math.random() * 10)

			//调用
			// wxLogin().then(res => {
			// 	console.log('成功登录结果：', res);
			// }).catch(err => {
			// 	console.error('失败登录结果:', err);
			// }).finally(() => {
			// 	console.error('最终回调');
			// });
		},

		methods: {
			accountManage(item) {
				if (item.title == '账户管理') {
					uni.navigateTo({
						url: "/pages/account-manage/account-manage?status=" + this.value
					})
				} else if (item.title == '通用设置') {
					uni.navigateTo({
						url: '/pages/cash-account/general-setting/general-setting'
					})
				} else if (item.title == '消息设置') {
					uni.navigateTo({
						url: '/pages/cash-account/message-setting/message-setting'
					})
				} else if (item.title == '帮助中心') {
					uni.navigateTo({
						url: '/pages/cash-account/help-center/help-center'
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

	.quick-change {
		/* width: 343px; */
		height: 4rem;
		background-color: #12D18E;
		border-radius: 0.5rem;
		display: flex;
		align-items: center;
		background-image: url('../../static/fonts/Frame.png');
		background-repeat: no-repeat;
		background-size: 2rem 2rem;
		background-position: 1rem center;

		.text {
			color: white;
			display: block;
			margin-left: 3.5rem;
		}
	}

	.cell {
		/* width: 343px; */
		height: 4rem;
		margin-bottom: 0.5rem;
	}

	.quit-btn {
		margin: 0 1rem;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		/* width: 343px; */
		height: 3.5rem;

		.btn {
			border-radius: 6.25rem;
			color: #9D9E9E;
			border: 1px solid #F5F5F5;
		}

	}

	.u-cell_title {
		display: block;
		width: 12.5rem;
		padding-left: 1rem;
	}
</style>