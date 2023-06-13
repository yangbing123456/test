<template>
	<view>
		<!-- 单元格 -->
		<view v-for='res in todayArr' :key='res.id'>
			<!-- 每组单元格文本 -->
			<text class="text">{{res.time}}</text>
			<!-- 单元格内容 -->
			<u-cell-group :border='false' style="margin-bottom: 1rem;">
				<u-cell-item class="cell" :title="resitem.name" :label='resitem.label' v-for='resitem in res.cell'
					:key='resitem.id' :border-bottom='false' :border-top='false' :arrow='true'
					@click='changeHandler(resitem)' :title-style="{'color':'#212121'}"
					:label-style="{'color':'#9D9E9E'}" :value-style="{'color':'#FFC20C'}" :value='resitem.status'>
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
				//单元格数组
				todayArr: [{
						time: this.$t('equipment-activities.equipment-activities.5qzypnp9yaw0'),
						cell: [{
							name: 'iPhone',
							label: this.$t('equipment-activities.equipment-activities.5qzypnp9zgk0'),
							// money: '+$392.83',
							icon: '../../../static/fonts/Group192.png',
							id: 1,
							status: this.$t('equipment-activities.equipment-activities.5qzypnp9zro0')
						}],
						id: 1
					},
					{
						time: this.$t('equipment-activities.equipment-activities.5qzypnp9zyo0'),
						cell: [{
								name: 'Windows 10,Chrome',
								label: this.$t('equipment-activities.equipment-activities.5qzypnpa0440'),
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 1,
								status: ''
							},
							{
								name: 'iPhone',
								label: this.$t('equipment-activities.equipment-activities.5qzypnpa09k0'),
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 2,
								status: ''
							},
							{
								name: 'Mac OS X 10.15.7，Chrome',
								label: this.$t('equipment-activities.equipment-activities.5qzypnpa0dw0'),
								// money: '+$392.83',
								icon: '../../../static/fonts/Group192.png',
								id: 3,
								status: ''
							},
							{
								name: 'Mac OS X 10.15.7，Chrome',
								label: this.$t('equipment-activities.equipment-activities.5qzypnpa0dw0'),
								// money: '+$392.83',
								icon: '../../../static/fonts/Group191.png',
								id: 4,
								status: ''
							}

						],
						id: 2
					},
				],
			}
		},
		methods: {
			//点击单元格事件
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