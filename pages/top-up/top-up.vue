<template>
	<view class="container">
		<view class="small-box" v-for="item in data" :key='item.id'>
			<view>
				<u-radio-group v-model="value" @change="radioGroupChange" active-color='#12D18E'>
					<u-radio :name="item.name">
						{{item.name}}
					</u-radio>
				</u-radio-group>
			</view>
			<view>
				<u-icon :name="item.icon" color="#12D18E" size="48"></u-icon>
			</view>
		</view>
		<!-- 按钮 -->
		<view class="cash-btn">
			<u-button class="btn" @click='radioChange'>继续</u-button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: [{
						name: '银行卡',
						id: 0,
						icon: '../../static/fonts/Group 175.png',
					},
					{
						name: "银行汇款",
						id: 1,
						icon: '../../static/fonts/Group 176.png',
					}
				],
				value: '',
				// bool: false
			};
		},
		methods: {
			// 选中某个单选框时，由radio时触发
			radioChange() {
				// console.log(e);
				if (this.value == '银行卡') {
					uni.navigateTo({
						// url:'/pages/band-card/band-card?name='+JSON.stringify(e)
						url: '/pages/band-card/band-card'
					})
				} else if (this.value == '银行汇款') {
					uni.navigateTo({
						// url:'/pages/band-card/band-card?name='+JSON.stringify(e)
						url: '/pages/bank-transfer/bank-transfer'
					})
				}

				// this.data.forEach((item,index) => {
				// 	if(index == e){
				// 		this.border = 'black'
				// 		this.borderWidth = 1
				// 	}
				// })

			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {
				// this.data.forEach(res => {
				// 	res.name == e ? this.bool = true : this.bool = false
				// })
				// this.data.forEach(res => {
				// 	if(e == res.name){
				// 		this.bool = true
				// 	}else{
				// 		this.bool = false
				// 	}
				// })
				console.log(e);
				console.log(this.value)
			}
		}
	};
</script>

<style lang="scss">
	// .class1 {
	// 	border: #12D18E solid 1px !important;
	// }

	.container {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 1rem auto;

		.small-box {
			// width: 343px;

			height: 4rem;
			margin: 1rem 1rem;
			background-color: white;
			border: 1px solid #12D18E;
			border-radius: 1rem;
			padding: 0 2rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}

	.cash-btn {
		margin: 0 1rem;
		position: absolute;
		bottom: 10px;
		left: 0;
		right: 0;
		// width: 343px;
		height: 3.5rem;

		.btn {
			border-radius: 6.25rem;
			background-color: #12D18E;
			color: white;
		}
	}
</style>