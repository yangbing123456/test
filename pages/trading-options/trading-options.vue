<template>
	<view class="container">
		<!-- 常规模式&&对冲模式 -->
		<view class="small-box" v-for="item in data" :key='item.id'>
			<view class="top-small-box">
				<text class="titlestyle">{{item.name}}</text>
				<text class="textstyle">{{item.text}}</text>
			</view>
			<view class="radiostyle">
				<u-radio-group v-model="value" @change="radioGroupChange" active-color='#12D18E'>
					<u-radio @change="radioChange" :name="item.name">
						<!-- {{item.name}} -->
					</u-radio>
				</u-radio-group>
			</view>
		</view>
		<!-- 一键交易&&杠杆率 -->
		<u-cell-group :border='false'>
			<u-cell-item :title="$t('trading-options.trading-options.5qzyd1cj6lw0')"
				:label="$t('trading-options.trading-options.5qzyd1cj7ks0')" :arrow="false"
				:title-style="{'color':'#212121'}" :border-bottom='false' :border-top='false'>
				<u-switch v-model="checked" size='40' @change='changeHandler' active-color='#12D18E'></u-switch>
				<u-popup v-model="show" mode="bottom" border-radius='24' width="500rpx" height="180px"
					:mask-close-able='false'>
					<text class="notice">{{$t('trading-options.trading-options.5qzyd1cj7q00')}}</text>
					<text class="text-information">{{$t('trading-options.trading-options.5qzyd1cj7tc0')}}</text>
					<view class="btn">
						<u-button @click="quitHandler" class="quit-btn"
							:hair-line="false">{{$t('trading-options.trading-options.5qzyd1cj7w00')}}</u-button>

						<u-button @click="yesHandler" class="yes-btn"
							:hair-line="false">{{$t('trading-options.trading-options.5qzyd1cj7yw0')}}</u-button>
					</view>
				</u-popup>
			</u-cell-item>
			<!-- 杠杆率 -->
			<u-cell-item :title="$t('trading-options.trading-options.5qzyd1cj81o0')" :title-style="{'color':'#212121'}"
				:border-bottom='false' :border-top='false' @click='leverageHandler'></u-cell-item>
		</u-cell-group>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: false, //切换按钮状态
				show: false, //弹框显示
				data: [{
						name: this.$t('trading-options.trading-options.5qzyd1cj8480'),
						text: this.$t('trading-options.trading-options.5qzyd1cj8780'),
						id: 0
					},
					{
						name: this.$t('trading-options.trading-options.5qzyd1cj89o0'),
						text: this.$t('trading-options.trading-options.5qzyd1cj8dg0'),
						id: 1
					}
				],
				value: '', //单选框选择值
			};
		},
		methods: {
			// 选中某个单选框时，由radio时触发
			radioChange(e) {
				console.log(e);
				// this.data.forEach((item,index) => {
				// 	if(index == e){
				// 		this.border = 'black'
				// 		this.borderWidth = 1
				// 	}
				// })
			},
			//一键交易取消按钮事件
			quitHandler() {
				this.show = false
				this.checked = false
			},
			//一键交易确定按钮事件
			yesHandler() {
				this.show = false
				this.checked = true
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {
				// console.log(e);
			},
			//一键交易切换按钮状态事件
			changeHandler() {
				this.show = true
			},
			//杠杆率
			leverageHandler() {
				uni.navigateTo({
					url: '/pages/leverage/leverage'
				})
			}
		}
	};
</script>

<style lang="scss">
	.container {
		width: 100%;
		height: 100%;
		padding: 0 1rem;
		margin: 1rem auto;

		.small-box {
			width: 100%;
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

		.notice {
			display: flex;
			justify-content: center;
			font-size: 1rem;
			margin: 0.5rem 0;
			color: #212121;
		}

		.text-information {
			display: block;
			width: 85%;
			margin: 0.5rem auto;
			text-align: left !important;
			// padding: 0.5rem 1rem;
		}

		.btn {
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 100%;
			position: absolute;
			bottom: 10px;

			.quit-btn {
				width: 40%;
				border-radius: 6.25rem;
				color: #12D18E;
				border-width: 0 !important;
			}

			.yes-btn {
				width: 40%;
				border-radius: 6.25rem;
				color: white;
				background-color: #12D18E;
				border-width: 0 !important;
			}
		}
	}

	.titlestyle {
		color: #212121;
		font-size: 14px;
	}

	.textstyle {
		color: #9D9E9E;
		font-size: 12px;
	}

	.radiostyle {
		padding-right: 1rem;
	}
</style>