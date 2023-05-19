<template>
	<view>
		<view class="box">
			<text>当前密码</text>
			<u-form :model="form" ref="uForm">
				<u-form-item prop='nowPassword'>
					<u-input v-model="form.nowPassword" type="password" placeholder="请输入当前密码" label-width='0' />
				</u-form-item>
			</u-form>
		</view>

		<view class="box">
			<text>新密码</text>
			<u-form :model="form" ref="uForm">
				<u-form-item prop='newPassword'>
					<u-input v-model="form.newPassword" type="password" placeholder="请输入新密码" label-width='0' />
				</u-form-item>
			</u-form>
		</view>

		<view class="box">
			<text>确认密码</text>
			<u-form :model="form" ref="uForm">
				<u-form-item prop='againNewPassword'>
					<u-input v-model="form.againNewPassword" type="password" placeholder="请再次输入新密码" label-width='0' />
				</u-form-item>
			</u-form>
		</view>

		<view class="btn-box">
			<u-button class="btn" :hair-line='false' v-bind:class="{'class1':test}" @click='submit'>保存</u-button>
		</view>
		<u-top-tips ref="uTips"></u-top-tips>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bool: false,
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
						title: '都为必填项',
						type: 'warning',
						duration: '2300'
					})
				} else if (this.form.newPassword != this.form.againNewPassword) {
					this.$refs.uTips.show({
						title: '新密码不一致',
						type: 'warning',
						duration: '2300'
					})
				}
			}
		},
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
			border-radius: 6.25rem;
			border: 1px solid #f5f5f5;
			color: #e0e0e0;
		}
	}
</style>