<template>
	<view>
		<view class="topbox">
			<image src='../../../../static/fonts/no-data.png' style="width: 320px;height: 240px;"></image>
			<text>暂无数据</text>
			<text style="color: #9D9E9E;font-size: 10px;">如果我们需要更多信息，我们将与您联系</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.topbox {
		min-height: 9.375rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 1rem;
	}
</style>