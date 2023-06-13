<template>
	<view>
		<view class="small-box" v-for="item in data" :key='item.id' @click="eventPhone(item)">
			<view class="left-box">
				<image class="first-box" :src='item.icon' />
				<view class="top-small-box">
					<text class="phoneName">{{item.name}}</text>
					<text class="phoneNumber">{{item.text}}</text>
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
						name: this.$t('contact-us.contact-us.5qzz7f8z5200'),
						text: '442030978888',
						id: 1,
						icon: '../../../../static/fonts/Ellipse39.png'
					},
					{
						name: this.$t('contact-us.contact-us.5qzz7f8z5200'),
						text: '442030978888',
						id: 2,
						icon: '../../../../static/fonts/Ellipse39.png'
					},
					{
						name: this.$t('contact-us.contact-us.5qzz7f8z5200'),
						text: '442030978888',
						id: 3,
						icon: '../../../../static/fonts/Ellipse39.png'
					},
					{
						name: this.$t('contact-us.contact-us.5qzz7f8z5200'),
						text: '442030978888',
						id: 4,
						icon: '../../../../static/fonts/Ellipse39.png'
					},
				],
			}
		},
		methods: {
			eventPhone(item) {
				uni.makePhoneCall({
					phoneNumber: item.text,
					success(res) {
						console.log(res, '成功')
					},
					fail: function(res) {
						console.log(res, '失败')
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.phoneName {
		color: #212121;
		font-size: 1rem;
	}

	.phoneNumber {
		color: #12D18E;
		font-size: 0.8rem;
	}

	.small-box {
		// width: 343px;
		height: 3.5rem;
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
		width: 2.2rem;
		height: 2.2rem;
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