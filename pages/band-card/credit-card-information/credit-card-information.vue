<template>
	<view>
		<!-- 充值数量输入框 -->
		<view class="top-box">
			<text>{{$t('credit-card-information.credit-card-information.5qzy89dw2dk0')}}</text>
			<u-field v-model="mobile" label="" :disabled='true' :border-bottom='false'
				:field-style="{'font-size':'1.5rem'}" label-width='0' input-align='center'>
			</u-field>
		</view>
		<!-- 表单 -->
		<u-form :model="form" ref="uForm" class="formStyle">
			<u-form-item :label="$t('credit-card-information.credit-card-information.5qzy89dw3ic0')" label-width='90px'
				prop='number'>
				<u-input v-model="form.number"
					:placeholder="$t('credit-card-information.credit-card-information.5qzy89dw3sc0')" />
				<text class="camera" @click="caremaHandler"></text>
			</u-form-item>

			<u-form-item :label="$t('credit-card-information.credit-card-information.5qzy89dw3y40')" label-width='90px'
				prop='intro'>
				<text class="timer" @click="expiryDate"></text>
				<u-input v-model="form.intro"
					:placeholder="$t('credit-card-information.credit-card-information.5qzy89dw4340')" />
			</u-form-item>

			<u-form-item label="cvv" prop='safeCode' label-width='90px'>
				<text class="timer" @click="cvvHandler"></text>
				<u-input v-model="form.safeCode" type="password" placeholder="" />
			</u-form-item>

			<u-form-item :label="$t('credit-card-information.credit-card-information.5qzy89dw4800')" label-width='90px'
				prop='name'>
				<u-input v-model="form.name" :type="$t('credit-card-information.credit-card-information.5qzy89dw4cc0')"
					placeholder="" />
			</u-form-item>

			<u-form-item>
				<u-checkbox v-model="form.bool">
					{{$t('credit-card-information.credit-card-information.5qzy9t5nqr80')}}
					<text class="have-card-person"
						@click="haveHandler">{{$t('credit-card-information.credit-card-information.5qzy89dw4gg0')}}</text>
				</u-checkbox>
			</u-form-item>
		</u-form>

		<!-- 充值按钮 -->
		<view class="btn-bottom">
			<u-button class="btn" :hair-line="false" @click='submit' v-bind:class="{'class1':test}">充值{{this.mobile}}
			</u-button>
		</view>

		<!-- 调用摄像头&相册 -->
		<u-popup v-model="alertBox" mode="bottom" width="500rpx" height="180px" :mask-close-able='false'
			border-radius='24'>
			<text class="delete-user">{{$t('credit-card-information.credit-card-information.5qzy89dw4lc0')}}</text>
			<view class="textStyle">{{$t('credit-card-information.credit-card-information.5qzy89dw4q80')}} <text
					style="color: red;">{{$t('credit-card-information.credit-card-information.5qzy89dw4ug0')}}</text>
				{{$t('credit-card-information.credit-card-information.5qzy89dw52k0')}}
			</view>
			<view class="delete-user-btn">
				<u-button @click="alertBox = false;" :hair-line="false"
					class="quit-btn">{{$t('credit-card-information.credit-card-information.5qzy89dw57c0')}}</u-button>
				<u-button @click="takePhoto" :hair-line="false"
					class="setting-btn">{{$t('credit-card-information.credit-card-information.5qzy89dw5cc0')}}</u-button>
			</view>
		</u-popup>

		<!-- 银行卡有效期 -->
		<u-popup v-model="cardBox" mode="bottom" width="500rpx" height="220px" :mask-close-able='false'
			border-radius='24'>
			<text class="delete-user">{{$t('credit-card-information.credit-card-information.5qzy89dw3y40')}}</text>
			<view class="text">{{$t('credit-card-information.credit-card-information.5qzy89dw5h40')}}</view>
			<view class="pic"></view>
			<view class="delete-user-btn">
				<u-button @click="cardBox = false;" :hair-line="false"
					class="ok-btn">{{$t('credit-card-information.credit-card-information.5qzy89dw5lk0')}}</u-button>
			</view>
		</u-popup>

		<!-- cvv -->
		<u-popup v-model="cvvBox" mode="bottom" border-radius='24' width="500rpx" height="220px"
			:mask-close-able='false'>
			<text class="delete-user">cvv</text>
			<view class="text">{{$t('credit-card-information.credit-card-information.5qzy89dw5qg0')}}</view>
			<view class="pic1"></view>
			<view class="delete-user-btn">
				<u-button @click="cvvBox = false;" :hair-line="false"
					class="ok-btn">{{$t('credit-card-information.credit-card-information.5qzy89dw5lk0')}}</u-button>
			</view>
		</u-popup>

		<!-- 持卡人 -->
		<u-popup v-model="haveBox" mode="bottom" border-radius='24' width="500rpx" height="220px"
			:mask-close-able='false'>
			<text class="delete-user">{{$t('credit-card-information.credit-card-information.5qzyabt4c5s0')}} :</text>
			<view class="decorationText">{{$t('credit-card-information.credit-card-information.5qzy89dw5us0')}} <text
					style="color: red;">{{$t('credit-card-information.credit-card-information.5qzy89dw4ug0')}}</text>
				{{$t('credit-card-information.credit-card-information.5qzy89dw5yw0')}} <text
					style="color: red;">{{$t('credit-card-information.credit-card-information.5qzy89dw4ug0')}}</text>
				{{$t('credit-card-information.credit-card-information.5qzy89dw63g0')}}
			</view>
			<view class="delete-user-btn">
				<u-button @click="haveBox = false;" :hair-line="false"
					class="delete-btn">{{$t('credit-card-information.credit-card-information.5qzy89dw69c0')}}</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				haveBox: false, //持卡人弹窗
				cvvBox: false, //cvv弹窗
				cardBox: false, //银行卡有效期弹窗
				alertBox: false, //调用摄像头弹窗
				mobile: '', //数量
				//表单对象
				form: {
					number: '',
					intro: '',
					safeCode: '',
					name: '',
					bool: false
				},
				//form表单验证规则
				rules: {
					number: [{
							required: true,
							message: this.$t('credit-card-information.credit-card-information.5qzy89dw3sc0'),
							trigger: ['blur', 'change'],
						},
						// 正则判断为字母或数字
						{
							trigger: ['blur', 'change'],
							pattern: /^([1-9]{1})(\d{15}|\d{16}|\d{18})$/g,
							// 正则检验前先将值转为字符串
							transform(value) {
								return String(value);
							},
							message: this.$t('credit-card-information.credit-card-information.5qzy89dw6f00')
						},
					],
					intro: [{
						required: true,
						message: this.$t('credit-card-information.credit-card-information.5qzy89dw6jc0'),
						trigger: ['blur', 'change'],
					}],
					safeCode: [{
						required: true,
						message: this.$t('credit-card-information.credit-card-information.5qzy89dw6mo0'),
						trigger: ['blur', 'change'],
					}],
					name: [{
						required: true,
						message: this.$t('credit-card-information.credit-card-information.5qzy89dw6q80'),
						trigger: ['blur', 'change'],
					}],
				}
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},

		//接收路由传递来的数据 给输入框赋值
		onLoad(data) {
			this.mobile = data.money
		},
		//计算结果 返回按钮状态
		computed: {
			test() {
				return this.form.number != '' && this.form.intro != '' && this.form.safeCode != '' &&
					this.form.name != '' && this.form.bool ? true : false
			}
		},
		methods: {
			/**
			 * description:摄像头弹窗
			 */
			caremaHandler() {
				this.alertBox = true
			},
			/**
			 * description：获取手机摄像头和相册权限api
			 */
			takePhoto() {
				this.alertBox = false
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //album 从相册选图，camera 使用相机
					success: function(res) {
						console.log(JSON.stringify(res.tempFilePaths)); //拍照图片的路径
					}
				});
			},
			/**
			 * description:有效期弹窗
			 */
			expiryDate() {
				this.cardBox = true
			},
			/**
			 * description:cvv弹窗
			 */
			cvvHandler() {
				this.cvvBox = true
			},
			/**
			 * description:持卡人弹窗
			 */
			haveHandler() {
				this.haveBox = true
			},

			/**
			 * description:表单提交
			 */
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid && this.form.bool) {
						console.log(this.$t('credit-card-information.credit-card-information.5qzy89dw6ts0'));
					} else {
						console.log(this.$t('credit-card-information.credit-card-information.5qzy89dw6xc0'));
					}
				});
			},
		}
	}
