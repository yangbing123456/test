<template>
	<view class="dataTable">
		<u-toast ref="uToast" />
		<view class="dataTable-canvas">
			<view class="titlebox">
				<view class="title">{{$t('components.closing-transaction.5qzzdcn125o0')}}</view>
				<view class="smalltitle">
					<view class="icontitle">
						<view class="lefticon"></view>
						<view>{{$t('components.closing-transaction.5qzzdcn13ls0')}}</view>
					</view>
					<view class="icontitle">
						<view class="righticon"></view>
						<view>{{$t('components.closing-transaction.5qzzdcn13tc0')}}</view>
					</view>
				</view>
			</view>
			<!-- 存放echarts盒子 -->
			<div id="myEcharts1"></div>
		</view>
	</view>
</template>

<script module="echarts" lang="renderjs">
	import * as echarts from 'echarts';
	export default {
		data() {
			return {
				myChart: null,
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

		//页面挂载过后进行绘制
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
				this.myChart = echarts.init(document.getElementById('myEcharts1'));
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
					title: {
						text: "",
						textStyle: {
							color: "#000"
						}
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					// toolbox: {
					//     feature: {
					//         saveAsImage: {}
					//     }
					// },
					grid: {
						left: '3%',
						right: '7%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						name: "",
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
						axisLabel: {
							rotate: 0,
							fontSize: 10
						},
						axisLine: {
							show: false
						},
						data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
					}],
					yAxis: [{
						type: 'value',
						name: "",
						axisLabel: {
							fontSize: 18
						},
						axisLine: {
							show: false
						},
						axisLabel: {
							show: false,
							margin: 20,
							textStyle: {
								color: '#d1e6eb',
							},
						},
						splitLine: {
							show: false
						},
					}],
					series: [{
							name: '买入',
							type: 'bar',
							barGap: "5%",
							label: {
								show: true,
								fontSize: 12,
								position: 'top'
							},
							itemStyle: {
								color: '#12D18E',
								borderRadius: 12
							},
							data: [162, 78, 86, 153, 69, 97, 48, 22, 31],
						},
						{
							name: '卖出',
							type: 'bar',
							barGap: "5%",
							label: {
								show: true,
								fontSize: 12,
								position: 'top',
							},
							itemStyle: {
								color: '#F75555',
								borderRadius: 12
							},
							data: [275, 200, 204, 170, 87, 101, 64, 64, 55],
						}

					]
				};



				// 这里不要忘记把option设置给echarts实例
				this.myChart.setOption(option);
				// this.myChart1.setOption(option)

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
							border-radius: 50%;
							margin-right: 0.5rem;
						}

						.righticon {
							width: 0.7rem;
							height: 0.7rem;
							background-color: #12D18E;
							border-radius: 50%;
							margin-right: 0.5rem;
						}
					}
				}
			}



			#myEcharts1 {
				width: 100%;
				height: 14rem;
			}
		}

		// &-canvas {
		// 	&-title {
		// 		padding: 20rpx 0rpx;

		// 		>text {
		// 			padding-left: 20rpx;
		// 			width: 100%;
		// 			height: 100%;
		// 			font-size: 32rpx;
		// 			font-weight: 550;
		// 			line-height: 32rpx;
		// 			border-left: 10rpx solid #28b5b1;
		// 		}
		// 	}

		// 	#myEcharts {
		// 		width: 100%;
		// 		height: 600rpx;
		// 	}
		// }
	}
</style>