<template>
	<view>
		<view v-for='res in todayArr' :key='res.id'>
			<text class="text">{{res.time}}</text>

			<u-cell-group :border='false' style="margin-bottom: 1rem;">
				<u-cell-item class="cell" :title="resitem.name" :label='resitem.label' v-for='resitem in res.cell'
					:key='resitem.id' :border-bottom='false' :border-top='false' :arrow='true'
					@click='changeHandler(resitem)' :title-style="{'color':'#212121'}"
					:label-style="{'color':'#9D9E9E'}" :value='resitem.status'>
					<u-icon :name='resitem.icon' slot='icon' size='80' class="icon"></u-icon>
				</u-cell-item>
			</u-cell-group>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				todayArr: [{
						time: '活跃会话',
						cell: [{
							name: 'iPhone',
							label: '- Central，香港特别行政区',
							// money: '+$392.83',
							icon: '../../../static/fonts/Group192.png',
							id: 1,
							status: '目前活跃'
						}],
						id: 1
					},
					{
						time: '上一会话',
						cell: [{
								name: 'Windows 10，Chrome',
								label: '昨日- 新加坡',
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 1,
								status: ''
							},
							{
								name: 'iPhone',
								label: '2023/4/14-Dubai，阿拉伯联合酋长国',
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 2,
								status: ''
							},
							{
								name: 'Mac OS X 10.15.7，Chrome',
								label: '2023/4/6-韩国',
								// money: '+$392.83',
								icon: '../../../static/fonts/Group192.png',
								id: 3,
								status: ''
							},

						],
						id: 2
					},
				],
			}
		},
		methods: {
			changeHandler(item) {
				uni.navigateTo({
					url: '/pages/account-manage/equipment-activities/equipment-activities-children/equipment-activities-children?object=' +
						JSON.stringify(item)
				})
			}
		}
	}
</script>

<style lang="scss">
	.cell {
		margin: 0.5rem 0;
	}

	.u-cell {
		align-items: center;
	}

	.icon {
		margin-right: 0.5rem;
	}

	.text {
		display: block;
		width: 100%;
		padding: 1rem 1rem 0 1rem;
		color: #9D9E9E;
	}
</style>