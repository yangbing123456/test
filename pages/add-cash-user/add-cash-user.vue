<template>
	<view class="container">
		<view class="small-box" v-for="item in data" :key='item.id'>
			<view class="left-box">
				<image class="first-box" :src='item.icon' />
				<view class="top-small-box">
					<text>{{item.name}}</text>
					<text style="color: #9D9E9E;">{{item.text}}</text>
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
		<view class="bottom-btn">
			<u-button :hair-line="false" class="yes-btn" @click='backHandler'
				v-bind:class="{'class1':Boolean(value)}">继续</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				data: [{
						name: "Capital.com  MT4",
						text: '创建账户以在 MT4 上进行交易',
						id: 1,
						icon: '../../static/fonts/Group 187.png'
					},
					{
						name: 'Capital.com  MT4',
						text: '创建账户以在 MT4 上进行交易',
						id: 2,
						icon: '../../static/fonts/Group 187.png'
					}
				],
				value: '',
				border: '',
				borderWidth: 0,
			};
		},
		methods: {
			// 选中某个单选框时，由radio时触发
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
			changeHandler() {
				this.show = true
			},
			backHandler() {
				uni.navigateTo({
					url: '/pages/select-account-currency/select-account-currency'
				})
			}
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

		.first-box {
			width: 2rem;
			height: 2rem;
			margin-right: 0.5rem;
		}

		uni-image {
			width: 0.5rem;
			height: 2.4rem;
		}

		.left-box {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			width: 70%;
		}

		.bottom-btn {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 3rem;
			position: absolute;
			bottom: 10px;
		}

		.yes-btn {
			// background-color: #12D18E;
			color: #E0E0E0;
			border-radius: 6.25rem;
			margin: 0.5rem 1rem;
			width: 100%;
			border-width: 0 !important;
		}

	}
</style>