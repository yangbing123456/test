<template>
	<view>
		<u-tabs-swiper ref="tabs" :list="list" :is-scroll="false" :current="current" active-color="#12D18E"
			inactive-color="#9D9E9E" @change="changeTabHandler"></u-tabs-swiper>

		<view class="small-box" v-for="item in todayArr" :key='item.id' v-if='current != 1'>
			<text class="text">{{item.time}}</text>
			<!-- <scroll-view scroll-y="true"> -->
			<!-- <view style="width: 100%;height: 200px;"> -->
			<view v-for='resitem in item.cell' :key='resitem.id' class="cellboxopen">
				<view class="left-box">
					<view class="picbox">
						<!-- <image  :src='resitem.icon' /> -->
					</view>

					<view class="top-small-box">
						<view>
							<text style="color: #212121;">{{resitem.name}}</text><text
								style="color: #757575;font-size: 10px;">{{resitem.account}}</text>
						</view>
						<text style="color: #9D9E9E;">{{resitem.label}}</text>
					</view>
				</view>
			</view>
			<!-- </view> -->
			<!-- </scroll-view> -->
		</view>

		<view v-if='current == 1'>
			ss
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: '全部'
					},
					{
						name: '股票'
					},
					{
						name: '加密货币'
					},
					{
						name: '外汇'
					},
					{
						name: '原油市场'
					},
					{
						name: '虚拟货币'
					},
					{
						name: '加密货币'
					},
					{
						name: '加密货币'
					},
				],

				todayArr: [{
						time: '2023/4/10',
						cell: [{
								name: 'INDIA STOCKS-Indian shares set for muted open after ...',
								label: '10:56',
								id: 1,
							},
							{
								name: 'INDIA STOCKS-Indian shares set for muted open after ...',
								label: '10:56',
								id: 2,
							},
						],
						id: 1
					},
					{
						time: '2023/4/3',
						cell: [{
								name: 'INDIA STOCKS-Indian shares set for muted open after ...',
								label: '10:56',
								id: 1,
							},
							{
								name: 'INDIA STOCKS-Indian shares set for muted open after ...',
								label: '10:56',
								id: 2,
							},
							{
								name: 'INDIA STOCKS-Indian shares set for muted open after ...',
								label: '10:56',
								id: 3,
							},
						],
						id: 2
					},
					{
						time: '2023/4/1',
						cell: [{
								name: 'INDIA STOCKS-Indian shares set for muted open after ...',
								label: '10:56',
								id: 1,
							},
							{
								name: 'INDIA STOCKS-Indian shares set for muted open after ...',
								label: '10:56',
								id: 2,
							},
							{
								name: 'INDIA STOCKS-Indian shares set for muted open after ...',
								label: '10:56',
								id: 3,
							},
						],
						id: 3
					},
				],

				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
			}
		},
		methods: {
			//tab激活状态
			changeTabHandler(index) {
				this.current = index
			},

		}
	}
</script>

<style lang="scss">
	uni-page-body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}

	.cellboxopen {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
		margin-left: 1rem;
	}

	.bigbox {
		height: 100%;
		width: 100%;
	}

	.fenxi-box {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.text {
		display: block;
		width: 100%;
		margin: 0.5rem 0 0.5rem 1rem;
		color: #9D9E9E;
	}


	.small-box {
		padding: 0;

		.top-small-box {
			display: flex;
			flex-direction: column;
			width: 100%;
		}
	}

	.picbox {
		width: 100px;
		height: 3rem;
		background-color: #9D9E9E;
		margin-right: 0.5rem;
		border-radius: 0.5rem;
	}

	uni-image {
		width: 0.5rem;
		height: 2.4rem;
	}

	.left-box {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 95%;
	}
</style>