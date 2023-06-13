<template>
	<view class="dataTable">
		<u-toast ref="uToast" />
		<view class="dataTable-canvas">
			<view class="titlebox">
				<view class="title">{{$t('components.low-margin-market.5qzzef7zaig0')}}</view>
				<view class="smalltitle">
					<view class="icontitle">
						<view class="lefticon"></view>
						<view>{{$t('components.low-margin-market.5qzzef7zbrw0')}}</view>
					</view>
					<view class="icontitle">
						<view class="righticon"></view>
						<view>{{$t('components.low-margin-market.5qzzef7zc1w0')}}</view>
					</view>
				</view>

				<view class="topbox">
					<view class="topbox-left">{{$t('components.low-margin-market.5qzzef7zc8w0')}}</view>
					<view class="topbox-right">{{$t('components.low-margin-market.5qzzef7zcfc0')}}</view>
				</view>

				<view id="myEchartsbox" v-for="item in dataArr" :key="item.id">
					<view class="topbox1">
						{{item.title}}
					</view>
					<!-- 每个echarts图标 -->
					<view class="bottombox">
						<view class="bottombox-left" v-for="res in item.cell" :key="res.id" :id='res.className'>
						</view>
						<!-- <view :id="item.className" class="myCharts2 cs"></view>
						<view class="bottombox-left">{{item.bottomlefttext}}</view>
						<view class="bottombox-right">{{item.bottomrighttext}}</view> -->
					</view>
				</view>

			</view>

			<!-- <div ref='myEcharts' style="width: 100%;min-height: 2rem;"></div> -->
		</view>
	</view>
</template>

<script module="echarts" lang="renderjs">
	import * as echarts from 'echarts';
	export default {
		data() {
			return {
				myChart: null,
				//echarts数组
				dataArr: [{
						title: 'Cotton',
						// bottomlefttext: this.$t('components.profitable-market.5qzzfstq72g0'),
						// bottomrighttext: this.$t('components.profitable-market.5qzzfstq72g0'),
						id: 1,
						cell: [{
								id: 221,
								className: 'myEcharts221',
							},
							{
								id: 222,
								className: 'myEcharts222',
							},
						]
					},
					{
						title: 'Copper',
						// bottomlefttext: this.$t('components.profitable-market.5qzzfstq72g0'),
						// bottomrighttext: this.$t('components.profitable-market.5qzzfstq72g0'),
						id: 2,
						cell: [{
								id: 223,
								className: 'myEcharts223',
							},
							{
								id: 224,
								className: 'myEcharts224',
							},
						]
					}
				]

			}
		},
		beforeDestroy() {
			// 页面关闭时销毁echarts实例
			this.myChart.clear();
			this.myChart.dispose();
		},
		mounted() {
			this.drawLines()
		},
		methods: {
			async drawLines() {
				//循环echarts
				this.dataArr.forEach(res => {
					res.cell.forEach(result => {
						this.myChart = echarts.init(document.getElementById(result.className));
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
						var myData = ['', '', '', '']
						var databeast = {
							1: [389]
						}
						var databeauty = {
							1: [121]
						}
						var timeLineData = [1]

						var option = {
							baseOption: {
								backgroundColor: 'white',
								timeline: {
									show: false,
									top: 0,
									data: []
								},
								legend: {
									show: false
								},
								tooltip: {
									show: true,
									trigger: 'axis',
									formatter: '{b}<br/>{a}: {c}人',
									axisPointer: {
										type: 'shadow'
									}
								},

								grid: [{
									show: false,
									left: '5%',
									top: 0,
									bottom: 0,
									containLabel: true,
									width: '45%'
								}, {
									show: false,
									left: '51%',
									top: 20,
									bottom: 0,
									width: '0%'
								}, {
									show: false,
									right: '5%',
									top: 0,
									bottom: 0,
									containLabel: true,
									width: '45%'
								}],

								xAxis: [{
									type: 'value',
									inverse: true,
									axisLine: {
										show: false
									},
									axisTick: {
										show: false
									},
									position: 'top',
									axisLabel: {
										show: false
									},
									splitLine: {
										show: false
									}
								}, {
									gridIndex: 1,
									show: false
								}, {
									gridIndex: 2,
									nameTextStyle: {
										color: '#50afff',
										fontSize: 14
									},
									axisLine: {
										show: false
									},
									axisTick: {
										show: false
									},
									position: 'top',
									axisLabel: {
										show: false
									},
									splitLine: {
										show: false
									}
								}],
								yAxis: [{
									type: 'category',
									inverse: true,
									position: 'right',
									axisLine: {
										show: false
									},
									axisTick: {
										show: false
									},
									axisLabel: {
										show: false
									},
									data: myData
								}, {
									gridIndex: 1,
									type: 'category',
									inverse: true,
									position: 'left',
									axisLine: {
										show: false
									},
									axisTick: {
										show: false
									},
									axisLabel: {
										show: true,
										textStyle: {
											color: '#50afff',
											fontSize: 14
										}

									},
									data: myData.map(function(value) {
										return {
											value: value,
											textStyle: {
												align: 'center'
											}
										}
									})
								}, {
									gridIndex: 2,
									type: 'category',
									inverse: true,
									position: 'left',
									axisLine: {
										show: false
									},
									axisTick: {
										show: false
									},
									axisLabel: {
										show: false

									},
									data: myData
								}],
								series: []

							},
							options: []
						}

						option.baseOption.timeline.data.push(timeLineData[0])
						option.options.push({
							tooltip: {
								trigger: 'axis',
								formatter: '{b}<br/>{c} {a}'
							},
							series: [{
								// name: this.$t(
								// 	'components.profitable-market.5qzzfstq76o0'),
								type: 'bar',
								barWidth: 30,
								label: {
									normal: {
										show: true,
										position: 'center',
										offset: [20, 4],
										textStyle: {
											color: '#212121',
											fontSize: 14
										}
									}
								},
								itemStyle: {
									normal: {
										color: 'red',
										barBorderRadius: 50,
									}
								},

								data: databeast[timeLineData[0]]
							}, {
								// name: this.$t(
								// 	'components.profitable-market.5qzzfstq7ak0'),
								type: 'bar',
								barWidth: 30,
								xAxisIndex: 2,
								yAxisIndex: 2,
								label: {
									normal: {
										show: true,
										position: 'center',
										offset: [20, 4],
										textStyle: {
											color: '#212121',
											fontSize: 14
										}
									}
								},
								itemStyle: {
									normal: {
										color: '#00d484',
										barBorderRadius: 50
									}
								},
								data: databeauty[timeLineData[0]]
							}]
						})

						// 这里不要忘记把option设置给echarts实例
						this.myChart.setOption(option);

						// 这里是用于窗口变化时的自适应， 利用的是echarts自带的resize方法
						// 如果你打印出来这个echarts实例， 可以在函数里面找到这个方法
						// window.addEventListener('resize', () => {
						// 	this.myChart.resize()
						// });
						// },

					})
				})

			}
		}
	}
