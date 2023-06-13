<template>
	<view class="df all fdc">
		<!-- 最上层注册和语言切换，后续可以抽历程公共组件 -->
		<view class="top df aic jcsb">
			<view class="df aic">
				<u-icon @click="goBack" name="arrow-leftward"></u-icon>
				<text class="fz18 fwb ml8">{{$t('userInfo.userInfo.5qzxo6skag00')}}</text>
			</view>
			<text class="fz14 gray changeLanguage df aic jcc">{{$t('userInfo.userInfo.5qzxo6skbm80')}}</text>
		</view>

		<!-- 欢迎注册 -->
		<view class="welcome fz20 mt35 md16">
			{{$t('userInfo.userInfo.5qzxo6skbwg0')}}
		</view>
		<view class="fz12 nineD">{{$t('userInfo.userInfo.5qzxo6skc300')}}</view>

		<!-- 下面的性别选择 -->
		<view class="changeSex df jcsa">
			<view class="sex df aic jcc"
				:style="{'background-color':item.backgroundColor,'color':item.color,'border':item.border}"
				v-for="item in dataArr" :key="item.id" @click="changeStyle(item)">
				<image class="img" :src='item.pic'></image>
				<text>{{item.sex}}</text>
			</view>
		</view>

		<!-- 表单 -->
		<u-form :model="form" labelPosition="top" ref="uForm">
			<u-form-item :label="$t('userInfo.userInfo.5qzxo6skchs0')" prop='name'>
				<u-input v-model="form.name" :placeholder="$t('userInfo.userInfo.5qzxo6skcmg0')" />
			</u-form-item>
			<u-form-item :label="$t('userInfo.userInfo.5qzxo6ske1c0')" prop='mindleName'>
				<u-input v-model="form.middleName" :placeholder="$t('userInfo.userInfo.5qzxo6ske880')" />
			</u-form-item>
			<u-form-item :label="$t('userInfo.userInfo.5qzxo6skeck0')" prop='lastName'>
				<u-input v-model="form.lastName" :placeholder="$t('userInfo.userInfo.5qzxo6skeww0')" />
			</u-form-item>
		</u-form>


		<!-- 继续按钮 -->
		<view class="box df aic jcc">
			<view class="btn df jcc aic mt50" @click="goBirthday" :class="{'class1':test}">
				{{$t('userInfo.userInfo.5qzxo6skf8c0')}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//性别选择数组
				dataArr: [{
						id: 1,
						pic: '../../static/fonts/man.svg',
						sex: this.$t('userInfo.userInfo.5qzxo6skc7w0'),
						backgroundColor: '',
						color: '',
						border: ''
					},
					{
						id: 2,
						pic: '../../static/fonts/woman.svg',
						sex: this.$t('userInfo.userInfo.5qzxo6skcdc0'),
						backgroundColor: '',
						color: '',
						border: ''
					},
				],
				//表单输入框值
				form: {
					name: '',
					middleName: '',
					lastName: ''
				},
			}
		},
		//计算继续按钮样式
		computed: {
			test() {
				if (this.form.name != '' && this.form.middleName != '' && this.form.lastName != '') {
					return true
				}
			}
		},
		methods: {
			//点击性别改变按钮样式
			changeStyle(res) {
				this.dataArr.map(item => {
					if (item.id == res.id) {
						item.backgroundColor = 'rgba(18, 209, 142, 0.1)'
						item.color = '#12D18E'
						item.border = 'none'
					} else {
						item.backgroundColor = ''
						item.color = ''
						item.border = '1px solid #EFEFEF'
					}
				})
			},
			goBirthday() {
				uni.navigateTo({
					url: '/pages/userInfo/birthday'
				})
			},
			goBack() {
				uni.navigateBack(-1)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.class1 {
		background: #12d18e !important;
		color: white !important;
	}

	.changeSex {
		width: 100%;
		height: 96rpx;
		margin-top: 112rpx;
		margin-bottom: 64rpx;
	}

	.u-form-item {
		border-bottom: 1px solid #12D18E;
	}

	.input {
		padding: 10rpx 0 !important;
	}

	.sex {
		width: 240rpx;
		height: 96rpx;
		border-radius: 80rpx;
		border: 1px solid #EFEFEF;
	}

	.img {
		width: 48rpx;
		height: 48rpx;
		margin-right: 20rpx;
	}

	.u-form-item {
		font-size: 28rpx;
	}

	// 输入框下面的绿色边框线
	.u-input--square {
		border-bottom: 1px solid #12d18e;
	}

	.btn {
		width: 686rpx;
		height: 116rpx;
		border-radius: 200rpx;
		background: #F5F5F5;
		font-size: 16px;
		color: #E0E0E0;
		font-weight: bold;
	}

	.box {
		width: 100%;
	}

	.u-form-item[data-v-006449ec] {
		padding: 0;
	}

	// 输入框之间的u-line 分割线样式
	::v-deep .u-line {
		border: none !important;
	}

	// 输入框下边框圆角样式
	::v-deep .u-input--square[data-v-fdbb9fe6] {
		border-radius: 0 !important;
	}
</style>