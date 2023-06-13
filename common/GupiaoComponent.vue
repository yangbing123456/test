<template>
	<!-- 把热门股票抽离成组件 -->
	<view>
		<!-- 我的投资组合 -->
		<view style="color: black;font-weight: 800;font-size: 32rpx;margin: 20rpx;">
			{{$t('common.GupiaoComponent.5qzx35qf9m00')}}
		</view>

		<!-- 下方大盒子 -->
		<view class="skots_list">
			<view class="scokt_item" v-for="(item,index) in scoktList" :key="index">
				<!-- 左侧内容 -->
				<view class="df aic">
					<image src="@/static/fonts/B.svg"></image>
					<view class="scokt_left">
						<text>{{$t('common.GupiaoComponent.5qzx35qfb7k0')}}</text>
						<text>{{$t('common.GupiaoComponent.5qzx35qfbis0')}}</text>
					</view>
				</view>
				<!-- 每一行的echarts -->
				<view :id="item.className" class="myCharts2 cs"></view>
				<!-- 右侧内容 -->
				<view class="scokt_right">
					<text>198</text>
					<text :class="item.plus=='+'?'sign':'redss'">+1(+0.53%)</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script module="echarts" lang="renderjs">
	import * as echarts from 'echarts';
	export default {
		data() {
			return {
				// 行内chrts图表数据
				scoktList: [{
					"className": "sChart1",
					"float": "+1(+0.56%)",
					"plus": "+"
				}, {
					"className": "sChart2",
					"float": "-1(-0.56%)",
					"plus": "-"
				}, {
					"className": "sChart3",
					"float": "-1(-1.6%)",
					"plus": "-"
				}, {
					"className": "sChart4",
					"float": "+1(+0.56%)",
					"plus": "+"
				}],
			}
		},
		// 页面挂在之后执行渲染函数。
		mounted() {
			this.render2()
		},
		methods: {
			render2() {
				var that = this;
				// 基于准备好的dom，初始化echarts实例
				for (var i = 0; i < that.scoktList.length; i++) {
					var chart = that.scoktList[i]

					var myChart = echarts.init(document.getElementById(chart.className));
					let options = {
						tooltip: {},
						grid: {
							left: '0', //距左边边框的距离
							right: '0', //距右边边框的距离
							bottom: '0', //距下面边框的距离
							top: '0', //距上面边框的距离
							containLabel: true,
						},
						xAxis: {
							data: [],
							axisLine: {
								show: false, //隐藏y轴
							},
						},
						yAxis: {
							axisTick: {
								show: false, //刻度线
							},
							axisLine: {
								show: false, //隐藏y轴
							},
							axisLabel: {
								show: false, //隐藏刻度值
							},
							splitLine: {
								show: false,
								lineStyle: {
									type: 'dashed',
								},
							},
						},
						series: [{
							// name: '销量',
							type: 'line',
							data: [10, 9, 12, 20, 15, 13, 18, 20, 20, 10, 10, 15, 13, 23, 20, 12, 16, 20, 20,
								10,
								9, 10, 13, 18, 10, 20, 13, 10, 19
							],
							smooth: true,
							showSymbol: false, //隐藏线形上面的圆点
							lineStyle: {
								color: chart.plus == "+" ? '#12d18e' : '#ffd1d1',
							},
							// 颜色渐变
							areaStyle: {
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1,
									[{
											offset: 0,
											color: chart.plus == "+" ? 'rgba(18,209,142,0.9)' :
												'rgba(208,2,27,0.9)'
										},
										{
											offset: 1,
											color: chart.plus == "+" ? 'rgba(18,209,142,0)' :
												'rgba(208,2,27,0)'
										}
									]
								)
							},
						}]
					}
					// 绘制图表
					myChart.setOption(options);
				}
			},
		}
	}
</script>


<script>
	export default {
		data() {
			return {
				// 行内chrts图表数据
				scoktList: [{
					"className": "sChart1",
					"name": this.$t('common.GupiaoComponent.5qzx35qfbp40'),
					"float": "+1(+0.56%)",
					"plus": "+"
				}, {
					"className": "sChart2",
					"name": this.$t('common.GupiaoComponent.5qzx35qfbu40'),
					"float": "-1(-0.56%)",
					"plus": "-"
				}, {
					"className": "sChart3",
					"name": this.$t('common.GupiaoComponent.5qzx35qfbzs0'),
					"float": "-1(-1.6%)",
					"plus": "-"
				}, {
					"className": "sChart4",
					"name": this.$t('common.GupiaoComponent.5qzx35qfc5w0'),
					"float": "+1(+0.56%)",
					"plus": "+"
				}],
			}
		},
		methods: {

		},

		onLoad() {},
		onShow() {},
		onResize() {},
	}
</script>

<style scoped lang="scss">
	// 行内图标样式
	.myCharts2 {
		width: 124rpx;
		height: 80rpx;
		border: none;
	}

	.redss {
		color: red;
	}

	.scokt_list {
		display: flex;
		flex-direction: column;
	}

	.scokt_item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 20rpx;
	}

	.scokt_item image {
		width: 104rpx;
		height: 104rpx;
	}

	.scokt_left {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		margin-left: 20rpx;
	}

	.scokt_left text:nth-child(odd) {
		color: black;
		font-size: 30rpx;
		font-weight: 800;
		margin-bottom: 10rpx;
	}

	.scokt_left text:nth-child(even) {
		color: #999999;
		font-size: 12px;
	}

	.scokt_right {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.scokt_right text:nth-child(odd) {
		color: black;
		font-size: 30rpx;
		font-weight: 800;
		margin-bottom: 8rpx;
	}

	.scokt_right text:nth-child(even) {
		font-size: 24rpx;
	}
</style>