</script>

<script>
	export default {
		data() {
			return {



				//echarts数组
				dataArr: [{
						title: 'Cotton',
						bottomlefttext: this.$t('components.profitable-market.5qzzfstq72g0'),
						bottomrighttext: this.$t('components.profitable-market.5qzzfstq72g0'),
						id: 1,
						cell: [{
								id: 221,
								className: 'myEcharts221',
							},
							{
								id: 222,
								className: 'myEcharts222',
							},
						]
					},
					{
						title: 'Copper',
						bottomlefttext: this.$t('components.profitable-market.5qzzfstq72g0'),
						bottomrighttext: this.$t('components.profitable-market.5qzzfstq72g0'),
						id: 2,
						cell: [{
								id: 223,
								className: 'myEcharts223',
							},
							{
								id: 224,
								className: 'myEcharts224',
							},
						]
					}
				]


				// myChart1: null,
			}
		},
		// onLoad(options) {
		// 	// let that = this;
		// 	// // 通过nextTick异步画图
		// 	// this.$nextTick(() => {
		// 	// 	that.drawLines();
		// 	// });
		// 	this.drawLines()
		// },

		methods: {



			// 		// 这里不要忘记把option设置给echarts实例
			// 		this.myChart.setOption(option);
			// 		// this.myChart1.setOption(option)

			// 		// 这里是用于窗口变化时的自适应，利用的是echarts自带的resize方法
			// 		// 如果你打印出来这个echarts实例，可以在函数里面找到这个方法
			// 		window.addEventListener('resize', () => {
			// 			this.myChart.resize()
			// 		});
			// 	},

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
			border-bottom: 1px solid #eeeeee;
			padding-bottom: 2rem;

			.titlebox {
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-bottom: 1rem;

				.title {
					min-width: 9.5rem;
					height: 1.4rem;
					color: #212121;
					font-size: 1.4rem;
					font-weight: 700;
					margin-bottom: 2rem;
					text-align: center;
				}

				.smalltitle {
					width: 100%;
					height: 1.1rem;
					color: #212121;
					font-size: 1.1rem;
					font-weight: 700;
					display: flex;
					justify-content: space-around;

					.icontitle {
						display: flex;
						min-width: 2.5rem;
						height: 1.1rem;
						justify-content: space-between;
						align-items: center;

						.lefticon {
							width: 0.7rem;
							height: 0.7rem;
							background-color: #F75555;
							margin-right: 0.5rem;
						}

						.righticon {
							width: 0.7rem;
							height: 0.7rem;
							background-color: #12D18E;
							margin-right: 0.5rem;
						}
					}
				}
			}

			.topbox {
				width: 100%;
				min-height: 2rem;
				display: flex;
				margin-top: 1.5rem;

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



			#myEchartsbox {
				width: 100%;
				min-height: 6rem;
				// border-bottom: 1px dashed #757575;
				display: flex;
				flex-direction: column;
				justify-content: center;

				.topbox1 {
					width: 100%;
					min-height: 2rem;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #212121;
					font-size: 1rem;
					font-weight: 700;
					margin-bottom: 0.5rem;
				}

				.bottombox {
					width: 100%;
					min-height: 2rem;
					display: flex;
					justify-content: center;

					.bottombox-left {
						display: flex;
						justify-content: center;
						align-items: center;
						min-height: 2rem;
						// padding: 0 1rem;
						width: 47%;
						// border-right: 1px solid #757575;
						// border: 1px solid;
					}
				}
			}
		}


	}
</style>