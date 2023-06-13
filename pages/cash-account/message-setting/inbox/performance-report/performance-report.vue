<template>
	<view>
		<!-- 顶部账户盒子 -->
		<view class="topbox">
			<text class="first"></text>
			<text class="second">{{$t('performance-report.performance-report.5r0yq9tynhc0')}} :USR</text>
			<text class="third">
				<text style="padding-right: 0.5rem;">2023-05-15</text>
				{{$t('performance-report.performance-report.5r0yq9typv80')}}
				<text style="padding-left: 0.5rem;">2023-05-21</text>
			</text>
		</view>

		<!-- 中间内容盒子 -->
		<view class="middlebox">
			<view class="middle-first">
				<view class="textstyle" style="margin: 0.5rem 0;">
					{{$t('performance-report.performance-report.5qzzc4k554k0')}}
				</view>
				<view v-for='item in firstBoxDataArr' :key='item.id'>

					<view class="middle-first-top">
						<view class="textstyle">{{item.text}}</view>
					</view>

					<view class="middle-first-bottom">
						<view class="middle-first-bottom-box" v-for="res in item.cell" :key="res.id">
							<view class="text-left">{{res.leftText}}</view>
							<view class="text-right">{{res.rightText}}</view>
						</view>
					</view>
				</view>
			</view>

			<profit-loss></profit-loss>

			<closing-transaction></closing-transaction>

			<highest-profit></highest-profit>

			<loss-ranking></loss-ranking>

			<profitable-market></profitable-market>

			<low-margin-market>></low-margin-market>

			<maximum-asset></maximum-asset>

			<view class="bottom-text-box">{{$t('performance-report.performance-report.5qzzc4k5cog0')}} <br />
				{{$t('performance-report.performance-report.5qzzc4k5d9s0')}}<text
					style="color: #FF1F1F;">{{$t('performance-report.performance-report.5qzzc4k5djo0')}}</text>{{$t('performance-report.performance-report.5qzzc4k5dq40')}}
			</view>
		</view>

		<!-- 顶部文本 -->
		<view class="bottom">
			{{$t('performance-report.performance-report.5qzzc4k5dwc0')}}
		</view>
	</view>
</template>

<script>
	//每日实现盈利亏损
	import ProfitLoss from './components/profit-and-loss.vue'
	//当日收盘交易
	import ClosingTransaction from './components/closing-transaction.vue'
	//利润最高位置
	import HighestProfit from './components/highest-profit.vue'
	//损失排名
	import LossRanking from './components/loss-ranking.vue'
	//最赚钱市场
	import ProfitableMarket from './components/profitable-market.vue'
	//利润最低市场
	import LowMarginMarket from './components/low-margin-market.vue'
	//最大资产
	import MaximumAsset from './components/maximum-asset.vue'
	export default {
		components: {
			ProfitLoss,
			ClosingTransaction,
			HighestProfit,
			LossRanking,
			ProfitableMarket,
			LowMarginMarket,
			MaximumAsset
		},
		data() {
			return {
				//主要交易数据数组
				firstBoxDataArr: [{
						id: 1,
						text: this.$t('performance-report.performance-report.5qzzc4k5e140'),
						cell: [{
								id: 1,
								leftText: 'Ralised P&L',
								rightText: '-1.74'
							},
							{
								id: 2,
								leftText: this.$t('performance-report.performance-report.5qzzc4k5e680'),
								rightText: '-0.07'
							},
							{
								id: 3,
								leftText: this.$t('performance-report.performance-report.5qzzc4k5ebk0'),
								rightText: '147'
							},
						]
					},
					{
						id: 2,
						text: '',
						cell: [{
								id: 1,
								leftText: this.$t('performance-report.performance-report.5qzzc4k5eg80'),
								rightText: '8'
							},
							{
								id: 2,
								leftText: this.$t('performance-report.performance-report.5qzzc4k5ekw0'),
								rightText: '0 / 8'
							},
							{
								id: 3,
								leftText: this.$t('performance-report.performance-report.5qzzc4k5ets0'),
								rightText: '25%'
							},
							{
								id: 4,
								leftText: this.$t('performance-report.performance-report.5qzzc4k5ez40'),
								rightText: '75%'
							},
						]
					},
					{
						id: 3,
						text: '',
						cell: [{
								id: 1,
								leftText: this.$t('performance-report.performance-report.5qzzc4k5f640'),
								rightText: '-0.22'
							},
							{
								id: 2,
								leftText: this.$t('performance-report.performance-report.5qzzc4k5fbc0'),
								rightText: '+0.01'
							},
							{
								id: 3,
								leftText: this.$t('performance-report.performance-report.5qzzc4k5fjo0'),
								rightText: '-0.29'
							}
						]
					},
					{
						id: 4,
						text: '',
						cell: [{
								id: 1,
								leftText: this.$t('performance-report.performance-report.5qzzc4k5fp80'),
								rightText: '2d21h53m'
							},
							{
								id: 2,
								leftText: this.$t('performance-report.performance-report.5qzzc4k5fuk0'),
								rightText: '3d10h2m'
							},
							{
								id: 3,
								leftText: this.$t('performance-report.performance-report.5qzzc4k5fz80'),
								rightText: '2d17h50m'
							}
						]
					},
				],

			};
		}
	}
</script>

<style scoped lang="scss">
	.topbox {
		width: 100%;
		height: 20rem;
		background-image: url('../../../../../static/fonts/Group5.png');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.first {
			display: block;
			width: 13.875rem;
			height: 3.25rem;
			background-image: url('../../../../../static/fonts/workReport.png');
			background-position: center center;
			background-repeat: no-repeat;
			// background-size: 100% 100%;
		}

		.second {
			color: white;
			font-size: 1.1rem;
			display: block;
			margin-bottom: 1rem;
			width: 100%;
			text-align: center;
		}

		.third {
			width: 18.75rem;
			height: 2rem;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 2.5rem;
			padding: 0.5rem;
			color: white;
			font-size: 1.1rem;
			background-color: rgba(255, 255, 255, 0.2);

		}
	}

	.middlebox {
		width: 100%;
		min-height: 20rem;
		background-color: white;
		border-top-left-radius: 2.5rem;
		margin-top: -3rem;
		margin-bottom: -2rem;
		overflow: hidden;
		border-bottom-right-radius: 2.5rem;

		.middle-first {
			margin: 1rem;
			min-height: 20rem;
			background-color: #FAFAFA;
			padding: 1rem;
			border-radius: 1.5rem;

			.middle-first-top {
				margin-bottom: 1rem;

				.textstyle {
					color: #212121;
				}
			}


			.middle-first-bottom {
				// margin-bottom: 1rem;
				border-bottom: 1px solid #EEEEEE;



				.middle-first-bottom-box {
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 0.8rem;

					.text-left {
						color: #616161;
					}

					.text-right {
						color: #212121;
						font-weight: 700;
					}
				}
			}
		}
	}

	.bottom-text-box {
		width: 100%;
		padding: 0 1rem 2rem 1rem;
		// margin: 0 0 2rem 0;
		color: #212121;
		font-size: 0.9rem;
	}

	.bottom {
		width: 100%;
		height: 9.5rem;
		background-color: #12D18E;
		color: white;
		padding: 3rem 1rem 0 1rem;
		text-align: center;
		position: absolute;
		z-index: -222;
	}
</style>