<template>
	<view>
		<view class="topbox">

		</view>

		<view class="bottombox">
			<view class="small-box" v-for="item in todayArr" :key='item.id'>
				<text class="text">{{item.time}}</text>
				<scroll-view scroll-x="true">
					<view class="time-bottom-box">
						<view v-for='res in item.cell' :key='res.id' class="btn"></view>
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
						time: '交易要领',
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
						time: '新手交易政策',
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
						time: '交易心理学',
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