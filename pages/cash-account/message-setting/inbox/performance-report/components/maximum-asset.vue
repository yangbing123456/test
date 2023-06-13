<template>
	<view class="dataTable">
		<u-toast ref="uToast" />
		<view class="dataTable-canvas">
			<view class="titlebox">
				<view class="title">{{$t('components.maximum-asset.5qzzf3tbrm80')}}</view>
			</view>
			<!-- 存放echarts -->
			<div id="myEcharts5" ref='myEcharts'></div>
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

		// 页面关闭时销毁echarts实例
		beforeDestroy() {
			this.myChart.clear();
			this.myChart.dispose();
		},
		mounted() {
			this.drawLines()
		},
		methods: {
			async drawLines() {
				// 这里是初始化的方式，通过id查询找到你的canvas标签
				this.myChart = echarts.init(document.getElementById('myEcharts5'));
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
						text: ''
					},
					tooltip: {},
					legend: {
						data: []
					},
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
							fontSize: 10,
							interval: 0,
						},
						axisLine: {
							show: false
						},
						data: ['Gold', 'US100', 'Oil-Ctude', 'NaturaGas', 'Gold', 'Gold']
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
						name: '资产',
						type: 'bar',
						barGap: "10%",
						itemStyle: {
							color: '#C6C9D0',
							borderRadius: 4
						},
						label: {
							show: true,
							fontSize: 18,
							position: 'top',
							formatter: data
						},
						data: [5, 20, 36, 10, 10, 20]
					}]
				}

				// 这里不要忘记把option设置给echarts实例
				this.myChart.setOption(option);

				// 这里是用于窗口变化时的自适应，利用的是echarts自带的resize方法
				// 如果你打印出来这个echarts实例，可以在函数里面找到这个方法
				// window.addEventListener('resize', () => {
				// 	this.myChart.resize()
				// });
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
					min-height: 1.4rem;
					color: #212121;
					font-size: 1.1rem;
					text-align: center;
				}
			}

			#myEcharts5 {
				width: 100%;
				height: 14rem;
			}
		}
	}
</style>