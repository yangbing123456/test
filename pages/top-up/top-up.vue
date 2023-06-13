<template>
	<view class="container">
		<!-- 单元格 -->
		<view v-for="item in dataArr" :key='item.id'>
			<view class="text">{{item.title}}</view>
			<view class="small-box1" v-for="res in item.cell" :key='res.id'
				:style="{'background-color':res.backgroundColor,'border-color':res.borderColor}">
				<view>
					<u-radio-group v-model="value" @change="radioGroupChange" active-color='#12D18E'>
						<u-radio :name="res.name">
							{{res.name}}
						</u-radio>
					</u-radio-group>
				</view>
				<view>
					<u-icon :name="res.icon" color="#12D18E" size="48"></u-icon>
				</view>
			</view>
		</view>

		<!-- 最近使用的支付系统 -->
		<!-- <view class="text">最近使用的支付方式</view>
		<view class="small-box1" v-for="item in data1" :key='item.id'>
			<view>
				<u-radio-group v-model="value1" @change="radioGroupChange" active-color='#12D18E'>
					<u-radio :name="item.name">
						{{item.name}}
					</u-radio>
				</u-radio-group>
			</view>
			<view>
				<u-icon :name="item.icon" color="#12D18E" size="48"></u-icon>
			</view>
		</view> -->


		<!-- 银行卡&&银行汇款 -->
		<!-- <view class="text">添加新的支付方式</view>
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
		</view> -->

		<!-- 继续按钮 -->
		<view class="cash-btn">
			<u-button class="btn" @click='radioChange'>{{$t('top-up.top-up.5qzy6q26rn40')}}</u-button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				//单元格数组
				dataArr: [{
						id: 1,
						title: this.$t('top-up.top-up.5qzy6q26t3k0'),
						cell: [{
								name: '**** 6212',
								id: 0,
								icon: '../../static/fonts/Group 175.png',
								backgroundColor: '',
								borderColor: ''
							},
							{
								name: "**** 4307",
								id: 1,
								icon: '../../static/fonts/Group 175.png',
								backgroundColor: '',
								borderColor: ''
							}
						]
					},
					{
						id: 2,
						title: this.$t('top-up.top-up.5qzy6q26tg80'),
						cell: [{
								name: this.$t('top-up.top-up.5qzy6q26tms0'),
								id: 3,
								icon: '../../static/fonts/Group 175.png',
								backgroundColor: '',
								borderColor: ''
							},
							{
								name: this.$t('top-up.top-up.5qzy6q26tsk0'),
								id: 4,
								icon: '../../static/fonts/Group 176.png',
								backgroundColor: '',
								borderColor: ''
							}
						]
					}
				],
				value: '', //存储单选按钮名称
			};
		},
		methods: {
			// 选中某个单选框时，由radio时触发
			radioChange() {
				if (this.value == this.$t('top-up.top-up.5qzy6q26tms0')) {
					uni.navigateTo({
						// url:'/pages/band-card/band-card?name='+JSON.stringify(e)
						url: '/pages/band-card/band-card'
					})
				} else if (this.value == this.$t('top-up.top-up.5qzy6q26tsk0')) {
					uni.navigateTo({
						// url:'/pages/band-card/band-card?name='+JSON.stringify(e)
						url: '/pages/bank-transfer/bank-transfer'
					})
				}
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {
				/**
				 * @todo:后续会用到来改变单元格样式
				 */
				console.log(e);
				this.dataArr.forEach(item => {
					item.cell.map(res => {
						if (res.name == e) {
							res.backgroundColor = "rgba(18, 209, 142, 0.1)"
							res.borderColor = '#12D18E'
						} else {
							res.backgroundColor = ''
							res.borderColor = '#EFEFEF'
						}
					})
				})
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

		.text {
			margin: 1rem;
			color: #212121;
			font-size: 1rem;
			font-weight: 700;
		}

		.small-box1 {
			height: 4rem;
			margin: 1rem 1rem;
			background-color: white;
			border: 1px solid #EFEFEF;
			border-radius: 1rem;
			padding: 0 2rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.small-box {
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
		height: 3.5rem;

		.btn {
			border-radius: 6.25rem;
			background-color: #12D18E;
			color: white;
		}
	}
</style>