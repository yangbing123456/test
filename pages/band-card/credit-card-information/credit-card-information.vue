<template>
	<view>
		<view class="top-box">
			<text>数量</text>
			<u-field v-model="mobile" label="" :disabled='true' :border-bottom='false'
				:field-style="{'font-size':'1.5rem'}" label-width='0' input-align='center'>
			</u-field>
		</view>

		<u-form :model="form" ref="uForm" class="formStyle">
			<u-form-item label="银行卡号码" label-width='90px' prop='number'>
				<u-input v-model="form.number" placeholder='请输入银行卡号' />
				<text class="camera" @click="caremaHandler"></text>
			</u-form-item>
			<u-form-item label="有效期" prop='intro'>
				<text class="timer" @click="expiryDate"></text>
				<u-input v-model="form.intro" placeholder='请输入有效期' />
			</u-form-item>
			<u-form-item label="cvv" prop='safeCode'>
				<text class="timer" @click="cvvHandler"></text>
				<u-input v-model="form.safeCode" type="password" />
			</u-form-item>
			<u-form-item label="持卡人姓名" label-width='90px' prop='name'>
				<u-input v-model="form.name" type="请输入持卡人姓名" />
			</u-form-item>
			<u-form-item>
				<u-checkbox v-model="form.bool">我确定我是
					<text class="have-card-person" @click="haveHandler">持卡人</text>
				</u-checkbox>
			</u-form-item>
		</u-form>
		<view class="btn-bottom">
			<u-button class="btn" :hair-line="false" @click='submit'
				v-bind:class="{'class1':test}">充值{{this.mobile}}</u-button>
		</view>



		<!-- 调用摄像头&相册 -->
		<u-popup v-model="alertBox" mode="bottom" width="500rpx" height="160px" :mask-close-able='false'
			border-radius='24'>
			<text class="delete-user">请允许访问相机</text>
			<view class="textStyle">这允许 <text style="color: red;">软件名字</text> 通过访问您的相机上传相片。寻找标有「相机」的切换键。</view>
			<view class="delete-user-btn">
				<u-button @click="alertBox = false;" :hair-line="false" class="quit-btn">取消</u-button>
				<u-button @click="alertBox = false;" :hair-line="false" class="setting-btn">前往设置</u-button>
			</view>
		</u-popup>
		<!-- 银行卡有效期 -->
		<u-popup v-model="cardBox" mode="bottom" width="500rpx" height="200px" :mask-close-able='false'
			border-radius='24'>
			<text class="delete-user">有效期</text>
			<view class="text">该日期位于银行卡正免得卡号下方</view>
			<view class="pic"></view>
			<view class="delete-user-btn">
				<u-button @click="cardBox = false;" :hair-line="false" class="ok-btn">好的</u-button>
			</view>
		</u-popup>

		<!-- cvv -->
		<u-popup v-model="cvvBox" mode="bottom" border-radius='24' width="500rpx" height="200px"
			:mask-close-able='false'>
			<text class="delete-user">cvv</text>
			<view class="text">信用卡的三位数代码可以在银行卡的背面找到</view>
			<view class="pic1"></view>
			<view class="delete-user-btn">
				<u-button @click="cvvBox = false;" :hair-line="false" class="ok-btn">好的</u-button>
			</view>
		</u-popup>
		<!-- 持卡人 -->
		<u-popup v-model="haveBox" mode="bottom" border-radius='24' width="500rpx" height="200px"
			:mask-close-able='false'>
			<text class="delete-user">你声明并保证:</text>
			<view class="decorationText">外部账户和您存入 <text style="color: red;">软件名字</text>
				账户的资金应属于您的名下。任何第三方付款将不被接受。在存入资金到您的 <text style="color: red;">软件名字</text> 账户时，您不能使用来自第三方的银行卡和银行账户。</view>
			<view class="delete-user-btn">
				<u-button @click="haveBox = false;" :hair-line="false" class="delete-btn">关闭</u-button>
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
							message: '请输入银行卡号',
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
							message: '请输入正确的银行卡号'
						},
					],
					intro: [{
						required: true,
						message: '请输入有效期',
						trigger: ['blur', 'change'],
					}],
					safeCode: [{
						required: true,
						message: '请输入安全码',
						trigger: ['blur', 'change'],
					}],
					name: [{
						required: true,
						message: '请输入姓名',
						trigger: ['blur', 'change'],
					}],
				}
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},

		onLoad(data) {
			this.mobile = data.money
		},
		//计算结果 返回状态
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

						console.log('验证通过');
					} else {
						console.log('验证失败');
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
	}

	.decorationText {
		width: 100%;
		padding: 0 1rem 0.5rem 1rem;
	}

	.pic {
		margin: auto;
		width: 8rem;
		height: 4rem;
		background-image: url('../../../static/fonts/Group179.png');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 100% 100%;
	}

	.pic1 {
		margin: auto;
		width: 8rem;
		height: 4rem;
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