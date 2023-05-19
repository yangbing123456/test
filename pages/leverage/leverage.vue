<template>
	<view>
		<u-cell-group :border='false'>
			<u-cell-item :title="item.name" :value="item.value" v-for="item in dataArr" :key="item.name"
				:border-bottom='false' :border-top='false' @click='handlerEvent(item)'
				:value-style="{'color':'#12D18E'}" :title-style="{'color':'#212121'}">
			</u-cell-item>
		</u-cell-group>

		<u-popup v-model="show" mode="bottom" border-radius='24' width="500rpx" height="240px" :mask-close-able='false'>
			<text class="notice">{{biaoti}}</text>
			<text class="text-information">杠杆率最高可用:</text>
			<scroll-view scroll-y="true">
				<view style="width: 100%;height: 6rem;">
					<view class="middle-box" v-for='res in textArrOne' :key='res.rate' v-if='current == 1'>
						<text class="noticeText">{{res.rate}}</text>
						<text class="noticeText">{{res.text}}</text>
					</view>
					<view class="middle-box" v-for='res in textArrTwo' :key='res.rate' v-if='current == 2'>
						<text class="noticeText">{{res.rate}}</text>
						<text class="noticeText">{{res.text}}</text>
					</view>
					<view class="middle-box" v-for='res in textArrThree' :key='res.rate' v-if='current == 3'>
						<text class="noticeText">{{res.rate}}</text>
						<text class="noticeText">{{res.text}}</text>
					</view>
				</view>
			</scroll-view>

			<view class="btn">
				<u-button @click="yesHandler" class="yes-btn" :hair-line="false">好的</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 1,
				biaoti: '',
				show: false,
				dataArr: [{
						name: '货币',
						value: '100:1'
					},
					{
						name: '指数',
						value: '100:1'
					},
					{
						name: '商品',
						value: '100:1'
					},
					{
						name: '股票',
						value: '5:1'
					},
					{
						name: '加密货币',
						value: '5:1'
					},
				],
				textArrOne: [{
						rate: '30:1',
						text: '适用于主要货币对：由以下任意两种组成：美元、欧元、英镑、加元、日元、瑞士法郎'
					},
					{
						rate: '20:1',
						text: '适用于次要货币对'
					},
					{
						rate: '202:1',
						text: '适用于次要货币对'
					},
					{
						rate: '203:1',
						text: '适用于次要货币对'
					},
					{
						rate: '204:1',
						text: '适用于次要货币对'
					},
					{
						rate: '205:1',
						text: '适用于次要货币对'
					},
				],
				textArrTwo: [{
						rate: '20:1',
						text: '适用于主要货币对：UK100,FR40,DE30,US500,US100,J225,EU50,US30,AU200'
					},
					{
						rate: '10:1',
						text: '适用于次要货币对'
					}
				],
				textArrThree: [{
						rate: '20:1',
						text: '适用于黄金'
					},
					{
						rate: '10:1',
						text: '适用于除黄金外的所有大宗商品'
					}
				],
			}
		},
		methods: {
			handlerEvent(item) {
				if (item.name == '货币') {
					this.show = true
					this.biaoti = '货币'
					this.current = 1
				} else if (item.name == '指数') {
					this.show = true
					this.biaoti = '指数'
					this.current = 2
				} else if (item.name == '商品') {
					this.show = true
					this.biaoti = '商品'
					this.current = 3
				}
			},
			yesHandler() {
				this.show = false
			}
		}
	}
</script>

<style lang="scss">
	.notice {
		display: flex;
		justify-content: center;
		margin: 1rem 0;
	}

	.noticeText {
		padding: 0.5rem 1rem 0 1rem;
	}

	.text-information {
		// display: block;
		// width: 85%;
		// margin: 0.5rem auto;
		padding: 0 1rem 0.5rem 1rem;
		// padding: 0.5rem 1rem;
	}

	.btn {
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: absolute;
		bottom: 10px;
		width: 100%;


		.yes-btn {
			width: 90%;
			border-radius: 6.25rem;
			color: white;
			background-color: #12D18E;
		}
	}

	.middle-box {
		display: flex;
	}
</style>