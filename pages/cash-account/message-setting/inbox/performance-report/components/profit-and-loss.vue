<template>
	<view class="dataTable">
		<u-toast ref="uToast" />
		<view class="dataTable-canvas">
			<view class="titlebox">
				<view class="title">{{$t('components.profit-and-loss.5qzzfir8iws0')}}</view>
			</view>

			<!-- 存放echarts盒子 -->
			<div id="myEcharts"></div>
		</view>
	</view>
</template>

<script module="echarts" lang="renderjs">
	//引入echarts
	import * as echarts from 'echarts';
	export default {
		data() {
			return {
				myChart: null,
			}
		},
		// onLoad() {
		// 	// let that = this;
		// 	// // 通过nextTick异步画图
		// 	this.$nextTick(() => {
		// 		this.drawLines();
		// 	});
		// },

		//页面挂载之后进行绘制
		mounted() {
			this.drawLines()
		},

		// 页面关闭时销毁echarts实例
		beforeDestroy() {
			this.myChart.clear();
			this.myChart.dispose();
		},

		methods: {
			async drawLines() {
				// 这里是初始化的方式，通过id查询找到你的canvas标签
				this.myChart = echarts.init(document.getElementById('myEcharts'));
				// 这里我初始化了4个数组用来存放 后端接口给我的数据
				let data = [];
				let tian = [];
				let reportLine = [];
				let notReportLine = [];
				// try {
				// 	let res = await getWeekStuReport();
				// 	console.log(res);
				// 	if (res.code != 0) {
				// 		this.$refs.uToast.show({
				// 			title: res.message,
				// 			type: 'error',
				// 			duration: 3000,
				// 		});
				// 	} else {
				// 		data = res.result;
				// 		data.forEach((item) => {
				// 			// 从接口中提取自己想要的数据
				// 			tian.push(item.type);
				// 			reportLine.push(item.sbNum);
				// 			notReportLine.push(item.notSbNum);
				// 		})
				// 	}
				// } catch (e) {
				// 	console.log(e);
				// }

				// 这里开始就是echarts的配置项了
				let option = {
					backgroundColor: 'white',
					title: {
						text: '',
						textStyle: {
							align: 'center',
							color: '#fff',
							fontSize: 20,
						},
						top: '5%',
						left: 'center',
					},
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
										color: 'rgba(0, 255, 233,0)'
									}, {
										offset: 0.5,
										color: 'rgba(255, 255, 255,1)',
									}, {
										offset: 1,
										color: 'rgba(0, 255, 233,0)'
									}],
									global: false
								}
							},
						},
					},
					grid: {
						top: '15%',
						left: '5%',
						right: '5%',
						bottom: '15%',
						// containLabel: true
					},
					xAxis: [{
						type: 'category',
						axisLine: {
							show: false
						},
						splitArea: {
							// show: true,
							color: '#f00',
							lineStyle: {
								color: '#f00'
							},
						},
						axisLabel: {
							color: '#212121'
						},
						splitLine: {
							show: false
						},
						boundaryGap: false,
						data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],

					}],

					yAxis: [{
						type: 'value',
						min: 0,
						// max: 140,
						splitNumber: 4,
						splitLine: {
							show: true,
							lineStyle: {
								color: 'rgba(255,255,255,0.1)'
							}
						},
						axisLine: {
							show: false,
						},
						axisLabel: {
							show: false,
							margin: 20,
							textStyle: {
								color: '#d1e6eb',
							},
						},
						axisTick: {
							show: false,
						},
					}],
					series: [{
						name: '注册总量',
						type: 'line',
						// smooth: true, //是否平滑
						showAllSymbol: true,
						// symbol: 'image://./static/images/guang-circle.png',
						symbol: 'circle',
						symbolSize: 12,
						lineStyle: {
							normal: {
								color: "#12D18E",
								shadowColor: 'rgba(0, 0, 0, .3)',
								shadowBlur: 0,
								// shadowOffsetY: 5,
								// shadowOffsetX: 5,
							},
						},
						label: {
							show: true,
							position: 'top',
							textStyle: {
								color: '#000000',
							}
						},

						itemStyle: {
							color: "#12D18E",
							borderColor: "#fff",
							borderWidth: 0,
							shadowColor: 'rgba(0, 0, 0, .3)',
							shadowBlur: 0,
							// shadowOffsetY: 2,
							// shadowOffsetX: 2,
						},
						tooltip: {
							show: false
						},
						areaStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: 'rgba(0,202,149,0.3)'
									},
									{
										offset: 1,
										color: 'rgba(0,202,149,0)'
									}
								], false),
								shadowColor: 'rgba(0,202,149, 0.9)',
								shadowBlur: 20
							}
						},
						data: [17, 10, 22, 44, 16, 9, 88],
					}, ]
				};

				// 这里不要忘记把option设置给echarts实例
				this.myChart.setOption(option);

				// 这里是用于窗口变化时的自适应，利用的是echarts自带的resize方法
				// 如果你打印出来这个echarts实例，可以在函数里面找到这个方法
				window.addEventListener('resize', () => {
					this.myChart.resize()
				});
			},

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
			// padding: 1rem;
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

			#myEcharts {
				width: 100%;
				height: 14rem;
			}
		}
	}
</style>