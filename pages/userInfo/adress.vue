<template>
	<view class="all">
		<!-- 最上层注册和语言切换，后续可以抽历程公共组件 -->
		<view class="top df aic jcsb">
			<view class="df aic">
				<u-icon @click="goBack" name="arrow-leftward"></u-icon>
				<text class="fz18 fwb ml8">{{$t('userInfo.adress.5qzxqqf1cg40')}}</text>
			</view>
			<text class="fz14 gray changeLanguage df aic jcc">{{$t('userInfo.adress.5qzxqqf1dpo0')}}</text>
		</view>

		<!-- 地址文本 -->
		<view class="welcome fz20 mt35 md16">
			{{$t('userInfo.adress.5qzxqqf1e280')}}
		</view>
		<view class="fz12 nineD mb30">{{$t('userInfo.adress.5qzxqqf1e9g0')}}</view>


		<!-- 选择地址 -->
		<u-form :model="form" labelPosition="top" ref="uForm">
			<u-form-item :label="$t('userInfo.adress.5qzxqqf1ef80')" prop='street'>
				<u-input v-model="form.street" :placeholder="$t('userInfo.adress.5qzxqqf1enc0')" />
			</u-form-item>
			<u-form-item :label="$t('userInfo.adress.5qzxqqf1esw0')" prop='number'>
				<u-input v-model="form.number" :placeholder="$t('userInfo.adress.5qzxqqf1ey80')" />
			</u-form-item>
			<u-form-item :label="$t('userInfo.adress.5qzxqqf1f400')" prop='apartment'>
				<u-input v-model="form.apartment" :placeholder="$t('userInfo.adress.5qzxqqf1f900')" />
			</u-form-item>
			<u-form-item :label="$t('userInfo.adress.5qzxqqf1fds0')" prop='city'>
				<u-input v-model="form.city" :placeholder="$t('userInfo.adress.5qzxqqf1fj00')" />
			</u-form-item>
		</u-form>


		<!-- 继续按钮 -->
		<view class="box df aic jcc">
			<view class="btn df jcc aic mt64" @click="goPhone" :class="{'class1':test}">
				{{$t('userInfo.adress.5qzxqqf1fo00')}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//表单输入框值
				form: {
					street: '',
					number: '',
					apartment: '',
					city: ''
				},
			}
		},
		computed: {
			//计算按钮样式
			test() {
				if (this.form.street != '' && this.form.number != '' && this.form.apartment != '' && this.form.city !=
					'') {
					return true
				}
			}
		},
		methods: {
			//继续按钮事件
			goPhone() {
				if (this.form.street != '' && this.form.number != '' && this.form.apartment != '' && this.form.city !=
					'') {
					uni.navigateTo({
						url: '/pages/userInfo/phone'
					})
				}
			},
			goBack() {
				uni.navigateBack(-1)
			},
		}
	}
</script>

<style scoped lang="scss">
	.u-form-item {
		border-bottom: 1px solid #12D18E;
	}

	.class1 {
		background: #12d18e !important;
		color: white !important;
	}

	.u-form-item[data-v-006449ec] {
		padding: 0;
	}

	.u-input--square {
		border-bottom: 1px solid #12d18e;
	}

	.btn {
		width: 686rpx;
		height: 116rpx;
		border-radius: 100px;
		background: #f5f5f5;
		font-size: 16px;
		color: #E0E0E0;
		font-weight: bold;
	}

	.box {
		width: 100%;
		margin-top: 60rpx;
	}

	::v-deep .u-line {
		border: none !important;
	}

	// 输入框下边框圆角样式
	::v-deep .u-input--square[data-v-fdbb9fe6] {
		border-radius: 0 !important;
	}
</style>