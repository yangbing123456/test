<template>
	<view>
		<view class="top-box">
			<text>数量</text>
			<u-field v-model="mobile" label="" placeholder="请填写数量" :border-bottom='false'
				:field-style="{'font-size':'1.5rem'}" label-width='0' input-align='center'>
			</u-field>
		</view>
		<view class="bottom-box">
			<u-button class="btn" @click='changeHandler(item)' v-for="item in btnArr" :key="item.id"
				:hair-line='false'>{{item.value}}</u-button>
		</view>

		<view class="bottom-btn">
			<u-button class="go-btn" @click='goOn'>继续</u-button>
			<text style="font-size: 10px;color: #9D9E9E;">您的资金将被安全保管并受到我们的投资者赔偿政策的保护。</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				mobile: '',
				btnArr: [{
						id: 1,
						value: '$250',
						color: '#12D18E'
					},
					{
						id: 2,
						value: '$500',
						color: '#12D18E'
					},
					{
						id: 3,
						value: '$1000',
						color: '#12D18E'
					},
					{
						id: 4,
						value: '$2000',
						color: '#12D18E'
					},
					{
						id: 5,
						value: '$10000',
						color: '#12D18E'
					},
					{
						id: 6,
						value: '$25000',
						color: '#12D18E'
					},
				]
			}
		},
		methods: {
			goOn() {
				uni.navigateTo({
					url: '/pages/band-card/credit-card-information/credit-card-information?money=' + this.mobile
				})
			},
			changeHandler(item) {
				this.mobile = item.value
			}
			// changeHnadler(item){
			// 	this.btnArr.forEach(res => {
			// 		if(item.id == res.id){
			// 			this.bool = true
			// 		}else{
			// 			this.bool = false
			// 		}
			// 	})
			// }
		},
		// onLoad(data){
		// 	this.value = JSON.parse(data.name)
		// 	console.log(this.value,'222')
		// }
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
		padding: 0 2rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;

		/* margin: 0 auto; */
		.btn {
			width: 30%;
			border-color: #999999;
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