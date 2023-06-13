<template>
	<view class="all">
		<!-- 最上层注册和语言切换，后续可以抽历程公共组件 -->
		<view class="top df aic jcsb">
			<view class="df aic">
				<u-icon @click="goBack" name="arrow-leftward"></u-icon>
				<text class="fz18 fwb ml8">{{$t('userInfo.birthday.5qzxpqfjtv00')}}</text>
			</view>
			<text class="fz14 gray changeLanguage df aic jcc">{{$t('userInfo.birthday.5qzxpqfjuwg0')}}</text>
		</view>

		<!-- 出生日期文本 -->
		<view class="welcome fz20 mt35 md16">
			{{$t('userInfo.birthday.5qzxpqfjv340')}}
		</view>
		<view class="fz12 nineD mb30">{{$t('userInfo.birthday.5qzxpqfjv6o0')}}</view>

		<!-- 出生日期选择 -->
		<view class="sss df fdc" @click="show = true">
			<text>{{$t('userInfo.birthday.5qzxpqfjv340')}}</text>
			<input class="ipt" type="text" v-model="isDate" :placeholder="$t('userInfo.birthday.5qzxpqfjv9s0')" />
			<u-picker v-model="show" mode="time" @confirm='changeTime'></u-picker>
		</view>

		<!-- 继续按钮 -->
		<view class="box df aic jcc">
			<view class="btn df jcc aic mt16" @click="goAdress" :class="{'class1':test}">
				{{$t('userInfo.birthday.5qzxpqfjvcw0')}}
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false, //时间弹窗
				isDate: '' //输入框值
			}
		},
		computed: {
			//计算按钮样式
			test() {
				if (this.isDate != '') {
					return true
				}
			}
		},
		methods: {
			//选择时间
			changeTime(e) {
				console.log(e)
				this.isDate = e.year + '年' + e.month + '月' + e.day + '日'
			},
			//继续按钮事件
			goAdress() {
				uni.navigateTo({
					url: '/pages/userInfo/adress'
				})
			},
			goBack() {
				uni.navigateBack(-1)
			},
		}
	}
</script>

<style scoped lang="scss">
	.class1 {
		background: #12d18e !important;
		color: white !important;
	}

	.u-border-bottom {
		border-bottom: 1px solid #12d18e;
	}

	.ipt {
		border-bottom: 1px solid #12d18e;
		padding: 20rpx 0;
		height: 2.4em;
	}

	.btn {
		width: 686rpx;
		height: 116rpx;
		border-radius: 200rpx;
		background: #f5f5f5;
		font-size: 16px;
		color: #E0E0E0;
		font-weight: bold;
	}

	.box {
		width: 100%;
		// position: absolute;
		// bottom: 1rem
	}

	.sss {
		padding: 20rpx 0;
	}
</style>