<template>
	<!-- 把行情页面抽离成公共组件 -->
	<view>
		<view class="box all df fdc aic">
			<!-- 选项卡 -->
			<view class="list df aic jcsb">
				<u-tabs-swiper active-color="#12D18E" inactive-color="#9D9E9E" lineWidth="40" lineColor="#12d18e"
					:list="list1" @change="change" :current='current'></u-tabs-swiper>
			</view>

			<!-- 内容区 -->
			<view class="content">
				<!-- 下方每一行内容 -->
				<view class="box" v-for="item,index in scoktList" :key="item.name">
					<view class="item df aic jcsb">
						<!-- 左侧 -->
						<view class="left">
							<p class="fz18 fwb">{{item.left1}}<span class="nineD fz14 fwn">/USDT</span></p>
							<p class="nineD fz12">{{item.left2}}</p>
						</view>
						<!-- echarts图标 -->
						<view :id="item.className" class="middle cs"></view>

						<!-- 右侧 -->
						<view class="right df fdc aife jcc">
							<p :class="item.plus == '+' ? 'green' : 'f75'">{{item.right1}}</p>
							<p class="nineD fz12">{{item.right2}}</p>
						</view>
					</view>
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
					className: "sChart1",
					name: "1",
					left1: 'BTC',
					left2: '$1.33亿',
					right1: '+1.33%',
					right2: '$28,293.9',
					plus: "+"
				}, {
					className: "sChart2",
					name: "2",
					left1: 'DOGE',
					left2: '$180.42亿',
					right1: '-0.34%',
					right2: '$0.08297',
					plus: "-"
				}, {
					className: "sChart3",
					name: "3",
					left1: 'BTC',
					left2: '$1.33亿',
					right1: '+1.33%',
					right2: '$28,293.9',
					plus: "+"
				}, {
					className: "sChart4",
					name: "4",
					left1: 'DOGE',
					left2: '$180.42亿',
					right1: '-0.34%',
					right2: '$0.08297',
					plus: "-"
				}, {
					className: "sChart5",
					name: "5",
					left1: 'BTC',
					left2: '$1.33亿',
					right1: '+1.33%',
					right2: '$28,293.9',
					plus: "+"
				}, {
					className: "sChart6",
					name: "6",
					left1: 'DOGE',
					left2: '$180.42亿',
					right1: '-0.34%',
					right2: '$0.08297',
					plus: "-"
				}, {
					className: "sChart7",
					name: "7",
					left1: 'BTC',
					left2: '$1.33亿',
					right1: '+1.33%',
					right2: '$28,293.9',
					plus: "+"
				}, {
					className: "sChart8",
					name: "8",
					left1: 'DOGE',
					left2: '$180.42亿',
					right1: '-0.34%',
					right2: '$0.08297',
					plus: "-"
				}, {
					className: "sChart9",
					name: "9",
					left1: 'BTC',
					left2: '$1.33亿',
					right1: '+1.33%',
					right2: '$28,293.9',
					plus: "+"
				}, {
					className: "sChart10",
					name: "10",
					left1: 'DOGE',
					left2: '$180.42亿',
					right1: '-0.34%',
					right2: '$0.08297',
					plus: "-"
				}, {
					className: "sChart11",
					name: "11",
					left1: 'BTC',
					left2: '$1.33亿',
					right1: '+1.33%',
					right2: '$28,293.9',
					plus: "+"
				}, {
					className: "sChart12",
					name: "12",
					left1: 'DOGE',
					left2: '$180.42亿',
					right1: '-0.34%',
					right2: '$0.08297',
					plus: "-"
				}],
			}
		},
		// 页面挂载之后执行渲染函数。
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
								10, 9, 10, 13, 18, 10, 20, 13, 10, 19
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
				current: 0, //选项卡下标
				list1: [{
					name: '自选',
				}, {
					name: '热门',
				}, {
					name: '周末交易'
				}, {
					name: '商品'
				}, {
					name: '原油市场'
				}, {
					name: '加密货币'
				}],
				// 行内chrts图表数据
				scoktList: [{
					className: "sChart1",
					name: "1",
					left1: 'BTC',
					left2: '$1.33亿',
					right1: '+1.33%',
					right2: '$28,293.9',
					plus: "+"
				}, {
					className: "sChart2",
					name: "2",
					left1: 'DOGE',
					left2: '$180.42亿',
					right1: '-0.34%',
					right2: '$0.08297',
					plus: "-"
				}, {
					className: "sChart3",
					name: "3",
					left1: 'BTC',
					left2: '$1.33亿',
					right1: '+1.33%',
					right2: '$28,293.9',
					plus: "+"
				}, {
					className: "sChart4",
					name: "4",
					left1: 'DOGE',
					left2: '$180.42亿',
					right1: '-0.34%',
					right2: '$0.08297',
					plus: "-"
				}, {
					className: "sChart5",
					name: "5",
					left1: 'BTC',
					left2: '$1.33亿',
					right1: '+1.33%',
					right2: '$28,293.9',
					plus: "+"
				}, {
					className: "sChart6",
					name: "6",
					left1: 'DOGE',
					left2: '$180.42亿',
					right1: '-0.34%',
					right2: '$0.08297',
					plus: "-"
				}, {
					className: "sChart7",
					name: "7",
					left1: 'BTC',
					left2: '$1.33亿',
					right1: '+1.33%',
					right2: '$28,293.9',
					plus: "+"
				}, {
					className: "sChart8",
					name: "8",
					left1: 'DOGE',
					left2: '$180.42亿',
					right1: '-0.34%',
					right2: '$0.08297',
					plus: "-"
				}, {
					className: "sChart9",
					name: "9",
					left1: 'BTC',
					left2: '$1.33亿',
					right1: '+1.33%',
					right2: '$28,293.9',
					plus: "+"
				}, {
					className: "sChart10",
					name: "10",
					left1: 'DOGE',
					left2: '$180.42亿',
					right1: '-0.34%',
					right2: '$0.08297',
					plus: "-"
				}, {
					className: "sChart11",
					name: "11",
					left1: 'BTC',
					left2: '$1.33亿',
					right1: '+1.33%',
					right2: '$28,293.9',
					plus: "+"
				}, {
					className: "sChart12",
					name: "12",
					left1: 'DOGE',
					left2: '$180.42亿',
					right1: '-0.34%',
					right2: '$0.08297',
					plus: "-"
				}],
			}
		},
		methods: {
			//切换选项卡事件
			change(index) {
				this.current = index
			},
		},

	}
</script>
<style lang="scss" scoped>
	.box {
		width: 100%;
		box-sizing: border-box;
	}

	.list {
		width: 100%;
		height: 74rpx;
		margin-bottom: 48rpx;
	}

	.img-pen {
		width: 40rpx;
		height: 40rpx;
	}

	.content {
		width: 100%;
	}

	.item {
		margin-bottom: 48rpx;
	}

	.left {
		width: 20%;
	}

	.middle {
		width: 20%;
		height: 64rpx;
		border: none;
	}

	.right {
		width: 20%;
	}
</style>