</script>

<style lang="scss">
	.top-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 1px solid #EFEFEF;
		width: 90%;
		height: 9rem;
		border-radius: 1.5rem;
		margin: 1rem auto;
	}

	.camera {
		display: block;
		width: 2rem;
		height: 2rem;
		background-image: url('../../../static/fonts/Camera1.png');
		background-repeat: no-repeat;
		background-position: center center;
		// background-color: #12D18E;
	}

	.timer {
		display: block;
		width: 1rem;
		height: 1rem;
		background-image: url('../../../static/fonts/FAQCircle.png');
		background-repeat: no-repeat;
		background-position: center center;
		// background-color: #12D18E;
	}

	.have-card-person {
		color: #12D18E;
	}

	.btn-bottom {
		position: absolute;
		bottom: 10px;
		width: 100%;
		height: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.btn {
		width: 95%;
		// margin: 0.5rem 1rem;
		border-radius: 6.25rem;
		border-width: 0 !important;
		background-color: #f5f5f5;
		color: #E0E0E0;
	}

	.delete-user {
		display: flex;
		justify-content: center;
		margin: 0.5rem 0;
		padding: 0 1rem;
	}

	.setting-btn,
	.quit-btn {
		width: 40%;
		border-radius: 6.25rem;
	}

	.quit-btn {
		color: #12D18E;
	}

	.setting-btn {
		color: white;
		background-color: #12D18E;
	}

	.ok-btn,
	.delete-btn {
		width: 85%;
		border-radius: 6.25rem;
		color: white;
		background-color: #12D18E;
	}

	.delete-user-btn {
		display: flex;
		justify-content: space-around;
		position: absolute;
		bottom: 10px;
		width: 100%;
	}

	.text {
		display: flex;
		justify-content: center;
		margin-bottom: 0.5rem;
	}

	.decorationText {
		width: 100%;
		padding: 0 1rem 0.5rem 1rem;
	}

	.pic {
		margin: auto;
		width: 14rem;
		height: 5rem;
		background-image: url('../../../static/fonts/Group179.png');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 100% 100%;
	}

	.pic1 {
		margin: auto;
		width: 14rem;
		height: 5rem;
		background-image: url('../../../static/fonts/Group180.png');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 100% 100%;
	}

	.class1 {
		color: white !important;
		background-color: #12D18E !important;
	}

	.formStyle {
		padding: 0 1rem;
	}

	.textStyle {
		padding: 0 1rem;
	}
</style>