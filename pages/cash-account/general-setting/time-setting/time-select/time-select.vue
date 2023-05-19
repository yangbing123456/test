<template>
	<view class="container">
		<view class="topbox">
			<u-search placeholder="请输入搜索关键字" v-model="keyword" action-text='' @search='search'></u-search>
		</view>

		<scroll-view scroll-y="true">
			<view style="width: 100%;height: 450px;">
				<view v-for="item in data" :key='item.id'>
					<view class="small-box">
						<view class="left-box">
							<view class="top-small-box">
								<text style="color: #212121;">{{item.name}}</text>
								<text style="color: #9D9E9E; font-size: 10px;">{{item.label}}</text>
							</view>
						</view>

						<view>
							<u-radio-group v-model="value" @change="radioGroupChange" active-color='#12D18E'>
								<u-radio @change="radioChange" :name="item.name">
									<!-- {{item.name}} -->
								</u-radio>
							</u-radio-group>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>

		<view class="bottom-btn">
			<u-button :hair-line="false" class="yes-btn" v-bind:class="{'class1':Boolean(value)}">保存</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
				value: '',
				dataArr: [{
						name: "Shanghai",
						id: 1,
						label: 'CMT +08:00'
					},
					{
						name: "Sichuan",
						id: 2,
						label: 'CMT +08:00'
					},
					{
						name: "Guangzhou",
						id: 3,
						label: 'CMT +08:00'
					},
					{
						name: "Shenzhou",
						id: 4,
						label: 'CMT +08:00'
					},
					{
						name: "Beijing",
						id: 5,
						label: 'CMT +08:00'
					},
					{
						name: "Chengdou",
						id: 6,
						label: 'CMT +08:00'
					},
					{
						name: "Hangzhou",
						id: 7,
						label: 'CMT +08:00'
					},
					{
						name: "Yibin",
						id: 8,
						label: 'CMT +08:00'
					},
					{
						name: "Zigong",
						id: 9,
						label: 'CMT +08:00'
					},
				],
				data: [{
						name: "Shanghai",
						id: 1,
						label: 'CMT +08:00'
					},
					{
						name: "Sichuan",
						id: 2,
						label: 'CMT +08:00'
					},
					{
						name: "Guangzhou",
						id: 3,
						label: 'CMT +08:00'
					},
					{
						name: "Shenzhou",
						id: 4,
						label: 'CMT +08:00'
					},
					{
						name: "Beijing",
						id: 5,
						label: 'CMT +08:00'
					},
					{
						name: "Chengdou",
						id: 6,
						label: 'CMT +08:00'
					},
					{
						name: "Hangzhou",
						id: 7,
						label: 'CMT +08:00'
					},
					{
						name: "Yibin",
						id: 8,
						label: 'CMT +08:00'
					},
					{
						name: "Zigong",
						id: 9,
						label: 'CMT +08:00'
					},
				],
			}
		},
		methods: {
			radioChange(e) {
				console.log(e);
				// this.key = e
				// this.data.forEach((item,index) => {
				// 	if(index == e){
				// 		this.border = 'black'
				// 		this.borderWidth = 1
				// 	}
				// })

			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {
				// console.log(e);
			},
			search() {
				this.data = this.dataArr
				let dataArr = this.data
				let arr = []
				dataArr.forEach(res => {
					if (res.name.indexOf(this.keyword) >= 0) {
						arr.push(res)
					}
				})
				this.data = arr
				console.log(this.data)

				// this.data.map(res => {
				// 	return res.name.includes(this.keyword) ? this.data.push(res) : this.keyword == '' ? this.data :
				// 		this.data = []
				// })


			}
		}
	}
</script>

<style lang="scss">
	.container {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 1rem auto;

		.topbox {
			width: 100%;
			display: flex;
			justify-content: center;
			padding: 0 1rem;
		}

		.class1 {
			color: white !important;
			background-color: #12D18E !important;
		}

		.small-box {
			// width: 343px;
			height: 3rem;
			margin: 1rem 1rem;
			// background-color: #12D18E;
			border-radius: 1rem;
			padding: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.top-small-box {
				display: flex;
				flex-direction: column;
			}
		}

		.left-box {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			// width: 70%;
			margin: 0 1rem;
		}

		.bottom-btn {
			width: 100%;
			height: 3rem;
			position: absolute;
			bottom: 10px;
			left: 0;
			right: 0;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.yes-btn {
			// background-color: #12D18E;
			border-radius: 6.25rem;
			margin: 8px 1rem;
			width: 100%;
			border: 0;
			color: #E0E0E0;
		}

	}
</style>