<template>
	<view>
		<!-- 头部 -->
		<view class="head df fdc">
			<!-- 当前账户：模拟账户 -->
			<view class="account df jcsb aic">
				<view class="left df aic">
					<image class="user-img mr8" src="../../static/fonts/user.png" mode=""></image>
					<p class="fz16 fwb fff">当前账户：模拟账户</p>
				</view>
				<view class="right df aic">
					<image class="user-img mr32" src="../../static/fonts/Headphone1.png" mode=""></image>
					<view class="hot">
						<image class="user-img" src="../../static/fonts/SMS1.png" mode=""></image>
						<text></text>
					</view>
				</view>
			</view>
			<!-- 账户金额 -->
			<view class="fund df aic jcc fff fz40 fwb">$229,375.25</view>
			<p class="df aic jcc fff fz14 mt16">账户可用资金</p>
		</view>
		<!-- 股票、原油、指数 -->
		<scroll-view :scroll-x="true">
			<view class="container">
				<view class="item" v-for="(item,index) in chartDatas" :key="index">
					<p class="fz14 title">{{item.name}}</p>
					<p class="number fz14" :class="item.plus=='+'?'sign':'redss'">{{item.float}}</p>
					<!-- 图表的容器 -->
					<view :id="item.className" class="myCharts"></view>
				</view>
			</view>
		</scroll-view>
		<!-- 我的投资组合 -->
		<view class="topic df aic jcsb">
			<p class="fz18 fwb">我的投资组合</p>
			<u-icon name="arrow-rightward" color="#12d18e" size="28"></u-icon>
		</view>
		<scroll-view :scroll-x="true">
			<view class="myInvest df">
				<view class="box mr8 df fdc jcsb aic" v-for="(item,index) in chartDatas" :key="index">
					<view class="name-box mt10 df aic jcc">
						<image class="img" src="../../static/fonts/B.svg" mode=""></image>
						<view class="right ml8">
							<p class="fz12">名称</p>
							<p class="fz12">+3.57%</p>
						</view>
					</view>
					<view class="echarts-box cs">
						<!-- 容器里面是echarts图表,还没搞 -->
						<view :id="item.className" class="myCharts1"></view>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- 我关注的股票 -->
		<view class="topic df aic jcsb">
			<p class="fz18 fwb">我关注的股票</p>
			<u-icon name="arrow-rightward" color="#12d18e" size="28"></u-icon>
		</view>
		<view class="scokt_list">
			<view class="scokt_item" v-for="(item,index) in scoktList" :key="index">
				<view class="df aic">
					<image src="../../static/fonts/B.svg"></image>
					<view class="scokt_left">
						<text>名称</text>
						<text>类型(股票/指数等)</text>
					</view>
				</view>
				<view :id="item.className" class="myCharts2"></view>
				<view class="scokt_right">
					<text>198</text>
					<text :class="item.plus=='+'?'sign':'redss'">+1(+0.53%)</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import * as echarts from 'echarts';
	import {
		render
	} from "vue";
	export default {
		data() {
			return {
				chartDatas: [{
					"className": "myChart1",
					"name": "股票",
					"float": "+3.79%",
					"plus": "+"
				}, {
					"className": "myChart2",
					"name": "原油",
					"float": "-1.96%",
					"plus": "-"
				}, {
					"className": "myChart3",
					"name": "指数",
					"float": "+3.57%",
					"plus": "+"
				}, {
					"className": "myChart4",
					"name": "期货",
					"float": "+4.79%",
					"plus": "+"
				}],
				scoktList: [{
					"className": "sChart1",
					"name": "股票1",
					"float": "+1(+0.56%)",
					"plus": "+"
				}, {
					"className": "sChart2",
					"name": "股票2",
					"float": "-1(-0.56%)",
					"plus": "-"
				}, {
					"className": "sChart3",
					"name": "股票3",
					"float": "-1(-1.6%)",
					"plus": "-"
				}, {
					"className": "sChart4",
					"name": "股票4",
					"float": "+1(+0.56%)",
					"plus": "+"
				}]
			};
		},
		methods: {
			// 定义一个渲染函数，在mounted阶段执行。
			render() {
				var that = this;
				// 基于准备好的dom，初始化echarts实例
				for (var i = 0; i < that.chartDatas.length; i++) {
					var chart = that.chartDatas[i]

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
							data: [10, 6, 12, 4, 10, 16, 13, 18],
							showSymbol: false, //隐藏线形上面的圆点
							lineStyle: {
								color: chart.plus == "+" ? '#ddf9ef' : '#ffd1d1',
							},
							// 颜色渐变
							areaStyle: {
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1,
									[{
											offset: 0,
											color: chart.plus == "+" ? '#12d18e' : '#ffd1d1',
										},
										{
											offset: 0.5,
											color: chart.plus == "+" ? '#12d18e' : '#ffd1d1',
										},
										{
											offset: 1,
											color: '#ddd'
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
		},
		// 页面挂在之后执行渲染函数。
		mounted() {},
		onLoad() {},
		onShow() {
			this.$nextTick(() => {
				this.render();
				this.render2();
			})
		},
		onResize() {},
	}
</script>

<style>
	.head {
		width: 100%;
		height: 440rpx;
		background: url('../../static/background/home-banner.svg') repeat fixed center;
		/* 		position: absolute;
		top: -90px; */
	}

	.box {
		width: 256rpx;
		height: 248rpx;
	}

	.myInvest {
		width: 100%;
		padding: 0 20rpx;
	}

	.topic {
		padding: 48rpx 32rpx 32rpx;
	}

	.account {
		width: 100%;
		height: 55rpx;
		margin: 104rpx auto 0;
		padding: 30rpx;
		box-sizing: border-box;
	}

	.echarts-box {
		width: 254rpx;
		height: 146rpx;
		border-radius: 0 0 48rpx 48rpx;
	}

	.user-img {
		width: 50rpx;
		height: 50rpx;
	}

	.fund {
		width: 518rpx;
		height: 96rpx;
		margin: 64rpx auto 0;

	}

	.container {
		width: 100%;
		height: 240rpx;
		margin: 32rpx 0 48rpx 0rpx;
		display: inline-flex;
		flex-direction: row;
		padding: 10rpx;
		white-space: nowrap;
		box-sizing: border-box;
		border-radius: 48rpx;
		/* overflow: hidden; */
	}

	.myCharts {
		width: 208rpx;
		height: 146rpx;
	}

	.myCharts2 {
		width: 124rpx;
		height: 80rpx;
		flex: none;
	}

	.item {
		width: 208rpx;
		height: 240rpx;
		border-radius: 48rpx;
		display: inline-block;
	}

	.title {
		margin: 32rpx 0 0 32rpx;
	}

	.number {
		margin: 8rpx 0 0 32rpx;
	}

	.hot {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.hot text {
		width: 20rpx;
		height: 20rpx;
		background-color: red;
		border-radius: 20rpx;
		margin-left: -15rpx;
		margin-top: -30rpx;
		z-index: 999;
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
	}

	.scokt_right text:nth-child(even) {
		font-size: 24rpx;
	}
</style>