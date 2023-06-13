<template>
	<view class="container">
		<!-- 选择币种单元格 -->
		<view class="small-box" v-for="item in data" :key='item.id'
			:style="{'background-color':item.backgroundColor,'border-color':item.borderColor}">
			<view class="left-box">
				<image class="first-box" :src='item.icon'></image>
				<view class="top-small-box">
					<text>{{item.name}}</text>
					<text style="color: #9D9E9E;">{{item.text}}</text>
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
		<!-- 创建按钮 -->
		<view class="bottom-btn">
			<u-button :hair-line="false" class="yes-btn" @click='backHandler' v-bind:class="{'class1':Boolean(value)}">
				{{$t('select-account-currency.select-account-currency.5qzyjogft4k0')}}</u-button>
		</view>

		<!-- 创建账户弹窗 -->
		<u-popup v-model="createUser" border-radius='24' mode="bottom" width="500rpx" height="160px"
			:mask-close-able='false'>
			<text class="rename">{{$t('select-account-currency.select-account-currency.5qzyjogfvzc0')}}</text>

			<u-field v-model="mobile" :label="$t('select-account-currency.select-account-currency.5qzyjogfwhc0')"
				:placeholder="$t('select-account-currency.select-account-currency.5qzyjogfwq40')" :border-top='false'
				:border-bottom='false'>
			</u-field>
			<view class="delete-user-btn">
				<u-button @click="addUser" class="update-btn" :hair-line="false"
					v-bind:class="{'class1':Boolean(mobile)}"
					ref='updateRename'>{{$t('select-account-currency.select-account-currency.5qzyjogfvzc0')}}</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				createUser: false, //弹窗显示与否
				mobile: '', //户名值
				//币种单元格数组
				data: [{
						name: "EUR",
						text: 'Euro',
						id: 1,
						icon: '../../static/fonts/Ellipse 36.png',
						backgroundColor: '',
						borderColor: ''
					},
					{
						name: "GBP",
						text: 'Pound Sterling',
						id: 2,
						icon: '../../static/fonts/Ellipse39.png',
						backgroundColor: '',
						borderColor: ''
					},
					{
						name: 'USD',
						text: 'US Dollar',
						id: 3,
						icon: '../../static/fonts/Ellipse 38.png',
						backgroundColor: '',
						borderColor: ''
					}
				],
				value: '', //单选按钮存放值
				testValue: '' //后续会用
			};
		},
		//后续可能会用
		// onLoad: function test(data) {
		// 	this.testValue = data.current
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
			//创建按钮事件
			backHandler() {
				this.createUser = true
				// uni.navigateTo({
				// 	url:'/pages/my-account/my-account?current='+this.testValue
				// })
			},
			//添加账户按钮事件
			addUser() {
				this.createUser = false;
				uni.navigateTo({
					url: '/pages/my-account/my-account'
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

		.delete-user-btn {
			position: absolute;
			bottom: 1rem;
			width: 100%;
			display: flex;
			justify-content: space-around;
		}

		.small-box {
			// width: 343px;
			border: 1px solid #EFEFEF;
			height: 4rem;
			margin: 1rem 1rem;
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
			// background-image: url('../../static/fonts/Ellipse 38.png');
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 100% 100%;
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
			flex-wrap: wrap;
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
			border-width: 0 !important;
			color: #E0E0E0;

		}

		.update-btn {
			// background-color: #12D18E;
			border-radius: 6.25rem;
			margin: 0.5rem 1rem;
			color: #E0E0E0;
			width: 100%;
			border: 0;
		}

		.rename {
			margin: 0.5rem 0;
			display: block;
			width: 100%;
			text-align: center;
		}

	}
</style>