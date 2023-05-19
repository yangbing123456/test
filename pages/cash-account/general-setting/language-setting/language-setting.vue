<template>
	<view class="container">
		<view class="small-box" v-for="item in data" :key='item.id'>
			<view class="left-box">
				<image class="first-box" :src='item.icon' />
				<view class="top-small-box">
					<text style="color: #212121;">{{item.name}}</text>
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
			<u-button :hair-line="false" class="yes-btn" @click='saveHandler'
				v-bind:class="{'class1':Boolean(value)}">保存</u-button>
		</view>


		<u-popup v-model="alertBox" mode="bottom" width="500rpx" height="140px" :mask-close-able='false'
			border-radius='24'>
			<text class="delete-user">请注意</text>
			<view class="textStyle">您确定要切换语言至XXXX吗？</view>
			<view class="delete-user-btn">
				<u-button @click="alertBox = false;" :hair-line="false" class="quit-btn">取消</u-button>
				<u-button @click="alertBox = false;" :hair-line="false" class="setting-btn">确定</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				alertBox: false,
				data: [{
						name: "简体中文",
						id: 1,
						icon: '../../../../static/fonts/Group196.png'
					},
					{
						name: '简体中文',
						id: 2,
						icon: '../../../../static/fonts/Group196.png'
					},
					{
						name: '简体中文',
						id: 3,
						icon: '../../../../static/fonts/Group196.png'
					},
					{
						name: '简体中文',
						id: 4,
						icon: '../../../../static/fonts/Group196.png'
					},
				],
				value: '',
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
			saveHandler() {
				this.alertBox = true
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
			border-radius: 6.25rem;
			margin: 0.5rem 1rem;
			width: 100%;
			border: 1px solid #EEEEEE;
			color: #E0E0E0;
			background-color: #f5f5f5;
		}

	}

	.delete-user {
		display: flex;
		justify-content: center;
		margin: 0.5rem 0;
		padding: 0 1rem;
		color: #212121;
	}

	.textStyle {
		display: flex;
		justify-content: center;
		color: #9D9E9E;
		font-size: 10px;
	}

	.delete-user-btn {
		display: flex;
		justify-content: space-around;
		position: absolute;
		bottom: 10px;
		width: 100%;
	}

	.setting-btn,
	.quit-btn {
		width: 40%;
		border-radius: 6.25rem;
		border: 0 !important;
	}

	.quit-btn {
		color: #12D18E !important;
	}

	.setting-btn {
		color: white !important;
		background-color: #12D18E !important;
	}
</style>