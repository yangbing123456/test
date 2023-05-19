<template>
	<view>
		<u-cell-group>
			<u-cell-item :icon="item.icon" :title="item.name" :value="item.value" v-for='item in dataArr' :key='item.id'
				:border-bottom='false' :border-top='false' @click='changeEventHandler(item)'
				:title-style="{'color':'#212121'}" :value-style="{'color':'#9D9E9E'}"></u-cell-item>
		</u-cell-group>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				dataArr: [{
						name: '语言设置',
						value: '',
						id: 1,
						icon: '../../../static/fonts/language.png'
					},
					{
						name: '时区设置',
						value: '',
						id: 2,
						icon: '../../../static/fonts/Watch.png'
					},
					{
						name: '深色模式',
						value: '',
						id: 3,
						icon: '../../../static/fonts/Sun.png'
					},
					{
						name: '观察名单类型',
						value: '普通视图',
						id: 4,
						icon: '../../../static/fonts/DocumentAlignLeft.png'
					},
				]
			}
		},
		methods: {
			changeEventHandler(item) {
				if (item.name == '语言设置') {
					uni.navigateTo({
						url: '/pages/cash-account/general-setting/language-setting/language-setting'
					})
				} else if (item.name == '时区设置') {
					uni.navigateTo({
						url: '/pages/cash-account/general-setting/time-setting/time-setting'
					})
				} else if (item.name == '观察名单类型') {
					uni.navigateTo({
						url: '/pages/cash-account/general-setting/watch-list/watch-list'
					})
				}
			}
		}
	}
</script>

<style lang="scss">

</style>