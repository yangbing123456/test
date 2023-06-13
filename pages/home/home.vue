<template>
	<view class="page-home all df fdc">
		<!-- 头部 -->
		<view class="head df aic jcsb">
			<view class="head-left df aic">
				<image class="wh32 mr8" src="../../static/fonts/user-black.svg" mode=""></image>
				<p class="fz18 fwb" @click='setting'>{{$t('home.home.5qz9yji27ew0')}}</p>
			</view>
			<view class="head-right df aic">
				<image class="wh24 mr32" src="../../static/fonts/Headphone-black.svg" mode=""></image>
				<image class="wh24" src="../../static/fonts/SMS-black.svg" mode=""></image>
			</view>
		</view>

		<!-- 钱包 -->
		<view class="wallet">
			<view class="total df jcsb">
				<view class="df jcc fdc">
					<p class="fff fz12 mb4">{{$t('home.home.5qz9yji28vs0')}}</p>
					<p class="fz24 sign fwb">$56009.00</p>
				</view>
				<view class="avator">
					<image src="../../static/fonts/home.gif" width="100%" height="100%"></image>
				</view>
			</view>
			<!-- 可用余额 -->
			<view class="balance df aic jcsb">
				<p class="fz12">{{$t('home.home.5qz9yji29780')}}</p>
				<p class="fz16 fwb">$4000.00</p>
			</view>
		</view>

		<!-- 仪表组件 -->
		<scroll-view :scroll-x="true">
			<view class="dashboard md16 df jcc">
				<view class="dashboard-item df fdc aic jcc" v-for="(item, index) in circleData" :key="index">
					<!-- <view :id="item.className" class="circle"></view> -->
					<view class="charts-box">
						<qiun-data-charts type="arcbar" :opts="opts" :chartData="item.chartData" :errorShow="false"
							:errorReload="false" :tooltipShow="false" />
					</view>
					<p class="fz14" style="text-align: center;min-width: 2rem;">{{ $t(item.name) }}</p>
					<p class="fz16 fwb">{{ item.price }}</p>
				</view>
			</view>
		</scroll-view>

		<!-- 热门股票 -->
		<view style="color: black;font-weight: 800;font-size: 30rpx;margin: 20rpx;">{{$t('home.home.5qz9yji29fk0')}}
		</view>
		<view class="skots_list">
			<view class="scokt_item" v-for="(item, index) in scoktList" :key="index">
				<view class="df aic">
					<image src="../../static/fonts/B.svg"></image>
					<view class="scokt_left">
						<text>{{$t('home.home.5qz9yji2j900')}}</text>
						<text>{{$t('home.home.5qz9yji2k4g0')}}</text>
					</view>
				</view>
				<view :id="item.className" class="myCharts2 cs">
				</view>
				<view class="scokt_right df fdc aife">
					<text>198</text>
					<text :class="item.plus == '+' ? 'sign' : 'redss'">+1(+0.53%)</text>
				</view>
			</view>
		</view>

		<!-- 按钮 -->
		<!-- <button @click="goLogin" class="loginBtn">{{$t('home.home.5qz9yji2kds0')}}</button> -->
	</view>
</template>

