<template>
	<view class="container">
		<view class="small-box" v-for="item in data" :key='item.id'>
			<view class="left-box">
				<view class="top-small-box">
					<text style="color: #212121;">{{item.name}}</text>
				</view>
			</view>

			<view>
				<u-radio-group v-model="value" @change="radioGroupChange" active-color='#12D18E'>
					<u-radio @change="radioChange" :name="item.id">
						<!-- {{item.name}} -->
					</u-radio>
				</u-radio-group>
			</view>
		</view>

		<view class="bottom-pictrue-box">
			<view class="text">效果预览</view>
			<view class="picture-box" v-for="item in picArr" :key="item.id">
				<u-image :src='picValue' class="img"></u-image>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: [{
						name: "普通视图",
						id: 1,
					},
					{
						name: '精简模式',
						id: 2,
					},
					{
						name: '卡片模式',
						id: 3,
					},
					{
						name: '交易模式',
						id: 4,
					},
				],
				picValue: '',
				picArr: [{
					id: 1,
					datapic: [{
							id: 1,
							pic: '../../../../static/fonts/Group179.png'
						},
						{
							id: 2,
							pic: '../../../../static/fonts/Group180.png'
						},
						{
							id: 3,
							pic: '../../../../static/fonts/success.png'
						},
						{
							id: 4,
							pic: '../../../../static/fonts/success.png'
						},
					]
				}],
				value: '',
			};
		},
		methods: {
			// 选中某个单选框时，由radio时触发
			radioChange(e) {
				this.picArr.forEach(res => {
					res.datapic.forEach(result => {
						if (e == result.id) {
							this.picValue = result.pic
						}
					})
				})
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
		}
	};
</script>

<style lang="scss">
	.container {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 1rem auto;

		.class1 {
			color: white;
			background-color: #12D18E;
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
			width: 70%;
		}

	}

	.bottom-pictrue-box {
		// width: 100%;
		border-top: 2px solid #EEEEEE;
		margin: 1rem;
		min-height: 18.75rem;

		.text {
			text-align: center;
			padding: 1rem 0;
			color: #757575;
		}

		.picture-box {
			width: 100%;
			min-height: 12.5rem;
			border-radius: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;

			.img {
				width: 15.5rem !important;
				height: 12.5rem !important;
			}
		}
	}
</style>