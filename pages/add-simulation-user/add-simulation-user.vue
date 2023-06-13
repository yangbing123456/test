<template>
	<view class="container">
		<!-- 选择账户单元格 -->
		<view class="small-box" v-for="item in data" :key='item.id'
			:style="{'background-color':item.backgroundColor,'border-color':item.borderColor}">
			<view class="left-box">
				<image class="first-box" :src='item.icon' />
				<view class="top-small-box">
					<text style="font-size: 1rem;">{{item.name}}</text>
					<text style="color: #9D9E9E;">{{item.text}}</text>
				</view>
			</view>
			<!-- 单选按钮 -->
			<view>
				<u-radio-group v-model="value" @change="radioGroupChange" active-color='#12D18E'>
					<u-radio @change="radioChange" :name="item.id">
						<!-- {{item.name}} -->
					</u-radio>
				</u-radio-group>
			</view>
		</view>
		<!-- 继续按钮 -->
		<view class="bottom-btn">
			<u-button :hair-line="false" class="yes-btn" @click='backHandler' v-bind:class="{'class1':Boolean(value)}">
				{{$t('add-simulation-user.add-simulation-user.5qzykmjxw5k0')}}</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: [{
						name: "Capital.com  MT4",
						text: this.$t('add-simulation-user.add-simulation-user.5qzykmjxxa00'),
						id: 1,
						icon: '../../static/fonts/Group 187.png',
						backgroundColor: '',
						borderColor: ''
					},
					{
						name: 'Capital.com  MT4',
						text: this.$t('add-simulation-user.add-simulation-user.5qzykmjxxa00'),
						id: 2,
						icon: '../../static/fonts/Group 187.png',
						backgroundColor: '',
						borderColor: ''
					}
				],
				value: '', //单选按钮存放值
				testData: "" //后续会用
			};
		},
		//后续
		// onLoad: function test(data) {
		// 	this.testData = data.current
		// },
		methods: {
			// 选中某个单选框时，由radio时触发
			radioChange(e) {
				console.log(e);
				this.data.map(res => {
					if (res.id == e) {
						res.backgroundColor = "rgba(18, 209, 142, 0.1)"
						res.borderColor = '#12D18E'
					} else {
						res.backgroundColor = ""
						res.borderColor = '#EFEFEF'
					}
				})
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {
				// console.log(e);
			},
			//点击继续按钮事件
			backHandler() {
				uni.navigateTo({
					url: '/pages/select-account-currency/select-account-currency?current=' + this.testData
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
			border: 1px solid #EFEFEF;
			height: 4rem;
			margin: 1rem;
			// background-color: #12D18E;
			border-radius: 1rem;
			padding: 0 0 0 0.5rem;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.top-small-box {
				display: flex;
				flex-direction: column;
			}
		}

		.first-box {
			// background-image: url('../../static/fonts/Group 187.png');
			// background-repeat: no-repeat;
			// background-position: center center;
			// background-size: 100% 100%;
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
			width: 89%;
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
			border-radius: 6.25rem;
			margin: 0.5rem 1rem;
			width: 100%;
			color: #E0E0E0;
			border: 0 !important;
		}

	}
</style>