<!-- 测试 -->
<script module="echarts" lang="renderjs">
	import * as echarts from 'echarts';
	export default {
		data() {
			return {
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

		//挂载以后渲染echarts
		mounted() {
			this.render2()
		},
		methods: {
			render2() {
				// var that = this;
				// 基于准备好的dom，初始化echarts实例
				for (var i = 0; i < this.scoktList.length; i++) {
					var chart = this.scoktList[i]

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
							data: [10, 9, 12, 20, 15, 13, 18, 20, 20, 10, 10, 15, 13, 23, 20, 12, 16, 20,
								20,
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
				chartData: {},
				//这里的 opts 是图表类型 type="arcbar" 的全部配置参数，您可以将此配置复制到 config-ucharts.js 文件中下标为 ['arcbar'] 的节点中来覆盖全局默认参数。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
				opts: {
					timing: "easeOut",
					duration: 1000,
					rotate: false,
					rotateLock: false,
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					padding: [0, 0, 0, 0],
					fontSize: 13,
					fontColor: "#212121",
					dataLabel: false,
					dataPointShape: false,
					dataPointShapeType: "solid",
					touchMoveLimit: 90,
					enableScroll: false,
					enableMarkLine: false,
					title: {
						name: "56%",
						fontSize: 16,
						color: "#12d18e",
						offsetX: 0,
						offsetY: 0
					},
					subtitle: {
						name: "",
						fontSize: 15,
						color: "#666666",
						offsetX: 0,
						offsetY: 0
					},
					extra: {
						arcbar: {
							type: "default",
							width: 3,
							backgroundColor: "#E9E9E9",
							startAngle: 0.75,
							endAngle: 0.25,
							gap: 2,
							radius: 28,
							direction: "cw",
							lineCap: "round",
							centerX: 0,
							centerY: 0,
							linearType: "none"
						}
					}
				},
				// 行内chrts图表数据
				scoktList: [{
					"className": "sChart1",
					"name": this.$t('home.home.5qz9yji2kj80'),
					"float": "+1(+0.56%)",
					"plus": "+"
				}, {
					"className": "sChart2",
					"name": this.$t('home.home.5qz9yji2kts0'),
					"float": "-1(-0.56%)",
					"plus": "-"
				}, {
					"className": "sChart3",
					"name": this.$t('home.home.5qz9yji2kz80'),
					"float": "-1(-1.6%)",
					"plus": "-"
				}, {
					"className": "sChart4",
					"name": this.$t('home.home.5qz9yji2l780'),
					"float": "+1(+0.56%)",
					"plus": "+"
				}],
				// 仪表盘数据
				circleData: [{
						className: "circle1",
						name: this.$t('home.home.5qz9yji2lhk0'),
						price: '$23,760',
						chartData: {}
					},
					{
						className: "circle2",
						name: this.$t('home.home.5qz9yji2lsg0'),
						price: '$23,760',
						chartData: {}
					},
					{
						className: "circle3",
						name: this.$t('home.home.5qz9yji2lyo0'),
						price: '$23,760',
						chartData: {}
					},
					{
						className: "circle4",
						name: this.$t('home.home.5qz9yji2lhk0'),
						price: '$23,760',
						chartData: {}
					},
					{
						className: "circle5",
						name: this.$t('home.home.5qz9yji2lsg0'),
						price: '$23,760',
						chartData: {}
					},
					{
						className: "circle6",
						name: this.$t('home.home.5qz9yji2lyo0'),
						price: '$23,760',
						chartData: {}
					}
				],
			}
		},

		// 页面挂在之后执行渲染函数。
		mounted() {
			this.getServerData()
		},
		methods: {
			//点击现金账户事件
			setting() {
				uni.navigateTo({
					url: '/pages/cash-account/index'
				})
			},
			getServerData() {
				//模拟从服务器获取数据时的延时
				setTimeout(() => {
					this.circleData.map(res => {
						let dataArr = {
							series: [{
								name: this.$t('home.home.5qz9yji2m840'),
								color: "#12d18e",
								data: 0.8
							}]
						};
						res.chartData = dataArr
						// if(res.className == 'circle1'){
						// 	res.chartData.series[0].data = 0.4
						// }
					})

					//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
					// let res = {
					// 	series: [{
					// 		name: this.$t('home.home.5qz9yji2m840'),
					// 		color: "#12d18e",
					// 		data: 0.8
					// 	}]
					// };
					// this.chartData = res;
				}, 500);
			},

			goLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
		},
		onLoad() {
			// this.$nextTick(() => {
			// 	this.render2();
			// })
		},
	}
</script>

<style scoped lang="scss">
	.loginBtn {
		font-size: 1rem;
	}

	/* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
	.charts-box {
		width: 120rpx;
		height: 120rpx;
	}

	.page-home {
		width: 100%;
	}

	// 头部样式
	.head {
		margin-bottom: 32rpx;
	}

	// 钱包样式
	.wallet {
		width: 100%;
		height: 308rpx;
		border-radius: 20rpx;
		background-color: #031c10;
		margin-bottom: 28rpx;
	}

	.total {
		padding: 28rpx 48rpx 0;
		margin-bottom: 40rpx;
	}

	.avator {
		width: 112rpx;
		height: 112rpx;

		uni-image {
			width: 56px !important;
			height: 56px !important;
		}

		// display: flex;
		// justify-content: center;
		// align-items: center;
		// background: #d9d9d9;
	}

	.balance {
		width: 95%;
		height: 80rpx;
		background: #1c3328;
		color: #fff;
		border-radius: 10rpx;
		padding: 0 32rpx;
		margin: auto;
	}

	// 仪表盘样式
	.dashboard {
		width: 1288rpx;
		height: 268rpx;
	}

	.circle {
		width: 120rpx;
		height: 120rpx;
	}

	.dashboard-item {
		margin: 0 46rpx;
	}

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
		padding: 32rpx;
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
		font-size: 24rpx;
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