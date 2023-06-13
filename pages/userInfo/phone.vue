<template>
	<view class="all">
		<!-- 最上层注册和语言切换，后续可以抽历程公共组件 -->
		<view class="top df aic jcsb">
			<view class="df aic">
				<u-icon @click="goBack" name="arrow-leftward"></u-icon>
				<text class="fz18 fwb ml8">{{$t('userInfo.phone.5qzxrcp1ahw0')}}</text>
			</view>
			<text class="fz14 gray changeLanguage df aic jcc">{{$t('userInfo.phone.5qzxrcp1bx00')}}</text>
		</view>

		<!-- 欢迎注册 -->
		<view class="welcome fz20 mt35 md16">
			{{$t('userInfo.phone.5qzxrcp1c9k0')}}
		</view>
		<view class="fz14 mt64 mb30">{{$t('userInfo.phone.5qzxrcp1c9k0')}}</view>

		<!-- 电话号码输入 -->
		<view class="phoneNumber df aic">
			<image class="img" :src="picAddress" mode="" />
			<image class="img1" src="../../static/fonts/down.svg" mode="" @click="show=!show">
			</image>

			<!-- 国家图标盒子 -->
			<view v-if='show' class="countryArr">
				<view class="itembox" v-for="item in picArr" :key="item.id" @click="changePic(item)">
					<image :src='item.pic' class="pic"></image>
					<text class="text"></text>
				</view>
			</view>
			<!-- 输入框 -->
			<view class="input f1">
				<text style="padding-right: 1rem;">{{phonebefore}}</text>
				<u-input v-model="formData.userInfo.phone" :border="false" placeholder='请输入电话号码'></u-input>
			</view>
		</view>

		<!-- 继续按钮 -->
		<view class="box df aic jcc">
			<view class="btn df jcc aic mt16" @click="goNext" :class="{'class1':test}">
				{{$t('userInfo.phone.5qzxrcp1cfw0')}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				picAddress: '../../static/fonts/hk.svg', //国家图片
				phonebefore: '+850', //电话号码前缀
				show: false, //下拉盒子状态
				formData: {
					userInfo: {
						phone: '' //输入框值
					},
				},
				// 国家图标数组
				picArr: [{
						id: 1,
						text: '+852',
						pic: '../../static/fonts/Group196.png'
					},
					{
						id: 2,
						text: '+853',
						pic: '../../static/fonts/Group191.png'
					},
					{
						id: 3,
						text: '+854',
						pic: '../../static/fonts/Group192.png'
					},
				]
			}
		},

		computed: {
			//计算按钮样式
			test() {
				if (this.formData.userInfo.phone != '') {
					return true
				}
			}
		},
		methods: {
			//改变国家图标
			changePic(item) {
				this.picArr.map(res => {
					if (res.id == item.id) {
						this.picAddress = item.pic
						this.phonebefore = item.text
						this.show = false
					}
				})
			},
			goNext() {
				uni.navigateTo({
					url: '/pages/term/term'
				})
			},
			goBack() {
				uni.navigateBack(-1)
			},
		}
	}
</script>

<style scoped lang="scss">
	.img {
		width: 48rpx;
		height: 48rpx;
	}

	.img1 {
		width: 30rpx;
		height: 30rpx;
		margin: 0 20rpx;


	}

	.phoneNumber {
		width: 100%;
		position: relative;

		.countryArr {
			position: absolute;
			top: 2.5rem;
			min-height: 10rem;
			width: 6rem;

			.itembox {
				// position: absolute;
				height: 2rem;
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 0.5rem;
				border-bottom: 1px solid #EEEEEE;

				.pic {
					// position: absolute;
					// left: -3.7rem;
					width: 1.5rem;
					height: 1.5rem;
				}

				.text {
					// position: absolute;
					// left: -1.5rem;
				}
			}

		}


	}

	.input {
		border-bottom: 1px solid #12d18e !important;
		display: flex;
		align-items: center;
	}

	.class1 {
		background: #12d18e !important;
		color: white !important;
	}

	.btn {
		width: 686rpx;
		height: 116rpx;
		border-radius: 200rpx;
		background: #f5f5f5;
		font-size: 16px;
		color: #e0e0e0;
		font-weight: bold;
	}

	.box {
		width: 100%;
		margin-top: 400rpx;
	}

	// input::-webkit-input-placeholder {
	// 	color: #000;
	// }
</style>