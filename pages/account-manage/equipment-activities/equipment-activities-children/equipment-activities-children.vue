<template>
	<view>
		<!-- 顶部盒子 -->
		<view class="top-box" v-for='item in this.data' :key='item.id'>
			<view class="iconstyle">
				<image class="first-box" :src='item.icon' />
			</view>
			<view class="top-box-first">
				<view>
					<text style="color: #616161;padding-right: 0.3rem;font-size: 1rem;">{{item.name}}</text>
					<text style="color: #FFC20C;font-size: 0.8rem;">{{item.status}}</text>
				</view>
				<view>
					<text class="addressstyle">{{item.label}}</text>
					<text class="addressstyle">ip:</text>
				</view>

			</view>
		</view>
		<!-- 存放地图盒子 -->
		<view class="middle-box" id="container">
			<map style="width: 100%; height: 200px;" :scale='10' :latitude="latitude" :longitude="longitude"
				:markers="covers" @tap='tap' @markertap='markertap' :enable-building='true' :enable-traffic='true' />
		</view>
		<view class="testStyle">{{$t('equipment-activities-children.equipment-activities-children.5qzyri0lai80')}}
		</view>
		<!-- 底部登录时间盒子 -->
		<view class="bottom-box">
			<view class="bottom-box-first" v-for="item in dataArr" :key='item.id'>
				<text style="color: #9D9E9E;">{{item.time}}</text>
				<text style="color: #616161;">{{item.text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	// import AMapLoader from '@amap/amap-jsapi-loader';
	export default {
		// name: "gaode",
		data() {
			return {
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				//这里的坐标可以喊后端去获取  直接传给我们 我们渲染就完事
				latitude: 22.276389,
				longitude: 114.18291,
				covers: [{
					latitude: 22.276389,
					longitude: 114.18291,
					iconPath: '../../../../static/Card1.png'
				}, {
					latitude: 22.276389,
					longitude: 114.18291,
					iconPath: '../../../../static/Card1.png'
				}],

				// map: null,
				data: [],
				//登陆时间数组
				dataArr: [{
						time: '8' + this.$t(
							'equipment-activities-children.equipment-activities-children.5r0y79jbwkg0') + '，03:01',
						text: this.$t('equipment-activities-children.equipment-activities-children.5qzyri0lbt40'),
						id: 1
					},
					{
						time: '8' + this.$t(
							'equipment-activities-children.equipment-activities-children.5r0y79jbwkg0') + '，03:01',
						text: this.$t('equipment-activities-children.equipment-activities-children.5qzyri0lbt40'),
						id: 2
					},
					{
						time: '8' + this.$t(
							'equipment-activities-children.equipment-activities-children.5r0y79jbwkg0') + '，03:01',
						text: this.$t('equipment-activities-children.equipment-activities-children.5qzyri0lbt40'),
						id: 3
					},
					{
						time: '8' + this.$t(
							'equipment-activities-children.equipment-activities-children.5r0y79jbwkg0') + '，03:01',
						text: this.$t('equipment-activities-children.equipment-activities-children.5qzyri0lbt40'),
						id: 4
					},
					{
						time: '8' + this.$t(
							'equipment-activities-children.equipment-activities-children.5r0y79jbwkg0') + '，03:01',
						text: this.$t('equipment-activities-children.equipment-activities-children.5qzyri0lbt40'),
						id: 5
					},
				]
			}
		},
		//接受路由传参
		onLoad(data) {
			let obj = JSON.parse(data.object)
			obj.icon = '../' + obj.icon
			// obj.latitude = '25.276389'
			// obj.longitude = '110.18291'
			this.data.push(obj)
			// console.log(this.data)
			// this.data.latitude = '25.276389'
			// this.data.longitude = '110.18291'
			// this.latitude = this.data[0].latitude
			// this.longitude = this.data[0].longitude
		},
		mounted() {
			// this.initMap();
			// uni.getLocation({
			// 	type: this.data[0].label,
			// 	success(res) {
			// 		console.log(res)
			// 	}
			// })

			//这里可以获取到经纬度 地址信息 但是目前还不知道传递什么参数进去，只有一个type属性  就会返回经纬度和地址信息吗？
			uni.getLocation({
				type: 'wgs84', // 标准
				geocode: true, //设置该参数为true可直接获取经纬度及城市信息，只有gcj02标准才可以用
				success: function(res) {
					console.log(res)
					// that.addrDel = res;
				},
				fail: function() {
					uni.showToast({
						title: this.$t(
							'equipment-activities-children.equipment-activities-children.5qzyri0lc440'
						),
						icon: 'none'
					});
				}
			})
		},
		methods: {
			/**
			 * @todo:后续可能会用
			 */
			tap(e) {
				// console.log(e)
			},
			markertap(e) {
				// console.log(e, '1111111')
			},
			// initMap() {
			// 	AMapLoader.load({
			// 		key: "d0e0f08225d7443cf11ab1d60ff0457f", //此处填入我们注册账号后获取的Key
			// 		version: "2.0", //指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
			// 		plugins: [''], //需要使用的的插件列表，如比例尺'AMap.Scale'等
			// 	}).then((AMap) => {
			// 		this.map = new AMap.Map("container", { //设置地图容器id
			// 			viewMode: "3D", //是否为3D地图模式
			// 			zoom: 5, //初始化地图级别
			// 			center: [104.0045, 30.3140], //初始化地图中心点位置
			// 		});
			// 		// this.map.plugin(['AMap.MapType', 'AMap.Scale', 'AMap.HawkEye'], () => {
			// 		// 	this.map.addControl(new AMap.MapType());
			// 		// 	// this.map.addControl(new AMap.Scale());
			// 		// 	// this.map.addControl(new AMap.HawkEye());
			// 		// })
			// 	}).catch(e => {
			// 		console.log(e);
			// 	})
			// },


			// moveToLocation() {
			// 	let that = this; //防止this指向问题
			// 	wx.chooseLocation({
			// 		success: function(res) {
			// 			console.log(res.name);
			// 			//赋值给data中的mapName
			// 			that.setData({
			// 				mapName: res.name
			// 			})
			// 		},
			// 		//错误信息
			// 		fail: function() {
			// 			console.log(err);
			// 		}
			// 	})
			// }
		}
	}
</script>

<style lang="scss">
	.top-box {
		display: flex;
		width: 100%;
		padding: 1rem;

		.iconstyle {
			width: 3rem;
			height: 3rem;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 0.5rem;
		}

		.first-box {
			width: 3rem;
			height: 3rem;
		}

		uni-image {
			width: 0.1rem;
			height: 0.1rem;
		}

		.top-box-first {
			display: flex;
			flex-direction: column;
			justify-content: center;

			.addressstyle {
				display: flex;
				flex-wrap: wrap;
				min-width: 12.5rem;
				font-size: 0.7rem;
				color: #616161;
			}
		}
	}

	.testStyle {
		margin-left: 1rem;
		font-size: 0.8rem;
		color: #9D9E9E;
		margin-top: -0.5rem;
	}

	.middle-box {
		// width: 100%;
		// padding: 1rem;
		min-height: 12.5rem;
		border: 1px solid #EEEEEE;
		margin: 1rem;
		border-radius: 1rem;

	}

	.bottom-box {
		margin-top: 1rem;
		padding: 1rem;
		width: 100%;
		min-height: 6.25rem;

		.bottom-box-first {
			display: flex;
			justify-content: space-between;
			margin-bottom: 1rem;
			margin-top: 0.5rem;
		}
	}
</style>