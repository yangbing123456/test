<template>
	<view>
		<view class="topbox">

		</view>

		<!-- 交易要领等内容 -->
		<view class="bottombox">
			<view class="small-box" v-for="item in todayArr" :key='item.id'>
				<text class="text">{{item.time}}</text>
				<scroll-view scroll-x="true">
					<view class="time-bottom-box">
						<view v-for='res in item.cell' :key='res.id' class="btn">
							<!-- 	<video id="myVideo" src="https://www.runoob.com/try/demo_source/mov_bbb.mp4" enable-danmu
							danmu-btn controls v-for='res in item.cell' :key='res.id' class="btn"></video> -->
						</view>
					</view>
				</scroll-view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				todayArr: [{
						time: this.$t('learn-how-to-trade.learn-how-to-trade.5qzz7rvgs6s0'),
						cell: [{
								id: 1,
							},
							{
								id: 2,
							},
						],
						id: 1
					},
					{
						time: this.$t('learn-how-to-trade.learn-how-to-trade.5qzz7rvgv1g0'),
						cell: [{
								id: 1,
							},
							{
								id: 2,
							},
							{
								id: 3,
							},
						],
						id: 2
					},
					{
						time: this.$t('learn-how-to-trade.learn-how-to-trade.5qzz7rvgvpo0'),
						cell: [{
								id: 1,
							},
							{
								id: 2,
							},
							{
								id: 3,
							},
						],
						id: 3
					},
					{
						time: 'AI powered Trading Assistant',
						cell: [{
								id: 1,
							},
							{
								id: 2,
							},
							{
								id: 3,
							},
						],
						id: 4
					},
				],
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.time-bottom-box {
		width: 100%;
		// padding: 0 1rem;
		min-height: 6.25rem;
		display: flex;

		.btn {
			min-width: 9.375rem;
			margin-right: 1rem;
			border-radius: 0.5rem;
			height: 6.25rem;
			background-color: #E5E5E5;
		}
	}

	.topbox {
		// width: 100%;
		min-height: 9.375rem;
		background-color: black;
		margin: 1rem;
		border-radius: 0.5rem;
	}

	.bottombox {
		min-height: 25rem;
		margin: 0 1rem;
	}

	.text {
		display: block;
		width: 100%;
		// margin: 0.5rem 0 0.5rem 1rem;
		color: #212121;
		margin-bottom: 0.5rem;
	}


	.small-box {
		padding: 0;
		width: 100%;
		margin-bottom: 0.5rem;

		.top-small-box {
			display: flex;
			flex-direction: column;
			width: 100%;
		}
	}
</style>