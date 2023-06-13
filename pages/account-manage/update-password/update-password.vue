<template>
	<view>
		<!-- 当前密码 -->
		<view class="box">
			<text class="textColor">{{$t('update-password.update-password.5qzystpe0s80')}}</text>
			<u-form :model="form" ref="uForm">
				<u-form-item prop='nowPassword'>
					<u-input v-model="form.nowPassword" type="password"
						:placeholder="$t('update-password.update-password.5qzystpe27o0')" label-width='0' />
				</u-form-item>
			</u-form>
		</view>
		<!-- 新密码 -->
		<view class="box">
			<text class="textColor">{{$t('update-password.update-password.5qzystpe2i80')}}</text>
			<u-form :model="form" ref="uForm">
				<u-form-item prop='newPassword'>
					<u-input v-model="form.newPassword" type="password"
						:placeholder="$t('update-password.update-password.5qzystpe2r00')" label-width='0' />
				</u-form-item>
			</u-form>
		</view>
		<!-- 确认新密码 -->
		<view class="box">
			<text class="textColor">{{$t('update-password.update-password.5qzystpe2x40')}}</text>
			<u-form :model="form" ref="uForm">
				<u-form-item prop='againNewPassword'>
					<u-input v-model="form.againNewPassword" type="password"
						:placeholder="$t('update-password.update-password.5qzystpe32o0')" label-width='0' />
				</u-form-item>
			</u-form>
		</view>
		<!-- 保存按钮 -->
		<view class="btn-box">
			<u-button class="btn" :hair-line='false' v-bind:class="{'class1':test}"
				@click='submit'>{{$t('update-password.update-password.5qzystpe37g0')}}</u-button>
		</view>
		<!-- uview验证弹窗 -->
		<u-top-tips ref="uTips"></u-top-tips>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bool: false, //保存按钮状态
				form: {
					nowPassword: '',
					newPassword: '',
					againNewPassword: ''
				},

				// rules: {
				// 	nowPassword: [{
				// 		required: true,
				// 		message: '请输入当前密码',
				// 		// 可以单个或者同时写两个触发验证方式 
				// 		trigger: ['change', 'blur'],
				// 	}],
				// 	newPassword: [{
				// 		required: true,
				// 		message: '请输入新密码',
				// 		// 可以单个或者同时写两个触发验证方式 
				// 		trigger: ['change', 'blur'],
				// 	}],
				// 	againNewPassword: [{
				// 		required: true,
				// 		message: '请确认新密码',
				// 		// 可以单个或者同时写两个触发验证方式 
				// 		trigger: ['change', 'blur'],
				// 	}]
				// }
			}
		},
		methods: {
			//保存按钮点击事件
			submit() {
				// this.$refs.uForm.validate(valid => {
				// 	if (valid) {
				// 		console.log('验证通过');
				// 	} else {
				// 		console.log('验证失败');
				// 	}
				// });
				if (this.form.nowPassword == '' || this.form.newPassword == '' || this.form.againNewPassword == '') {
					this.$refs.uTips.show({
						title: this.$t('update-password.update-password.5qzystpe3bs0'),
						type: 'warning',
						duration: '2300'
					})
				} else if (this.form.newPassword != this.form.againNewPassword) {
					this.$refs.uTips.show({
						title: this.$t('update-password.update-password.5qzystpe3ik0'),
						type: 'warning',
						duration: '2300'
					})
				}
			}
		},
		//计算并改变保存按钮样式
		computed: {
			test() {
				return this.form.nowPassword == '' || this.form.newPassword == '' ||
					this.form.againNewPassword == '' ? this.bool = false : this.form.newPassword != this.form
					.againNewPassword ? this.bool = false : this.bool = true
			}
		}
	}
</script>

<style lang="scss">
	.class1 {
		background-color: #12D18E !important;
		color: white !important;
	}

	.textColor {
		color: #212121;
		display: block;
		margin-left: 0.3rem;
	}

	.u-form-item {
		border-bottom: 1px solid #12D18E;
	}

	.u-field {
		padding: 0.5rem 0 !important;
	}

	.box {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}

	.btn-box {
		position: absolute;
		bottom: 10px;
		width: 100%;
		margin: auto;

		.btn {
			width: 95%;
			margin: auto;
			border-radius: 6.25rem;
			border: 1px solid #f5f5f5;
			color: #E0E0E0;
		}
	}
</style>