<template>
	<view>
		<u-cell-group>
			<!-- 语言设置&&时区设置 -->
			<u-cell-item :icon="item.icon" :title="item.name" :value="item.value" v-for='item in dataArr' :key='item.id'
				:border-bottom='false' :border-top='false' @click='changeEventHandler(item)'
				:title-style="{'color':'#212121'}" :value-style="{'color':'#9D9E9E'}"></u-cell-item>

			<!-- 深色模式 -->
			<u-cell-item :icon="item.icon" :title="item.name" v-for='item in dataArr1' :key='item.id'
				:border-bottom='false' :border-top='false' :arrow='false' :title-style="{'color':'#212121'}">

				<u-switch v-model="checked" size='40' @change='changeHandler' active-color='#12D18E'></u-switch>
				<u-popup v-model="show" mode="bottom" border-radius='24' width="500rpx" height="140px"
					:mask-close-able='false'>
					<text class="notice">{{$t('general-setting.general-setting.5qzz5btvxts0')}}</text>
					<text class="text-information">{{$t('general-setting.general-setting.5qzz5btvyvg0')}}</text>
					<view class="btn">
						<u-button @click="quitHandler" class="quit-btn"
							:hair-line="false">{{$t('general-setting.general-setting.5qzz5btvz080')}}</u-button>
						<u-button @click="yesHandler" class="yes-btn"
							:hair-line="false">{{$t('general-setting.general-setting.5qzz5btvz340')}}</u-button>
					</view>
				</u-popup>
			</u-cell-item>

			<!-- 观察名单类型 -->
			<u-cell-item :icon="item.icon" :title="item.name" :value="item.value" v-for='item in dataArr2'
				:key='item.id' :border-bottom='false' :border-top='false' @click='changeEventHandler(item)'
				:title-style="{'color':'#212121'}" :value-style="{'color':'#9D9E9E'}"></u-cell-item>
		</u-cell-group>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				bool: true,
				show: false, //深色模式弹窗状态
				checked: false, //深色模式切换状态
				demoValue: this.$store.getters['demoValue'], //获取存放到数仓里的值
				//语言时区设置数组
				dataArr: [{
						name: this.$t('general-setting.general-setting.5qzz5btvz600'),
						value: '',
						id: 1,
						icon: '../../../static/fonts/language.png'
					},
					{
						name: this.$t('general-setting.general-setting.5qzz5btvzao0'),
						value: '',
						id: 2,
						icon: '../../../static/fonts/Watch.png'
					},
				],
				//深色模式
				dataArr1: [{
					name: this.$t('general-setting.general-setting.5qzz5btvze40'),
					value: '',
					id: 11,
					icon: '../../../static/fonts/Sun.png'
				}],
				//观察列表
				dataArr2: [{
					name: this.$t('general-setting.general-setting.5qzz5btvzhg0'),
					value: this.$store.getters['demoValue'],
					id: 12,
					icon: '../../../static/fonts/DocumentAlignLeft.png'
				}],
			}
		},
		methods: {
			//深色模式切换按钮事件
			changeHandler() {
				this.show = true
			},
			//弹窗取消事件
			quitHandler() {
				this.show = false
				this.checked = false
				// uni.getSystemInfo({
				// 	success: function(res) {
				// 		res.osTheme = 'light'
				// 		res.theme = 'light'
				// 		console.log(res)
				// 	}
				// })
				// let color = 'light'
				// this.$store.commit('changeTheme',color)
			},
			//弹窗确定事件
			yesHandler() {
				this.show = false
				this.checked = true
				// uni.getSystemInfo({
				// 	success: function(res) {
				// 		res.osTheme = 'dark'
				// 		res.theme = 'dark'
				// 		console.log(res)
				// 	}
				// })
				// let color = 'dark'
				// this.$store.commit('changeTheme',color)
			},
			//点击单元格事件
			changeEventHandler(item) {
				if (item.name == this.$t('general-setting.general-setting.5qzz5btvz600')) { //语言设置
					uni.navigateTo({
						url: '/pages/cash-account/general-setting/language-setting/language-setting'
					})
				} else if (item.name == this.$t('general-setting.general-setting.5qzz5btvzao0')) { //时区设置
					uni.navigateTo({
						url: '/pages/cash-account/general-setting/time-setting/time-setting'
					})
				} else if (item.name == this.$t('general-setting.general-setting.5qzz5btvzhg0')) { //观察名单类型
					uni.navigateTo({
						url: '/pages/cash-account/general-setting/watch-list/watch-list?data=' + this.demoValue
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.notice {
		display: flex;
		justify-content: center;
		margin: 0.5rem 0;
	}

	.text-information {
		display: block;
		width: 85%;
		margin: 0.5rem auto;
		text-align: center !important;
		// padding: 0.5rem 16px;
	}

	.btn {
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: absolute;
		bottom: 10px;
		width: 100%;

		.quit-btn {
			width: 35%;
			border-radius: 6.25rem;
			color: #12D18E;
			border: 0 !important;
		}

		.yes-btn {
			width: 35%;
			border-radius: 6.25rem;
			color: white;
			background-color: #12D18E;
			border: 0 !important;
		}
	}
</style>