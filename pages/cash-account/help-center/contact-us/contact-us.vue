<template>
	<view>
		<view class="small-box" v-for="item in data" :key='item.id' @click="eventPhone(item)">
			<view class="left-box">
				<image class="first-box" :src='item.icon' />
				<view class="top-small-box">
					<text style="color: #212121;">{{item.name}}</text>
					<text style="color: #12D18E; font-size: 10px;">{{item.text}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: [{
						name: "英国",
						text: '+44 20 3097 8888',
						id: 1,
						icon: '../../../../static/fonts/Ellipse39.png'
					},
					{
						name: '英国',
						text: '+44 20 3097 8888',
						id: 2,
						icon: '../../../../static/fonts/Ellipse39.png'
					},
					{
						name: '英国',
						text: '+44 20 3097 8888',
						id: 3,
						icon: '../../../../static/fonts/Ellipse39.png'
					},
					{
						name: '英国',
						text: '+44 20 3097 8888',
						id: 4,
						icon: '../../../../static/fonts/Ellipse39.png'
					},
				],
			}
		},
		methods: {
			eventPhone(item) {
				uni.makePhoneCall({
					phoneNumber: item.text
				})
			}
		}
	}
</script>

<style lang="scss">
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
</style>