<template>
	<view class="df all fdc aic jcc">
		<!-- 最上层注册和语言切换，后续可以抽历程公共组件 -->
		<!-- <view class="top df aic jcsb">
			<view class="df aic">
				<u-icon @click="goBack" name="arrow-leftward"></u-icon>
				<text class="fz18 fwb ml8">{{$t('register.register.5qzx5pfvva40')}}</text>
			</view>
			<text class="changeLanguage df aic jcc fz14 gray">{{$t('register.register.5qzx5pfvwhw0')}}</text>
		</view> -->

		<!-- 欢迎登录 -->
		<view class="box df fdc jcs">
			<view class="welcome fz20 mt35">
				{{$t('register.register.5qzx5pfvwqc0')}}
			</view>

			<!-- 表单 -->
			<u-form :model="form" labelPosition="top" ref="uForm">
				<u-form-item :label="$t('register.register.5qzx5pfvwvw0')" prop='name'>
					<u-input v-model="form.name" :placeholder="$t('register.register.5qzx5pfvx140')" />
				</u-form-item>

				<u-form-item :label="$t('register.register.5qzx5pfvx7g0')" prop='password'>
					<u-input v-model="form.password" :placeholder="$t('register.register.5qzx5pfvxcw0')"
						type='password' />
				</u-form-item>

			</u-form>
		</view>
		<!-- 下方说明文字，也可以抽离 -->
		<view class="bottom">
			<p class="desc df jcc fz14">{{$t('register.register.5qzx5pfvxhw0')}}<text
					class="privacy">{{$t('register.register.5qzx5pfvxn40')}}</text></p>
			<!-- 继续按钮 -->
			<view class="btn df jcc aic mt16" :class="{'class1':test}" @click="realLogin">
				{{$t('register.register.5qzx5pfvxs40')}}
			</view>

			<view class="text black df jcc">
				<!-- {{$t('register.register.5qzx5pfvxxg0')}} -->
				<text>没有账户</text>
				<text class="sign" @click="register">注册</text>
			</view>
		</view>

	</view>
</template>

<script>
	// import api from '../../../api/test.js'
	export default {
		data() {
			return {
				form: {
					name: '', //邮箱
					password: '' //密码
				},
				//form表单验证规则
				// rules: {
				// 	name: [{
				// 		required: true,
				// 		message: 'ss',
				// 		trigger: ['blur', 'change'],
				// 	}],
				// 	password: [{
				// 		required: true,
				// 		message: 'ss',
				// 		trigger: ['blur', 'change']
				// 	}]
				// }
			}
		},
		// onReady() {
		// 	this.$refs.uForm.setRules(this.rules);
		// },
		//计算返回按钮状态
		computed: {
			test() {
				if (this.form.name != '' && this.form.password != '') {
					return true
				}
			}
		},
		methods: {
			//跳到首页登陆成功
			realLogin() {
				if (this.form.name && this.form.password) {
					uni.switchTab({
						url: '/pages/home/home'
					})
				} else {
					console.log(111)
				}

			},
			//跳到注册页
			register() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
			// 点击返回上一页
			// goBack() {
			// 	uni.navigateBack(-1)
			// }
		},
	}
</script>

<style scoped lang="scss">
	.class1 {
		background-color: #12D18E !important;
		color: white !important;
	}

	.u-form-item {
		border-bottom: 1px solid #12D18E;
	}

	.bottom {
		position: absolute;
		bottom: 1rem;
	}

	.changeLanguage {
		min-width: 176rpx;
		height: 64rpx;
		border-radius: 64rpx;
		border: 1px solid #EFEFEF;
		// margin-right: 1rem;
	}

	.top {
		width: 100%;
		height: 88rpx;
	}

	.u-input--square {
		border-bottom: 1px solid #12d18e;
	}

	.box {
		width: 100%;
	}

	.welcome {
		margin-bottom: 128rpx;
	}

	// 输入框下边框线

	.desc {
		color: #9d9e9e;
		margin-top: 200rpx;
	}

	.btn {
		width: 686rpx;
		height: 116rpx;
		border-radius: 200rpx;
		background: #F5F5F5;
		font-size: 32rpx;
		color: #E0E0E0;
		font-weight: bold;
	}

	.text {
		margin-top: 64rpx;
	}

	// 输入框下划线
	.ipt {
		border-bottom: 1px solid #12d18e;
		margin-bottom: 40rpx;
	}

	.placeholder-style {
		font-size: 14px;
	}

	::v-deep .u-line {
		border: none !important;
	}

	// 输入框下边框圆角样式
	::v-deep .u-input--square[data-v-fdbb9fe6] {
		border-radius: 0 !important;
	}
</style>