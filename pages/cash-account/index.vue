<template>
	<view class="container">
		<!-- 切换模式 -->
		<view class="quick-change">
			<text class="text">{{$t('cash-account.index.5qzy2gp8ieo0')}}</text>
		</view>

		<!-- 中间内容部分 -->
		<view class="cell">
			<u-cell-group :border='false'>
				<u-cell-item :title="item.title" :arrow="item.bool" @click='accountManage(item)' v-for="item in dataArr"
					:key='item.title' :border-top='false' :border-bottom='false' :title-style="{'color':'#212121'}">
					<u-icon slot="icon" size="32" :name="item.name" :color='item.color'></u-icon>
				</u-cell-item>
			</u-cell-group>
		</view>

		<!-- 退出登录按钮 -->
		<view class="quit-btn">
			<u-button class="btn" :hair-line="false"
				@click='quitLogin'>{{$t('cash-account.index.5qzy2gp8jp40')}}</u-button>
		</view>

	</view>
</template>

<script>
	// import { wxLogin } from '@/api/test.js'
	export default {
		data() {
			return {
				//dataArr是用来遍历cell单元格的数组
				dataArr: [{
						title: this.$t('cash-account.index.5qzy2gp8k140'),
						name: 'account-fill',
						color: '#FFA82F',
						bool: true
					},
					{
						title: this.$t('cash-account.index.5qzy2gp8ka40'),
						name: 'setting-fill',
						color: '#FE8893',
						bool: true
					},
					{
						title: this.$t('cash-account.index.5qzy2gp8kgg0'),
						name: 'email',
						color: '#59DFB0',
						bool: true
					},
					{
						title: this.$t('cash-account.index.5qzy2gp8kng0'),
						name: '../../static/fonts/Report.png',
						color: '#8165FF',
						bool: true
					},
				],
				value: '' //这个值是用来存放随机数，用来模拟账户是否激活的状态
			}
		},
		mounted() {

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
			//退出登录 直接跳转到登录页
			quitLogin() {
				uni.navigateTo({
					url: '/pages/login/RealLogin/RealLogin'
				})
			},

			/**
			 * @description:点击单元格触发事件
			 */
			accountManage(item) {
				if (item.title == this.$t('cash-account.index.5qzy2gp8k140')) { //账户管理
					this.value = Math.floor(Math.random() * 10) //随机数模拟账户激活状态
					console.log(this.value)
					uni.navigateTo({
						url: "/pages/account-manage/account-manage?status=" + this.value
					})
				} else if (item.title == this.$t('cash-account.index.5qzy2gp8ka40')) { //通用设置
					uni.navigateTo({
						url: '/pages/cash-account/general-setting/general-setting'
					})
				} else if (item.title == this.$t('cash-account.index.5qzy2gp8kgg0')) { //消息设置
					uni.navigateTo({
						url: '/pages/cash-account/message-setting/message-setting'
					})
				} else if (item.title == this.$t('cash-account.index.5qzy2gp8kng0')) { //帮助中心
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