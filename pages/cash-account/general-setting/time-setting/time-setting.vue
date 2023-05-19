<template>
	<view>
		<u-cell-group :border='false'>
			<u-cell-item class="cell" :title="item.name" :label='item.label' v-for='item in dataArr' :key='item.id'
				:border-bottom='false' :border-top='false' :arrow='item.arrow' :title-style="{'color':'#212121'}">

				<u-switch v-model="checked" size='40' @change='changeHandler' active-color='#12D18E'></u-switch>
				<u-popup v-model="show" mode="bottom" border-radius='24' width="500rpx" height="140px"
					:mask-close-able='false'>
					<text class="notice">请注意</text>
					<text class="text-information">是否启用？</text>
					<view class="btn">
						<u-button @click="quitHandler" class="quit-btn" :hair-line="false">取消</u-button>
						<u-button @click="yesHandler" class="yes-btn" :hair-line="false">启用</u-button>
					</view>
				</u-popup>
			</u-cell-item>

			<u-cell-item :title="item.name" :label='item.label' v-for='item in dataArrSecond' :key='item.id'
				:border-bottom='false' :border-top='false' :arrow='item.arrow' :title-style="{'color':bool}"
				:label-style="{'color':boolLabel}" @click='changeEventHandler(item)'>
			</u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bool: "#212121",
				boolLabel: '#9D9E9E',
				checked: false,
				show: false,
				dataArr: [{
						name: '自动',
						label: '',
						id: 1,
						arrow: false
					},

				],
				dataArrSecond: [{
					name: 'Shanghai',
					label: 'CMT +08:00',
					id: 2,
					arrow: true
				}]
			}
		},
		methods: {
			changeHandler() {
				this.show = true
			},
			quitHandler() {
				this.show = false
				this.checked = false
				this.bool = '#212121'
				this.boolLabel = '#9D9E9E'
			},
			yesHandler() {
				this.show = false
				this.checked = true
				this.bool = "#E0E0E0"
				this.boolLabel = '#E0E0E0'
			},
			changeEventHandler(item) {
				if (item.name == 'Shanghai' && this.checked == false) {
					uni.navigateTo({
						url: '/pages/cash-account/general-setting/time-setting/time-select/time-select'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.class1 {
		color: #E0E0E0;
	}

	.cell {
		margin: 0.5rem 0;
	}

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