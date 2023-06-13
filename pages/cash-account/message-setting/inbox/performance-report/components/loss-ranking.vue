<template>
	<view class="dataTable">
		<view class="dataTable-canvas">
			<view class="titlebox">
				<view class="title">{{$t('components.loss-ranking.5qzze2jwz0s0')}}</view>
			</view>
			<!-- 名字&数量&开盘价&利率 -->
			<view id="myEcharts2">
				<view class="topbox">
					<view class="topbox-left">{{$t('components.loss-ranking.5qzze2jx3740')}}</view>
					<view class="topbox-right">{{$t('components.loss-ranking.5qzze2jx3rg0')}}</view>
				</view>
				<view class="bottombox">
					<view class="bottombox-left">{{$t('components.loss-ranking.5qzze2jx3y00')}}</view>
					<view class="bottombox-right1">{{$t('components.loss-ranking.5qzze2jx4340')}}</view>
				</view>
			</view>

			<!-- 中间内容盒子 -->
			<view id="myEcharts2" v-for="item in dataArr" :key="item.id">
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
				dataArr: [{
						toplefttext: 'Copper',
						toprighttext: '8',
						bottomlefttext: '3.69/3.71',
						bottomrighttext: '-1.22',
						id: 2
					},
					{
						toplefttext: 'Copper',
						toprighttext: '2',
						bottomlefttext: '3.86/3.71',
						bottomrighttext: '-0.3',
						id: 3
					},
					{
						toplefttext: 'Cotton',
						toprighttext: '20',
						bottomlefttext: '0.81/0.81',
						bottomrighttext: '-0.13',
						id: 4
					},
				]
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



			#myEcharts2 {
				width: 100%;
				min-height: 6rem;
				// border-bottom: 1px dashed #757575;
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
						color: #F75555;
					}
				}
			}
		}
	}
</style>