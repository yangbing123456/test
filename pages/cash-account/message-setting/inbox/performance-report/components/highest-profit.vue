<template>
	<view class="dataTable">
		<view class="dataTable-canvas">
			<view class="titlebox">
				<view class="title">{{$t('components.highest-profit.5qzzdr15y3s0')}}</view>
			</view>
			<!-- 名字&数量&开盘价&利率 -->
			<view id="myEcharts1">
				<view class="topbox">
					<view class="topbox-left">{{$t('components.highest-profit.5qzzdr15zp80')}}</view>
					<view class="topbox-right">{{$t('components.highest-profit.5qzzdr1601k0')}}</view>
				</view>
				<view class="bottombox">
					<view class="bottombox-left">{{$t('components.highest-profit.5qzzdr1607c0')}}</view>
					<view class="bottombox-right1">{{$t('components.highest-profit.5qzzdr160e00')}}</view>
				</view>
			</view>

			<!-- 中间内容盒子 -->
			<view id="myEcharts1" v-for="item in dataArr" :key="item.id">
				<view class="topbox">
					<view class="topbox-left">{{item.toplefttext}}</view>
					<view class="topbox-right">{{item.toprighttext}}</view>
				</view>
				<view class="bottombox">
					<view class="bottombox-left">{{item.bottomlefttext}}</view>
					<view class="bottombox-right">{{item.bottomrighttext}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//数据数组
				dataArr: [{
					toplefttext: this.$t('components.highest-profit.5qzzdr160js0'),
					toprighttext: '1',
					bottomlefttext: '3.69/371',
					bottomrighttext: '+0.01',
					color: '#12D18E',
					id: 2
				}, ]
			}
		},

		// beforeDestroy() {
		// 	// 页面关闭时销毁echarts实例
		// 	this.myChart.clear();
		// 	this.myChart.dispose();
		// },
		mounted() {

		},
		methods: {


		}
	}
</script>

<style scope lang="scss">
	.dataTable {
		padding: 10rpx;
		width: 100%;
		height: 100%;

		.dataTable-canvas {
			min-height: 10rem;
			margin: 1rem;
			padding-bottom: 1rem;
			border-bottom: 1px solid #EEEEEE;

			.titlebox {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-bottom: 1rem;

				.title {
					min-width: 9.5rem;
					height: 1.4rem;
					color: #212121;
					font-size: 1.4rem;
					font-weight: 700;
					text-align: center;
				}
			}



			#myEcharts1 {
				width: 100%;
				min-height: 6rem;
				display: flex;
				flex-direction: column;
				justify-content: center;

				.topbox {
					width: 100%;
					min-height: 2rem;
					display: flex;

					.topbox-left,
					.topbox-right {
						width: 50%;
						height: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 1rem;
						color: #212121;
					}

					.topbox-left {
						border-right: 1px solid #757575;
					}
				}

				.bottombox {
					width: 100%;
					min-height: 2rem;
					display: flex;

					.bottombox-left,
					.bottombox-right,
					.bottombox-right1 {
						width: 50%;
						height: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 1rem;
						color: #212121;
					}

					.bottombox-left {
						border-right: 1px solid #757575;

					}

					.bottombox-right {
						color: #12D18E;
					}
				}


			}
		}
	}
</style>