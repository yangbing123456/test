<template>
	<view class="container">
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

		<u-cell-group :border='false'>
			<u-cell-item title="一键交易" label='一键开仓' :arrow="false" :title-style="{'color':'#212121'}"
				:border-bottom='false' :border-top='false'>
				<u-switch v-model="checked" size='40' @change='changeHandler' active-color='#12D18E'></u-switch>
				<u-popup v-model="show" mode="bottom" border-radius='24' width="500rpx" height="180px"
					:mask-close-able='false'>
					<text class="notice">请注意</text>
					<text class="text-information">我了解一键交易功能启用后，开仓/平仓一键即可，并且无法取消交易</text>
					<view class="btn">
						<u-button @click="quitHandler" class="quit-btn" :hair-line="false">取消</u-button>

						<u-button @click="yesHandler" class="yes-btn" :hair-line="false">启用</u-button>
					</view>
				</u-popup>
			</u-cell-item>
			<u-cell-item title="杠杆率" :title-style="{'color':'#212121'}" :border-bottom='false' :border-top='false'
				@click='leverageHandler'></u-cell-item>
		</u-cell-group>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: false,
				show: false,
				data: [{
						name: "常规模式",
						text: '反向交易操作会首先关闭现有交易',
						id: 0
					},
					{
						name: '对冲模式',
						text: '一个市场可以进行双向交易',
						id: 1
					}
				],
				value: '',
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
			quitHandler() {
				this.show = false
				this.checked = false
			},
			yesHandler() {
				this.show = false
				this.checked = true
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {
				// console.log(e);
			},
			changeHandler() {
				this.show = true
			},
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