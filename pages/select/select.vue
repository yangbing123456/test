<template>
	<view class="all">
		<!-- 关闭图标 -->
		<view class="close df aic jce">
			<image class="wh24" src="../../static/fonts/Close.svg" mode=""></image>
		</view>
		<!-- 文本 -->
		<view class="welcome fz20 md16 mt20">
			{{$t('select.select.5qzxtuylf2g0')}}
		</view>
		<!-- 证件签发国家地区 -->
		<view @click="openPopup" class="country df aic jcsb">
			<view class="box df aic jcc">
				<image class="wh24" src="../../static/fonts/hk.svg" mode=""></image>
				<p class="fz16 ml8 df aic jcc">{{$t('select.select.5qzxtuylg640')}}</p>
			</view>
			<view class="right-icon df aic jcc">
				<u-icon name="arrow-right" color="#12d18e"></u-icon>
			</view>
		</view>

		<!-- 文本 -->
		<view class="welcome fz20 md16 mt20">
			{{$t('select.select.5qzxtuylgeo0')}}
		</view>

		<!-- 循环渲染 -->
		<view @click="photograph" v-for="item in data" :key="item.icon" class="country mb10 df aic jcsb">
			<view class="box df aic jcc">
				<image class="wh24" src="../../static/fonts/ID.svg" mode=""></image>
				<p class="fz16 ml8 df aic jcc">{{item.name}}</p>
			</view>
			<view class="right-icon df aic jcc">
				<u-icon name="arrow-right" color="#12d18e"></u-icon>
			</view>
		</view>

		<!-- 按钮 -->
		<button @click="goUpload">{{$t('select.select.5qzxtuylgk80')}}</button>

		<text class="fz12 gary df aic jcc mt64">
			{{$t('select.select.5qzxtuylgow0')}}
			<text @click="openPopup1" class="sign">{{$t('select.select.5qzxtuylguc0')}}</text>。
		</text>

		<p class="fz12 nineD df aic jcc mt16 mb30">{{$t('select.select.5qzxtuylh3g0')}} Sumsub
			{{$t('select.select.5qzxtuylh840')}}
		</p>

		<!-- 显示弹窗 -->
		<u-popup v-model="show" :round="10" mode="bottom" @close="close" @open="open">
			<view>
				<u-search :animation="true" :clearabled="true" :placeholder="$t('select.select.5qzxtuylhdg0')"
					:show-action="false"></u-search>
				<view class="hongkong df aic">
					<image class="wh24" src="../../static/fonts/hk.svg" mode=""></image>
					<text class="ml8 df aic">{{$t('select.select.5qzxtuylg640')}}</text>
				</view>
				<view class="hongkong df aic">
					<image class="wh24" src="../../static/fonts/hk.svg" mode=""></image>
					<text class="ml8 df aic">{{$t('select.select.5qzxtuylg640')}}</text>
				</view>
				<view class="hongkong df aic">
					<image class="wh24" src="../../static/fonts/hk.svg" mode=""></image>
					<text class="ml8 df aic">{{$t('select.select.5qzxtuylg640')}}</text>
				</view>
				<view class="hongkong df aic">
					<image class="wh24" src="../../static/fonts/hk.svg" mode=""></image>
					<text class="ml8 df aic">{{$t('select.select.5qzxtuylg640')}}</text>
				</view>
				<view class="hongkong df aic">
					<image class="wh24" src="../../static/fonts/hk.svg" mode=""></image>
					<text class="ml8 df aic">{{$t('select.select.5qzxtuylg640')}}</text>
				</view>
				<view class="hongkong df aic">
					<image class="wh24" src="../../static/fonts/hk.svg" mode=""></image>
					<text class="ml8 df aic">{{$t('select.select.5qzxtuylg640')}}</text>
				</view>
			</view>
		</u-popup>

		<!-- 点击客户支持，显示对应的弹窗 -->
		<u-popup :show="show1" :round="10" mode="bottom" @close="close1" @open="open1">
			<view class="error-popup df fdc aic jcsb">
				<view class="df aic fdc jcc">
					<p class="fz18 twoOne md16">{{$t('select.select.5qzxtuylguc0')}}</p>
					<p class="fz14 nineD desc">{{$t('select.select.5qzxtuylhi00')}}</p>
				</view>
				<view @click="show1 = false" class="sendEmail df">
					<view class="left">
						<image class="wh16 mr8" src="../../static/fonts/sendEmail.svg" mode=""></image>
					</view>
					<view class="right">
						<p class="fz16 mb4">{{$t('select.select.5qzxtuylhmc0')}}</p>
						<p class="fz12 gray">{{$t('select.select.5qzxtuylhqo0')}}</p>
						<p class="fz12 gray">{{$t('select.select.5qzxtuylhv00')}}</p>
					</view>
				</view>
				<p class="fz12 nineD df aic jcc">{{$t('select.select.5qzxtuylikg0')}}</p>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: [{
						icon: 'passport',
						name: this.$t('select.select.5qzxtuylj5g0')
					},
					{
						icon: 'drivelicense',
						name: this.$t('select.select.5qzxtuyljk00')
					},
					{
						icon: 'ID',
						name: this.$t('select.select.5qzxtuyljps0')
					}, {
						icon: 'Household',
						name: this.$t('select.select.5qzxtuyljug0')
					}
				],
				// 错误提示弹窗数据
				show: false,
				// 客户支持弹窗数据
				show1: false,
			};
		},
		methods: {
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			},
			openPopup() {
				this.show = true
				this.open()
			},
			// 点击打开客户支持弹窗
			open1() {
				// console.log('open');
			},
			close1() {
				this.show1 = false
				// console.log('close');
			},
			openPopup1() {
				this.show1 = true
				this.open1()
			},
			photograph() {
				// 点击打开摄像头拍照，或者从相册中选取
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //album 从相册选图，camera 使用相机
					success: function(res) {
						console.log(JSON.stringify(res.tempFilePaths)); //拍照图片的路径
					}
				});
			},
			goUpload() {
				uni.navigateTo({
					url: '/pages/Upload/Upload'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-search {
		margin-top: 40rpx !important;
	}

	.country {
		width: 100%;
		height: 112rpx;
		border-radius: 32rpx;
		padding: 0 48rpx;
		border: 1px solid #EFEFEF;
		border-radius: 1rem;
	}

	.wh24 {
		width: 48rpx;
		height: 48rpx;
	}

	.hongkong {
		padding: 40rpx 20rpx;
	}

	.right-icon {
		width: 48rpx;
		height: 48rpx;
	}

	.error-popup {
		width: 100%;
		height: 620rpx;
		padding: 56rpx 0 40rpx 0;
	}

	.sendEmail {
		width: 686rpx;
		height: 170rpx;
		border-radius: 32rpx;
		padding: 34rpx 0 0 32rpx;
		margin-bottom: 80rpx;
	}
</style>