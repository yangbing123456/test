<template>
	<view class="page-transaction df fdc">
		<!-- 顶部图标按钮 -->
		<view class="head df aic jcsb">
			<view class="left df aic jcc">
				<p class="fwb fz18 mr8">BTC/USDT</p>
				<view @click="openPopup">
					<image class="wh16" src="../../static/transaction/btn1.svg" mode=""></image>
				</view>
			</view>

			<view class="right df aic">
				<image @click="goTrendchart" class="wh24" src="../../static/transaction/btn2.svg" mode=""></image>
				<image @click="showKline = !showKline" class="wh24 btn4" src="../../static/transaction/btn4.svg"
					mode="">
				</image>
				<image @click="showOverlay = true" class="wh24" src="../../static/transaction/btn-more.svg" mode="">
				</image>
			</view>
		</view>

		<!-- K线图区域 -->
		<view v-show="showKline" class="k-line md16">
		</view>

		<!-- 主体内容区域 -->
		<view class="content df jcsb">
			<!-- 内容区分为左右结构 -->
			<view class="left-cont df fdc fn">
				<view class="line1 df ">
					<p class="fz28 f75 fwb">27,373.91</p>
					<view class="box1 df aic jcc">-1.06%</view>
				</view>
				<view class="line2 fz12 twoOne mt8">
					≈27,343.91 USD
				</view>

				<!-- 买入卖出按钮 -->
				<view class="buyAndSell gray fwb df jcsb">
					<view class="buy btn df aic jcc">{{$t('transaction.transaction.5qzwxhl8dp80')}}</view>
					<view class="sell btn df aic jcc">{{$t('transaction.transaction.5qzwxhl8esw0')}}</view>
				</view>

				<!-- 可用 -->
				<view class="line3 md16 mt9 fz12 df aic jcsb">
					<text class="nineD canUse">{{$t('transaction.transaction.5qzwxhl8ey00')}}</text>
					<view class="df aic">
						<text class="mr8">$90,716.92</text>
						<image class="wh16" src="../../static/transaction/btn-plus.svg" mode=""></image>
					</view>
				</view>

				<!-- 数量（BTC） -->
				<view class="line4 df fdc">
					<p class="fz14 twoOne">{{$t('transaction.transaction.5qzwxhl8f100')}}</p>
					<view class="box df jcsb aic">
						<text>0.06</text>
						<view>
							<image class="wh24 mr9" src="../../static/transaction/decrease.svg" mode=""></image>
							<image class="wh24" src="../../static/transaction/increase.svg" mode=""></image>
						</view>
					</view>
					<view class="require df mt8 jcsb fz12">
						<view class="df aic">
							<text class="nineD mr10">{{$t('transaction.transaction.5qzwxhl8f400')}}</text>
							<image @click="openBond" class="wh16" src="../../static/transaction/btn-danger.svg" mode="">
							</image>
						</view>
						<text>$824.92</text>
					</view>
				</view>

				<!-- Switch开关选择 -->
				<view class="switch df fdc">
					<view class="switch-item df jcsb aic">
						<p class="fz14 fwm twoOne">{{$t('transaction.transaction.5qzwxhl8f780')}}</p>
						<view class="">
							<u-switch space="2" v-model="value1" @click="value1=true" activeColor="#12d18e"
								inactiveColor="rgb(230, 230, 230)">
							</u-switch>
						</view>
					</view>
					<!-- 开关切换显示相应的内容 -->
					<view v-show="value1">
						<view class="switch1 df aic jcsb">
							<text class="fz14">4.920</text>
							<view class="df aic jcsb">
								<image class="wh24 mr8" src="../../static/transaction/decrease.svg" mode=""></image>
								<image class="wh24" src="../../static/transaction/increase.svg" mode=""></image>
							</view>
						</view>
						<view class="df aic jcsb">
							<text class="fz12 nineD">{{$t('transaction.transaction.5qzwxhl8fa40')}}</text>
							<view class="df aic jcsb">
								<image class="wh16 mr8" src="../../static/transaction/btn-add.svg" mode=""></image>
								<text class="fz12 sign">{{$t('transaction.transaction.5qzwxhl8feg0')}}</text>
							</view>
						</view>
					</view>

					<!-- Switch开关选择 -->
					<view class="switch-item df jcsb aic m">
						<p class="fz14 fwm twoOne">{{$t('transaction.transaction.5qzwxhl8fho0')}}</p>
						<view class="">
							<u-switch space="2" v-model="value2" @click="value2=true" activeColor="#12d18e"
								inactiveColor="rgb(230, 230, 230)">
							</u-switch>
						</view>
					</view>
					<!-- 显示对应内容 -->
					<view v-show="value2">
						<view class="df aic jcsb mb8">
							<text class="fz12">{{$t('transaction.transaction.5qzwxhl8fkc0')}}</text>
							<view class="df aic jcsb">
								<image class="wh8 mr8" src="../../static/transaction/btn1.svg" mode=""></image>
								<image class="wh16" src="../../static/transaction/btn-danger.svg" mode=""></image>
							</view>
						</view>
						<u-collapse>
							<u-collapse-item :title="$t('transaction.transaction.5qzwxhl8fn00')" name="Docs guide">
								<text class="u-collapse-content">{{$t('transaction.transaction.5qzwxhl8fps0')}}</text>
							</u-collapse-item>
						</u-collapse>
						<view class="switch1 df aic jcsb mb8">
							<text class="fz14">608.8</text>
							<view class="df aic jcsb">
								<image class="wh24 mr8" src="../../static/transaction/decrease.svg" mode=""></image>
								<image class="wh24" src="../../static/transaction/increase.svg" mode=""></image>
							</view>
						</view>
						<view class="df jcsb aic mb30">
							<p class="fz10 nineD">{{$t('transaction.transaction.5qzwzzrx5is0')}} :<text
									class="f75">$0.00</text></p>
							<p class="fz10 nineD">{{$t('transaction.transaction.5qzwzzrx71s0')}} :<text
									class="twoOne">0.039(0.79%)</text></p>
						</view>
					</view>

					<!-- Switch开关选择 -->
					<view class="switch-item df jcsb aic">
						<p class="fz14 fwm twoOne">Take Profit</p>
						<view class="">
							<u-switch space="2" v-model="value3" @click="value3=true" activeColor="#12d18e"
								inactiveColor="rgb(230, 230, 230)">
							</u-switch>
						</view>
					</view>
					<!-- 显示对应内容 -->
					<view v-show="value3">
						<view class="df aic jcsb box12">
							<text class="fz14">{{$t('transaction.transaction.5qzwxhl8fs80')}}</text>
							<u-icon name="arrow-down" color="#12d18e" size="16"></u-icon>
						</view>
						<view class="switch1 df aic jcsb">
							<text class="fz14">27,687.20</text>
							<view class="df aic jcsb">
								<image class="wh24 mr8" src="../../static/transaction/decrease.svg" mode=""></image>
								<image class="wh24" src="../../static/transaction/increase.svg" mode=""></image>
							</view>
						</view>
						<view class="df jcsb aic mt8">
							<p class="fz10 nineD">{{$t('transaction.transaction.5qzwzzrx7980')}} :<text
									class="sign">$0.00</text></p>
							<p class="fz10 nineD">{{$t('transaction.transaction.5qzwzzrx71s0')}} :<text
									class="twoOne">0.039(0.79%)</text></p>
						</view>
					</view>
				</view>

				<!-- 买入按钮 -->
				<view class="btn-buy df aic jcc fwb fz16">{{$t('transaction.transaction.5qzwxhl8dp80')}}</view>
			</view>


			<!-- 右侧实时数据 -->
			<view class="right-cont df fdc fn fz12">
				<view class="item1 md16">
					<view class="df aic jcsb">
						<text class="nineD">24h {{$t('transaction.transaction.5qzwzzrx7d40')}}</text>
						<text>27,993.93</text>
					</view>

					<view class="middle df aic jcsb">
						<text class="nineD">24h {{$t('transaction.transaction.5qzwzzrx7gw0')}}</text>
						<text>27,160.00</text>
					</view>

					<view class="df aic jcsb">
						<text class="nineD">24h {{$t('transaction.transaction.5qzwzzrx7kg0')}}</text>
						<text>111.81M</text>
					</view>
				</view>

				<view class="item2 df fdc">
					<view class="df jcsb nineD fz10">
						<text>{{$t('transaction.transaction.5qzwxhl8fuw0')}}</text>
						<text>{{$t('transaction.transaction.5qzwxhl8fxg0')}}</text>
					</view>

					<view class="df jcsb nineD mb8 fz10">
						<text>(USDT)</text>
						<text>(BTC)</text>
					</view>

					<view class="df jcsb mb8 fz12" v-for="item in data1" :key="item.USDT">
						<text class="f75">{{item.USDT}}</text>
						<text>{{item.BTC}}</text>
					</view>
				</view>

				<view class="item3 mb8">
					<p class="fz16 f75 fwb">27,327.4</p>
					<p class="nineD fz10">≈$188,151.92</p>
				</view>

				<view class="df jcsb mb8 fz12" v-for="item in data2" :key="item.USDT">
					<text class="green">{{item.USDT}}</text>
					<text>{{item.BTC}}</text>
				</view>

				<view class="item4 mt9 df aic jcsb">
					<view class="item4-box df jcsb aic" @click="show3=true">
						<text>0.01</text>
						<image class="wh8" src="../../static/transaction/btn1.svg" mode=""></image>
					</view>

					<image @click="show2=true" class="wh14" src="../../static/transaction/btn3.svg" mode=""></image>
				</view>
			</view>
		</view>

		<!-- 下面三个选项 -->
		<view class="foot">
			<view class="list df aic jcsb">
				<u-tabs-swiper class="fz14" active-color="#12D18E" inactive-color="#9D9E9E" lineWidth="40"
					lineColor="#12d18e" :list="list1" @change="change" :current='current'></u-tabs-swiper>
			</view>

			<view class="noData df aic jcc">
				<image class="noData-img" src="../../static/transaction/noData.svg" mode=""></image>
			</view>
			<p class="fz18 c71 df aic jcc mt8">{{$t('transaction.transaction.5qzwxhl8g0g0')}}</p>
		</view>


		<!-- 显示弹窗--行情页面 -->
		<u-popup v-model="show" :round="10" mode="bottom" @close="close">
			<u-search :animation="true" :clearabled="true"
				:placeholder="$t('transaction.transaction.5qzwxhl8g300')"></u-search>
			<scroll-view scroll-y="true">
				<view class="price-popup">
					<price-componets></price-componets>
				</view>
			</scroll-view>
		</u-popup>

		<!-- 保证金弹窗 -->
		<u-popup v-model="show1" :round="10" mode="bottom">
			<view class="bond-popup df fdc aic jcsb">
				<view class="df aic fdc jcc">
					<p class="fz18 twoOne md16">{{$t('transaction.transaction.5qzwxhl8g5g0')}}</p>
					<p class="fz14 nineD">{{$t('transaction.transaction.5qzwxhl8g7w0')}}</p>
				</view>
				<button class="btn-ok df aic jcc"
					@click="show1 = false">{{$t('transaction.transaction.5qzwxhl8gbk0')}}</button>
			</view>
		</u-popup>

		<!-- <bond-popup ref="show"></bond-popup> -->
		<!-- 遮罩层 -->
		<!-- <u-overlay v-model="showOverlay" @click="showOverlay = false">
			<view class="warp">
				<view class="rect fz12 df fdc jcsb" @tap.stop>
					<view class="df aic jcsb" @click="showOverlay = false">
						<image class="wh16" src="../../static/transaction/remind.svg" mode=""></image>
						<p>{{$t('transaction.transaction.5qzwxhl8gg00')}}</p>
					</view>
					<view class="df aic jcsb" @click="showOverlay = false">
						<image class="wh16" src="../../static/transaction/collect.svg" mode=""></image>
						<p>{{$t('transaction.transaction.5qzwxhl8gi80')}}</p>
					</view>
				</view>
				<view class="triangle"></view>
			</view>
		</u-overlay> -->

		<!-- 委托表展示方式 -->
		<u-popup v-model="show2" mode='bottom' :round="10" border-radius='24'>
			<view class="rate">{{$t('transaction.transaction.5qzwxhl8gks0')}}</view>

			<scroll-view scroll-y="true">
				<view style="width: 100%;height: 200px;">
					<view class="small-box1" v-for="item in showData" :key='item.id'>
						<view class="left-box">
							<view class="top-small-box">
								<image class="wh14 mr15" :src="item.imgsrc" mode=""></image>
								<text style="color: #212121;">{{item.name}}</text>
							</view>
						</view>

						<view>
							<u-radio-group v-model="value22" active-color='#12D18E'>
								<u-radio :name="item.name" @change='wayChangeRadio'>
								</u-radio>
							</u-radio-group>
						</view>
					</view>
				</view>
			</scroll-view>

			<view class="delete-user-btn2">
				<u-button :hair-line="false" class="yes-btn" @click='close2'
					v-bind:class="{'class1':Boolean(value22)}">{{$t('transaction.transaction.5qzwxhl8gmo0')}}</u-button>
			</view>
		</u-popup>

		<!-- 委托表展示深度 -->
		<u-popup v-model="show3" mode='bottom' :round="10" border-radius='24'>
			<view class="rate">{{$t('transaction.transaction.5qzwxhl8gp00')}}</view>

			<scroll-view scroll-y="true">
				<view style="width: 100%;height: 200px;">
					<view class="small-box1" v-for="item in showDeep" :key='item.deep'>
						<view class="left-box">
							<view class="top-small-box">
								<text style="color: #212121;">{{item.deep}}</text>
							</view>
						</view>

						<view>
							<u-radio-group v-model="value" active-color='#12D18E'>
								<u-radio :name="item.deep" @change='changeRadio'>
								</u-radio>
							</u-radio-group>
						</view>
					</view>
				</view>
			</scroll-view>

			<view class="delete-user-btn2">
				<u-button :hair-line="false" class="yes-btn" @click='close3'
					v-bind:class="{'class1':Boolean(value)}">{{$t('transaction.transaction.5qzwxhl8gmo0')}}</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	// import aOverlay from '../../node_modules/uview-ui/components/u-overlay/u-overlay.vue'
	// 引入行情公共组件
	import PriceComponets from '@/common/PriceComponent.vue'
	// 引入保证金弹窗组件
	// import BondPopup from '@/common/BondPopup.vue'
	export default {
		// 注册组件
		components: {
			PriceComponets,
			// aOverlay
			// BondPopup,
		},
		data() {
			return {
				value: '', //委托表展示深度
				value22: '', //委托表展示方式
				current: 0, //最下面选项下标
				// K线图数据
				showKline: false, //K线图显示状态
				value1: false, //switch显示对应内容
				value2: false, //switch显示对应内容
				value3: false, //switch显示对应内容
				// 右侧price 和 数量 下面的数组
				data1: [{
						USDT: '27,332.0',
						BTC: '0.000'
					}, {
						USDT: '27,331.8',
						BTC: '0.000'
					},
					{
						USDT: '27,331.7',
						BTC: '0.000'
					},
					{
						USDT: '27,331.3',
						BTC: '0.000'
					},
					{
						USDT: '27,331.0',
						BTC: '0.000'
					},
					{
						USDT: '27,330.9',
						BTC: '0.000'
					},
				],
				data2: [{
						USDT: '27,330.8',
						BTC: '1.596'
					},
					{
						USDT: '27,330.6',
						BTC: '0.181'
					},
					{
						USDT: '27,328.8',
						BTC: '0.300'
					},
					{
						USDT: '27,328.7',
						BTC: '0.165'
					},
					{
						USDT: '27,328.5',
						BTC: '0.300'
					},
					{
						USDT: '27,328.4',
						BTC: '0.218'
					},
				],
				// 下方选项数据
				list1: [{
					name: this.$t('transaction.transaction.5qzwxhl8gqw0'),
				}, {
					name: this.$t('transaction.transaction.5qzwxhl8gt00'),
				}, {
					name: this.$t('transaction.transaction.5qzwxhl8gus0')
				}, ],
				// 行情页面弹窗数据
				show: false,
				// 保证金弹窗
				show1: false,
				// 遮罩层数据
				showOverlay: false,
				// 委托表展示方式弹窗数据
				show2: false,
				//委托方式数组
				showData: [{
						id: '0',
						isShow: false,
						name: this.$t('transaction.transaction.5qzwxhl8gww0'),
						imgsrc: require("../../static/transaction/btn3.svg")
					},
					{
						id: '1',
						isShow: false,
						name: this.$t('transaction.transaction.5qzwxhl8gzs0'),
						imgsrc: require("../../static/transaction/showBuy.svg")
					},
					{
						id: '2',
						isShow: false,
						name: this.$t('transaction.transaction.5qzwxhl8h1o0'),
						imgsrc: require("../../static/transaction/showSell.svg")
					},
				],

				// 委托表展示深度数据
				show3: false,
				showDeep: [{
						deep: '0.01'
					},
					{
						deep: '0.1'
					},
					{
						deep: '1'
					},
					{
						deep: '10'
					},
					{
						deep: '100'
					},
				]
			}
		},

		methods: {

			// 跳转到交易走势图
			goTrendchart() {
				uni.navigateTo({
					url: '/pages/transaction/trendchart'
				})
			},
			//切换选项事件
			change(index) {
				this.current = index
			},

			close() {
				this.show = false
			},

			// 点击打开行情弹窗
			openPopup() {
				this.show = true
			},

			// 点击打开保证金弹窗
			openBond() {
				this.show1 = true
			},
			wayChangeRadio(e) {
				console.log(e)
			},
			// 委托表展示方式
			close2() {
				this.show2 = false
			},

			changeRadio(e) {
				console.log(e)
			},
			// 委托表展示深度
			close3() {
				this.show3 = false
			},
		},
	}
