<template>
	<view>
		<!-- 温馨提醒 -->
		<view class="top-box">
			<text class="notice">{{$t('bank-transfer.bank-transfer.5qzyb7o2hv40')}}</text>
			<text class="text">0% {{$t('bank-transfer.bank-transfer.5qzyb7o2iy00')}}</text>
		</view>

		<!-- 单元格 -->
		<u-cell-group class="cellgroup">
			<u-cell-item :title="item.title" :value="item.value" :arrow='false' v-for="item in dataArr"
				:key='item.title' :border-bottom='false' :border-top='false' :title-style="{'color':'#616161'}"
				:value-style="{'color':'#212121','font-weight':'800'}">
				<u-icon slot="right-icon" size="40" :name="item.name" color='#12D18E'></u-icon>
			</u-cell-item>
		</u-cell-group>

		<!-- 分享付款详情 -->
		<view class="bottom-btn">
			<u-button :hair-line="false" class="yes-btn">
				<u-icon :name='icon' size="48"></u-icon>
				{{$t('bank-transfer.bank-transfer.5qzyb7o2j600')}}
			</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				icon: '../../static/fonts/Upload.png',
				//遍历中间内容数组
				dataArr: [{
						title: this.$t('bank-transfer.bank-transfer.5qzyb7o2jb80'),
						value: 'Capital Com Online Investments Ltd Client',
						name: 'file-text'
					},
					{
						title: 'IBAN代码',
						value: 'Gb33IFXS23229054417135',
						name: 'file-text'
					},
					{
						title: 'SWIFT代码',
						value: 'IFXSGBL',
						name: 'file-text'
					},
					{
						title: this.$t('bank-transfer.bank-transfer.5qzyb7o2jfw0'),
						value: '24638679/4404',
						name: 'file-text'
					},
					{
						title: this.$t('bank-transfer.bank-transfer.5qzyb7o2jkg0'),
						value: 'IFX PAYMENTS',
						name: 'file-text'
					},
					{
						title: this.$t('bank-transfer.bank-transfer.5qzyb7o2jrk0'),
						value: 'MARYLEBONE ROAD,119,LONDON,UK',
						name: 'file-text'
					},
					{
						title: this.$t('bank-transfer.bank-transfer.5qzyb7o2jw80'),
						value: 'USD',
						name: 'file-text'
					},
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.top-box {
		width: 100%;
		padding: 1rem 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.notice,
		.text {
			display: flex;
			justify-content: center;
			width: 100%;
		}

		.notice {
			margin-bottom: 0.5rem;
			font-weight: 900;
		}

		.text {
			color: #757575;
		}

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
		background-color: #12D18E !important;
		border-radius: 6.25rem;
		margin: 0.5rem 1rem;
		width: 100%;
		color: white !important;
		border-width: 0 !important;
	}

	.cellgroup {
		padding: 0 1rem;
	}
</style>