<template>
	<view>
		<!-- 遍历主要内容 -->
		<u-cell-group :border='false'>
			<u-cell-item :title="item.name" :value="item.value" v-for="item in dataArr" :key="item.name"
				:border-bottom='false' :border-top='false' @click='handlerEvent(item)'
				:value-style="{'color':'#12D18E'}" :title-style="{'color':'#212121'}">
			</u-cell-item>
		</u-cell-group>

		<!-- 点击单元格弹窗 -->
		<u-popup v-model="show" mode="bottom" border-radius='24' width="500rpx" height="260px" :mask-close-able='false'>
			<text class="notice">{{biaoti}}</text>
			<text class="text-information">杠杆率最高可用:</text>
			<scroll-view scroll-y="true">
				<view style="width: 100%;height: 8rem;">
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
				<u-button @click="yesHandler" class="yes-btn"
					:hair-line="false">{{$t('leverage.leverage.5qzyi9ggems0')}}</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 1, //状态值
				biaoti: '', //弹窗标题
				show: false, //是否展示弹窗
				//遍历单元格数组
				dataArr: [{
						name: this.$t('leverage.leverage.5qzyi9ggg4w0'),
						value: '100:1'
					},
					{
						name: this.$t('leverage.leverage.5qzyi9ggggc0'),
						value: '100:1'
					},
					{
						name: this.$t('leverage.leverage.5qzyi9gggls0'),
						value: '100:1'
					},
					{
						name: this.$t('leverage.leverage.5qzyi9gggqg0'),
						value: '5:1'
					},
					{
						name: this.$t('leverage.leverage.5qzyi9gggvo0'),
						value: '5:1'
					},
				],
				//遍历每个弹窗里的内容
				textArrOne: [{
						rate: '30:1',
						text: this.$t('leverage.leverage.5qzyi9gglgk0')
					},
					{
						rate: '20:1',
						text: this.$t('leverage.leverage.5qzyi9gglns0')
					},
					{
						rate: '202:1',
						text: this.$t('leverage.leverage.5qzyi9gglns0')
					},
					{
						rate: '203:1',
						text: this.$t('leverage.leverage.5qzyi9gglns0')
					},
					{
						rate: '204:1',
						text: this.$t('leverage.leverage.5qzyi9gglns0')
					},
					{
						rate: '205:1',
						text: this.$t('leverage.leverage.5qzyi9gglns0')
					},
				],
				textArrTwo: [{
						rate: '20:1',
						text: this.$t('leverage.leverage.5qzyi9ggmz40')
					},
					{
						rate: '10:1',
						text: this.$t('leverage.leverage.5qzyi9gglns0')
					}
				],
				textArrThree: [{
						rate: '20:1',
						text: this.$t('leverage.leverage.5qzyi9ggn7g0')
					},
					{
						rate: '10:1',
						text: this.$t('leverage.leverage.5qzyi9ggnck0')
					}
				],
			}
		},
		methods: {
			/**
			 * @description:点击单元格事件
			 */
			handlerEvent(item) {
				if (item.name == this.$t('leverage.leverage.5qzyi9ggg4w0')) { //货币
					this.show = true
					this.biaoti = this.$t('leverage.leverage.5qzyi9ggg4w0')
					this.current = 1
				} else if (item.name == this.$t('leverage.leverage.5qzyi9ggggc0')) { //指数
					this.show = true
					this.biaoti = this.$t('leverage.leverage.5qzyi9ggggc0')
					this.current = 2
				} else if (item.name == this.$t('leverage.leverage.5qzyi9gggls0')) { //商品
					this.show = true
					this.biaoti = this.$t('leverage.leverage.5qzyi9gggls0')
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
		padding: 0.5rem 0 0 1rem;
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