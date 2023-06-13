<template>
	<view>
		<!-- 填写数量输入框 -->
		<view class="top-box">
			<text>{{$t('band-card.band-card.5qzy7afbjo00')}}</text>
			<u-field v-model="mobile" label="" :placeholder="$t('band-card.band-card.5qzy7afbl400')"
				:border-bottom='false' :field-style="{'font-size':'1.5rem','font-weight':'800'}" label-width='0'
				input-align='center'>
			</u-field>
		</view>
		<!-- 选择金额按钮组 -->
		<view class="bottom-box">
			<u-button class="btn" @click='changeHandler(item)' v-for="item in btnArr" :key="item.id" :hair-line='false'
				:style="{'background-color':item.backgroundColor,'border-color':item.borderColor,'color':item.color}">
				{{item.value}}
			</u-button>
		</view>

		<!-- 继续按钮 -->
		<view class="bottom-btn">
			<u-button class="go-btn" @click='goOn'>{{$t('band-card.band-card.5qzy7afbleg0')}}</u-button>
			<text style="font-size: 10px;color: #9D9E9E;">{{$t('band-card.band-card.5qzy7afbln40')}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '', //输入框值
				//充值金额按钮数组
				btnArr: [{
						id: 1,
						value: '$250',
						color: '',
						backgroundColor: '',
						borderColor: ''
					},
					{
						id: 2,
						value: '$500',
						color: '',
						backgroundColor: '',
						borderColor: ''
					},
					{
						id: 3,
						value: '$1000',
						color: '',
						backgroundColor: '',
						borderColor: ''
					},
					{
						id: 4,
						value: '$2000',
						color: '',
						backgroundColor: '',
						borderColor: ''
					},
					{
						id: 5,
						value: '$10000',
						color: '',
						backgroundColor: '',
						borderColor: ''
					},
					{
						id: 6,
						value: '$25000',
						color: '',
						backgroundColor: '',
						borderColor: ''
					},
				]
			}
		},

		// onLoad(data){
		// 	this.value = JSON.parse(data.name)
		// 	console.log(this.value,'222')
		// }

		methods: {
			//继续按钮事件
			goOn() {
				uni.navigateTo({
					url: '/pages/band-card/credit-card-information/credit-card-information?money=' + this.mobile
				})
			},
			//选中时按钮给输入框赋值
			changeHandler(item) {
				this.mobile = item.value
				this.btnArr.map(res => {
					if (res.id == item.id) {
						res.backgroundColor = "rgba(18, 209, 142, 0.1)"
						res.borderColor = '#12D18E'
						res.color = '#12D18E'
					} else {
						res.backgroundColor = ""
						res.borderColor = '#EFEFEF'
						res.color = '#616161'
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.class1 {
		border: #12D18E solid;
		color: #12D18E;
	}

	.top-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 1px solid #12D18E;
		width: 90%;
		height: 9rem;
		border-radius: 1.5rem;
		margin: 1rem auto;
	}

	.bottom-box {
		width: 100%;
		height: 7.5rem;
		padding: 0 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		/* margin: 0 auto; */
		.btn {
			height: 3.4rem;
			width: 30%;
			border-radius: 1rem;
			border-color: #EFEFEF;
		}
	}

	.bottom-btn {
		width: 100%;
		height: 8rem;
		padding: 1rem 2rem;
		position: absolute;
		bottom: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.go-btn {
			width: 100%;
			height: 3rem;
			background-color: #12D18E;
			border-radius: 6.25rem;
			color: white;
		}
	}
</style>