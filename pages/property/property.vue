<template>
	<view class="page-property">
		<!-- 头部资产 -->
		<view class="head df fdc">
			<view class="all df aic jcsb mt50">
				<view class="head-left df aic">
					<image class="wh32 mr8" src="../../static/fonts/user.png" mode=""></image>
					<p class="fz18 fwb fff">{{$t('property.property.5qzx1gr7b0s0')}}</p>
				</view>
				<view class="head-right df aic">
					<image class="wh24 mr32" src="../../static/fonts/Headphone1.png" mode=""></image>
					<image class="wh24" src="../../static/fonts/SMS1.png" mode=""></image>
				</view>
			</view>
			<!-- 折线图echarts -->
			<view class="line-bg" id='line-bg'></view>
		</view>

		<!-- 中间账户资金 -->
		<view class="userAccount df fdc jcc aic">
			<p class="fz32 fwb">$196,548.50</p>
			<view class="df">
				<image class="wh24" src="../../static/transaction/UpSquare 1.svg" mode=""></image>
				<p class="fz16 sign">$66,378.49(24.65%)</p>
			</view>
		</view>

		<!-- 下方股票组件 -->
		<view class="gupiao">
			<gupiao-component></gupiao-component>
		</view>
	</view>
</template>

<script module="echarts" lang="renderjs">
	import * as echarts from 'echarts';
	export default {
		data() {
			return {
				//echart背景图
				pic: '../../static/transaction/property-bg.svg',
			}
		},
		//页面挂载之后进行绘制
		mounted() {
			this.drawLines()
		},
		methods: {
			//echarts配置
			async drawLines() {
				this.myChart = echarts.init(document.getElementById('line-bg'));
				var xData = function() {
					var data = [];
					for (var i = 1; i < 31; i++) {
						data.push(i + "日");
					}
					return data;
				}();

				let option = {
					// backgroundColor: "#1A1835",
					background: this.pic,

					tooltip: {
						trigger: 'axis',
						axisPointer: {
							lineStyle: {
								color: {
									type: 'linear',
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									colorStops: [{
										offset: 0,
										color: 'rgba(0, 255, 233,0.5)'
									}, {
										offset: 0.5,
										color: 'rgba(255, 255, 255,0.5)',
									}, {
										offset: 1,
										color: 'rgba(0, 255, 233,0.5)'
									}],
									global: false
								}
							},
						},
					},
					grid: {
						borderWidth: 0,
						top: 110,
						bottom: 95,
						textStyle: {
							color: "#fff"
						}
					},

					calculable: true,
					xAxis: [{
						type: "category",
						axisLine: {
							show: false, // 不显示坐标轴线
						},
						splitLine: {
							show: false
						},

						axisLabel: {
							show: false
						},
						splitLine: {
							show: false
						},
						axisTick: {
							show: false
						},
						data: xData,
					}],

					yAxis: [{
						type: "value",
						axisLine: {
							show: false, // 不显示坐标轴线
						},
						splitLine: {
							show: false
						},
						splitLine: {
							show: false
						},

						axisLabel: {
							show: false
						},
						axisLine: {
							lineStyle: {
								color: "rgba(204,187,225,0.5)",
							}
						},

					}],
					dataZoom: [{
						show: true,
						height: 30,
						xAxisIndex: [0],
						bottom: 30,
						"start": 10,
						"end": 80,
						handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
						handleSize: '110%',
						handleStyle: {
							color: "#fff",
						},
						textStyle: {
							color: "white",
						},
						fillerColor: "white",
						borderColor: "white",

					}, {
						type: "inside",
						show: true,
						height: 15,
						start: 1,
						end: 35
					}],
					series: [{
						name: "访问量",
						type: "line",
						symbolSize: 10,
						symbol: 'circle',
						label: {
							show: true,
							position: 'top',
							textStyle: {
								color: '#fff',
							}
						},
						areaStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: 'rgba(255,255,255,0.3)'
									},
									{
										offset: 1,
										color: 'rgba(255,255,255,0.3)'
									}
								], false),
								shadowColor: 'rgba(255,255,255,0.3)',
								shadowBlur: 20
							}
						},

						itemStyle: {
							color: "#12D18E",
							borderColor: "#fff",
							borderWidth: 2,
							// shadowColor: 'rgba(0, 0, 0, .3)',
							shadowBlur: 0,
							// shadowOffsetY: 2,
							// shadowOffsetX: 2,
						},
						lineStyle: {
							normal: {
								color: "#fff",
								shadowColor: 'rgba(0, 0, 0, .3)',
								shadowBlur: 0,
								width: 4 //设置线条粗细
								// shadowOffsetY: 5,
								// shadowOffsetX: 5,
							},
						},
						markPoint: {
							label: {
								normal: {
									textStyle: {
										color: '#fff'
									}
								}
							},
							data: [{
								type: 'max',
								name: '最大值',

							}, {
								type: 'min',
								name: '最小值'
							}]
						},
						data: [
							509, 917, 2455, 2610, 2719, 3033, 4999, 3085, 2708, 2809, 2117, 2000,
							1455, 1210, 719,
							733, 944, 2285, 2208, 3372, 3936, 3693, 2962, 2810, 3519, 2455, 2610,
							2719, 2484, 2078
						],
					}]
				}
				// 这里不要忘记把option设置给echarts实例
				this.myChart.setOption(option);
			},
		}
	}
</script>

<script>
	// 引入热门股票组件
	import GupiaoComponent from '@/common/GupiaoComponent.vue'
	//引入echarts
	export default {
		components: {
			GupiaoComponent,
		},

		data() {
			return {
				//echart背景图
				pic: '../../static/transaction/property-bg.svg',
			};
		}
	}
</script>

<style lang="scss" scoped>
	.head {
		position: relative;
		width: 100%;
		height: 876rpx;
		background: url('../../static/transaction/property-bg.svg') repeat center;
	}

	// .line-bg {
	// 	position: absolute;
	// 	bottom: 0;
	// 	left: 0;
	// 	width: 100%;
	// 	height: 640rpx;
	// 	background: url('../../static/transaction/Group 276.svg') no-repeat;
	// 	background-size: cover;
	// }

	#line-bg {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 640rpx;
	}

	// 用户资金
	.userAccount {
		// width: 100%;
		height: 238rpx;
		border-radius: 48rpx;
		margin: 48rpx 32rpx 32rpx;
		// margin: 48rpx auto 32rpx;
		border: 1px solid #EFEFEF;
	}

	.gupiao {
		width: 100%;
	}
</style>