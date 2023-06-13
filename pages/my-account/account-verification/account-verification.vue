<template>
	<view>
		<view class="container">
			<!-- <u-steps :list="numList" :current="1" active-color="#12D18E" direction='column' mode='number'> -->
			<!-- 	<u-steps-item title="已下单">
					<view slot="desc">{{$t('account-verification.account-verification.5qzyhfsr86w0')}}</view>
					<view slot="desc">{{$t('account-verification.account-verification.5qzyhfsr86w0')}}</view>
					<view slot="desc">{{$t('account-verification.account-verification.5qzyhfsr86w0')}}</view>
				</u-steps-item>
				<u-steps-item :title="$t('account-verification.account-verification.5qzyhfsrjak0')" desc="10:35">
				</u-steps-item>
				<u-steps-item :title="$t('account-verification.account-verification.5qzyhfsrkz40')" desc="11:40"></u-steps-item> -->
			<!-- </u-steps> -->
			<view v-for="item in data" :key='item.id' class="cell">
				<view class="small-box" @click='changeHandler(item)'>
					<!-- 圆点 -->
					<view>
						<!-- <u-radio-group v-model="value" @change="radioGroupChange" active-color='#12D18E'>
							<u-radio @change="radioChange" :name="item.id"> -->
						<!-- {{item.name}} -->
						<!-- 	</u-radio>
						</u-radio-group> -->
						<view class="circle" :style="{'background-color':item.color}"></view>
					</view>

					<!-- 名称 -->
					<view class="left-box">
						<view class="top-small-box">
							<text>{{item.name}}</text>
						</view>
					</view>
					<!-- 箭头 -->
					<view class="jiantou" v-if='item.status'>></view>
				</view>

			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: [{
						name: this.$t('account-verification.account-verification.5qzyhfsrlck0'),
						id: 1,
						status: false,
						color: ''
					},
					{
						name: this.$t('account-verification.account-verification.5qzyhfsrlis0'),
						id: 2,
						status: false,
						color: ''
					},
					{
						name: this.$t('account-verification.account-verification.5qzyhfsrlpk0'),
						id: 3,
						status: true,
						color: ''
					},
					{
						name: this.$t('account-verification.account-verification.5qzyhfsrlus0'),
						id: 4,
						status: true,
						color: ''
					}
				],
				value: "1"
			}
		},
		onLoad() {
			this.data.map(res => {
				if (res.status == false) {
					return res.color = '#12D18E'
				}
			})
		},
		// computed: {
		// 	test() {
		// 		this.data.map(res => {
		// 			if (res.status == false) {
		// 				return res.color = '#12D18E'
		// 			}
		// 		})
		// 	}
		// },
		methods: {
			changeHandler(item) {
				if (item.name == this.$t('account-verification.account-verification.5qzyhfsrlck0')) {
					// uni.navigateTo({
					// 	url: '/pages/cash-account/help-center/online-customer/online-customer?test=5'
					// })
				}
				if (item.status) {
					console.log(1)
				}
			},
			// changeHandler() {
			// 	console.log(1)
			// },
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
		}
	}
</script>

<style lang="scss">
	.class1 {
		background-color: #12D18E !important;
		border: 0 !important;
	}

	.jiantou {
		text-align: right;
		color: #12D18E;
		width: 100%;
		font-size: 1rem;
		font-weight: 700;
	}

	// .container {
	// 	margin: 0 1rem;
	// }
	.circle {
		width: 1.2rem;
		height: 1.2rem;
		border: 1px solid #efefef;
		border-radius: 50%;
		margin-right: 0.5rem;
	}

	.container {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 1rem auto;

		.cell {
			// border: 1px solid;
		}
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
		// justify-content: space-between;
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
</style>