<template>
	<view class="container">
		<!-- 视图选择盒子 -->
		<view class="small-box" v-for="item in data" :key='item.id'>
			<view class="left-box">
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

		<!-- 效果预览盒子 -->
		<view class="bottom-pictrue-box">
			<view class="text">{{$t('watch-list.watch-list.5qzz5rytb4k0')}}</view>
			<view class="picture-box" v-for="item in picArr" :key="item.id">
				<u-image :src='picValue' class="img"></u-image>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				//单选按钮名称数组
				data: [{
						name: this.$t('watch-list.watch-list.5qzz5rytcfk0'),
						id: 1,
					},
					{
						name: this.$t('watch-list.watch-list.5qzz5rytco00'),
						id: 2,
					},
					{
						name: this.$t('watch-list.watch-list.5qzz5rytcto0'),
						id: 3,
					},
					{
						name: this.$t('watch-list.watch-list.5qzz5rytd200'),
						id: 4,
					},
				],
				picValue: '', //点击单选按钮之后存放图片地址
				//存放图片数组
				picArr: [{
					id: 1,
					datapic: [{
							id: 1,
							pic: '../../../../static/fonts/Group179.png'
						},
						{
							id: 2,
							pic: '../../../../static/fonts/Group180.png'
						},
						{
							id: 3,
							pic: '../../../../static/fonts/success.png'
						},
						{
							id: 4,
							pic: '../../../../static/fonts/success.png'
						},
					]
				}],
				value: '', //单选按钮存放值
			};
		},
		//接受路由参数
		onLoad(data) {
			this.data.forEach(res => {
				if (res.name == data.data) {
					this.value = res.id
				}
				this.picArr.forEach(item => {
					item.datapic.forEach(result => {
						if (this.value == result.id) {
							this.picValue = result.pic
						}
					})
				})
			})
		},

		methods: {
			// 选中某个单选框时，由radio时触发
			radioChange(e) {

				this.picArr.forEach(res => {
					res.datapic.forEach(result => {
						if (e == result.id) {
							this.picValue = result.pic
						}
					})
				})
				// this.key = e
				// this.data.forEach((item,index) => {
				// 	if(index == e){
				// 		this.border = 'black'
				// 		this.borderWidth = 1
				// 	}
				// })

			},
			// 选中任一radio时，由radio-group触发
			//这里点击单选按钮以后 存放该单元格的名称
			radioGroupChange(e) {

				this.data.forEach(res => {
					if (res.id == e) {
						this.$store.commit('demoValue1', res.name)
					}
				})
				// uni.reLaunch({
				// 	url:''
				// })
			},
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
			color: white;
			background-color: #12D18E;
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

		.left-box {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			width: 70%;
		}

	}

	.bottom-pictrue-box {
		// width: 100%;
		border-top: 2px solid #EEEEEE;
		margin: 1rem;
		min-height: 18.75rem;

		.text {
			text-align: center;
			padding: 1rem 0;
			color: #757575;
		}

		.picture-box {
			width: 100%;
			min-height: 12.5rem;
			border-radius: 1rem;
			border: 1px solid #EFEFEF;
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;

			.img {
				width: 100% !important;
				height: 12.5rem !important;
				border-radius: 1rem !important;
			}
		}
	}
</style>