</script>

<style scoped lang="scss">
	.small-box1 {
		// width: 343px;
		border-bottom: 1px solid #E5E5E5;
		height: 3rem;
		margin: 0 1rem;
		// background-color: #12D18E;
		// border-radius: 1rem;
		padding: 0.5rem 0;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.top-small-box {
			display: flex;
			// flex-direction: column;
		}

		.left-box {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			width: 70%;
		}
	}

	.delete-user-btn2 {
		position: absolute;
		bottom: 1rem;
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.yes-btn {
		border-radius: 6.25rem;
		margin: 0.5rem 1rem;
		width: 100%;
		border-width: 0 !important;
		background-color: #eeeeee;
		// color: white !important;
	}

	.rate {
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 1rem 0;
		color: #212121;
	}

	.class1 {
		background-color: #12D18E !important;
		color: white !important;
	}

	::v-deep .u-drawer__scroll-view {
		height: 30rem !important;
	}

	//整个页面宽度100%
	.page-transaction {
		width: 100%;
	}

	// 遮罩层样式
	.warp {
		height: 100%;
		position: relative;
	}

	.k-line {
		width: 100%;
		height: 400rpx;
		background: url('../../static/transaction/694BD8D94E2E88F643FD8EAA0C6C31A5 2.svg') no-repeat;
		background-size: cover;
	}

	.rect {
		width: 168rpx;
		height: 114rpx;
		background-color: #fff;
		position: absolute;
		top: 164rpx;
		right: 32rpx;
		border-radius: 10rpx;
		z-index: 200;
		padding: 16rpx;
	}

	.triangle {
		width: 34rpx;
		height: 34rpx;
		background: #fff;
		position: absolute;
		right: 40rpx;
		top: 160rpx;
		transform: rotateZ(45deg);
		border-radius: 4rpx;
		z-index: 100;
	}

	.head {
		width: 100%;
		height: 88rpx;
		padding: 0 32rpx;
		margin-bottom: 26rpx;
	}

	.btn4 {
		margin: 0 16rpx 0 32rpx;
	}

	.content {
		// height: 990rpx;
		width: 100%;
		padding: 0 32rpx;
	}

	// 内容区域
	.left-cont {
		width: 53%;
		margin-right: 48rpx;
	}

	.box1 {
		width: 96rpx;
		height: 32rpx;
		border-radius: 8rpx;
		background: rgba(247, 85, 85, 0.2);
		font-size: 10px;
		color: #f75555;
	}

	// 买入卖出按钮样式
	.buyAndSell {
		width: 100%;
		height: 64rpx;
		border-radius: 16rpx;
		margin-top: 32rpx;
		overflow: hidden;
	}

	.btn {
		width: 50%;
	}

	.line4 {
		width: 100%;

		.box {
			width: 100%;
		}
	}

	.buy {
		color: #fff;
		background-color: #12d18e;
		// background: url('../../static/transaction/buy-bg.svg') no-repeat;
	}

	.sell {
		background-color: #f75555;
		color: #fff;
	}

	.canUse {
		text-decoration: underline;
		line-height: 20rpx;
	}

	// 数量
	.box {
		width: 384rpx;
		height: 80rpx;
		border-radius: 16rpx;
		margin-top: 16rpx;
		padding: 0 16rpx;
	}

	// switch开关选择
	.switch {
		margin-top: 40rpx;
	}

	.switch1 {
		width: 100%;
		height: 80rpx;
		border-radius: 16rpx;
	}

	::v-deep .u-cell__body {
		padding: 20rpx 0 !important;
	}

	::v-deep .u-icon__icon {
		color: #12d18e;
	}

	// 买入按钮
	.btn-buy {
		width: 100%;
		height: 80rpx;
		border-radius: 80rpx;
		color: #fff;
		background-color: #12d18e;
		margin-top: 124rpx;
	}

	// 右侧实时数据
	.right-cont {
		width: 33%;
	}

	.middle {
		margin: 8rpx 0;
	}

	.item4-box {
		width: 174rpx;
		height: 48rpx;
		padding: 0 16rpx;
	}

	// 最下方选项
	// .foot {
	// 	width: 100%;
	// }

	.list {
		font-size: 14px;
		margin-top: 88rpx;
	}

	.noData {
		width: 100%;
	}

	.noData-img {
		width: 400rpx;
		height: 300rpx;
	}

	.u-search {
		margin: 30rpx 0 !important;
	}

	.price-popup {
		height: 1140rpx;
		// overflow-y: scroll;
	}

	// 保证金弹窗样式
	.bond-popup {
		width: 100%;
		height: 10rem;
		padding: 56rpx 0 40rpx 0;
	}

	// 展示方式弹窗样式
	.showWay-popup {
		width: 100%;
		height: 700rpx;
		padding: 56rpx 40rpx 40rpx;
	}

	// 展示深度弹窗样式
	.deep-popup {
		width: 100%;
		height: 900rpx;
		padding: 56rpx 40rpx 40rpx;
	}

	.btn-ok {
		width: 686rpx;
		height: 116rpx;
		border-radius: 200rpx;
		color: #fff;
		background-color: #12d18e;
		border: none;
		font-size: 16px;
		position: absolute;
		bottom: 1rem;
	}

	// 展出方式样式
	.default {
		width: 100%;
		padding: 0 40rpx;
		margin-top: 50rpx;
	}

	.box12 {
		width: 100%;
		height: 80rpx;
		border-radius: 16rpx;
		margin-top: 22rpx;
	}
</style>